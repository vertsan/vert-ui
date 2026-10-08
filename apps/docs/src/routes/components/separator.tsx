import { DocPage, type PropRow } from "../../components/doc-page"
import { Button, Separator } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/separator")({
  component: SeparatorPage,
})

const props: PropRow[] = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Direction of the divider. Vertical separators stretch to their container height.",
  },
  {
    name: "decorative",
    type: "boolean",
    default: "false",
    description:
      "Marks the divider as presentational: no role and aria-hidden, for pure visual spacing.",
  },
  {
    name: "role",
    type: "string",
    description: "Override the exposed role (defaults to \"separator\" when not decorative).",
  },
  {
    name: "className",
    type: "string",
    description: "Merged last, so you can override size or color.",
  },
]

function SeparatorPage() {
  return (
    <DocPage
      title="Separator"
      intro="One-pixel divider for horizontal or vertical rhythm. Exposed to assistive technology by default, decorative on request."
      demo={
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">First row of content</p>
          <Separator />
          <p className="text-sm text-muted-foreground">Second row of content</p>
          <Separator decorative />
          <p className="text-sm text-muted-foreground">Third row (divider above is decorative)</p>
        </div>
      }
      examples={[
        {
          title: "Between toolbar controls",
          code: `<div className="flex items-center gap-3">
  <Button>Save</Button>
  <Separator orientation="vertical" decorative />
  <Button variant="outline">Cancel</Button>
</div>`,
          render: (
            <div className="flex items-center gap-3">
              <Button>Save</Button>
              <Separator orientation="vertical" className="h-6" decorative />
              <Button variant="outline">Cancel</Button>
            </div>
          ),
        },
        {
          title: "Section break inside a card",
          code: `<Card>
  <CardContent>Profile details</CardContent>
  <Separator />
  <CardContent>Billing details</CardContent>
</Card>`,
          render: (
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm">Profile details</p>
              <Separator className="my-3" />
              <p className="text-sm">Billing details</p>
            </div>
          ),
        },
      ]}
      a11y={[
        "Non-decorative separators render role=\"separator\" with the matching aria-orientation, so assistive tech can announce a boundary between regions.",
        "Decorative separators are removed from the accessibility tree (aria-hidden) — use them whenever the layout already communicates the grouping.",
        "A vertical separator inside a flex row needs a height (e.g. className=\"h-6\"); it is a layout concern the component deliberately leaves to you.",
      ]}
      props={props}
    />
  )
}
