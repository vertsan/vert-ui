import * as React from "react"
import { Link } from "@tanstack/react-router"

export interface PropRow {
  name: string
  type: string
  default?: string
  required?: boolean
  description: string
}

export interface Example {
  title: string
  code: string
  render: React.ReactNode
}

export interface DocPageProps {
  title: string
  intro: string
  demo: React.ReactNode
  props: PropRow[]
  examples: Example[]
  a11y: string[]
}

function Section({
  label,
  title,
  id,
  children,
  tinted,
}: {
  label: string
  title: string
  id: string
  children: React.ReactNode
  tinted?: boolean
}) {
  return (
    <section aria-labelledby={id} className="space-y-4">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand">{label}</p>
        <h2 id={id} className="text-xl font-bold tracking-tight">
          {title}
        </h2>
      </div>
      <div
        className={
          tinted
            ? "rounded-2xl border border-info/30 bg-info-soft p-6 text-info-soft-foreground shadow-soft"
            : "rounded-2xl border border-border bg-card p-6 shadow-soft"
        }
      >
        {children}
      </div>
    </section>
  )
}

function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-xl bg-vert-950 p-4 text-xs leading-relaxed text-vert-100 shadow-inner">
      <code>{children}</code>
    </pre>
  )
}

export function DocPage({ title, intro, demo, props, examples, a11y }: DocPageProps) {
  return (
    <article className="max-w-3xl space-y-10">
      <header className="space-y-3">
        <Link
          to="/components"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          All components
        </Link>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-base text-muted-foreground sm:text-lg">{intro}</p>
      </header>

      <Section label="Preview" title="Live preview" id={`${title}-demo`}>
        <div className="grain rounded-xl border border-border/60 bg-muted/40 p-6 sm:p-10">
          <div className="flex min-h-24 items-center justify-center">{demo}</div>
        </div>
      </Section>

      <Section label="Usage" title="Examples" id={`${title}-examples`}>
        <div className="space-y-8">
          {examples.map((example) => (
            <div key={example.title} className="space-y-3">
              <h3 className="text-sm font-semibold">{example.title}</h3>
              <div className="grain rounded-xl border border-border/60 bg-background/70 p-6">
                {example.render}
              </div>
              <Code>{example.code}</Code>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Reference" title="Props" id={`${title}-props`}>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/70 text-xs uppercase tracking-wider text-muted-foreground">
                <th scope="col" className="px-4 py-3 font-semibold">
                  Prop
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Type
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Default
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop, index) => (
                <tr
                  key={prop.name}
                  className={[
                    "border-border/60 align-top",
                    index % 2 === 1 ? "bg-muted/30" : "",
                  ].join(" ")}
                >
                  <th
                    scope="row"
                    className="px-4 py-3 font-mono text-xs font-medium whitespace-nowrap"
                  >
                    {prop.name}
                    {prop.required ? (
                      <span className="ml-1 font-sans text-destructive">(required)</span>
                    ) : null}
                  </th>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {prop.type}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {prop.default ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        label="Accessibility"
        title="Accessibility notes"
        id={`${title}-a11y`}
        tinted
      >
        <ul className="list-disc space-y-2.5 pl-5 text-sm">
          {a11y.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </Section>
    </article>
  )
}
