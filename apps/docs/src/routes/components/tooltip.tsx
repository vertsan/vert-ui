import { DocPage, type PropRow } from "../../components/doc-page"
import { Button, Tooltip } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/tooltip")({
  component: TooltipPage,
})

const props: PropRow[] = [
  {
    name: "content",
    type: "ReactNode",
    required: true,
    description: "The bubble text. Keep it short — it is announced via aria-describedby.",
  },
  {
    name: "side",
    type: '"top" | "right" | "bottom" | "left"',
    default: '"top"',
    description: "Preferred side of the trigger; flips when it would overflow the viewport.",
  },
  {
    name: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "Alignment of the bubble along the trigger edge.",
  },
  {
    name: "sideOffset",
    type: "number",
    default: "6",
    description: "Gap in pixels between trigger and bubble.",
  },
  {
    name: "showArrow",
    type: "boolean",
    default: "true",
    description: "Draws the small pointer between trigger and bubble.",
  },
  {
    name: "open / onOpenChange",
    type: "boolean / (open: boolean) => void",
    description: "Controlled open state (forwarded to the Radix root).",
  },
  {
    name: "className",
    type: "string",
    description: "Applied to the bubble; merged last, so you can override width or padding.",
  },
]

function TooltipPage() {
  return (
    <DocPage
      title="Tooltip"
      intro="Hover and focus bubble linked to its trigger with aria-describedby. The provider is built in — pass your trigger as the child."
      demo={
        <div className="flex flex-wrap items-center gap-3">
          <Tooltip content="Keyboard shortcut: ⌘ K">
            <Button>Hover me</Button>
          </Tooltip>
          <Tooltip content="Runs on demand only" side="right">
            <Button variant="outline">Disabled next run</Button>
          </Tooltip>
        </div>
      }
      examples={[
        {
          title: "Icon button with a hidden label",
          code: `<Tooltip content="Copy link">
  <button aria-label="Copy link">
    <CopyIcon aria-hidden />
  </button>
</Tooltip>`,
          render: (
            <Tooltip content="Copy link">
              <Button variant="outline">Copy link (icon button)</Button>
            </Tooltip>
          ),
        },
        {
          title: "Placed on the bottom, no arrow",
          code: `<Tooltip content="Writes changes to the draft" side="bottom" showArrow={false}>
  <Button>Save</Button>
</Tooltip>`,
          render: (
            <Tooltip content="Writes changes to the draft" side="bottom">
              <Button>Save</Button>
            </Tooltip>
          ),
        },
      ]}
      a11y={[
        "The trigger gets aria-describedby while the bubble is open, so the description is announced with the trigger.",
        "Escape dismisses an open tooltip without moving focus.",
        "Tooltips must supplement an accessible name (visible label or aria-label), never be the only label.",
        "The bubble itself is not focusable — do not put interactive elements or essential-only information inside content.",
        "The component wraps a Radix TooltipProvider (skipDelayDuration 200ms), so hovering away and back re-opens quickly.",
      ]}
      props={props}
    />
  )
}
