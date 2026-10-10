import { Badge, Container, Section } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import { DocPage, type PropRow } from "../../components/doc-page"

export const Route = createFileRoute("/components/section")({
  component: SectionDocPage,
})

const props: PropRow[] = [
  {
    name: "size",
    type: '"sm" | "md" | "lg" | "xl" | "none"',
    default: '"md"',
    description: "Vertical rhythm: responsive padding on the top and bottom.",
  },
  {
    name: "space",
    type: "string",
    description: "Arbitrary vertical padding (any CSS length). Overrides size.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Render the child element instead of a section.",
  },
  {
    name: "className",
    type: "string",
    description: "Merged last, so you can override padding or add a background.",
  },
]

function Band({ label, tone }: { label: string; tone: string }) {
  return (
    <Section size="sm" className={tone}>
      <Container>
        <Badge variant="secondary">{label}</Badge>
      </Container>
    </Section>
  )
}

function SectionDocPage() {
  return (
    <DocPage
      title="Section"
      intro="A page section with consistent vertical spacing. Pair it with Container for full-width bands that keep their content aligned."
      demo={
        <div className="w-full overflow-hidden rounded-lg border border-border">
          <Band label="Hero band" tone="bg-muted/60" />
          <Band label="Features band" tone="bg-brand-soft" />
          <Band label="Footer band" tone="bg-muted/60" />
        </div>
      }
      examples={[
        {
          title: "Alternating full-width bands",
          code: `<Section className="bg-muted/40">
  <Container>…</Container>
</Section>
<Section className="bg-brand-soft">
  <Container>…</Container>
</Section>`,
          render: (
            <div className="w-full overflow-hidden rounded-lg border border-border">
              <Section size="sm" className="bg-muted/40">
                <Container>First band</Container>
              </Section>
              <Section size="sm" className="bg-brand-soft">
                <Container>Second band</Container>
              </Section>
            </div>
          ),
        },
        {
          title: "Custom spacing",
          code: `<Section space="4.5rem">Content</Section>`,
          render: (
            <Section space="4.5rem" className="w-full rounded-lg border border-dashed border-brand/40 text-center text-sm text-muted-foreground">
              space="4.5rem"
            </Section>
          ),
        },
      ]}
      a11y={[
        "Renders a <section> so it can be named by a heading — give the section a heading and, when there is more than one, an aria-labelledby pointing at it.",
        "Vertical spacing only: no horizontal gutters, so pair it with Container to keep content aligned and clear of the viewport edges.",
        "Use asChild to swap in <article>, <footer> or <aside> when that landmark is more accurate.",
      ]}
      props={props}
    />
  )
}
