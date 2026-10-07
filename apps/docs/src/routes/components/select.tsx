import { DocPage, type PropRow } from "../../components/doc-page"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/components/select")({
  component: SelectPage,
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
    description: "Fires when the user picks an item.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Blocks opening the list and dims the trigger.",
  },
  {
    name: "SelectTrigger size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Height and type scale of the button.",
  },
  {
    name: "SelectTrigger invalid",
    type: "boolean",
    default: "false",
    description: "Switches to the destructive ring for validation errors.",
  },
  {
    name: "SelectValue placeholder",
    type: "ReactNode",
    description: "Shown while no item is selected.",
  },
  {
    name: "SelectItem value",
    type: "string",
    required: true,
    description: "Value reported by onValueChange; must be unique within the list.",
  },
]

function SelectPage() {
  const [fruit, setFruit] = React.useState("apple")

  return (
    <DocPage
      title="Select"
      intro="Single-value listbox trigger with typeahead and the same menu-item semantics as Dropdown Menu."
      demo={
        <div className="max-w-xs space-y-4">
          <Select defaultValue="apple">
            <SelectTrigger aria-label="Fruit">
              <SelectValue placeholder="Pick a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruit</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="cherry">Cherry</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectItem value="other">Something else</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">
            Selected: <span className="font-mono">{fruit}</span>
          </p>
        </div>
      }
      examples={[
        {
          title: "Controlled select",
          code: `const [fruit, setFruit] = useState("apple")

<Select value={fruit} onValueChange={setFruit}>
  <SelectTrigger aria-label="Fruit">
    <SelectValue placeholder="Pick a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectContent>
</Select>`,
          render: (
            <div className="max-w-xs">
              <Select value={fruit} onValueChange={setFruit}>
                <SelectTrigger aria-label="Fruit">
                  <SelectValue placeholder="Pick a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="cherry">Cherry</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ),
        },
        {
          title: "Grouped and invalid",
          code: `<Select defaultValue="">
  <SelectTrigger invalid aria-label="Plan">
    <SelectValue placeholder="Choose a plan" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Plans</SelectLabel>
      <SelectItem value="free">Free</SelectItem>
      <SelectItem value="team">Team</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
          render: (
            <div className="max-w-xs">
              <Select defaultValue="">
                <SelectTrigger invalid aria-label="Plan">
                  <SelectValue placeholder="Choose a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Plans</SelectLabel>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="team">Team</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          ),
        },
      ]}
      a11y={[
        "The trigger renders role=\"combobox\" with aria-expanded and aria-controls pointing at the listbox.",
        "Type a letter to jump to the next matching item; Home/End jump to the list ends.",
        "Escape closes the list and returns focus to the trigger; arrow keys open it when closed.",
        "SelectValue is required: without it the trigger has no accessible name — also pass aria-label when no visible label exists.",
        "SelectLabel must sit inside a SelectGroup; it becomes the group's accessible name.",
        "Use invalid together with an inline error message referenced by aria-describedby.",
      ]}
    />
  )
}
