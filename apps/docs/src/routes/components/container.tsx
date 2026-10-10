import { Container } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import { DocPage, type PropRow } from "../../components/doc-page"

export const Route = createFileRoute("/components/container")({
  component: ContainerPage,
})

const props: PropRow[] = [
  {
    name: "size",
    type: '"sm" | "md" | "lg" | "xl" | "full"',
    default: '"lg"',
    description: "Maximum content width: 3xl, 5xl, 6xl, 7xl or unbounded.",
  },
  {
    name: "padded",
    type: "boolean",
    default: "true",
    description: "Adds px-4 / sm:px-6 / lg:px-8 gutters that scale with the viewport.",
  },
  {
    name: "maxWidth",
    type: "string",
    description: "Arbitrary max-width (any CSS length). Overrides size.",
  },
  {
    name: "gutter",
    type: "string",
    description: "Arbitrary gutter (any CSS length), used instead of the padded scale.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Render the child element instead of a div — keeps the styles, defers semantics.",
  },
  {
    name: "className",
    type: "string",
    description: "Merged last, so you can override width or padding.",
  },
]

function Box({ label }: { label: string }) {
  return (
    <div className="flex h-16 items-center justify-center rounded-lg border border-border bg-muted/60 text-sm text-muted-foreground">
      {label}
    </div>
  )
}

function ContainerPage() {
  return (
    <DocPage
      title="Container"
      intro="Centres content and caps its width, with gutters that scale from phone to desktop — the outer shell for every page."
      demo={
        <div className="w-full space-y-3">
          <Container size="sm" className="border border-dashed border-brand/40">
            <Box label="sm · max-w-3xl" />
          </Container>
          <Container size="xl" className="border border-dashed border-brand/40">
            <Box label="xl · max-w-7xl" />
          </Container>
        </div>
      }
      examples={[
        {
          title: "Default page shell",
          code: `<Container>
  <h1>Page title</h1>
  <p>Centred, capped at 6xl with responsive gutters.</p>
</Container>`,
          render: (
            <Container className="border border-dashed border-brand/40">
              <Box label="default · max-w-6xl" />
            </Container>
          ),
        },
        {
          title: "Full-bleed with inner padding",
          code: `<Container size="full" className="bg-muted/40">
  <Container>Inner content stays readable</Container>
</Container>`,
          render: (
            <Container size="full" className="rounded-lg bg-muted/40">
              <Container>
                <Box label="nested containers" />
              </Container>
            </Container>
          ),
        },
      ]}
      a11y={[
        "Purely presentational: a div by default and a child element via asChild, so you choose the landmark (main, section, nav) that fits the content.",
        "Gutters keep content clear of the viewport edge at every width, which reduces horizontal scrolling and cramped touch targets on phones.",
        "No fixed heights — the container grows with its content and never causes layout shift.",
      ]}
      props={props}
    />
  )
}
