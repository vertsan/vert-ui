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
const themeNames = ['slate', 'sand', 'midnight', 'rose', 'ocean'] as const
const themes: Blocks = new Map([['vert', new Map()]])
themes.get('vert')!.set('light', varsOf(vertCss, ':root'))
themes.get('vert')!.set('dark', varsOf(vertCss, "[data-tone='dark']"))
for (const name of themeNames) {
  const map = new Map<string, Map<string, string>>()
  const file = join(stylesDir, 'themes', `${name}.css`)
  map.set('light', varsOf(file, `[data-theme='${name}']`))
  map.set('dark', varsOf(file, `[data-theme='${name}'][data-tone='dark']`))
  themes.set(name, map)
}

/* ------------------------------------------------------------------ *
 * Flat-token presets (theme-presets.css — the docs vocabulary).
 * Accepts hex (#rgb/#rrggbb/#rrggbbaa) and oklch() with optional alpha.
 * ------------------------------------------------------------------ */

interface Rgb {
  r: number
  g: number
  b: number
  a: number
}

const toLinear = (v: number) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
const toSrgb = (v: number) => {
  const x = Math.min(1, Math.max(0, v))
  return x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055
}

function parseColor(value: string): Rgb {
  const v = value.trim()
  if (v.startsWith('#')) {
    let h = v.slice(1)
    let a = 1
    if (h.length === 3) h = [...h].map((c) => c + c).join('')
    if (h.length === 8) {
      a = parseInt(h.slice(6, 8), 16) / 255
      h = h.slice(0, 6)
    }
    if (h.length !== 6 || /[^0-9a-f]/i.test(h)) throw new Error(`Not a hex color: "${value}"`)
    return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16), a }
  }
  const m = v.match(/^oklch\(\s*([\d.]+)(?:\s+([\d.]+))?(?:\s+([\d.]+))?(?:\s*\/\s*([\d.]+%?))?\s*\)$/)
  if (m) {
    const L = parseFloat(m[1])
    const C = m[2] === undefined ? 0 : parseFloat(m[2])
    const H = m[3] === undefined ? 0 : parseFloat(m[3])
    const rawA = m[4]
    const a = rawA === undefined ? 1 : rawA.endsWith('%') ? parseFloat(rawA) / 100 : parseFloat(rawA)
    const hRad = (H * Math.PI) / 180
    const aLab = C * Math.cos(hRad)
    const bLab = C * Math.sin(hRad)
    const l_ = L + 0.3963377774 * aLab + 0.2158037573 * bLab
    const m_ = L - 0.1055613458 * aLab - 0.0638541728 * bLab
    const s_ = L - 0.0894841775 * aLab - 1.291485548 * bLab
    const l = l_ ** 3
    const mm = m_ ** 3
    const s = s_ ** 3
    const lr = 4.0767416621 * l - 3.3077115913 * mm + 0.2309699292 * s
    const lg = -1.2684380046 * l + 2.6097574011 * mm - 0.3413193965 * s
    const lb = -0.0041960863 * l - 0.7034186147 * mm + 1.707614701 * s
    return {
      r: toSrgb(lr) * 255,
      g: toSrgb(lg) * 255,
      b: toSrgb(lb) * 255,
      a,
    }
  }
  throw new Error(`Unsupported color: "${value}"`)
}

/** Source-over composite of `fg` (may be translucent) onto opaque `bg`. */
function over(fg: Rgb, bg: Rgb): Rgb {
  if (fg.a >= 1) return { ...fg, a: 1 }
  return {
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1,
  }
}

function lumRgb(c: Rgb): number {
  return (
    0.2126 * toLinear(c.r / 255) + 0.7152 * toLinear(c.g / 255) + 0.0722 * toLinear(c.b / 255)
  )
}

function ratioRgb(a: Rgb, b: Rgb): number {
  const [l1, l2] = [lumRgb(a), lumRgb(b)].sort((x, y) => y - x)
  return (l1 + 0.05) / (l2 + 0.05)
}

function flatPairs(v: Map<string, string>): Pair[] {
  const raw = (name: string) => {
    const val = v.get(`--color-${name}`)
    if (!val) throw new Error(`missing token --color-${name}`)
    return val
  }
  const backdrop = parseColor(raw('background'))
  // Resolve every token to opaque hex first: translucent surfaces (card at
  // 0.8 alpha, input/border at 8-20% white) must composite over the page
  // background before a contrast ratio means anything.
  const g = (name: string) => cssOf(over(parseColor(raw(name)), backdrop))
  return [
    ['foreground on background', g('foreground'), g('background'), 7],
    ['foreground on surface', g('foreground'), g('surface'), 7],
    ['foreground on card', g('foreground'), g('card'), 7],
    ['card-foreground on card', g('card-foreground'), g('card'), 7],
    ['foreground on surface-raised', g('foreground'), g('surface-raised'), 4.5],
    ['muted-foreground on background', g('muted-foreground'), g('background'), 4.5],
    ['muted-foreground on surface', g('muted-foreground'), g('surface'), 4.5],
    ['muted-foreground on card', g('muted-foreground'), g('card'), 4.5],
    ['muted-foreground on surface-raised', g('muted-foreground'), g('surface-raised'), 4.5],
    ['accent-foreground on accent', g('accent-foreground'), g('accent'), 4.5],
    ['secondary-foreground on secondary', g('secondary-foreground'), g('secondary'), 4.5],
    ['primary-foreground on primary', g('primary-foreground'), g('primary'), 4.5],
    ['brand-foreground on brand', g('brand-foreground'), g('brand'), 4.5],
    ['brand text on background', g('brand'), g('background'), 4.5],
    ['brand-soft-foreground on brand-soft', g('brand-soft-foreground'), g('brand-soft'), 4.5],
    ['border-strong vs background (UI 3:1)', g('border-strong'), g('background'), 3],
    ['border-strong vs surface (UI 3:1)', g('border-strong'), g('surface'), 3],
    ['ring vs background (UI 3:1)', g('ring'), g('background'), 3],
    ['ring vs surface (UI 3:1)', g('ring'), g('surface'), 3],
    ['destructive text on background', g('destructive'), g('background'), 4.5],
    ['destructive-foreground on destructive', g('destructive-foreground'), g('destructive'), 4.5],
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
  ]
}

/** Re-encode a resolved color as #rrggbb so the hex-only ratio() can read it. */
function cssOf(c: Rgb): string {
  const hex = (n: number) =>
    Math.round(Math.min(255, Math.max(0, n)))
      .toString(16)
      .padStart(2, '0')
  return `#${hex(c.r)}${hex(c.g)}${hex(c.b)}`
}

const presetsFile = join(stylesDir, 'theme-presets.css')
const flatThemes: Array<[theme: string, tone: string, selector: string]> = [
  ['vert', 'light', "[data-theme='vert']"],
  ['vert', 'dark', ".dark[data-theme='vert']"],
  ...themeNames.flatMap((name) => [
    [name, 'light', `[data-theme='${name}']`] as const,
    [name, 'dark', `.dark[data-theme='${name}']`] as const,
  ]),
]

let pass = 0
let fail = 0
function check(label: string, pairs: Pair[]) {
  for (const [pairLabel, fg, bg, min] of pairs) {
    const r = ratio(fg, bg)
    if (r >= min) {
      pass++
    } else {
      fail++
      console.error(
        `FAIL  [${label}] ${pairLabel}: ${r.toFixed(2)} < ${min}  (${fg} on ${bg})`,
      )
    }
  }
}

for (const [theme, tone] of themes) {
  for (const [toneName, vars] of tone) {
    check(`${theme}/${toneName}`, themePairs(vars))
  }
}

// Flat-token presets: the exact vocabulary the docs app renders with.
for (const [theme, tone, selector] of flatThemes) {
  check(`flat:${theme}/${tone}`, flatPairs(varsOf(presetsFile, selector)))
}

console.log(`contrast: ${pass} passed, ${fail} failed`)
if (fail > 0) process.exit(1)
