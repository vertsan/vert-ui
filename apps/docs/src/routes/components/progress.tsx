import { DocPage, type PropRow } from "../../components/doc-page"
import { Progress } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/progress")({
  component: ProgressPage,
})

const props: PropRow[] = [
  {
    name: "value",
    type: "number",
    description:
      "Current value clamped between 0 and max. Omit it for an indeterminate bar (no aria-valuenow).",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description: "Upper bound of the range, exposed as aria-valuemax.",
  },
  {
    name: "valueText",
    type: "string",
    description:
      "Human readable value announced instead of the raw number, e.g. \"45 of 100 uploads\".",
  },
  {
    name: "variant",
    type: '"default" | "brand" | "destructive"',
    default: '"default"',
    description: "Color of the filled portion.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Track height.",
  },
]

function ProgressPage() {
  return (
    <DocPage
      title="Progress"
      intro="Determinate and indeterminate progress bars. The indicator moves with transforms only, so it stays smooth under reduced motion and on low-power devices."
      demo={
        <div className="space-y-5">
          <Progress value={45} valueText="45 of 100 uploads" aria-label="Upload" />
          <Progress value={80} variant="brand" size="lg" aria-label="Storage used" />
          <Progress value={30} variant="destructive" size="sm" aria-label="Errors" />
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Preparing workspace…</p>
            <Progress aria-label="Preparing workspace" />
          </div>
        </div>
      }
      examples={[
        {
          title: "With a readable value",
          code: `<Progress
  value={45}
  max={100}
  valueText="45 of 100 uploads"
  aria-label="Upload"
/>`,
          render: <Progress value={45} valueText="45 of 100 uploads" aria-label="Upload" />,
        },
        {
          title: "Indeterminate while working",
          code: `{uploading && <Progress aria-label="Uploading" />}`,
          render: <Progress aria-label="Uploading" />,
        },
        {
          title: "Sizing and color",
          code: `<Progress value={80} variant="brand" size="lg" aria-label="Storage" />
<Progress value={30} variant="destructive" size="sm" aria-label="Errors" />`,
          render: (
            <div className="space-y-3">
              <Progress value={80} variant="brand" size="lg" aria-label="Storage" />
              <Progress value={30} variant="destructive" size="sm" aria-label="Errors" />
            </div>
          ),
        },
      ]}
      a11y={[
        "Renders role=\"progressbar\" with aria-valuemin, aria-valuemax and aria-valuenow.",
        "Always pass aria-label (or aria-labelledby) — a bare progress bar has no accessible name.",
        "valueText is what gets announced: prefer \"45 of 100 uploads\" over a bare number.",
        "Indeterminate bars omit aria-valuenow, which is how assistive tech recognises unknown duration.",
        "The indicator only animates transform, and the global reduced-motion override shortens it to 0.01ms.",
      ]}
    />
  )
}
