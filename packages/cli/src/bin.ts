#!/usr/bin/env node
import { createProgram } from './index.js'

createProgram()
  .parseAsync(process.argv)
  .catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error))
    process.exitCode = 1
  })
