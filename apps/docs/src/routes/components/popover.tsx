import { DocPage, type PropRow } from "../../components/doc-page"
import { Button, Popover, PopoverContent, PopoverTrigger } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/popover")({
  component: PopoverPage,
})

const props: PropRow[] = [
  {
    name: "open / defaultOpen",
    type: "boolean",
    default: "false",
    description: "Controlled or uncontrolled open state.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Fires on click-outside, Escape or trigger toggle.",
  },
  {
    name: "PopoverContent side",
    type: '"top" | "right" | "bottom" | "left"',
    default: '"bottom"',
    description: "Preferred placement; flips automatically near viewport edges.",
  },
  {
    name: "PopoverContent align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "Alignment along the trigger edge.",
  },
  {
    name: "PopoverContent sideOffset",
    type: "number",
    default: "6",
    description: "Gap in pixels between trigger and panel.",
  },
  {
    name: "PopoverTrigger asChild",
    type: "boolean",
    description: "Uses your own element as the opener (Radix Slot).",
  },
]

function PopoverPage() {
  return (
    <DocPage
      title="Popover"
      intro="Click-open anchored panel for secondary content — filters, previews, small forms. Unlike Tooltip it stays open, traps nothing and closes on outside click or Escape."
      demo={
        <div className="flex flex-wrap gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Ships to…</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-sm font-medium">Delivery estimate</p>
              <p className="mt-1 text-sm text-muted-foreground">
                2–3 business days to Lisbon, free over €50.
              </p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Edit details</Button>
            </PopoverTrigger>
            <PopoverContent side="right" align="start" className="space-y-3">
              <p className="text-sm font-medium">Quick edit</p>
              <input
                aria-label="Display name"
                className="w-full rounded-md border border-input bg-background px-2.5 py-1.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                defaultValue="Acme Inc"
              />
            </PopoverContent>
          </Popover>
        </div>
      }
      examples={[
        {
          title: "Filter panel",
          code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Filters</Button>
  </PopoverTrigger>
  <PopoverContent align="start" className="w-64">
    <FilterForm />
  </PopoverContent>
</Popover>`,
          render: (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Filters</Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-64 text-sm text-muted-foreground">
                Status, date range and author controls would live here.
              </PopoverContent>
            </Popover>
          ),
        },
        {
          title: "Controlled open",
          code: `const [open, setOpen] = useState(false)
<Popover open={open} onOpenChange={setOpen}>…</Popover>`,
          render: (
            <Popover defaultOpen>
              <PopoverTrigger asChild>
                <Button variant="outline">Open by default</Button>
              </PopoverTrigger>
              <PopoverContent>
                <p className="text-sm">Closed with Escape or an outside click.</p>
              </PopoverContent>
            </Popover>
          ),
        },
      ]}
      a11y={[
        "The content renders role=\"dialog\" with aria-labelledby only if you pass a title — always name the panel.",
        "The trigger gets aria-expanded and aria-controls while open.",
        "Escape closes and returns focus to the trigger; a click outside closes without moving focus.",
        "The panel is portalled, so it escapes overflow:hidden ancestors and keeps its own focus scope.",
        "Do not put content that must be reachable without a click here — use visible text instead.",
      ]}
      props={props}
    />
  )
}
