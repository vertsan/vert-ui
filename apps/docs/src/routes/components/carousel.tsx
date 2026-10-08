import { DocPage, type PropRow } from "../../components/doc-page"
import {
  Carousel,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/carousel")({
  component: CarouselPage,
})

const slides = [
  { title: "Precision", body: "Every token is measured, contrast-checked and documented." },
  { title: "Velocity", body: "Copy-paste components that ship without a build step." },
  { title: "Restraint", body: "Motion stays on transform and opacity, and honours reduced motion." },
]

const props: PropRow[] = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Slide direction; buttons reposition to the top edge when vertical.",
  },
  {
    name: "loop",
    type: "boolean",
    default: "false",
    description: "Wraps from the last slide back to the first.",
  },
  {
    name: "slidesToScroll",
    type: "number",
    default: "1",
    description: "How many slides each prev/next call advances.",
  },
  {
    name: "defaultSlide",
    type: "number",
    default: "0",
    description: "Initial slide index (uncontrolled).",
  },
  {
    name: "onSlideChange",
    type: "(index: number) => void",
    description: "Fires with the selected slide index whenever it changes.",
  },
  {
    name: "dragFree",
    type: "boolean",
    default: "false",
    description: "Decouples scroll position from drag distance for a free-flowing feel.",
  },
  {
    name: "hideButtons",
    type: "boolean",
    default: "false",
    description: "Hides the built-in prev/next buttons — add your own labelled controls.",
  },
  {
    name: "footer",
    type: "ReactNode",
    description:
      "Rendered below the viewport inside the carousel context — the right place for dots or custom controls, since direct children become slides.",
  },
  {
    name: "CarouselPrevious / CarouselNext",
    type: "ButtonHTMLAttributes",
    description:
      "Default controls; disabled at each end and labelled \"Previous slide\" / \"Next slide\".",
  },
  {
    name: "CarouselDots",
    type: "HTMLAttributes",
    description:
      "One button per slide — labelled \"Go to slide n\", with aria-current on the active dot.",
  },
  {
    name: "useCarousel",
    type: "() => CarouselContextValue",
    description:
      "Hook for custom parts (counters, progress, thumbnails): index, count, canPrev/canNext, scrollPrev/scrollNext/scrollTo and the embla API. Throws outside a Carousel.",
  },
]

function Counter() {
  const { index, count, scrollTo } = useCarousel()
  return (
    <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
      <span>
        {index + 1} of {count}
      </span>
      <button
        type="button"
        onClick={() => scrollTo(0, true)}
        className="rounded-md px-2 py-1 outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        Back to start
      </button>
    </div>
  )
}

function CarouselPage() {
  return (
    <DocPage
      title="Carousel"
      intro="Scroll-snap slider built on embla-carousel. The root owns the state; buttons, dots and items read it through context, and a focusable viewport plus a polite status region keep it keyboard- and screen-reader-friendly."
      demo={
        <Carousel className="w-full max-w-lg" aria-label="Principles" loop>
          {slides.map((slide) => (
            <CarouselItem key={slide.title}>
              <div className="rounded-xl border border-border bg-background/70 p-8 text-center shadow-soft">
                <p className="text-lg font-semibold">{slide.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{slide.body}</p>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      }
      examples={[
        {
          title: "With dots and a callback",
          code: `<Carousel
  className="w-full max-w-lg"
  onSlideChange={setIndex}
  footer={<CarouselDots className="mt-4" />}
>
  {items.map((item) => (
    <CarouselItem key={item.id}>…</CarouselItem>
  ))}
</Carousel>`,
          render: (
            <div className="w-full max-w-lg">
              <Carousel footer={<CarouselDots className="mt-4" />}>
                {slides.map((slide) => (
                  <CarouselItem key={slide.title}>
                    <div className="rounded-xl border border-border bg-background/70 p-8 text-center shadow-soft">
                      <p className="text-lg font-semibold">{slide.title}</p>
                    </div>
                  </CarouselItem>
                ))}
              </Carousel>
            </div>
          ),
        },
        {
          title: "Custom controls",
          code: `<Carousel
  hideButtons
  footer={
    <div className="mt-4 flex items-center justify-center gap-2">
      <CarouselPrevious />
      <CarouselNext />
    </div>
  }
>
  {items.map((item) => (
    <CarouselItem key={item.id}>…</CarouselItem>
  ))}
</Carousel>`,
          render: (
            <div className="w-full max-w-lg">
              <Carousel
                hideButtons
                footer={
                  <div className="relative mt-4 flex items-center justify-center gap-6">
                    <CarouselPrevious className="static translate-y-0" />
                    <CarouselDots />
                    <CarouselNext className="static translate-y-0" />
                  </div>
                }
              >
                {slides.map((slide) => (
                  <CarouselItem key={slide.title}>
                    <div className="rounded-xl border border-border bg-background/70 p-8 text-center shadow-soft">
                      <p className="text-lg font-semibold">{slide.title}</p>
                    </div>
                  </CarouselItem>
                ))}
              </Carousel>
            </div>
          ),
        },
        {
          title: "Custom parts with useCarousel",
          code: `import { useCarousel } from "@/components/vert-ui/carousel"

function Counter() {
  const { index, count, scrollTo } = useCarousel()
  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <span>{index + 1} of {count}</span>
      <button type="button" onClick={() => scrollTo(0, true)}>Back to start</button>
    </div>
  )
}

<Carousel footer={<Counter />}>
  {items.map((item) => (
    <CarouselItem key={item.id}>…</CarouselItem>
  ))}
</Carousel>`,
          render: (
            <div className="w-full max-w-lg">
              <Carousel aria-label="Principles" footer={<Counter />}>
                {slides.map((slide) => (
                  <CarouselItem key={slide.title}>
                    <div className="rounded-xl border border-border bg-background/70 p-8 text-center shadow-soft">
                      <p className="text-lg font-semibold">{slide.title}</p>
                    </div>
                  </CarouselItem>
                ))}
              </Carousel>
            </div>
          ),
        },
      ]}
      a11y={[
        "The root is role=\"region\" with aria-roledescription=\"carousel\" — always pass an aria-label (\"Principles\" above) so it is a named landmark.",
        "With more than one slide the viewport is focusable: Arrow keys move along the carousel's axis, Home/End jump to the first/last slide. Keys are ignored while focus sits in an input or editable inside a slide.",
        "Slides carry role=\"group\" with aria-roledescription=\"slide\", so each one is identified while browsing.",
        "Previous/Next are real <button> elements with aria-label=\"Previous slide\" / \"Next slide\", visible focus rings and the disabled attribute at each end.",
        "Dots are buttons with accessible names (\"Go to slide n\") and aria-current on the active one — a second way to move, never the only way.",
        "A visually hidden status region (aria-live=\"polite\") announces \"Slide x of y\" after every move, including keyboard and dot navigation.",
        "Motion is transform-only (embla translates the container); under prefers-reduced-motion embla's animation duration drops to 0 and the global override kills CSS transitions.",
        "Never auto-advance: a carousel that moves on its own breaks focus and reading position.",
      ]}
      props={props}
    />
  )
}
