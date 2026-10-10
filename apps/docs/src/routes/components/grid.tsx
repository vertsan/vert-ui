import { Badge, Card, CardContent, Grid, GridItem } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import { DocPage, type PropRow } from "../../components/doc-page"

export const Route = createFileRoute("/components/grid")({
  component: GridPage,
})

const props: PropRow[] = [
  {
    name: "columns",
    type: "1 | 2 | … | 12 | none",
    default: "1",
    description: "Base column count (grid-cols-*).",
  },
  {
    name: "smColumns / mdColumns / lgColumns / xlColumns",
    type: "1 | 2 | … | 12 | none",
    description: "Column count from each breakpoint up — the responsive core of the grid.",
  },
  {
    name: "gap",
    type: "0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12",
    default: "4",
    description: "Row and column gap on the token scale.",
  },
  {
    name: "smGap / mdGap / lgGap",
    type: "same scale",
    description: "Gap overrides from each breakpoint up.",
  },
  {
    name: "align",
    type: '"start" | "center" | "end" | "stretch" | "baseline"',
    description: "Aligns items within their grid cells.",
  },
  {
    name: "autoFit",
    type: "boolean",
    default: "false",
    description:
      "Responsive tracks that fit as many columns as possible — no breakpoints needed. Overrides the column props.",
  },
  {
    name: "minItemWidth",
    type: "string",
    default: '"16rem"',
    description: "Minimum track width for autoFit. Any CSS length.",
  },
  {
    name: "templateColumns",
    type: "string",
    description:
      "Fully custom grid-template-columns, e.g. \"minmax(0,1fr) 200px\". Overrides columns and autoFit.",
  },
  {
    name: "templateRows",
    type: "string",
    description: "Custom grid-template-rows.",
  },
  {
    name: "GridItem · colSpan",
    type: "1 | 2 | … | 12 | full | auto",
    description: "How many columns the item spans (col-span-*).",
  },
  {
    name: "GridItem · smColSpan / mdColSpan / lgColSpan / xlColSpan",
    type: "1 | 2 | … | 12 | full | auto",
    description: "Responsive span for the item.",
  },
  {
    name: "GridItem · rowSpan",
    type: "1 | 2 | … | 6 | full",
    description: "How many rows the item spans (row-span-*).",
  },
]

function Cell({ children }: { children: string }) {
  return (
    <div className="flex h-16 items-center justify-center rounded-lg border border-border bg-muted/60 text-sm text-muted-foreground">
      {children}
    </div>
  )
}

function GridPage() {
  return (
    <DocPage
      title="Grid"
      intro="A responsive CSS grid: set a base column count and add breakpoints. GridItem spans columns and rows, and never leaks props to the DOM."
      demo={
        <Grid columns={1} smColumns={2} mdColumns={3} gap={3} className="w-full">
          <Cell>1</Cell>
          <Cell>2</Cell>
          <Cell>3</Cell>
          <Cell>4</Cell>
          <Cell>5</Cell>
          <Cell>6</Cell>
        </Grid>
      }
      examples={[
        {
          title: "Card grid that reflows",
          code: `<Grid columns={1} smColumns={2} lgColumns={3} gap={4}>
  <Card>…</Card>
  <Card>…</Card>
  <Card>…</Card>
</Grid>`,
          render: (
            <Grid columns={1} smColumns={3} gap={4} className="w-full">
              {["Plan", "Build", "Ship"].map((title) => (
                <Card key={title}>
                  <CardContent className="p-4">
                    <p className="font-medium">{title}</p>
                    <p className="text-sm text-muted-foreground">One of three columns.</p>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          ),
        },
        {
          title: "Sidebar and content",
          code: `<Grid lgColumns={12} gap={6}>
  <GridItem lgColSpan={3}>Sidebar</GridItem>
  <GridItem lgColSpan={9}>Content</GridItem>
</Grid>`,
          render: (
            <Grid lgColumns={12} gap={4} className="w-full">
              <GridItem lgColSpan={3}>
                <Cell>Sidebar</Cell>
              </GridItem>
              <GridItem lgColSpan={9}>
                <Cell>Content</Cell>
              </GridItem>
            </Grid>
          ),
        },
        {
          title: "A banner spanning every column",
          code: `<Grid columns={2} mdColumns={4} gap={3}>
  <GridItem colSpan="full">Full-width banner</GridItem>
  <Cell>1</Cell>
  <Cell>2</Cell>
</Grid>`,
          render: (
            <Grid columns={2} mdColumns={4} gap={3} className="w-full">
              <GridItem colSpan="full">
                <div className="flex h-12 items-center rounded-lg border border-brand/30 bg-brand-soft px-3 text-sm text-brand-soft-foreground">
                  <Badge variant="secondary">new</Badge>
                  <span className="ml-2">Full-width banner</span>
                </div>
              </GridItem>
              <Cell>1</Cell>
              <Cell>2</Cell>
              <Cell>3</Cell>
              <Cell>4</Cell>
            </Grid>
          ),
        },
        {
          title: "Auto-fit without breakpoints",
          code: `<Grid autoFit minItemWidth="14rem" gap={4}>
  <Cell>…</Cell>
  <Cell>…</Cell>
  <Cell>…</Cell>
</Grid>`,
          render: (
            <Grid autoFit minItemWidth="10rem" gap={3} className="w-full">
              <Cell>auto</Cell>
              <Cell>fit</Cell>
              <Cell>tracks</Cell>
            </Grid>
          ),
        },
      ]}
      a11y={[
        "Grid and GridItem are structural divs: they add no landmark or role, so author the heading and list semantics of the content inside them.",
        "DOM order is the source of truth — columns wrap responsively without reordering, so focus and screen-reader order stay predictable.",
        "GridItem sets min-width: 0 so long words or code inside a cell shrink instead of forcing the whole grid wider than the viewport.",
      ]}
      props={props}
    />
  )
}
