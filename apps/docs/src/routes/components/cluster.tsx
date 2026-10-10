import { Badge, Button, Cluster } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import { DocPage, type PropRow } from "../../components/doc-page"

export const Route = createFileRoute("/components/cluster")({
  component: ClusterPage,
})

const props: PropRow[] = [
  {
    name: "gap",
    type: "0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12",
    default: "2",
    description: "Spacing between items on the token scale.",
  },
  {
    name: "smGap / mdGap / lgGap",
    type: "same scale",
    description: "Gap overrides from each breakpoint up.",
  },
  {
    name: "align",
    type: '"start" | "center" | "end" | "baseline" | "stretch"',
    default: '"center"',
    description: "Cross-axis alignment of the items.",
  },
  {
    name: "justify",
    type: '"start" | "center" | "end" | "between" | "around" | "evenly"',
    default: '"start"',
    description: "Main-axis distribution of the items.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Render the child element instead of a div — keeps the styles.",
  },
]

function ClusterPage() {
  return (
    <DocPage
      title="Cluster"
      intro="A wrapping inline group: rows of tags, toolbars and button sets that flow onto new lines instead of overflowing."
      demo={
        <Cluster gap={2} className="w-full max-w-md">
          {["design", "engineering", "research", "content", "growth", "ops"].map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </Cluster>
      }
      examples={[
        {
          title: "Toolbar",
          code: `<Cluster justify="between" gap={3}>
  <Cluster gap={2}>
    <Button variant="outline">Undo</Button>
    <Button variant="outline">Redo</Button>
  </Cluster>
  <Button>Publish</Button>
</Cluster>`,
          render: (
            <Cluster justify="between" gap={3} className="w-full">
              <Cluster gap={2}>
                <Button variant="outline" size="sm">
                  Undo
                </Button>
                <Button variant="outline" size="sm">
                  Redo
                </Button>
              </Cluster>
              <Button size="sm">Publish</Button>
            </Cluster>
          ),
        },
        {
          title: "Centred action row",
          code: `<Cluster justify="center" gap={2}>
  <Button>Save</Button>
  <Button variant="outline">Cancel</Button>
</Cluster>`,
          render: (
            <Cluster justify="center" gap={2} className="w-full">
              <Button>Save</Button>
              <Button variant="outline">Cancel</Button>
            </Cluster>
          ),
        },
      ]}
      a11y={[
        "Items remain in DOM order and every item keeps its own focusability — wrapping never hides or reorders a control.",
        "Aligned to the cross-axis centre by default so mixed-height items (badges next to buttons) stay optically balanced.",
        "Gaps scale with the token system, keeping wrapped rows legible without manual margins.",
      ]}
      props={props}
    />
  )
}
