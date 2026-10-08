import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { Ft as AlertTitle, Nt as Alert, Pt as AlertDescription } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/alert-2xWseKSb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DismissibleAlert() {
	const [open, setOpen] = (0, import_react.useState)(true);
	if (!open) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => setOpen(true),
		className: "rounded-md border border-border bg-card px-3 py-1.5 text-sm outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring",
		children: "Show alert again"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
		variant: "info",
		onDismiss: () => setOpen(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: "Invitation pending" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: "alex@acme.com has not accepted yet." })]
	});
}
var props = [
	{
		name: "variant",
		type: "\"default\" | \"brand\" | \"info\" | \"success\" | \"warning\" | \"destructive\"",
		default: "\"default\"",
		description: "Status color of the block. Each variant pairs a soft surface with its text color."
	},
	{
		name: "size",
		type: "\"sm\" | \"md\" | \"lg\"",
		default: "\"md\"",
		description: "Padding and type scale of the block."
	},
	{
		name: "icon",
		type: "ReactNode",
		description: "Leading visual. Rendered inside an aria-hidden wrapper."
	},
	{
		name: "role",
		type: "string",
		description: "Set role=\"alert\" for messages that appear after an action so screen readers announce them."
	},
	{
		name: "onDismiss",
		type: "() => void",
		description: "Renders a close button in the trailing edge. Omit it for alerts that must stay until handled."
	},
	{
		name: "dismissLabel",
		type: "string",
		default: "\"Dismiss\"",
		description: "Accessible name of the dismiss button."
	},
	{
		name: "className",
		type: "string",
		description: "Merged last, so you can override any variant class."
	}
];
function AlertPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Alert",
		intro: "Inline message block for status, warnings and destructive confirmations. Soft surface, semantic color, no layout shift.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: "Scheduled maintenance" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: "The service restarts at 02:00 UTC." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
					variant: "success",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: "Deployed" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: "Build 4192 is live in production." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
					variant: "destructive",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: "Payment failed" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: "Update your card to keep the workspace active." })]
				})
			]
		}),
		examples: [
			{
				title: "Status with an icon",
				code: `<Alert variant="info" icon={<InfoIcon />}>
  <AlertTitle>New version available</AlertTitle>
  <AlertDescription>Refresh the page to update.</AlertDescription>
</Alert>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
					variant: "info",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: "New version available" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: "Refresh the page to update." })]
				})
			},
			{
				title: "Compact, icon-only message",
				code: `<Alert size="sm" variant="warning">
  3 rows could not be imported.
</Alert>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, {
					size: "sm",
					variant: "warning",
					children: "3 rows could not be imported."
				})
			},
			{
				title: "Announced after an action",
				code: `const [failed, setFailed] = useState(false)
// ...
{failed && (
  <Alert role="alert" variant="destructive">
    <AlertTitle>Could not save</AlertTitle>
    <AlertDescription>Check your connection and try again.</AlertDescription>
  </Alert>
)}`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
					role: "alert",
					variant: "destructive",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: "Could not save" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: "Check your connection and try again." })]
				})
			},
			{
				title: "Dismissible notice",
				code: `const [open, setOpen] = useState(true)
// ...
{open && (
  <Alert variant="info" onDismiss={() => setOpen(false)}>
    <AlertTitle>Invitation pending</AlertTitle>
    <AlertDescription>alex@acme.com has not accepted yet.</AlertDescription>
  </Alert>
)}`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissibleAlert, {})
			}
		],
		a11y: [
			"Static alerts render no implicit role, so a page full of them is not read out on load.",
			"Add role=\"alert\" (live region) only when the message appears in response to an action.",
			"The icon wrapper is aria-hidden, so assistive tech reads only the title and description.",
			"The dismiss button is a real <button> with aria-label (\"Dismiss\" by default) — keep dismissLabel short and specific.",
			"Only wire onDismiss when dismissal is safe; a destructive-confirmation alert should have no close button.",
			"Every variant pairs its soft surface with a foreground that meets WCAG AA (checked by scripts/check-contrast.ts).",
			"Use AlertTitle as a heading (renders h5) so screen readers can navigate the message."
		],
		props
	});
}
//#endregion
export { AlertPage as component };
