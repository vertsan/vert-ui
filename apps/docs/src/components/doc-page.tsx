import * as React from "react"

export interface PropRow {
  name: string
  type: string
  default?: string
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

function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-xs leading-relaxed">
      <code>{children}</code>
    </pre>
  )
}

export function DocPage({ title, intro, demo, props, examples, a11y }: DocPageProps) {
  return (
    <article className="mx-auto max-w-3xl space-y-10 p-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{intro}</p>
      </header>

      <section aria-labelledby={`${title}-demo`} className="space-y-4">
        <h2 id={`${title}-demo`} className="text-xl font-semibold">
          Preview
        </h2>
        <div className="rounded-xl border border-border bg-card p-6">{demo}</div>
      </section>

      <section aria-labelledby={`${title}-examples`} className="space-y-6">
        <h2 id={`${title}-examples`} className="text-xl font-semibold">
          Usage examples
        </h2>
        {examples.map((example) => (
          <div key={example.title} className="space-y-3">
            <h3 className="text-sm font-semibold">{example.title}</h3>
            <div className="rounded-xl border border-border bg-card p-6">{example.render}</div>
            <Code>{example.code}</Code>
          </div>
        ))}
      </section>

      <section aria-labelledby={`${title}-props`} className="space-y-4">
        <h2 id={`${title}-props`} className="text-xl font-semibold">
          Props
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th scope="col" className="py-2 pr-4 font-semibold">
                  Prop
                </th>
                <th scope="col" className="py-2 pr-4 font-semibold">
                  Type
                </th>
                <th scope="col" className="py-2 pr-4 font-semibold">
                  Default
                </th>
                <th scope="col" className="py-2 font-semibold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop) => (
                <tr key={prop.name} className="border-b border-border/60 align-top">
                  <th scope="row" className="py-2 pr-4 font-mono text-xs font-medium">
                    {prop.name}
                  </th>
                  <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">
                    {prop.type}
                  </td>
                  <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">
                    {prop.default ?? "—"}
                  </td>
                  <td className="py-2 text-muted-foreground">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby={`${title}-a11y`} className="space-y-4">
        <h2 id={`${title}-a11y`} className="text-xl font-semibold">
          Accessibility
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          {a11y.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}
