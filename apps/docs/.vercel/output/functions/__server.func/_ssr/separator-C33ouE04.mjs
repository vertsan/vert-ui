import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { Kt as Button, Mt as Separator } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/separator-C33ouE04.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "orientation",
		type: "\"horizontal\" | \"vertical\"",
		default: "\"horizontal\"",
		description: "Direction of the divider. Vertical separators stretch to their container height."
	},
	{
		name: "decorative",
		type: "boolean",
		default: "false",
		description: "Marks the divider as presentational: no role and aria-hidden, for pure visual spacing."
	},
	{
		name: "role",
		type: "string",
		description: "Override the exposed role (defaults to \"separator\" when not decorative)."
	},
	{
		name: "className",
		type: "string",
		description: "Merged last, so you can override size or color."
	}
];
function SeparatorPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Separator",
		intro: "One-pixel divider for horizontal or vertical rhythm. Exposed to assistive technology by default, decorative on request.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "First row of content"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Second row of content"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { decorative: true }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Third row (divider above is decorative)"
				})
			]
		}),
		examples: [{
			title: "Between toolbar controls",
			code: `<div className="flex items-center gap-3">
  <Button>Save</Button>
  <Separator orientation="vertical" decorative />
  <Button variant="outline">Cancel</Button>
</div>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Save" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {
						orientation: "vertical",
						className: "h-6",
						decorative: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						children: "Cancel"
					})
				]
			})
		}, {
			title: "Section break inside a card",
			code: `<Card>
  <CardContent>Profile details</CardContent>
  <Separator />
  <CardContent>Billing details</CardContent>
</Card>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: "Profile details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: "Billing details"
					})
				]
			})
		}],
		a11y: [
			"Non-decorative separators render role=\"separator\" with the matching aria-orientation, so assistive tech can announce a boundary between regions.",
			"Decorative separators are removed from the accessibility tree (aria-hidden) — use them whenever the layout already communicates the grouping.",
			"A vertical separator inside a flex row needs a height (e.g. className=\"h-6\"); it is a layout concern the component deliberately leaves to you."
		],
		props
	});
}
//#endregion
export { SeparatorPage as component };
