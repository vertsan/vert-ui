import { Badge, Button, Stack } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import type { ReactNode } from "react"
import { DocPage, type PropRow } from "../../components/doc-page"

export const Route = createFileRoute("/components/stack")({
  component: StackPage,
})

const props: PropRow[] = [
  {
    name: "direction",
    type: '"row" | "column"',
    default: '"column"',
    description: "Main axis. Column stacks vertically, row lays out horizontally.",
  },
  {
    name: "gap",
    type: "0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12",
    default: "4",
    description: "Spacing between children on the token scale (gap-*).",
  },
  {
    name: "smGap / mdGap / lgGap",
    type: "same scale",
    description: "Gap overrides from the sm, md and lg breakpoints up.",
  },
  {
    name: "align",
    type: '"start" | "center" | "end" | "stretch" | "baseline"',
    description: "Cross-axis alignment (items-*).",
  },
  {
    name: "justify",
    type: '"start" | "center" | "end" | "between" | "around" | "evenly"',
    description: "Main-axis distribution (justify-*).",
  },
  {
    name: "wrap",
    type: "boolean",
    description: "Allow children to wrap onto the next line.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Render the child element instead of a div — keeps the styles.",
  },
]

function Block({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-12 items-center justify-center rounded-lg border border-border bg-muted/60 text-sm text-muted-foreground">
      {children}
    </div>
  )
}

function StackPage() {
  return (
    <DocPage
      title="Stack"
      intro="One flexbox primitive for vertical stacks and horizontal rows, with token gaps that shift at each breakpoint."
      demo={
        <Stack gap={3} className="w-full max-w-sm">
          <Block>First</Block>
          <Block>Second</Block>
          <Block>Third</Block>
        </Stack>
      }
      examples={[
        {
          title: "Responsive row that becomes a column",
          code: `<Stack direction="column" smGap={4} mdGap={6}>
  <Block>A</Block>
  <Block>B</Block>
</Stack>`,
          render: (
            <Stack direction="row" wrap justify="center" gap={3} mdGap={6} className="w-full">
              <Block>Alpha</Block>
              <Block>Beta</Block>
              <Block>Gamma</Block>
            </Stack>
          ),
        },
        {
          title: "Form actions",
          code: `<Stack direction="row" justify="end" gap={2}>
  <Button variant="outline">Cancel</Button>
  <Button>Save</Button>
</Stack>`,
          render: (
            <Stack direction="row" justify="end" gap={2} className="w-full">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Stack>
          ),
        },
        {
          title: "Vertical metadata list",
          code: `<Stack gap={1}>
  <Badge>stable</Badge>
  <span>v0.1.0</span>
</Stack>`,
          render: (
            <Stack gap={2} align="start">
              <Badge>stable</Badge>
              <span className="text-sm text-muted-foreground">v0.1.0</span>
            </Stack>
          ),
        },
      ]}
      a11y={[
        "A plain flex container is not a landmark and adds no semantics — wrap it in the element that matches the content (ul, form, section).",
        "Because alignment and spacing come from classes, DOM order always matches reading order; visual reordering (row-reverse) is not used.",
        "Responsive gaps keep related controls close on large screens and comfortably separated on touch screens.",
      ]}
      props={props}
    />
  )
}
