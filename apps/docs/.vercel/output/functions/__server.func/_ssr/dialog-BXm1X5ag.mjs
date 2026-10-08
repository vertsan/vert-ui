import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { Kt as Button, at as DialogHeader, it as DialogFooter, nt as DialogContent, ot as DialogTitle, rt as DialogDescription, st as DialogTrigger, tt as Dialog } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dialog-BXm1X5ag.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "Dialog modal",
		type: "boolean",
		default: "true",
		description: "Blocks outside interaction, locks scroll and sets aria-modal=\"true\" on the content."
	},
	{
		name: "Dialog open / onOpenChange",
		type: "boolean / (open: boolean) => void",
		description: "Controlled open state."
	},
	{
		name: "DialogContent hideClose",
		type: "boolean",
		default: "false",
		description: "Removes the built-in close button when you render your own."
	},
	{
		name: "DialogContent className",
		type: "string",
		description: "Merged last — override width, padding or alignment."
	},
	{
		name: "DialogTitle (required)",
		type: "ReactNode",
		description: "Accessible name of the dialog. Always render one."
	},
	{
		name: "DialogDescription",
		type: "ReactNode",
		description: "Accessible description; announced after the title."
	},
	{
		name: "DialogTrigger asChild",
		type: "boolean",
		description: "Uses your own element as the opener (Radix Slot)."
	}
];
function DialogPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Dialog",
		intro: "Modal surface with focus trap, scroll lock and labelling. Escape closes it and focus returns to the opener.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Open dialog" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Rename workspace" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "This changes the name shown to everyone in the workspace." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "space-y-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Workspace name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring",
					defaultValue: "Acme Inc"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				children: "Cancel"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Save changes" })] })
		] })] }),
		examples: [{
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
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "destructive",
					children: "Delete project"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Delete project?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "This cannot be undone." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				children: "Cancel"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "destructive",
				children: "Delete"
			})] })] })] })
		}, {
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
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				modal: false,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						children: "Details"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					hideClose: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Inspect the record." })] })
				})]
			})
		}],
		a11y: [
			"Content renders role=\"dialog\" with aria-modal=\"true\" (modal dialogs), aria-labelledby (title) and aria-describedby (description).",
			"DialogTitle is required by design: a dialog without a name is unusable with a screen reader.",
			"Focus moves into the dialog on open, is trapped while open, and returns to the trigger on close.",
			"Escape closes the dialog; the built-in close button carries aria-label=\"Close\".",
			"Modal dialogs lock body scroll; non-modal ones (modal={false}) leave the page scrollable.",
			"Keep the tab order shallow — the first focusable control should be the primary action."
		],
		props
	});
}
//#endregion
export { DialogPage as component };
