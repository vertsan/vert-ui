import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { C as ToastDescription, E as ToastViewport, Kt as Button, S as ToastClose, T as ToastTitle, b as Toast, w as ToastProvider, x as ToastAction } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/toast-R30eorvB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "ToastProvider duration",
		type: "number",
		default: "5000",
		description: "Milliseconds before a toast auto-dismisses. Foreground toasts never auto-dismiss."
	},
	{
		name: "Toast variant",
		type: "\"default\" | \"brand\" | \"success\" | \"warning\" | \"destructive\"",
		default: "\"default\"",
		description: "Color of the card; destructive also switches to role=\"alert\"."
	},
	{
		name: "Toast open / onOpenChange",
		type: "boolean / (open: boolean) => void",
		description: "Drive toasts from your own state (recommended: keep a queue)."
	},
	{
		name: "ToastAction altText",
		type: "string",
		required: true,
		description: "Accessible name for the action button (Radix requires it)."
	},
	{
		name: "ToastViewport className",
		type: "string",
		description: "Position of the stack — fixed bottom-right by default."
	}
];
function Demo() {
	const [open, setOpen] = import_react.useState(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		onClick: () => setOpen(true),
		children: "Show toast"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToastProvider, {
		duration: 6e3,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toast, {
			open,
			onOpenChange: setOpen,
			variant: "success",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastTitle, { children: "Changes saved" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastDescription, { children: "Workspace settings updated." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastAction, {
					altText: "Undo",
					onClick: () => setOpen(false),
					children: "Undo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastClose, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastViewport, {})]
	})] });
}
function ToastPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Toast",
		intro: "Ephemeral confirmation in a corner stack. Toasts announce politely, are swipeable on touch and never block the page.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Demo, {}),
		examples: [{
			title: "Success with undo",
			code: `<ToastProvider>
  <Toast open={saved} onOpenChange={setSaved} variant="success">
    <ToastTitle>Changes saved</ToastTitle>
    <ToastDescription>Workspace settings updated.</ToastDescription>
    <ToastAction altText="Undo" onClick={undo}>Undo</ToastAction>
    <ToastClose />
  </Toast>
  <ToastViewport />
</ToastProvider>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Demo, {})
		}, {
			title: "Destructive, kept open until dismissed",
			code: `<Toast open={failed} onOpenChange={setFailed} variant="destructive">
  <ToastTitle>Deploy failed</ToastTitle>
  <ToastDescription>Build 4192 could not reach the registry.</ToastDescription>
  <ToastClose />
</Toast>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "Deploy failed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "opacity-90",
					children: "Build 4192 could not reach the registry."
				})]
			})
		}],
		a11y: [
			"Default toasts render role=\"status\" (polite); destructive ones render role=\"alert\" (assertive) because variant switches the Radix type to foreground.",
			"Foreground toasts never auto-dismiss — an error stays until the user dismisses it.",
			"Always give ToastAction an altText so the button has a name out of context.",
			"The close button is labelled \"Dismiss\"; swipe is an enhancement, never the only way out.",
			"Viewport lives at the bottom (stacked, z-100) and does not trap focus — the page keeps working."
		],
		props
	});
}
//#endregion
export { ToastPage as component };
