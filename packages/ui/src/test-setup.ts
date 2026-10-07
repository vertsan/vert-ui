import '@testing-library/jest-dom/vitest'

// jsdom has no ResizeObserver; Radix primitives (checkbox, select, slider…) construct
// one unconditionally via @radix-ui/react-use-size.
if (typeof globalThis.ResizeObserver === 'undefined') {
  class ResizeObserverStub implements ResizeObserver {
    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
  }
  globalThis.ResizeObserver = ResizeObserverStub as unknown as typeof ResizeObserver
}
