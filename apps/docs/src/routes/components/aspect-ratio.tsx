import { AspectRatio } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import { DocPage, type PropRow } from "../../components/doc-page"

export const Route = createFileRoute("/components/aspect-ratio")({
  component: AspectRatioPage,
})

const props: PropRow[] = [
  {
    name: "ratio",
    type: "number",
    default: "1",
    description: "Width divided by height, e.g. 16 / 9 or 4 / 3.",
  },
  {
    name: "fill",
    type: "boolean",
    default: "false",
    description: "Makes direct children (img, video, overlays) absolutely fill the box.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Render the child element instead of a div.",
  },
  {
    name: "className",
    type: "string",
    description: "Merged last, so you can add rounding or a background.",
  },
]

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex size-full items-center justify-center bg-brand-soft text-sm text-brand-soft-foreground">
      {label}
    </div>
  )
}

function AspectRatioPage() {
  return (
    <DocPage
      title="Aspect Ratio"
      intro="Locks a box to a width-to-height ratio so media reserves its space and the page never shifts while it loads."
      demo={
        <div className="grid w-full grid-cols-2 gap-3">
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg border border-border">
            <Placeholder label="16 / 9" />
          </AspectRatio>
          <AspectRatio ratio={1} className="overflow-hidden rounded-lg border border-border">
            <Placeholder label="1 / 1" />
          </AspectRatio>
        </div>
      }
      examples={[
        {
          title: "Responsive video",
          code: `<AspectRatio ratio={16 / 9} fill className="rounded-lg">
  <iframe src="…" title="…" />
</AspectRatio>`,
          render: (
            <AspectRatio ratio={16 / 9} fill className="w-full overflow-hidden rounded-lg border border-border">
              <Placeholder label="Media reserves its space" />
            </AspectRatio>
          ),
        },
        {
          title: "Square avatar tile",
          code: `<AspectRatio ratio={1} className="rounded-lg">
  <img src="…" alt="…" className="size-full object-cover" />
</AspectRatio>`,
          render: (
            <AspectRatio ratio={1} className="w-40 overflow-hidden rounded-lg border border-border">
              <Placeholder label="1 / 1" />
            </AspectRatio>
          ),
        },
      ]}
      a11y={[
        "Reserving the ratio up front prevents cumulative layout shift, which is critical for users of screen magnifiers or switch access.",
        "The ratio is a presentation detail: keep meaningful media accessible — always provide alt text on images and a title on iframes.",
        "content is clipped (overflow-hidden), so never place focusable controls that could be cut off outside the visible area.",
      ]}
      props={props}
    />
  )
}
