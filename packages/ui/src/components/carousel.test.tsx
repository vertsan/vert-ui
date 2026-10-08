import { act, fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Carousel, CarouselDots, CarouselItem, CarouselNext } from './carousel'

const embla = vi.hoisted(() => {
  const state = {
    selected: 0,
    scrollNext: vi.fn(),
    scrollPrev: vi.fn(),
    scrollTo: vi.fn(),
    handlers: {} as Record<string, Array<() => void>>,
    options: [] as unknown[],
    emit(event: string) {
      for (const handler of state.handlers[event] ?? []) handler()
    },
  }
  return state
})

vi.mock('embla-carousel-react', () => {
  let viewport: HTMLElement | null = null
  const api = {
    canScrollPrev: () => true,
    canScrollNext: () => true,
    on: (event: string, handler: () => void) => {
      ;(embla.handlers[event] ??= []).push(handler)
    },
    off: (event: string, handler: () => void) => {
      embla.handlers[event] = (embla.handlers[event] ?? []).filter((h) => h !== handler)
    },
    slideNodes: () =>
      viewport ? Array.from(viewport.querySelectorAll('[data-slot="carousel-item"]')) : [],
    selectedScrollSnap: () => embla.selected,
    scrollNext: embla.scrollNext,
    scrollPrev: embla.scrollPrev,
    scrollTo: embla.scrollTo,
  }
  return {
    default: (options: unknown) => {
      embla.options.push(options)
      return [
        (node: HTMLElement | null) => {
          viewport = node
        },
        api,
      ]
    },
  }
})

const twoSlides = (
  <>
    <CarouselItem>One</CarouselItem>
    <CarouselItem>Two</CarouselItem>
  </>
)

function lastOptions() {
  return embla.options[embla.options.length - 1]
}

describe('Carousel', () => {
  beforeEach(() => {
    embla.selected = 0
    embla.handlers = {}
    embla.options = []
    embla.scrollNext.mockClear()
    embla.scrollPrev.mockClear()
    embla.scrollTo.mockClear()
  })

  it('renders slides as labelled groups', () => {
    render(<Carousel>{twoSlides}</Carousel>)
    const slides = screen.getAllByRole('group')
    expect(slides).toHaveLength(2)
    expect(slides[0]).toHaveAttribute('aria-roledescription', 'slide')
    expect(slides[0]).toHaveAttribute('data-slot', 'carousel-item')
  })

  it('marks the root as an accessible carousel region', () => {
    render(
      <Carousel aria-label="Feature highlights">
        <CarouselItem>One</CarouselItem>
      </Carousel>,
    )
    const root = document.querySelector('[data-slot="carousel"]')
    expect(root).toHaveAttribute('role', 'region')
    expect(root).toHaveAttribute('aria-roledescription', 'carousel')
    expect(root).toHaveAttribute('aria-label', 'Feature highlights')
  })

  it('announces the current slide through a polite status region', () => {
    render(<Carousel>{twoSlides}</Carousel>)
    const status = screen.getByRole('status')
    expect(status).toHaveAttribute('aria-live', 'polite')
    expect(status).toHaveTextContent('Slide 1 of 2')

    embla.selected = 1
    act(() => embla.emit('select'))
    expect(status).toHaveTextContent('Slide 2 of 2')
  })

  it('calls onSlideChange with the selected index', () => {
    const onSlideChange = vi.fn()
    render(<Carousel onSlideChange={onSlideChange}>{twoSlides}</Carousel>)
    expect(onSlideChange).toHaveBeenLastCalledWith(0)

    embla.selected = 1
    act(() => embla.emit('select'))
    expect(onSlideChange).toHaveBeenLastCalledWith(1)
  })

  it('exposes labelled prev/next controls', () => {
    render(<Carousel>{twoSlides}</Carousel>)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toHaveAttribute(
      'data-slot',
      'carousel-previous',
    )
    expect(screen.getByRole('button', { name: 'Next slide' })).toHaveAttribute(
      'data-slot',
      'carousel-next',
    )
  })

  it('hides built-in buttons when hideButtons is set', () => {
    render(<Carousel hideButtons>{twoSlides}</Carousel>)
    expect(document.querySelector('[data-slot="carousel-previous"]')).toBeNull()
    expect(document.querySelector('[data-slot="carousel-next"]')).toBeNull()
  })

  it('keeps user-supplied controls alongside defaults', () => {
    render(
      <Carousel>
        <CarouselItem>One</CarouselItem>
        <CarouselNext aria-label="Go forward" />
      </Carousel>,
    )
    expect(screen.getAllByRole('button', { name: 'Next slide' })).toHaveLength(1)
    expect(screen.getByRole('button', { name: 'Go forward' })).toBeInTheDocument()
  })

  it('renders one labelled button per slide in the dots', () => {
    render(
      <Carousel footer={<CarouselDots />}>
        <CarouselItem>One</CarouselItem>
        <CarouselItem>Two</CarouselItem>
      </Carousel>,
    )
    const dots = screen.getAllByRole('button', { name: /^Go to slide/ })
    expect(dots).toHaveLength(2)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    expect(dots[1]).not.toHaveAttribute('aria-current')
  })

  it('scrolls to the clicked dot', () => {
    render(
      <Carousel footer={<CarouselDots />}>
        <CarouselItem>One</CarouselItem>
        <CarouselItem>Two</CarouselItem>
      </Carousel>,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(embla.scrollTo).toHaveBeenCalledWith(1, undefined)
  })

  it('moves the active dot when the slide changes', () => {
    render(
      <Carousel footer={<CarouselDots />}>
        <CarouselItem>One</CarouselItem>
        <CarouselItem>Two</CarouselItem>
      </Carousel>,
    )
    embla.selected = 1
    act(() => embla.emit('select'))
    const dots = screen.getAllByRole('button', { name: /^Go to slide/ })
    expect(dots[0]).not.toHaveAttribute('aria-current')
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
  })

  it('focuses the viewport and scrolls with arrow keys and Home/End', () => {
    render(<Carousel>{twoSlides}</Carousel>)
    const viewport = document.querySelector('[data-slot="carousel-viewport"]')
    expect(viewport).toHaveAttribute('tabindex', '0')

    fireEvent.keyDown(viewport!, { key: 'ArrowRight' })
    expect(embla.scrollNext).toHaveBeenCalledTimes(1)
    fireEvent.keyDown(viewport!, { key: 'ArrowLeft' })
    expect(embla.scrollPrev).toHaveBeenCalledTimes(1)
    fireEvent.keyDown(viewport!, { key: 'End' })
    expect(embla.scrollTo).toHaveBeenLastCalledWith(1, true)
    fireEvent.keyDown(viewport!, { key: 'Home' })
    expect(embla.scrollTo).toHaveBeenLastCalledWith(0, true)
  })

  it('scrolls vertically with ArrowDown/ArrowUp', () => {
    render(<Carousel orientation="vertical">{twoSlides}</Carousel>)
    const viewport = document.querySelector('[data-slot="carousel-viewport"]')

    fireEvent.keyDown(viewport!, { key: 'ArrowDown' })
    expect(embla.scrollNext).toHaveBeenCalledTimes(1)
    fireEvent.keyDown(viewport!, { key: 'ArrowUp' })
    expect(embla.scrollPrev).toHaveBeenCalledTimes(1)
  })

  it('ignores arrow keys while focus is inside an editable field', () => {
    render(
      <Carousel>
        <CarouselItem>
          <input aria-label="Slide search" />
        </CarouselItem>
        <CarouselItem>Two</CarouselItem>
      </Carousel>,
    )
    fireEvent.keyDown(screen.getByLabelText('Slide search'), { key: 'ArrowRight' })
    expect(embla.scrollNext).not.toHaveBeenCalled()
  })

  it('is not a tab stop when there is a single slide', () => {
    render(
      <Carousel>
        <CarouselItem>One</CarouselItem>
      </Carousel>,
    )
    const viewport = document.querySelector('[data-slot="carousel-viewport"]')
    expect(viewport).not.toHaveAttribute('tabindex')
  })

  it('passes dragFree through to embla', () => {
    render(<Carousel dragFree>{twoSlides}</Carousel>)
    expect(lastOptions()).toMatchObject({ dragFree: true })
  })

  it('disables embla animation when prefers-reduced-motion is set', () => {
    const matchMedia = vi.spyOn(window, 'matchMedia').mockImplementation(
      (query: string) =>
        ({
          matches: query.includes('prefers-reduced-motion'),
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => false,
        }) as MediaQueryList,
    )
    render(<Carousel>{twoSlides}</Carousel>)
    expect(lastOptions()).toMatchObject({ duration: 0 })
    matchMedia.mockRestore()
  })

  it('renders footer content outside the slide container', () => {
    render(
      <Carousel hideButtons footer={<CarouselDots />}>
        <CarouselItem>One</CarouselItem>
        <CarouselItem>Two</CarouselItem>
      </Carousel>,
    )
    const container = document.querySelector('[data-slot="carousel-container"]')
    const footer = document.querySelector('[data-slot="carousel-dots"]')
    expect(footer).not.toBeNull()
    expect(container?.contains(footer)).toBe(false)
    expect(container?.querySelector('[data-slot="carousel-dots"]')).toBeNull()
  })

  it('keeps footer parts inside the carousel context', () => {
    render(
      <Carousel hideButtons footer={<CarouselNext />}>
        <CarouselItem>One</CarouselItem>
      </Carousel>,
    )
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('marks the root with the orientation', () => {
    render(
      <Carousel orientation="vertical">
        <CarouselItem>One</CarouselItem>
      </Carousel>,
    )
    expect(document.querySelector('[data-slot="carousel"]')).toHaveAttribute(
      'data-orientation',
      'vertical',
    )
  })

  it('throws when parts are used outside a Carousel', () => {
    expect(() => render(<CarouselDots />)).toThrow(/useCarousel/)
  })
})
