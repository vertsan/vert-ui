import { Center, Card, CardContent } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import { DocPage, type PropRow } from "../../components/doc-page"

export const Route = createFileRoute("/components/center")({
  component: CenterPage,
})

const props: PropRow[] = [
  {
    name: "axis",
    type: '"both" | "horizontal" | "vertical"',
    default: '"both"',
    description: "Which axes to centre on. Horizontal keeps the natural height.",
  },
  {
    name: "maxWidth",
    type: "string",
    description: "Caps the content measure — a comfortable line length. Any CSS length.",
  },
  {
    name: "padded",
    type: "boolean",
    default: "false",
    description: "Adds responsive horizontal gutters so edge content never touches the viewport.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Render the child element instead of a div.",
  },
]

function CenterPage() {
  return (
    <DocPage
      title="Center"
      intro="Centres a block on one or both axes. Add a max-width to keep prose at a readable measure."
      demo={
        <Center className="h-40 w-full rounded-lg border border-dashed border-brand/40">
          <Card>
            <CardContent className="p-6 text-sm">Centred on both axes</CardContent>
          </Card>
        </Center>
      }
      examples={[
        {
          title: "Readable prose column",
          code: `<Center maxWidth="46rem" padded>
  <p>Long-form copy stays centred and readable…</p>
</Center>`,
          render: (
            <Center maxWidth="100%" padded className="w-full rounded-lg bg-muted/40">
              <p className="py-6 text-center text-sm text-muted-foreground">
                Centred, measured prose.
              </p>
            </Center>
          ),
        },
        {
          title: "Horizontal centring only",
          code: `<Center axis="horizontal">
  <Button>Saved</Button>
</Center>`,
          render: (
            <Center axis="horizontal" className="w-full rounded-lg border border-dashed border-brand/40 py-4">
              <span className="rounded-md bg-brand-soft px-3 py-1 text-sm text-brand-soft-foreground">
                axis="horizontal"
              </span>
            </Center>
          ),
        },
      ]}
      a11y={[
        "Purely presentational flex container; choose a meaningful element with asChild (main, figure, section) rather than relying on it for structure.",
        "A max-width measure keeps line length in the 45–75 character range, which aids readers with low vision or dyslexia.",
        "padded keeps centred content from touching the viewport edge down to 320px.",
      ]}
      props={props}
    />
  )
}
