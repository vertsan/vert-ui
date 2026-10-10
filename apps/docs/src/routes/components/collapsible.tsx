import { DocPage, type PropRow } from "../../components/doc-page"
import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/collapsible")({
  component: CollapsiblePage,
})

const props: PropRow[] = [
  {
    name: "open / defaultOpen",
    type: "boolean",
    default: "false",
    description: "Controlled or uncontrolled expanded state.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Fires when the trigger toggles the region.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Blocks the trigger.",
  },
  {
    name: "CollapsibleTrigger",
    type: "ReactNode",
    description: "The control that toggles the region; gets aria-expanded automatically.",
  },
  {
    name: "CollapsibleContent",
    type: "ReactNode",
    description: "The region itself; unmounted while collapsed.",
  },
]

function CollapsiblePage() {
  return (
    <DocPage
      title="Collapsible"
      intro="Single disclosure region. The content is removed from the DOM while collapsed, so hidden details are never tabbable."
      demo={
        <Collapsible className="max-w-sm space-y-3">
          <CollapsibleTrigger asChild>
            <Button variant="outline">Shipping details</Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-lg border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
            Ships in 2–3 business days. Free returns within 30 days to the original payment
            method.
          </CollapsibleContent>
        </Collapsible>
      }
      examples={[
        {
          title: "Disclosure with a chevron",
          code: `<Collapsible>
  <CollapsibleTrigger asChild>
    <button className="flex items-center gap-2 text-sm font-medium">
      Advanced settings
      <ChevronDown aria-hidden />
    </button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <AdvancedSettingsForm />
  </CollapsibleContent>
</Collapsible>`,
          render: (
            <Collapsible className="max-w-sm">
              <CollapsibleTrigger asChild>
                <Button variant="ghost">Advanced settings</Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="text-sm text-muted-foreground">
                Timeout, retries and webhook configuration live here.
              </CollapsibleContent>
            </Collapsible>
          ),
        },
        {
          title: "Controlled",
          code: `const [open, setOpen] = useState(false)

<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger>{open ? "Hide" : "Show"} rows</CollapsibleTrigger>
  <CollapsibleContent>…</CollapsibleContent>
</Collapsible>`,
          render: (
            <Collapsible defaultOpen>
              <CollapsibleTrigger asChild>
                <Button variant="outline">Rows visible</Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="text-sm text-muted-foreground">
                Open by default via defaultOpen.
              </CollapsibleContent>
            </Collapsible>
          ),
        },
      ]}
      a11y={[
        "The trigger renders aria-expanded and controls the region via aria-controls.",
        "Collapsed content is unmounted, so focus order never contains invisible items.",
        "The region reveals with a height + opacity animation driven by Radix's --radix-collapsible-content-height; prefers-reduced-motion collapses it to instant.",
        "A button-like trigger is required — do not use a bare div; CollapsibleTrigger accepts asChild for that reason.",
      ]}
      props={props}
    />
  )
}
