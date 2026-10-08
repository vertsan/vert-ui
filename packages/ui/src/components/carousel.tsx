import useEmblaCarousel from "embla-carousel-react"
import * as React from "react"
import { cn } from "../lib/cn"

type CarouselOrientation = "horizontal" | "vertical"

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Slide layout direction. */
  orientation?: CarouselOrientation
  /** Loop back to the first slide after the last. */
  loop?: boolean
  /** Slides to advance per prev/next call. */
  slidesToScroll?: number
  /** Start index (0-based). */
  defaultSlide?: number
  /** Called with the new index whenever the slide changes. */
  onSlideChange?: (index: number) => void
  /** Decouple scroll position from drag distance for a free-flowing feel. */
  dragFree?: boolean
  /**
   * Hide the default prev/next buttons — use it when you render your own
   * controls (e.g. in the footer).
   */
  hideButtons?: boolean
  /**
   * Rendered below the viewport, inside the carousel context — put dots or
   * your own prev/next buttons here so they are not treated as slides.
   */
  footer?: React.ReactNode
  children: React.ReactNode
}

export interface CarouselContextValue {
  /** Underlying embla API — null until after hydration. */
  api: ReturnType<typeof useEmblaCarousel>[1] | null
  orientation: CarouselOrientation
  /** Selected slide index. */
  index: number
  /** Total number of slides. */
  count: number
  canPrev: boolean
  canNext: boolean
  scrollPrev: () => void
  scrollNext: () => void
  /** Scroll to a slide by index; jump skips the animation. */
  scrollTo: (index: number, jump?: boolean) => void
}

/**
 * Carousel — scroll-snap slider built on embla-carousel.
 *
 * State lives in the `Carousel` root; buttons, dots and any custom part read
 * it through context. Slides are whatever children you pass — wrap each in a
 * `min-w-0 flex-[0_0_100%]` (horizontal) or `h-full` (vertical) element.
 *
 * The root is an accessible region (`role="region"`,
 * `aria-roledescription="carousel"`) — give it an `aria-label`. When there is
 * more than one slide the viewport is focusable and supports arrow keys plus
 * Home/End, and a polite status region announces each change.
 */
const CarouselContext = React.createContext<CarouselContextValue | null>(null)

export function useCarousel() {
  const ctx = React.useContext(CarouselContext)
  if (!ctx) throw new Error("useCarousel must be used inside <Carousel>")
  return ctx
}

function usePrefersReducedMotion() {
  return React.useSyncExternalStore(
    (onChange) => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      mediaQuery.addEventListener("change", onChange)
      return () => mediaQuery.removeEventListener("change", onChange)
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  )
}

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false
  return Boolean(target.closest('input, textarea, select, [contenteditable="true"]'))
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      loop = false,
      slidesToScroll = 1,
      defaultSlide = 0,
      onSlideChange,
      dragFree = false,
      hideButtons = false,
      footer,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const prefersReducedMotion = usePrefersReducedMotion()
    const options = React.useMemo<Parameters<typeof useEmblaCarousel>[0]>(
      () => ({
        axis: orientation === "horizontal" ? "x" : "y",
        loop,
        align: "start",
        startIndex: defaultSlide,
        slidesToScroll,
        dragFree,
        // Snap instantly instead of animating when motion must be reduced.
        ...(prefersReducedMotion ? { duration: 0 } : null),
      }),
      [orientation, loop, defaultSlide, slidesToScroll, dragFree, prefersReducedMotion]
    )
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [canPrev, setCanPrev] = React.useState(false)
    const [canNext, setCanNext] = React.useState(true)
    const [index, setIndex] = React.useState(defaultSlide)
    const childCount = React.Children.count(children)
    const [slideCount, setSlideCount] = React.useState(childCount)

    const onSelect = React.useCallback(() => {
      if (!emblaApi) return
      const selected = emblaApi.selectedScrollSnap()
      setCanPrev(emblaApi.canScrollPrev())
      setCanNext(emblaApi.canScrollNext())
      setIndex(selected)
      onSlideChange?.(selected)
    }, [emblaApi, onSlideChange])

    React.useEffect(() => {
      if (!emblaApi) return
      onSelect()
      emblaApi.on("select", onSelect)
      emblaApi.on("reInit", onSelect)
      return () => {
        emblaApi.off("select", onSelect)
        emblaApi.off("reInit", onSelect)
      }
    }, [emblaApi, onSelect])

    // Slides can be wrapped in a fragment, so once embla is ready trust the
    // DOM count over React.Children.count. The initial value comes from the
    // children to keep server and client renders identical.
    React.useEffect(() => {
      if (!emblaApi) return
      const syncCount = () => setSlideCount(emblaApi.slideNodes().length || childCount)
      syncCount()
      emblaApi.on("reInit", syncCount)
      return () => {
        emblaApi.off("reInit", syncCount)
      }
    }, [emblaApi, childCount])

    const scrollPrev = React.useCallback(() => {
      emblaApi?.scrollPrev()
    }, [emblaApi])
    const scrollNext = React.useCallback(() => {
      emblaApi?.scrollNext()
    }, [emblaApi])
    const scrollTo = React.useCallback(
      (nextIndex: number, jump?: boolean) => {
        emblaApi?.scrollTo(nextIndex, jump)
      },
      [emblaApi]
    )

    const ctx = React.useMemo<CarouselContextValue>(
      () => ({
        api: emblaApi,
        orientation,
        index,
        count: slideCount,
        canPrev,
        canNext,
        scrollPrev,
        scrollNext,
        scrollTo,
      }),
      [emblaApi, orientation, index, slideCount, canPrev, canNext, scrollPrev, scrollNext, scrollTo]
    )

    const isHorizontal = orientation === "horizontal"

    const onKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.metaKey || event.ctrlKey || event.altKey) return
        if (isEditableTarget(event.target)) return

        const forwardKey = isHorizontal ? "ArrowRight" : "ArrowDown"
        const backwardKey = isHorizontal ? "ArrowLeft" : "ArrowUp"

        if (event.key === forwardKey) {
          event.preventDefault()
          scrollNext()
        } else if (event.key === backwardKey) {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "Home") {
          event.preventDefault()
          scrollTo(0, true)
        } else if (event.key === "End") {
          event.preventDefault()
          scrollTo(slideCount - 1, true)
        }
      },
      [isHorizontal, scrollNext, scrollPrev, scrollTo, slideCount]
    )

    return (
      <CarouselContext.Provider value={ctx}>
        <div
          ref={ref}
          role="region"
          aria-roledescription="carousel"
          data-slot="carousel"
          data-orientation={orientation}
          className={cn("relative", className)}
          {...props}
        >
          <div
            ref={emblaRef}
            data-slot="carousel-viewport"
            tabIndex={slideCount > 1 ? 0 : undefined}
            onKeyDown={onKeyDown}
            className={cn(
              "overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isHorizontal ? "w-full" : "h-full w-full"
            )}
          >
            <div
              data-slot="carousel-container"
              className={cn(
                "flex touch-pan-y touch-pinch-zoom",
                isHorizontal ? "-ml-4" : "-mt-4 h-full flex-col"
              )}
            >
              {children}
            </div>
          </div>
          {hideButtons ? null : (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
          {footer}
          <div
            data-slot="carousel-status"
            role="status"
            aria-live="polite"
            className="sr-only"
          >
            {`Slide ${index + 1} of ${slideCount}`}
          </div>
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const slideClassName = "min-w-0 flex-[0_0_100%] pl-4 pt-4"

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(slideClassName, className)}
      {...props}
    />
  )
)
CarouselItem.displayName = "CarouselItem"

const buttonClassName =
  "absolute flex size-10 items-center justify-center rounded-full border border-border/70 bg-card/85 text-foreground shadow-soft backdrop-blur-md transition duration-[140ms] hover:border-border hover:bg-accent hover:text-accent-foreground hover:shadow-raised focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-40"

function carouselIcon(className?: string) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4", className)}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { orientation, canPrev, scrollPrev } = useCarousel()
  const placement =
    orientation === "horizontal"
      ? "left-3 top-1/2 -translate-y-1/2"
      : "left-1/2 top-3 -translate-x-1/2"
  return (
    <button
      ref={ref}
      type="button"
      data-slot="carousel-previous"
      aria-label="Previous slide"
      disabled={!canPrev}
      onClick={scrollPrev}
      className={cn(buttonClassName, placement, className)}
      {...props}
    >
      {carouselIcon()}
    </button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { orientation, canNext, scrollNext } = useCarousel()
  const placement =
    orientation === "horizontal"
      ? "right-3 top-1/2 -translate-y-1/2"
      : "bottom-3 left-1/2 -translate-x-1/2"
  return (
    <button
      ref={ref}
      type="button"
      data-slot="carousel-next"
      aria-label="Next slide"
      disabled={!canNext}
      onClick={scrollNext}
      className={cn(buttonClassName, placement, className)}
      {...props}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4 rotate-180"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
  )
})
CarouselNext.displayName = "CarouselNext"

/** One button per slide — labelled for assistive tech, aria-current on the active dot. */
function CarouselDots({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { count, index, scrollTo } = useCarousel()
  return (
    <div
      data-slot="carousel-dots"
      className={cn("flex items-center justify-center gap-1", className)}
      {...props}
    >
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          data-slot="carousel-dot"
          data-active={i === index ? "true" : undefined}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === index ? "true" : undefined}
          onClick={() => scrollTo(i)}
          className="flex size-6 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span
            aria-hidden="true"
            className={cn(
              "size-2 rounded-full bg-border transition-colors",
              i === index && "bg-primary"
            )}
          />
        </button>
      ))}
    </div>
  )
}

export { Carousel, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots }
