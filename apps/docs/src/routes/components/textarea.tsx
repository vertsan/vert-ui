import { DocPage, type PropRow } from "../../components/doc-page"
import { Label, Textarea } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/textarea")({
  component: TextareaPage,
})

const props: PropRow[] = [
  {
    name: "invalid",
    type: "boolean",
    description:
      "Marks the field invalid: sets aria-invalid, data-invalid and the destructive border.",
  },
  {
    name: "rows",
    type: "number",
    default: "3",
    description: "Initial visible height in text rows.",
  },
  {
    name: "resize",
    type: '"none" | "vertical" | "both"',
    default: '"vertical"',
    description: "CSS resize behaviour — vertical keeps content reachable when zoomed.",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Native disabled state — dimmed and skipped by keyboard.",
  },
  {
    name: "required",
    type: "boolean",
    description: "Native required flag: browser validation plus SR announcement.",
  },
  {
    name: "…native textarea attrs",
    type: "TextareaHTMLAttributes<HTMLTextAreaElement>",
    description: "value, onChange, maxLength, placeholder, …",
  },
]

function TextareaPage() {
  return (
    <DocPage
      title="Textarea"
      intro="Multi-line text field with the same validation and focus behaviour as Input."
      demo={
        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="demo-textarea">Release notes</Label>
          <Textarea
            id="demo-textarea"
            placeholder="What changed in this version?"
            defaultValue="Improved form validation messaging."
          />
          <p className="text-xs text-muted-foreground">Markdown is supported.</p>
        </div>
      }
      examples={[
        {
          title: "Invalid state",
          code: `<Textarea invalid aria-label="Description" defaultValue="hi" />
<p className="text-xs font-medium text-destructive">
  Description must be at least 20 characters.
</p>`,
          render: (
            <div className="w-full max-w-sm space-y-2">
              <Textarea invalid aria-label="Description" defaultValue="hi" />
              <p className="text-xs font-medium text-destructive">
                Description must be at least 20 characters.
              </p>
            </div>
          ),
        },
        {
          title: "Fixed height with counter",
          code: `<div className="space-y-2">
  <Textarea resize="none" maxLength={280} aria-label="Tweet" />
  <p className="text-right text-xs text-muted-foreground">280 characters max</p>
</div>`,
          render: (
            <div className="w-full max-w-sm space-y-2">
              <Textarea resize="none" maxLength={280} aria-label="Tweet" placeholder="Keep it short…" />
              <p className="text-right text-xs text-muted-foreground">280 characters max</p>
            </div>
          ),
        },
        {
          title: "Disabled",
          code: `<Textarea disabled defaultValue="Editing is locked." aria-label="Notes" />`,
          render: (
            <Textarea
              disabled
              defaultValue="Editing is locked."
              aria-label="Notes"
              className="w-full max-w-sm"
            />
          ),
        },
      ]}
      a11y={[
        "Same naming rule as Input: pair with Label htmlFor or wrap it in Field.",
        "Keep resize vertical (default) — disabling resize entirely can trap content off-screen for low-vision users who zoom.",
        "Mark invalid with the invalid prop and describe the reason in text linked via aria-describedby.",
        "autoGrow behaviour is not built in: if you add it, keep the accessible height in sync (no display:none content).",
      ]}
      props={props}
    />
  )
}
