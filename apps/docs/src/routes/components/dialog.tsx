import { DocPage, type PropRow } from "../../components/doc-page"
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/dialog")({
  component: DialogPage,
})

const props: PropRow[] = [
  {
    name: "Dialog modal",
    type: "boolean",
    default: "true",
    description:
      "Blocks outside interaction, locks scroll and sets aria-modal=\"true\" on the content.",
  },
  {
    name: "Dialog open / onOpenChange",
    type: "boolean / (open: boolean) => void",
    description: "Controlled open state.",
  },
  {
    name: "DialogContent hideClose",
    type: "boolean",
    default: "false",
    description: "Removes the built-in close button when you render your own.",
  },
  {
    name: "DialogContent className",
    type: "string",
    description: "Merged last — override width, padding or alignment.",
  },
  {
    name: "DialogTitle (required)",
    type: "ReactNode",
    description: "Accessible name of the dialog. Always render one.",
  },
  {
    name: "DialogDescription",
    type: "ReactNode",
    description: "Accessible description; announced after the title.",
  },
  {
    name: "DialogTrigger asChild",
    type: "boolean",
    description: "Uses your own element as the opener (Radix Slot).",
  },
]

function DialogPage() {
  return (
    <DocPage
      title="Dialog"
      intro="Modal surface with focus trap, scroll lock and labelling. Escape closes it and focus returns to the opener."
      demo={
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Rename workspace</DialogTitle>
              <DialogDescription>
                This changes the name shown to everyone in the workspace.
              </DialogDescription>
            </DialogHeader>
            <label className="space-y-2 text-sm">
              <span>Workspace name</span>
              <input
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                defaultValue="Acme Inc"
              />
            </label>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      }
      examples={[
        {
          title: "Confirmation dialog",
          code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete project</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete project?</DialogTitle>
      <DialogDescription>This cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
          render: (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete project</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete project?</DialogTitle>
                  <DialogDescription>This cannot be undone.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Delete</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ),
        },
        {
          title: "Non-modal, custom close",
          code: `<Dialog modal={false}>
  <DialogTrigger asChild>
    <Button variant="outline">Details</Button>
  </DialogTrigger>
  <DialogContent hideClose>
    <DialogHeader>
      <DialogTitle>Details</DialogTitle>
      <DialogDescription>Inspect the record.</DialogDescription>
    </DialogHeader>
    <Button variant="ghost" onClick={close}>Close</Button>
  </DialogContent>
</Dialog>`,
          render: (
            <Dialog modal={false}>
              <DialogTrigger asChild>
                <Button variant="outline">Details</Button>
              </DialogTrigger>
              <DialogContent hideClose>
                <DialogHeader>
                  <DialogTitle>Details</DialogTitle>
                  <DialogDescription>Inspect the record.</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ),
        },
      ]}
      a11y={[
        "Content renders role=\"dialog\" with aria-modal=\"true\" (modal dialogs), aria-labelledby (title) and aria-describedby (description).",
        "DialogTitle is required by design: a dialog without a name is unusable with a screen reader.",
        "Focus moves into the dialog on open, is trapped while open, and returns to the trigger on close.",
        "Escape closes the dialog; the built-in close button carries aria-label=\"Close\".",
        "Modal dialogs lock body scroll; non-modal ones (modal={false}) leave the page scrollable.",
        "Keep the tab order shallow — the first focusable control should be the primary action.",
      ]}
      props={props}
    />
  )
}
