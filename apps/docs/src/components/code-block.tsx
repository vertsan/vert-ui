import * as React from "react"

export function CopyButton({
  value,
  label = "Copy code",
  className,
}: {
  value: string
  label?: string
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)
  const timeout = React.useRef<number | undefined>(undefined)

  React.useEffect(() => () => window.clearTimeout(timeout.current), [])

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.clearTimeout(timeout.current)
      timeout.current = window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable — nothing to do */
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={copied ? "Copied to clipboard" : label}
      className={[
        "inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-card/90 px-2 py-1 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur outline-none transition-colors hover:border-border-strong hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
        className ?? "",
      ].join(" ")}
    >
      {copied ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3.5 text-success"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3.5"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      )}
      <span aria-live="polite">{copied ? "Copied" : ""}</span>
    </button>
  )
}

export function CodeBlock({
  code,
  copyValue,
  className,
}: {
  code: string
  copyValue?: string
  className?: string
}) {
  return (
    <div className={["group relative", className ?? ""].join(" ")}>
      <pre className="overflow-x-auto rounded-xl bg-vert-950 p-4 pr-16 text-xs leading-relaxed text-vert-100 shadow-inner">
        <code>{code}</code>
      </pre>
      <CopyButton
        value={copyValue ?? code}
        className="absolute right-2 top-2 border-vert-100/15 bg-vert-900/80 text-vert-100 hover:border-vert-100/30 hover:text-white"
      />
    </div>
  )
}
