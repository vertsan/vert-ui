import { DocPage, type PropRow } from "../../components/doc-page"
import { Checkbox } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/checkbox")({
  component: CheckboxPage,
})

const props: PropRow[] = [
  {
    name: "checked",
    type: '"checked" | "indeterminate" | boolean',
    description: "Controlled state. Use onCheckedChange to update it.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    description: "Uncontrolled initial state.",
  },
  {
    name: "onCheckedChange",
    type: '(checked: boolean | "indeterminate") => void',
    description: "Fires when the box toggles via click, Space key or pointer.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Box size — keeps the 44px hit target with a wrapping label.",
  },
  {
    name: "invalid",
    type: "boolean",
    description: "Sets aria-invalid and the destructive border.",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Native disabled state via Radix — dimmed and inert.",
  },
  {
    name: "required / name / value",
    type: "boolean / string / string",
    description: "Forwarded to the hidden input so native forms keep working.",
  },
]

function CheckboxPage() {
  return (
    <DocPage
      title="Checkbox"
      intro="Multi-select choice with checked, indeterminate and invalid states, powered by Radix UI."
      demo={
        <div className="space-y-4">
          <label className="flex cursor-pointer items-center gap-3">
            <Checkbox defaultChecked aria-label="Email notifications" />
            <span className="text-sm">Email me release notes</span>
          </label>
          <label className="flex cursor-pointer items-center gap-3">
            <Checkbox aria-label="Slack notifications" />
            <span className="text-sm">Slack me for incidents</span>
          </label>
        </div>
      }
      examples={[
        {
          title: "Indeterminate parent row",
          code: `const [state, setState] = useState<boolean | 'indeterminate'>('indeterminate')

<Checkbox
  checked={state}
  onCheckedChange={setState}
  aria-label="Select all"
/>
<span>Select all</span>`,
          render: (
            <label className="flex cursor-pointer items-center gap-3">
              <Checkbox checked="indeterminate" aria-label="Select all" />
              <span className="text-sm font-medium">Select all</span>
            </label>
          ),
        },
        {
          title: "Label, sizes and invalid state",
          code: `<div className="flex items-center gap-3">
  <Checkbox size="sm" aria-label="Sm" />
  <Checkbox size="md" aria-label="Md" />
  <Checkbox size="lg" aria-label="Lg" />
  <Checkbox invalid aria-label="Invalid" />
</div>`,
          render: (
            <div className="flex flex-wrap items-center gap-4">
              <label className="flex cursor-pointer items-center gap-2">
                <Checkbox size="sm" aria-label="Small" />
                <span className="text-sm">sm</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <Checkbox size="md" defaultChecked aria-label="Medium" />
                <span className="text-sm">md</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <Checkbox size="lg" aria-label="Large" />
                <span className="text-sm">lg</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <Checkbox invalid aria-label="Invalid" />
                <span className="text-sm text-destructive">invalid</span>
              </label>
            </div>
          ),
        },
        {
          title: "Disabled row",
          code: `<label className="flex items-center gap-3 opacity-50">
  <Checkbox disabled aria-label="Disabled option" />
  <span className="text-sm">Requires admin rights</span>
</label>`,
          render: (
            <label className="flex cursor-pointer items-center gap-3 opacity-50">
              <Checkbox disabled aria-label="Disabled option" />
              <span className="text-sm">Requires admin rights</span>
            </label>
          ),
        },
      ]}
      a11y={[
        "Wrap the checkbox in a <label>, or give it aria-label / an associated Label — the box alone has no accessible name.",
        "The label must be clickable: it doubles the hit target and is the primary way motor-impaired users toggle.",
        "indeterminate is announced as \"partially checked\"; set it when a parent row mixes checked children.",
        "Space toggles the focused checkbox — never block the Space key on the control itself.",
        "Pass name and value so the hidden input submits inside a native <form>.",
      ]}
      props={props}
    />
  )
}
