/**
 * WCAG contrast check for all vert-ui themes.
 *
 * Parses the CSS token files and verifies that every critical foreground /
 * background pair meets its target ratio (AA text = 4.5, large text >= 3,
 * UI boundaries >= 3, primary text >= 7).
 *
 * Run: pnpm contrast
 */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const stylesDir = join(root, 'packages/ui/src/styles')

type Blocks = Map<string, Map<string, string>>

function parseBlocks(file: string): Array<{ selector: string; body: string }> {
  const css = readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '')
  const blocks: Array<{ selector: string; body: string }> = []
  const stack: string[] = []
  let mark = 0
  for (let i = 0; i < css.length; i++) {
    const ch = css[i]
    if (ch === '{') {
      stack.push(css.slice(mark, i).trim())
      mark = i + 1
    } else if (ch === '}') {
      const selector = stack.pop() ?? ''
      blocks.push({ selector, body: css.slice(mark, i) })
      mark = i + 1
    }
  }
  return blocks
}

function varsOf(file: string, selector: string): Map<string, string> {
  const out = new Map<string, string>()
  for (const { selector: sel, body } of parseBlocks(file)) {
    if (sel !== selector) continue
    for (const m of body.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
      out.set(m[1], m[2].trim())
    }
  }
  if (out.size === 0) throw new Error(`No vars found for selector "${selector}" in ${file}`)
  return out
}

function toRgb(hex: string): [number, number, number] {
  let h = hex.trim().replace('#', '')
  if (h.length === 3) h = [...h].map((c) => c + c).join('')
  if (h.length === 8) h = h.slice(0, 6)
  if (h.length !== 6 || /[^0-9a-f]/i.test(h)) throw new Error(`Not a hex color: "${hex}"`)
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as [number, number, number]
}

const lin = (c: number) => {
  const s = c / 255
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
}
const lum = (hex: string) => {
  const [r, g, b] = toRgb(hex)
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
}
const ratio = (a: string, b: string) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x)
  return (l1 + 0.05) / (l2 + 0.05)
}

type Pair = [label: string, fg: string, bg: string, min: number]

const textPairs = (fg: string, bg: string, label: string): Pair[] => [
  [`${label} text on bg`, fg, bg, 4.5],
  [`${label} text on surface`, fg, bg, 4.5],
]

function themePairs(v: Map<string, string>): Pair[] {
  const g = (name: string) => {
    const val = v.get(`--${name}`)
    if (!val) throw new Error(`missing token --${name}`)
    return val
  }
  const pairs: Pair[] = [
    ['foreground on background', g('foreground'), g('background'), 7],
    ['foreground on surface', g('foreground'), g('surface'), 7],
    ['muted-foreground on background', g('muted-foreground'), g('background'), 4.5],
    ['muted-foreground on surface', g('muted-foreground'), g('surface'), 4.5],
    ['accent-foreground on accent', g('accent-foreground'), g('accent'), 4.5],
    ['brand text on background', g('brand'), g('background'), 4.5],
    ['brand-foreground on brand', g('brand-foreground'), g('brand'), 4.5],
    ['brand-foreground on brand-hover', g('brand-foreground'), g('brand-hover'), 4.5],
    ['brand-foreground on brand-active', g('brand-foreground'), g('brand-active'), 4.5],
    ['brand-soft-foreground on brand-soft', g('brand-soft-foreground'), g('brand-soft'), 4.5],
    [
      'brand-soft-foreground on brand-soft-hover',
      g('brand-soft-foreground'),
      g('brand-soft-hover'),
      4.5,
    ],
    ['border-strong vs background (UI 3:1)', g('border-strong'), g('background'), 3],
    ['border-strong vs surface (UI 3:1)', g('border-strong'), g('surface'), 3],
    ['ring vs background (UI 3:1)', g('ring'), g('background'), 3],
    ['ring vs surface (UI 3:1)', g('ring'), g('surface'), 3],
    ['destructive text on background', g('destructive'), g('background'), 4.5],
    ['destructive-foreground on destructive', g('destructive-foreground'), g('destructive'), 4.5],
    [
      'destructive-foreground on destructive-hover',
      g('destructive-foreground'),
      g('destructive-hover'),
      4.5,
    ],
    [
      'destructive-soft-foreground on destructive-soft',
      g('destructive-soft-foreground'),
      g('destructive-soft'),
      4.5,
    ],
    ['success text on background', g('success'), g('background'), 4.5],
    ['success-foreground on success', g('success-foreground'), g('success'), 4.5],
    [
      'success-soft-foreground on success-soft',
      g('success-soft-foreground'),
      g('success-soft'),
      4.5,
    ],
    ['warning text on background', g('warning'), g('background'), 4.5],
    ['warning-foreground on warning', g('warning-foreground'), g('warning'), 4.5],
    [
      'warning-soft-foreground on warning-soft',
      g('warning-soft-foreground'),
      g('warning-soft'),
      4.5,
    ],
    ['info text on background', g('info'), g('background'), 4.5],
    ['info-foreground on info', g('info-foreground'), g('info'), 4.5],
    ['info-soft-foreground on info-soft', g('info-soft-foreground'), g('info-soft'), 4.5],
    ...textPairs(g('foreground'), g('surface-raised'), 'foreground on raised'),
    ...textPairs(g('muted-foreground'), g('surface-raised'), 'muted-foreground on raised'),
  ]
  return pairs
}

const vertCss = join(stylesDir, 'vert.css')
const themes: Blocks = new Map([
  ['vert', new Map()],
  ['slate', new Map()],
  ['sand', new Map()],
  ['midnight', new Map()],
])
themes.get('vert')!.set('light', varsOf(vertCss, ':root'))
themes.get('vert')!.set('dark', varsOf(vertCss, "[data-tone='dark']"))
for (const name of ['slate', 'sand', 'midnight']) {
  const file = join(stylesDir, 'themes', `${name}.css`)
  themes.get(name)!.set('light', varsOf(file, `[data-theme='${name}']`))
  themes.get(name)!.set('dark', varsOf(file, `[data-theme='${name}'][data-tone='dark']`))
}

let pass = 0
let fail = 0
for (const [theme, tones] of themes) {
  for (const [tone, vars] of tones) {
    for (const [label, fg, bg, min] of themePairs(vars)) {
      const r = ratio(fg, bg)
      if (r >= min) {
        pass++
      } else {
        fail++
        console.error(
          `FAIL  [${theme}/${tone}] ${label}: ${r.toFixed(2)} < ${min}  (${fg} on ${bg})`,
        )
      }
    }
  }
}

console.log(`contrast: ${pass} passed, ${fail} failed`)
if (fail > 0) process.exit(1)
