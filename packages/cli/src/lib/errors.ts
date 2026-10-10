/**
 * Error type for every expected CLI failure. Commands catch it, print the
 * message and set a non-zero exit code instead of dumping a stack trace.
 */
export class VertError extends Error {
  readonly code: string

  constructor(message: string, code = 'VERT_ERROR') {
    super(message)
    this.name = 'VertError'
    this.code = code
  }
}
