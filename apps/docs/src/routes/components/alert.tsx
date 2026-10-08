import { DocPage, type PropRow } from "../../components/doc-page"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"

export const Route = createFileRoute("/components/alert")({
  component: AlertPage,
})

function DismissibleAlert() {
  const [open, setOpen] = useState(true)
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-md border border-border bg-card px-3 py-1.5 text-sm outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
      >
        Show alert again
      </button>
    )
  }
  return (
    <Alert variant="info" onDismiss={() => setOpen(false)}>
      <AlertTitle>Invitation pending</AlertTitle>
      <AlertDescription>alex@acme.com has not accepted yet.</AlertDescription>
    </Alert>
  )
}

const props: PropRow[] = [
  {
    name: "variant",
    type: '"default" | "brand" | "info" | "success" | "warning" | "destructive"',
    default: '"default"',
    description: "Status color of the block. Each variant pairs a soft surface with its text color.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Padding and type scale of the block.",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Leading visual. Rendered inside an aria-hidden wrapper.",
  },
  {
    name: "role",
    type: "string",
    description:
      "Set role=\"alert\" for messages that appear after an action so screen readers announce them.",
  },
  {
    name: "onDismiss",
    type: "() => void",
    description:
      "Renders a close button in the trailing edge. Omit it for alerts that must stay until handled.",
  },
  {
    name: "dismissLabel",
    type: "string",
    default: '"Dismiss"',
    description: "Accessible name of the dismiss button.",
  },
  {
    name: "className",
    type: "string",
    description: "Merged last, so you can override any variant class.",
  },
]

function AlertPage() {
  return (
    <DocPage
      title="Alert"
      intro="Inline message block for status, warnings and destructive confirmations. Soft surface, semantic color, no layout shift."
      demo={
        <div className="space-y-3">
          <Alert>
            <AlertTitle>Scheduled maintenance</AlertTitle>
            <AlertDescription>The service restarts at 02:00 UTC.</AlertDescription>
          </Alert>
          <Alert variant="success">
            <AlertTitle>Deployed</AlertTitle>
            <AlertDescription>Build 4192 is live in production.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Payment failed</AlertTitle>
            <AlertDescription>Update your card to keep the workspace active.</AlertDescription>
          </Alert>
        </div>
      }
      examples={[
        {
          title: "Status with an icon",
          code: `<Alert variant="info" icon={<InfoIcon />}>
  <AlertTitle>New version available</AlertTitle>
  <AlertDescription>Refresh the page to update.</AlertDescription>
</Alert>`,
          render: (
            <Alert variant="info">
              <AlertTitle>New version available</AlertTitle>
              <AlertDescription>Refresh the page to update.</AlertDescription>
            </Alert>
          ),
        },
        {
          title: "Compact, icon-only message",
          code: `<Alert size="sm" variant="warning">
  3 rows could not be imported.
</Alert>`,
          render: (
            <Alert size="sm" variant="warning">
              3 rows could not be imported.
            </Alert>
          ),
        },
        {
          title: "Announced after an action",
          code: `const [failed, setFailed] = useState(false)
// ...
{failed && (
  <Alert role="alert" variant="destructive">
    <AlertTitle>Could not save</AlertTitle>
    <AlertDescription>Check your connection and try again.</AlertDescription>
  </Alert>
)}`,
          render: (
            <Alert role="alert" variant="destructive">
              <AlertTitle>Could not save</AlertTitle>
              <AlertDescription>Check your connection and try again.</AlertDescription>
            </Alert>
          ),
        },
        {
          title: "Dismissible notice",
          code: `const [open, setOpen] = useState(true)
// ...
{open && (
  <Alert variant="info" onDismiss={() => setOpen(false)}>
    <AlertTitle>Invitation pending</AlertTitle>
    <AlertDescription>alex@acme.com has not accepted yet.</AlertDescription>
  </Alert>
)}`,
          render: <DismissibleAlert />,
        },
      ]}
      a11y={[
        "Static alerts render no implicit role, so a page full of them is not read out on load.",
        "Add role=\"alert\" (live region) only when the message appears in response to an action.",
        "The icon wrapper is aria-hidden, so assistive tech reads only the title and description.",
        "The dismiss button is a real <button> with aria-label (\"Dismiss\" by default) — keep dismissLabel short and specific.",
        "Only wire onDismiss when dismissal is safe; a destructive-confirmation alert should have no close button.",
        "Every variant pairs its soft surface with a foreground that meets WCAG AA (checked by scripts/check-contrast.ts).",
        "Use AlertTitle as a heading (renders h5) so screen readers can navigate the message.",
      ]}
      props={props}
    />
  )
}
