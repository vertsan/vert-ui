import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { Kt as Button, _ as CommandList, d as Command, f as CommandDialog, g as CommandItem, h as CommandInput, m as CommandGroup, p as CommandEmpty, v as CommandSeparator, y as CommandShortcut } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/command-HbfclmTL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "Command value / onValueChange",
		type: "string / (value: string) => void",
		description: "Controlled filter value of the palette."
	},
	{
		name: "Command loop",
		type: "boolean",
		default: "false",
		description: "Wraps arrow-key navigation from the last item to the first."
	},
	{
		name: "CommandInput placeholder",
		type: "string",
		description: "Hint shown while the query is empty."
	},
	{
		name: "CommandItem onSelect / value / disabled",
		type: "(value: string) => void / string / boolean",
		description: "Each row is selectable with the keyboard; value feeds the filter and onSelect fires on activation."
	},
	{
		name: "CommandGroup heading",
		type: "string",
		description: "Label rendered above a group of items."
	},
	{
		name: "CommandDialog open / onOpenChange",
		type: "boolean / (open: boolean) => void",
		description: "Controlled dialog state — open it from a ⌘K key handler."
	},
	{
		name: "CommandDialog title",
		type: "string",
		default: "\"Command menu\"",
		description: "Visually hidden accessible name of the dialog."
	}
];
function CommandPage() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Command",
		intro: "Filterable command palette with grouped results, keyboard navigation and an empty state. CommandDialog wraps it in a modal shell so you can bind it to ⌘K.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: () => setOpen(true),
			children: ["Open palette", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
				className: "ml-2 rounded border border-current/30 px-1.5 py-0.5 font-mono text-[10px]",
				children: "⌘K"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandDialog, {
			open,
			onOpenChange: setOpen,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, { placeholder: "Type a command or search…" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: "No results found." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandGroup, {
					heading: "Actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
						onSelect: () => setOpen(false),
						children: ["Create new file", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandShortcut, { children: "⌘N" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
						onSelect: () => setOpen(false),
						children: ["Invite teammate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandShortcut, { children: "⌘I" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandGroup, {
					heading: "Navigate",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandItem, {
						onSelect: () => setOpen(false),
						children: "Dashboard"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandItem, {
						onSelect: () => setOpen(false),
						children: "Projects"
					})]
				})
			] })]
		})] }),
		examples: [{
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
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Command, {
				className: "max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, { placeholder: "Search projects…" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: "No projects found." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandGroup, {
						heading: "Recent",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandItem, { children: "Website redesign" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandItem, { children: "Mobile app" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandItem, { children: "Design system" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandSeparator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, {
						heading: "Shortcut",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, { children: ["Toggle theme", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandShortcut, { children: "⌘T" })] })
					})
				] })]
			})
		}, {
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
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"Bind a document-level key handler and let",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
						className: "font-mono text-xs",
						children: "CommandDialog"
					}),
					" own the open state. The dialog already moves focus into the input and restores it on close."
				]
			})
		}],
		a11y: [
			"The palette renders inside a modal dialog: focus is trapped while open, Escape closes it and focus returns to the opener.",
			"CommandDialog supplies a visually hidden DialogTitle, so the dialog always has an accessible name.",
			"The selected item is exposed by cmdk through aria-selected; the list uses aria-activedescendant so arrow keys never move DOM focus out of the input.",
			"The input is a real <input> — screen readers announce it as an edit field and IME input works.",
			"Groups have visible headings; keep them short so the structure is clear when navigated by heading.",
			"Provide a CommandEmpty state so zero results are announced instead of an empty list appearing."
		],
		props
	});
}
//#endregion
export { CommandPage as component };
