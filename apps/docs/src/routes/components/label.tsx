import { DocPage, type PropRow } from "../../components/doc-page"
import { Input, Label } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/label")({
  component: LabelPage,
})

const props: PropRow[] = [
  {
    name: "htmlFor",
    type: "string",
    description: "Id of the control this label names — the programmatic association.",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "The visible label text. Keep it short and unique on the page.",
  },
  {
    name: "className",
    type: "string",
    description: "Merged last; add gap or color utilities as needed.",
  },
]

function LabelPage() {
  return (
    <DocPage
      title="Label"
      intro="Form label wired to its control. Clicking it focuses the field, and screen readers announce it with the control's value."
      demo={
        <div className="max-w-xs space-y-4">
          <div className="space-y-2">
            <Label htmlFor="demo-email">Email</Label>
            <Input id="demo-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="demo-name">Workspace name</Label>
            <Input id="demo-name" defaultValue="Acme Inc" />
          </div>
        </div>
      }
      examples={[
        {
          title: "Label with a hint",
          code: `<div className="space-y-2">
  <Label htmlFor="api-key">API key</Label>
  <Input id="api-key" type="password" />
  <p id="api-key-hint" className="text-xs text-muted-foreground">
    Found in workspace settings.
  </p>
</div>`,
          render: (
            <div className="max-w-xs space-y-2">
              <Label htmlFor="api-key">API key</Label>
              <Input id="api-key" type="password" />
              <p className="text-xs text-muted-foreground">Found in workspace settings.</p>
            </div>
          ),
        },
        {
          title: "Required marker",
          code: `<Label htmlFor="plan">
  Plan <span aria-hidden>*</span>
</Label>`,
          render: (
            <Label htmlFor="plan-demo">
              Plan <span aria-hidden>*</span>
            </Label>
          ),
        },
      ]}
      a11y={[
        "Always pair a Label with htmlFor (or wrap the control) — an unlabelled input has no accessible name.",
        "One label points at one control; never reuse the same text on two fields.",
        "Decorative asterisks need aria-hidden; put \"required\" on the input itself, which Input does via the required attribute.",
        "Labels are focusable targets: clicking the text moves focus to the control, which helps motor-impaired users.",
      ]}
      props={props}
    />
  )
}
