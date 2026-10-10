import type { Logger } from '../lib/logger.js'
import type { FetchLike } from '../lib/registry.js'

export interface CapturedLogger extends Logger {
  lines: string[]
}

/** Logger that records every line so tests can assert on output. */
export function captureLogger(): CapturedLogger {
  const lines: string[] = []
  return {
    lines,
    info: (message) => lines.push(message),
    step: (message) => lines.push(message),
    success: (message) => lines.push(message),
    warn: (message) => lines.push(message),
    error: (message) => lines.push(message),
  }
}

/** In-memory registry keyed by absolute URL. Missing keys 404. */
export function fakeRegistry(items: Record<string, unknown>): FetchLike {
  return async (url) => ({
    ok: url in items,
    status: url in items ? 200 : 404,
    async json() {
      return items[url]
    },
    async text() {
      return ''
    },
  })
}

export const TEST_REGISTRY = 'https://vert.example/r/{name}.json'
