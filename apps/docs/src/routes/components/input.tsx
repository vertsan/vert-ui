import { DocPage, type PropRow } from "../../components/doc-page"
import { Input, Label } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/input")({
  component: InputPage,
})

const props: PropRow[] = [
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Control height and text scale. Use lg on touch-first or prominent fields.",
  },
  {
    name: "invalid",
    type: "boolean",
    description:
      "Marks the field invalid: sets aria-invalid, data-invalid and the destructive border.",
  },
  {
    name: "type",
    type: 'string',
    default: '"text"',
    description: "Native input type — email, password, search, number…",
  },
  {
    name: "placeholder",
    type: "string",
    description: "Hint shown while empty. Not a substitute for a label.",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Native disabled state — dimmed, skipped by tab and pointer.",
  },
  {
    name: "required",
    type: "boolean",
    description: "Native required flag: browser validation plus SR announcement.",
  },
  {
    name: "…native input attrs",
    type: "InputHTMLAttributes<HTMLInputElement>",
    description: "value, onChange, autoComplete, minLength, inputMode, …",
  },
]

function InputPage() {
  return (
    <DocPage
      title="Input"
      intro="Single-line text field with validation state, focus ring and file/placeholder support."
      demo={
        <div className="w-full max-w-sm space-y-4">
          <div className="space-y-2">
            <Label htmlFor="demo-input-email">Email</Label>
            <Input id="demo-input-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="demo-input-key">API key</Label>
            <Input id="demo-input-key" type="password" defaultValue="vt_live_8f3a" />
            <p className="text-xs text-muted-foreground">Found in workspace settings.</p>
          </div>
        </div>
      }
      examples={[
        {
          title: "Invalid state",
          code: `<Input invalid aria-label="Email" placeholder="you@example.com" />
<p className="text-xs font-medium text-destructive">
  Enter a valid email address.
</p>`,
          render: (
            <div className="w-full max-w-sm space-y-2">
              <Input invalid aria-label="Email" placeholder="you@example.com" defaultValue="not-an-email" />
              <p className="text-xs font-medium text-destructive">
                Enter a valid email address.
              </p>
            </div>
          ),
        },
        {
          title: "With label and hint",
          code: `<div className="space-y-2">
  <Label htmlFor="workspace">Workspace name</Label>
  <Input id="workspace" placeholder="Acme Inc" />
  <p className="text-xs text-muted-foreground">Visible to everyone in the org.</p>
</div>`,
          render: (
            <div className="w-full max-w-sm space-y-2">
              <Label htmlFor="workspace-demo">Workspace name</Label>
              <Input id="workspace-demo" placeholder="Acme Inc" />
              <p className="text-xs text-muted-foreground">
                Visible to everyone in the org.
              </p>
            </div>
          ),
        },
        {
          title: "Sizes and disabled",
          code: `<Input size="sm" placeholder="Small" aria-label="Small" />
<Input size="md" placeholder="Medium" aria-label="Medium" />
<Input size="lg" placeholder="Large" aria-label="Large" />
<Input disabled defaultValue="Locked field" aria-label="Disabled" />`,
          render: (
            <div className="w-full max-w-sm space-y-3">
              <Input size="sm" placeholder="Small" aria-label="Small" />
              <Input size="md" placeholder="Medium" aria-label="Medium" />
              <Input size="lg" placeholder="Large" aria-label="Large" />
              <Input disabled defaultValue="Locked field" aria-label="Disabled" />
            </div>
          ),
        },
      ]}
      a11y={[
        "Every input needs a programmatic name: pair it with Label htmlFor (or use Field, which wires it for you).",
        "invalid flips aria-invalid — screen readers announce the state on focus; keep an inline error text linked by aria-describedby (Field does this automatically).",
        "Placeholders vanish on typing and often fail contrast — keep them for examples, labels for real forms.",
        "Native required works with browser validation; a visual asterisk alone is not enough.",
      ]}
      props={props}
    />
  )
}
