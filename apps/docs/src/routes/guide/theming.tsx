import { Button, useTheme, type ThemeTonePreference } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import { Callout, Code, GuidePage, Section } from "../../components/guide-page"

export const Route = createFileRoute("/guide/theming")({
  component: ThemingPage,
})

const installSnippet = `npx shadcn add @vert/vert @vert/vert-theme`

const providerSnippet = `import { ThemeProvider } from "@/components/vert-ui/theme-provider"

export function RootLayout({ children }) {
  return (
    <ThemeProvider defaultTheme="vert" defaultTone="system">
      {children}
    </ThemeProvider>
  )
}`

const headSnippet = `// TanStack Start — add to the root route's head()
import { getThemeScript } from "@/components/vert-ui/theme-provider"

head: () => ({
  scripts: [{ children: getThemeScript() }],
})

// Anywhere else — drop the component into <head> before your app
import { ThemeScript } from "@/components/vert-ui/theme-provider"

<head>
  <ThemeScript />
</head>`

const hookSnippet = `import { useTheme } from "@/components/vert-ui/theme-provider"

function ThemeControls() {
  const { theme, tone, resolvedTone, setTheme, setTone } = useTheme()

  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="vert">Vert</option>
        <option value="slate">Slate</option>
        <option value="sand">Sand</option>
        <option value="midnight">Midnight</option>
        <option value="rose">Rose</option>
        <option value="ocean">Ocean</option>
      </select>

      <button onClick={() => setTone(tone === "dark" ? "light" : "dark")}>
        {resolvedTone === "dark" ? "Light" : "Dark"} mode
      </button>
    </div>
  )
}`

const cssSnippet = `<!-- light (default) -->
<html data-theme="vert" data-tone="light">

<!-- dark tone -->
<html data-theme="vert" data-tone="dark">

<!-- a different preset -->
<html data-theme="slate" data-tone="dark">`

const presetList = [
  { value: "vert", label: "Vert" },
  { value: "slate", label: "Slate" },
  { value: "sand", label: "Sand" },
  { value: "midnight", label: "Midnight" },
  { value: "rose", label: "Rose" },
  { value: "ocean", label: "Ocean" },
] as const

function LiveDemo() {
  const { theme, tone, setTheme, setTone } = useTheme()

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {presetList.map((preset) => (
          <Button
            key={preset.value}
            size="sm"
            variant={theme === preset.value ? "default" : "outline"}
            onClick={() => setTheme(preset.value)}
          >
            {preset.label}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {(["system", "light", "dark"] as const).map((value) => (
          <Button
            key={value}
            size="sm"
            variant={tone === value ? "secondary" : "ghost"}
            onClick={() => setTone(value as ThemeTonePreference)}
            className="capitalize"
          >
            {value}
          </Button>
        ))}
      </div>
    </div>
  )
}

function ThemingPage() {
  return (
    <GuidePage
      title="Theming"
      intro="Switch themes and tones at runtime with a tiny, SSR-safe provider — or drive it yourself from plain CSS."
    >
      <Section label="Model" title="One theme, one tone" id="theming-model">
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Every component reads semantic CSS variables. Two attributes on{" "}
            <code className="font-mono text-xs text-foreground">&lt;html&gt;</code> pick which
            values those variables hold:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <code className="font-mono text-xs text-foreground">data-theme</code> selects a
              preset — <code className="font-mono text-xs">vert</code>,{" "}
              <code className="font-mono text-xs">slate</code>,{" "}
              <code className="font-mono text-xs">sand</code>,{" "}
              <code className="font-mono text-xs">midnight</code>,{" "}
              <code className="font-mono text-xs">rose</code> or{" "}
              <code className="font-mono text-xs">ocean</code>.
            </li>
            <li>
              <code className="font-mono text-xs text-foreground">data-tone</code> selects{" "}
              <code className="font-mono text-xs">light</code> or{" "}
              <code className="font-mono text-xs">dark</code>. A{" "}
              <code className="font-mono text-xs">system</code> preference resolves to the OS
              setting.
            </li>
          </ul>
          <p>
            Because the values are plain CSS custom properties, switching is instant, needs no
            re-render and composes with any framework.
          </p>
        </div>
      </Section>

      <Section label="Install" title="Add the theme and the provider" id="theming-install">
        <div className="space-y-3 text-sm text-muted-foreground">
          <Code>{installSnippet}</Code>
          <p>
            The <code className="font-mono text-xs">vert</code> item ships the token engine and
            presets; <code className="font-mono text-xs">vert-theme</code> ships the React
            provider. Import both after Tailwind in your CSS entry.
          </p>
        </div>
      </Section>

      <Section label="React" title="Drop in the provider" id="theming-provider">
        <div className="space-y-3 text-sm text-muted-foreground">
          <Code>{providerSnippet}</Code>
          <p>
            Wrap your app once. The provider writes the attributes to{" "}
            <code className="font-mono text-xs text-foreground">&lt;html&gt;</code>, persists the
            choice in <code className="font-mono text-xs">localStorage</code> and follows the OS
            while the preference is <code className="font-mono text-xs">system</code>.
          </p>
        </div>
      </Section>

      <Section label="No flash" title="Apply the theme before first paint" id="theming-script">
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            Render the inline script as the first thing in your document head so the stored
            theme is applied before the page paints — no flash of the wrong colors.
          </p>
          <Code>{headSnippet}</Code>
        </div>
      </Section>

      <Section label="API" title="Read and set the theme" id="theming-api">
        <div className="space-y-3 text-sm text-muted-foreground">
          <Code>{hookSnippet}</Code>
          <p>
            <code className="font-mono text-xs font-medium text-foreground">useTheme()</code>{" "}
            returns <code className="font-mono text-xs">theme</code>,{" "}
            <code className="font-mono text-xs">tone</code>, the concrete{" "}
            <code className="font-mono text-xs">resolvedTone</code> and the current{" "}
            <code className="font-mono text-xs">systemTone</code>, plus{" "}
            <code className="font-mono text-xs">setTheme</code> /{" "}
            <code className="font-mono text-xs">setTone</code>.
          </p>
        </div>
      </Section>

      <Section label="Preview" title="Try it live" id="theming-demo">
        <LiveDemo />
      </Section>

      <Section label="CSS only" title="Without React" id="theming-css">
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            Not on React? Set the same attributes yourself — the tokens do the rest. Persist the
            choice wherever you like and restore it before paint.
          </p>
          <Code>{cssSnippet}</Code>
          <Callout tone="info" title="The dark: variant follows data-tone">
            <p>
              The theme remaps Tailwind&apos;s{" "}
              <code className="font-mono text-xs">dark:</code> variant to{" "}
              <code className="font-mono text-xs">[data-tone=&apos;dark&apos;]</code>, so{" "}
              <code className="font-mono text-xs">dark:bg-surface</code> responds to your tone
              attribute — not the OS setting. An explicit tone always wins.
            </p>
          </Callout>
        </div>
      </Section>

      <Section label="Advanced" title="Custom presets and keys" id="theming-advanced" tinted>
        <div className="space-y-2.5 text-sm">
          <p>
            <code className="font-mono text-xs">ThemeProvider</code> accepts{" "}
            <code className="font-mono text-xs">themes</code>,{" "}
            <code className="font-mono text-xs">storageKey</code>,{" "}
            <code className="font-mono text-xs">themeAttribute</code>,{" "}
            <code className="font-mono text-xs">toneAttribute</code> and{" "}
            <code className="font-mono text-xs">darkClassName</code>, so you can ship your own
            presets or namespace the stored keys per app.
          </p>
          <p>
            Re-skin a preset by editing the CSS variables in{" "}
            <code className="font-mono text-xs">styles/themes/&lt;name&gt;.css</code> — change{" "}
            <code className="font-mono text-xs">--brand</code> and the whole interface follows.
          </p>
        </div>
      </Section>
    </GuidePage>
  )
}
