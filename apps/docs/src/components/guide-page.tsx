import * as React from "react"
import { Link } from "@tanstack/react-router"
import { CodeBlock } from "./code-block"

export function GuidePage({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children: React.ReactNode
}) {
  return (
    <article className="max-w-3xl space-y-10">
      <header className="space-y-3">
        <Link
          to="/guide"
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
          All guides
        </Link>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-base text-muted-foreground sm:text-lg">{intro}</p>
      </header>
      {children}
    </article>
  )
}

export function Section({
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

export function Code({ children }: { children: string }) {
  return <CodeBlock code={children} />
}

export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "warning"
  title: string
  children: React.ReactNode
}) {
  const styles =
    tone === "warning"
      ? "border-warning/40 bg-warning-soft text-warning-soft-foreground"
      : "border-info/30 bg-info-soft text-info-soft-foreground"

  return (
    <div className={`rounded-xl border p-4 text-sm ${styles}`} role="note">
      <p className="font-semibold">{title}</p>
      <div className="mt-1 space-y-2 opacity-95">{children}</div>
    </div>
  )
}

export function Steps({ items }: { items: { title: string; children: React.ReactNode }[] }) {
  return (
    <ol className="space-y-8">
      {items.map((item, index) => (
        <li key={item.title} className="relative space-y-3 pl-12">
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand-soft-foreground"
          >
            {index + 1}
          </span>
          <h3 className="text-base font-semibold">{item.title}</h3>
          <div className="space-y-3">{item.children}</div>
        </li>
      ))}
    </ol>
  )
}
