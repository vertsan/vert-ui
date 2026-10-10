import { Card, CardContent, Split } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import { DocPage, type PropRow } from "../../components/doc-page"

export const Route = createFileRoute("/components/split")({
  component: SplitPage,
})

const props: PropRow[] = [
  {
    name: "templateColumns",
    type: "string",
    default: '"1fr 1fr"',
    description:
      "Grid template applied once the layout is wide enough, e.g. \"1fr 2fr\" or \"minmax(0,320px) minmax(0,1fr)\".",
  },
  {
    name: "collapse",
    type: '"none" | "sm" | "md" | "lg"',
    default: '"md"',
    description: "Breakpoint at which the regions sit side by side. Below it they stack.",
  },
  {
    name: "gap",
    type: "0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12",
    default: "6",
    description: "Gap between the regions.",
  },
  {
    name: "align",
    type: '"start" | "center" | "end" | "stretch"',
    default: '"stretch"',
    description: "Cross-axis alignment of the regions.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Render the child element instead of a div.",
  },
]

function Panel({ title, body }: { title: string; body: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  )
}

function SplitPage() {
  return (
    <DocPage
      title="Split"
      intro="A two-region layout that stacks on small screens and splits into columns once there is room. Fully customisable through a grid template."
      demo={
        <Split templateColumns="1fr 1.5fr" gap={4} className="w-full">
          <Panel title="Aside" body="Stacks below on mobile." />
          <Panel title="Main" body="Takes the wider column on desktop." />
        </Split>
      }
      examples={[
        {
          title: "Sidebar and content",
          code: `<Split templateColumns="minmax(0,16rem) minmax(0,1fr)" collapse="lg">
  <nav>…</nav>
  <main>…</main>
</Split>`,
          render: (
            <Split
              templateColumns="minmax(0,12rem) minmax(0,1fr)"
              collapse="lg"
              gap={4}
              className="w-full"
            >
              <Panel title="Nav" body="minmax(0,12rem)" />
              <Panel title="Content" body="minmax(0,1fr)" />
            </Split>
          ),
        },
        {
          title: "Equal halves from the small breakpoint",
          code: `<Split collapse="sm" templateColumns="1fr 1fr">…</Split>`,
          render: (
            <Split collapse="sm" templateColumns="1fr 1fr" gap={4} className="w-full">
              <Panel title="Left" body="Splits at sm." />
              <Panel title="Right" body="Splits at sm." />
            </Split>
          ),
        },
      ]}
      a11y={[
        "Regions stay in DOM order at every breakpoint, so the stacked mobile layout matches the desktop reading order.",
        "minmax(0, …) tracks let long content shrink instead of overflowing — important for code blocks and URLs at 320px.",
        "The template is applied at a media query, not reordered with flex, so focus order and screen-reader order never diverge.",
      ]}
      props={props}
    />
  )
}
