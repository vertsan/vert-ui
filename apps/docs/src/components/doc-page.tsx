import * as React from "react"
import { Link } from "@tanstack/react-router"
import { CodeBlock, CopyButton } from "./code-block"

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

const REGISTRY_URL = "https://vert-ui.dev/r"

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

export function DocPage({ title, intro, demo, props, examples, a11y }: DocPageProps) {
  const slug = title.toLowerCase().replace(/\s+/g, "-")
  const install = `npx shadcn@latest add ${REGISTRY_URL}/${slug}.json`

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

      <Section label="Install" title="Install the component" id={`${slug}-install`}>
        <p className="mb-3 text-sm text-muted-foreground">
          Add the source straight into your project with the shadcn CLI — no package
          dependency to track.
        </p>
        <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/60 p-3">
          <code className="min-w-0 flex-1 overflow-x-auto whitespace-pre font-mono text-xs text-foreground">
            {install}
          </code>
          <CopyButton value={install} label="Copy install command" />
        </div>
      </Section>

      <Section label="Preview" title="Live preview" id={`${slug}-demo`}>
        <div className="grain relative overflow-hidden rounded-xl border border-border/60 bg-muted/40 p-6 sm:p-10">
          <div className="flex min-h-24 items-center justify-center">{demo}</div>
        </div>
      </Section>

      <Section label="Usage" title="Examples" id={`${slug}-examples`}>
        <div className="space-y-8">
          {examples.map((example) => (
            <div key={example.title} className="space-y-3">
              <h3 className="text-sm font-semibold">{example.title}</h3>
              <div className="grain relative overflow-hidden rounded-xl border border-border/60 bg-background/70 p-6">
                {example.render}
              </div>
              <CodeBlock code={example.code} />
            </div>
          ))}
        </div>
      </Section>

      <Section label="Reference" title="Props" id={`${slug}-props`}>
        {props.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            This component takes no custom props — spread native attributes freely.
          </p>
        ) : (
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
        )}
      </Section>

      <Section
        label="Accessibility"
        title="Accessibility notes"
        id={`${slug}-a11y`}
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
