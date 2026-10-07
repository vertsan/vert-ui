import { DocPage, type PropRow } from "../../components/doc-page"
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/tooltip")({
  component: TooltipPage,
})

const props: PropRow[] = [
  {
    name: "TooltipProvider delayDuration",
    type: "number",
    default: "700",
    description: "Milliseconds of hover before the tooltip opens. Focus always opens it immediately.",
  },
  {
    name: "Tooltip side",
    type: '"top" | "right" | "bottom" | "left"',
    default: '"top"',
    description: "Preferred side of the trigger; flips when it would overflow the viewport.",
  },
  {
    name: "Tooltip align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "Alignment of the bubble along the trigger edge.",
  },
  {
    name: "Tooltip sideOffset",
    type: "number",
    default: "6",
    description: "Gap in pixels between trigger and bubble.",
  },
  {
    name: "Tooltip open / onOpenChange",
    type: "boolean / (open: boolean) => void",
    description: "Controlled open state for custom triggers.",
  },
  {
    name: "TooltipContent className",
    type: "string",
    description: "Merged last — override width, padding or colors.",
  },
]

function TooltipPage() {
  return (
    <DocPage
      title="Tooltip"
      intro="Hover and focus bubble linked to its trigger with aria-describedby. Tooltips supplement a label; they never replace one."
      demo={
        <TooltipProvider>
          <div className="flex flex-wrap items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>Keyboard shortcut: ⌘ K</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Disabled next run</Button>
              </TooltipTrigger>
              <TooltipContent side="right">Runs on demand only</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      }
      examples={[
        {
          title: "Icon button with a hidden label",
          code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <button aria-label="Copy link">
        <CopyIcon aria-hidden />
      </button>
    </TooltipTrigger>
    <TooltipContent>Copy link</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
          render: (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Copy link (icon button)</Button>
                </TooltipTrigger>
                <TooltipContent>Copy link</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ),
        },
        {
          title: "Placed on the bottom",
          code: `<Tooltip>
  <TooltipTrigger asChild><Button>Save</Button></TooltipTrigger>
  <TooltipContent side="bottom">Writes changes to the draft</TooltipContent>
</Tooltip>`,
          render: (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>Save</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Writes changes to the draft</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ),
        },
      ]}
      a11y={[
        "The bubble is linked with aria-describedby, so the description is announced when the trigger receives focus.",
        "Escape dismisses an open tooltip without moving focus.",
        "Tooltips must supplement an accessible name (visible label or aria-label), never be the only label.",
        "The content wrapper is aria-hidden — put text in TooltipContent so it becomes the description.",
        "Do not put interactive elements inside a tooltip: it disappears on blur and is unreachable by keyboard.",
      ]}
    />
  )
}
