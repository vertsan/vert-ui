import pc from 'picocolors'

/** Minimal output surface so commands are testable with a silent or fake logger. */
export interface Logger {
  /** Plain line. */
  info(message: string): void
  /** Step being performed, prefixed with ›. */
  step(message: string): void
  /** Completed action, prefixed with ✓. */
  success(message: string): void
  /** Non-fatal note, prefixed with !. Sent to stderr. */
  warn(message: string): void
  /** Failure, prefixed with ✗. Always printed, even in silent mode. */
  error(message: string): void
}

export function createLogger(silent = false): Logger {
  return {
    info: (message) => {
      if (!silent) console.log(message)
    },
    step: (message) => {
      if (!silent) console.log(`${pc.cyan('›')} ${message}`)
    },
    success: (message) => {
      if (!silent) console.log(`${pc.green('✓')} ${message}`)
    },
    warn: (message) => {
      if (!silent) console.warn(`${pc.yellow('!')} ${message}`)
    },
    error: (message) => {
      console.error(`${pc.red('✗')} ${message}`)
    },
  }
}
