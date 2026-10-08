import { DocPage, type PropRow } from "../../components/doc-page"
import { RadioGroup, RadioGroupItem } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/components/radio-group")({
  component: RadioGroupPage,
})

const props: PropRow[] = [
  {
    name: "value / defaultValue",
    type: "string",
    description: "Controlled or uncontrolled selection.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Fires when the user picks an item (click or arrow key).",
  },
  {
    name: "orientation",
    type: '"vertical" | "horizontal"',
    default: '"vertical"',
    description: "Stacking direction of the items; also sets data-orientation.",
  },
  {
    name: "name",
    type: "string",
    description: "Groups the items into a native form field for submission.",
  },
  {
    name: "RadioGroupItem value",
    type: "string",
    required: true,
    description: "Value reported by onValueChange; must be unique within the group.",
  },
  {
    name: "RadioGroupItem size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Diameter of the radio control.",
  },
]

function RadioGroupPage() {
  const [plan, setPlan] = React.useState("team")

  return (
    <DocPage
      title="Radio Group"
      intro="Single-choice control for mutually exclusive options that are all visible at once. Arrow keys move and select; Tab lands on the group."
      demo={
        <RadioGroup
          aria-label="Plan"
          value={plan}
          onValueChange={setPlan}
          className="gap-4"
        >
          {[
            { value: "free", label: "Free", hint: "One project, community support" },
            { value: "team", label: "Team", hint: "Unlimited projects, email support" },
            { value: "scale", label: "Scale", hint: "SSO, audit log, priority support" },
          ].map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-start gap-3"
            >
              <RadioGroupItem value={option.value} className="mt-0.5" />
              <span className="space-y-0.5">
                <span className="block text-sm font-medium">{option.label}</span>
                <span className="block text-xs text-muted-foreground">{option.hint}</span>
              </span>
            </label>
          ))}
        </RadioGroup>
      }
      examples={[
        {
          title: "Controlled selection",
          code: `const [plan, setPlan] = useState("team")

<RadioGroup value={plan} onValueChange={setPlan} aria-label="Plan">
  <label className="flex gap-3">
    <RadioGroupItem value="free" /> Free
  </label>
  <label className="flex gap-3">
    <RadioGroupItem value="team" /> Team
  </label>
</RadioGroup>`,
          render: (
            <RadioGroup defaultValue="team" aria-label="Plan demo" className="gap-3">
              <label className="flex cursor-pointer items-center gap-3 text-sm">
                <RadioGroupItem value="free" /> Free
              </label>
              <label className="flex cursor-pointer items-center gap-3 text-sm">
                <RadioGroupItem value="team" /> Team
              </label>
            </RadioGroup>
          ),
        },
        {
          title: "Horizontal with sizes",
          code: `<RadioGroup orientation="horizontal" defaultValue="s" aria-label="Size">
  <RadioGroupItem value="s" size="sm" />
  <RadioGroupItem value="m" size="md" />
  <RadioGroupItem value="l" size="lg" />
</RadioGroup>`,
          render: (
            <RadioGroup orientation="horizontal" defaultValue="m" aria-label="Size demo" className="gap-4">
              <RadioGroupItem value="s" size="sm" />
              <RadioGroupItem value="m" size="md" />
              <RadioGroupItem value="l" size="lg" />
            </RadioGroup>
          ),
        },
      ]}
      a11y={[
        "Renders role=\"radiogroup\" with role=\"radio\" children and aria-checked state — announced as a group of options.",
        "Wrap each item in a real <label> (as in the preview) or give RadioGroupItem an aria-label.",
        "Arrow keys move focus and select the new option, matching native radio behaviour; Tab moves past the whole group.",
        "Use radios for a small number of always-visible choices; use Select for long lists.",
        "Keep every option visible — hiding options behind a disclosure defeats the point of a radio group.",
      ]}
      props={props}
    />
  )
}
