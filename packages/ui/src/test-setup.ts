import '@testing-library/jest-dom/vitest'

// jsdom is missing a handful of browser APIs that Radix UI primitives touch.
if (typeof Element.prototype.hasPointerCapture !== 'function') {
  Element.prototype.hasPointerCapture = () => false
  Element.prototype.setPointerCapture = () => {}
  Element.prototype.releasePointerCapture = () => {}
}

if (typeof Element.prototype.scrollIntoView !== 'function') {
  Element.prototype.scrollIntoView = () => {}
}

if (typeof globalThis.ResizeObserver === 'undefined') {
  class ResizeObserverStub implements ResizeObserver {
    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
  }
  globalThis.ResizeObserver = ResizeObserverStub
}

if (typeof globalThis.IntersectionObserver === 'undefined') {
  class IntersectionObserverStub implements IntersectionObserver {
    readonly root = null
    readonly rootMargin = ''
    readonly thresholds: readonly number[] = []
    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
    takeRecords(): IntersectionObserverEntry[] {
      return []
    }
  }
  globalThis.IntersectionObserver = IntersectionObserverStub
}

if (typeof window.matchMedia !== 'function') {
  window.matchMedia = (query: string): MediaQueryList =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList
}
