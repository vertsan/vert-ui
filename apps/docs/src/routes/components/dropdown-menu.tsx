import { DocPage, type PropRow } from "../../components/doc-page"
import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/components/dropdown-menu")({
  component: DropdownMenuPage,
})

const props: PropRow[] = [
  {
    name: "DropdownMenu modal",
    type: "boolean",
    default: "true",
    description: "Keeps pointer events outside the menu blocked while it is open.",
  },
  {
    name: "DropdownMenuTrigger asChild",
    type: "boolean",
    description: "Renders your own element as the trigger (Radix Slot), forwarding refs.",
  },
  {
    name: "DropdownMenuContent side / align",
    type: '"top" | "right" | "bottom" | "left" / "start" | "center" | "end"',
    default: '"bottom" / "end"',
    description: "Placement of the panel; flips when it would overflow the viewport.",
  },
  {
    name: "DropdownMenuItem onSelect",
    type: "(event: Event) => void",
    description: "Runs on selection; call event.preventDefault() to keep the menu open.",
  },
  {
    name: "DropdownMenuCheckboxItem checked",
    type: "boolean",
    description: "Controlled check state; renders role=\"menuitemcheckbox\".",
  },
  {
    name: "DropdownMenuRadioItem value",
    type: "string",
    description: "Value inside a DropdownMenuRadioGroup; renders role=\"menuitemradio\".",
  },
]

function DropdownMenuPage() {
  const [checked, setChecked] = React.useState(true)
  const [layout, setLayout] = React.useState("list")

  return (
    <DocPage
      title="Dropdown Menu"
      intro="Action menu with items, checkboxes and radio groups. Arrow keys move, typing selects by letter, Escape closes."
      demo={
        <div className="flex flex-wrap gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Project</DropdownMenuLabel>
              <DropdownMenuItem onSelect={() => {}}>Rename</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => {}}>Duplicate</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" onSelect={() => {}}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>View options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuCheckboxItem
                checked={checked}
                onCheckedChange={setChecked}
              >
                Show timestamps
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={layout} onValueChange={setLayout}>
                <DropdownMenuRadioItem value="list">List</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="grid">Grid</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      }
      examples={[
        {
          title: "Actions with a destructive item",
          code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Actions</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onSelect={rename}>Rename</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive" onSelect={destroy}>
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
          render: (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Actions</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => {}}>Rename</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" onSelect={() => {}}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ),
        },
        {
          title: "Keep the menu open after choosing",
          code: `<DropdownMenuItem
  onSelect={(event) => {
    event.preventDefault() // stops the menu closing
    duplicate()
  }}
>
  Duplicate
</DropdownMenuItem>`,
          render: (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">More</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
                  Duplicate
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ),
        },
      ]}
      a11y={[
        "Renders role=\"menu\" with menuitem / menuitemcheckbox / menuitemradio children, so state is announced, not just colored.",
        "Arrow keys move through items, Home/End jump, and printable characters select the next matching item.",
        "Escape closes the menu and returns focus to the trigger; Tab closes without moving focus.",
        "Use DropdownMenuSeparator between unrelated groups — it is exposed as role=\"separator\".",
        "Label each group with DropdownMenuLabel when the items would not make sense out of context.",
      ]}
    />
  )
}
