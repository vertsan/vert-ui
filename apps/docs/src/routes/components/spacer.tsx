import { Button, Spacer, Stack } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import { DocPage, type PropRow } from "../../components/doc-page"

export const Route = createFileRoute("/components/spacer")({
  component: SpacerPage,
})

const props: PropRow[] = [
  {
    name: "grow",
    type: "boolean",
    default: "true",
    description: "Grows to fill the free space (flex-1). Ignored when size is set.",
  },
  {
    name: "size",
    type: "0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16",
    description: "Fixed gap on the token scale. Takes precedence over grow.",
  },
  {
    name: "axis",
    type: '"horizontal" | "vertical" | "both"',
    default: '"both"',
    description: "Which dimension the fixed size controls.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Render the child element instead of a div.",
  },
]

function SpacerPage() {
  return (
    <DocPage
      title="Spacer"
      intro="Pushes siblings apart inside a flex or grid layout — either a flexible filler or a fixed gap. Always hidden from assistive tech."
      demo={
        <Stack direction="row" gap={3} className="w-full rounded-lg border border-border p-3">
          <Button variant="outline">Left</Button>
          <Spacer />
          <Button>Right</Button>
        </Stack>
      }
      examples={[
        {
          title: "Flexible gap between groups",
          code: `<Stack direction="row">
  <span>Products</span>
  <Spacer />
  <span>About</span>
</Stack>`,
          render: (
            <Stack direction="row" gap={2} className="w-full rounded-lg bg-muted/40 px-3 py-2 text-sm">
              <span>Products</span>
              <Spacer />
              <span>About</span>
            </Stack>
          ),
        },
        {
          title: "Fixed gap",
          code: `<Stack direction="row" gap={2}>
  <Button>Save</Button>
  <Spacer size={4} axis="horizontal" />
  <Button variant="outline">Cancel</Button>
</Stack>`,
          render: (
            <Stack direction="row" gap={2}>
              <Button>Save</Button>
              <Spacer size={4} axis="horizontal" />
              <Button variant="outline">Cancel</Button>
            </Stack>
          ),
        },
      ]}
      a11y={[
        "Rendered with aria-hidden=\"true\": it is a pure layout device and never announced by screen readers.",
        "The element carries no content and no focus, so it cannot be tabbed to.",
        "Prefer the gap prop on Stack/Cluster when the spacing is uniform — a Spacer is for asymmetric spacing.",
      ]}
      props={props}
    />
  )
}
