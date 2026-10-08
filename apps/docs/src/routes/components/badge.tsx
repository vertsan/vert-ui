import { DocPage, type PropRow } from "../../components/doc-page"
import { Badge } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/badge")({
  component: BadgePage,
})

const props: PropRow[] = [
  {
    name: "variant",
    type: '"default" | "secondary" | "outline" | "ghost" | "warning"',
    default: '"default"',
    description: "Visual role. warning uses the amber palette for attention states.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Padding and type scale of the pill.",
  },
  {
    name: "dot",
    type: "boolean",
    description: "Prefixes a 6px status dot that inherits the badge color.",
  },
  {
    name: "asChild",
    type: "boolean",
    description: "Render the child element instead of a <div> — for linking a badge.",
  },
  {
    name: "…native element attrs",
    type: "HTMLAttributes<HTMLElement>",
    description: "title, aria-*, data-*, …",
  },
]

function BadgePage() {
  return (
    <DocPage
      title="Badge"
      intro="Compact status label for counts, states and categories — pill-shaped with an optional status dot."
      demo={
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Badge>default</Badge>
          <Badge variant="secondary">secondary</Badge>
          <Badge variant="outline">outline</Badge>
          <Badge variant="ghost">ghost</Badge>
          <Badge variant="warning">warning</Badge>
          <Badge dot variant="secondary">
            online
          </Badge>
        </div>
      }
      examples={[
        {
          title: "Status with dot",
          code: `<Badge dot variant="secondary">Operational</Badge>
<Badge dot variant="warning">Degraded</Badge>`,
          render: (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge dot variant="secondary">
                Operational
              </Badge>
              <Badge dot variant="warning">
                Degraded
              </Badge>
              <Badge dot variant="outline">
                Offline
              </Badge>
            </div>
          ),
        },
        {
          title: "Sizes",
          code: `<Badge size="sm">sm</Badge>
<Badge size="md">md</Badge>
<Badge size="lg">lg</Badge>`,
          render: (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge size="sm">sm</Badge>
              <Badge size="md">md</Badge>
              <Badge size="lg">lg</Badge>
            </div>
          ),
        },
        {
          title: "Count badge next to a title",
          code: `<div className="flex items-center gap-2">
  <h3 className="font-semibold">Open issues</h3>
  <Badge variant="secondary">12</Badge>
</div>`,
          render: (
            <div className="flex items-center justify-center gap-2">
              <h3 className="font-semibold">Open issues</h3>
              <Badge variant="secondary">12</Badge>
            </div>
          ),
        },
      ]}
      a11y={[
        "A badge is decorative by default — if it carries meaning the control nearby does not, add readable text or an aria-label.",
        "Colour alone is insufficient: pair every status colour with a word (\"Degraded\", not just amber).",
        "The dot span is visual only; screen readers rely on the badge text beside it.",
        "Badges are not interactive — if it should be pressed, use a Button or a link with asChild.",
      ]}
      props={props}
    />
  )
}
