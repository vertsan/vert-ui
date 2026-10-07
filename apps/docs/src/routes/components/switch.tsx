import { DocPage, type PropRow } from "../../components/doc-page"
import { Switch } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/switch")({
  component: SwitchPage,
})

const props: PropRow[] = [
  {
    name: "checked",
    type: "boolean",
    description: "Controlled state. Pair it with onCheckedChange.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    default: "false",
    description: "Uncontrolled initial state.",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    description: "Fires when the user toggles with click or keyboard.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Blocks interaction and dims the control.",
  },
  {
    name: "variant",
    type: '"default" | "brand" | "destructive"',
    default: '"default"',
    description: "Color used for the on (checked) track.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Track and thumb size.",
  },
  {
    name: "name / value",
    type: "string",
    description: "Renders a hidden native input so the control posts inside a form.",
  },
]

function SwitchPage() {
  return (
    <DocPage
      title="Switch"
      intro="Immediate on/off control for settings that apply as soon as they change. Space and Enter both toggle it."
      demo={
        <div className="space-y-4">
          <label className="flex items-center justify-between gap-6 text-sm">
            <span>Email notifications</span>
            <Switch aria-label="Email notifications" defaultChecked />
          </label>
          <label className="flex items-center justify-between gap-6 text-sm">
            <span>Weekly digest</span>
            <Switch aria-label="Weekly digest" />
          </label>
          <label className="flex items-center justify-between gap-6 text-sm">
            <span>Compact density</span>
            <Switch aria-label="Compact density" size="sm" />
          </label>
        </div>
      }
      examples={[
        {
          title: "Controlled setting",
          code: `const [enabled, setEnabled] = useState(false)

<label className="flex items-center justify-between">
  <span>Email notifications</span>
  <Switch checked={enabled} onCheckedChange={setEnabled} />
</label>`,
          render: (
            <label className="flex items-center justify-between gap-6 text-sm">
              <span>Email notifications</span>
              <Switch aria-label="Email notifications" />
            </label>
          ),
        },
        {
          title: "Destructive toggle",
          code: `<Switch variant="destructive" size="lg" aria-label="Maintenance mode" />`,
          render: (
            <label className="flex items-center justify-between gap-6 text-sm">
              <span>Maintenance mode</span>
              <Switch aria-label="Maintenance mode" variant="destructive" size="lg" />
            </label>
          ),
        },
      ]}
      a11y={[
        "Renders role=\"switch\" with aria-checked, so screen readers announce on/off rather than checked/unchecked.",
        "Toggle with Space or Enter; both are handled natively by the underlying button.",
        "Use a real <label> wrapping the text (as above) or aria-label when there is no visible label.",
        "Switch is for immediate effects. For changes that need saving, prefer a Checkbox plus a save action.",
        "Disabled state uses opacity 50% and is announced as disabled, not just dimmed.",
      ]}
    />
  )
}
