import { DocPage, type PropRow } from "../../components/doc-page"
import {
  Button,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"

export const Route = createFileRoute("/components/command")({
  component: CommandPage,
})

const props: PropRow[] = [
  {
    name: "Command value / onValueChange",
    type: "string / (value: string) => void",
    description: "Controlled filter value of the palette.",
  },
  {
    name: "Command loop",
    type: "boolean",
    default: "false",
    description: "Wraps arrow-key navigation from the last item to the first.",
  },
  {
    name: "CommandInput placeholder",
    type: "string",
    description: "Hint shown while the query is empty.",
  },
  {
    name: "CommandItem onSelect / value / disabled",
    type: "(value: string) => void / string / boolean",
    description:
      "Each row is selectable with the keyboard; value feeds the filter and onSelect fires on activation.",
  },
  {
    name: "CommandGroup heading",
    type: "string",
    description: "Label rendered above a group of items.",
  },
  {
    name: "CommandDialog open / onOpenChange",
    type: "boolean / (open: boolean) => void",
    description: "Controlled dialog state — open it from a ⌘K key handler.",
  },
  {
    name: "CommandDialog title",
    type: "string",
    default: '"Command menu"',
    description: "Visually hidden accessible name of the dialog.",
  },
]

function CommandPage() {
  const [open, setOpen] = useState(false)

  return (
    <DocPage
      title="Command"
      intro="Filterable command palette with grouped results, keyboard navigation and an empty state. CommandDialog wraps it in a modal shell so you can bind it to ⌘K."
      demo={
        <>
          <Button onClick={() => setOpen(true)}>
            Open palette
            <kbd className="ml-2 rounded border border-current/30 px-1.5 py-0.5 font-mono text-[10px]">
              ⌘K
            </kbd>
          </Button>
          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search…" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Actions">
                <CommandItem onSelect={() => setOpen(false)}>
                  Create new file
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  Invite teammate
                  <CommandShortcut>⌘I</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Navigate">
                <CommandItem onSelect={() => setOpen(false)}>Dashboard</CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>Projects</CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </>
      }
      examples={[
        {
          title: "Inline palette",
          code: `<Command>
  <CommandInput placeholder="Search projects…" />
  <CommandList>
    <CommandEmpty>No projects found.</CommandEmpty>
    <CommandGroup heading="Recent">
      {projects.map((project) => (
        <CommandItem key={project.id} value={project.name} onSelect={openProject}>
          {project.name}
        </CommandItem>
      ))}
    </CommandGroup>
  </CommandList>
</Command>`,
          render: (
            <Command className="max-w-md">
              <CommandInput placeholder="Search projects…" />
              <CommandList>
                <CommandEmpty>No projects found.</CommandEmpty>
                <CommandGroup heading="Recent">
                  <CommandItem>Website redesign</CommandItem>
                  <CommandItem>Mobile app</CommandItem>
                  <CommandItem>Design system</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Shortcut">
                  <CommandItem>
                    Toggle theme
                    <CommandShortcut>⌘T</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          ),
        },
        {
          title: "Wire up ⌘K",
          code: `const [open, setOpen] = useState(false)

useEffect(() => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener("keydown", onKeyDown)
  return () => document.removeEventListener("keydown", onKeyDown)
}, [])

return (
  <CommandDialog open={open} onOpenChange={setOpen}>
    <CommandInput placeholder="Type a command…" />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Actions">
        <CommandItem onSelect={runAction}>Save file</CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
)`,
          render: (
            <p className="text-sm text-muted-foreground">
              Bind a document-level key handler and let{" "}
              <code className="font-mono text-xs">CommandDialog</code> own the open state.
              The dialog already moves focus into the input and restores it on close.
            </p>
          ),
        },
      ]}
      a11y={[
        "The palette renders inside a modal dialog: focus is trapped while open, Escape closes it and focus returns to the opener.",
        "CommandDialog supplies a visually hidden DialogTitle, so the dialog always has an accessible name.",
        "The selected item is exposed by cmdk through aria-selected; the list uses aria-activedescendant so arrow keys never move DOM focus out of the input.",
        "The input is a real <input> — screen readers announce it as an edit field and IME input works.",
        "Groups have visible headings; keep them short so the structure is clear when navigated by heading.",
        "Provide a CommandEmpty state so zero results are announced instead of an empty list appearing.",
      ]}
      props={props}
    />
  )
}
