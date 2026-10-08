import { DocPage, type PropRow } from "../../components/doc-page"
import {
  Button,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/components/toast")({
  component: ToastPage,
})

const props: PropRow[] = [
  {
    name: "ToastProvider duration",
    type: "number",
    default: "5000",
    description: "Milliseconds before a toast auto-dismisses. Foreground toasts never auto-dismiss.",
  },
  {
    name: "Toast variant",
    type: '"default" | "brand" | "success" | "warning" | "destructive"',
    default: '"default"',
    description: "Color of the card; destructive also switches to role=\"alert\".",
  },
  {
    name: "Toast open / onOpenChange",
    type: "boolean / (open: boolean) => void",
    description: "Drive toasts from your own state (recommended: keep a queue).",
  },
  {
    name: "ToastAction altText",
    type: "string",
    required: true,
    description: "Accessible name for the action button (Radix requires it).",
  },
  {
    name: "ToastViewport className",
    type: "string",
    description: "Position of the stack — fixed bottom-right by default.",
  },
]

function Demo() {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show toast</Button>
      <ToastProvider duration={6000}>
        <Toast open={open} onOpenChange={setOpen} variant="success">
          <ToastTitle>Changes saved</ToastTitle>
          <ToastDescription>Workspace settings updated.</ToastDescription>
          <ToastAction altText="Undo" onClick={() => setOpen(false)}>
            Undo
          </ToastAction>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    </>
  )
}

function ToastPage() {
  return (
    <DocPage
      title="Toast"
      intro="Ephemeral confirmation in a corner stack. Toasts announce politely, are swipeable on touch and never block the page."
      demo={<Demo />}
      examples={[
        {
          title: "Success with undo",
          code: `<ToastProvider>
  <Toast open={saved} onOpenChange={setSaved} variant="success">
    <ToastTitle>Changes saved</ToastTitle>
    <ToastDescription>Workspace settings updated.</ToastDescription>
    <ToastAction altText="Undo" onClick={undo}>Undo</ToastAction>
    <ToastClose />
  </Toast>
  <ToastViewport />
</ToastProvider>`,
          render: <Demo />,
        },
        {
          title: "Destructive, kept open until dismissed",
          code: `<Toast open={failed} onOpenChange={setFailed} variant="destructive">
  <ToastTitle>Deploy failed</ToastTitle>
  <ToastDescription>Build 4192 could not reach the registry.</ToastDescription>
  <ToastClose />
</Toast>`,
          render: (
            <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
              <p className="font-semibold">Deploy failed</p>
              <p className="opacity-90">Build 4192 could not reach the registry.</p>
            </div>
          ),
        },
      ]}
      a11y={[
        "Default toasts render role=\"status\" (polite); destructive ones render role=\"alert\" (assertive) because variant switches the Radix type to foreground.",
        "Foreground toasts never auto-dismiss — an error stays until the user dismisses it.",
        "Always give ToastAction an altText so the button has a name out of context.",
        "The close button is labelled \"Dismiss\"; swipe is an enhancement, never the only way out.",
        "Viewport lives at the bottom (stacked, z-100) and does not trap focus — the page keeps working.",
      ]}
      props={props}
    />
  )
}
