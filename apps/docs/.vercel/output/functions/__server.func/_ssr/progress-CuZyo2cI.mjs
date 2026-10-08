import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { jt as Progress } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-CuZyo2cI.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "value",
		type: "number",
		description: "Current value clamped between 0 and max. Omit it for an indeterminate bar (no aria-valuenow)."
	},
	{
		name: "max",
		type: "number",
		default: "100",
		description: "Upper bound of the range, exposed as aria-valuemax."
	},
	{
		name: "valueText",
		type: "string",
		description: "Human readable value announced instead of the raw number, e.g. \"45 of 100 uploads\"."
	},
	{
		name: "variant",
		type: "\"default\" | \"brand\" | \"destructive\"",
		default: "\"default\"",
		description: "Color of the filled portion."
	},
	{
		name: "size",
		type: "\"sm\" | \"md\" | \"lg\"",
		default: "\"md\"",
		description: "Track height."
	}
];
function ProgressPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Progress",
		intro: "Determinate and indeterminate progress bars. The indicator moves with transforms only, so it stays smooth under reduced motion and on low-power devices.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					value: 45,
					valueText: "45 of 100 uploads",
					"aria-label": "Upload"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					value: 80,
					variant: "brand",
					size: "lg",
					"aria-label": "Storage used"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					value: 30,
					variant: "destructive",
					size: "sm",
					"aria-label": "Errors"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Preparing workspace…"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { "aria-label": "Preparing workspace" })]
				})
			]
		}),
		examples: [
			{
				title: "With a readable value",
				code: `<Progress
  value={45}
  max={100}
  valueText="45 of 100 uploads"
  aria-label="Upload"
/>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					value: 45,
					valueText: "45 of 100 uploads",
					"aria-label": "Upload"
				})
			},
			{
				title: "Indeterminate while working",
				code: `{uploading && <Progress aria-label="Uploading" />}`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { "aria-label": "Uploading" })
			},
			{
				title: "Sizing and color",
				code: `<Progress value={80} variant="brand" size="lg" aria-label="Storage" />
<Progress value={30} variant="destructive" size="sm" aria-label="Errors" />`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: 80,
						variant: "brand",
						size: "lg",
						"aria-label": "Storage"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: 30,
						variant: "destructive",
						size: "sm",
						"aria-label": "Errors"
					})]
				})
			}
		],
		a11y: [
			"Renders role=\"progressbar\" with aria-valuemin, aria-valuemax and aria-valuenow.",
			"Always pass aria-label (or aria-labelledby) — a bare progress bar has no accessible name.",
			"valueText is what gets announced: prefer \"45 of 100 uploads\" over a bare number.",
			"Indeterminate bars omit aria-valuenow, which is how assistive tech recognises unknown duration.",
			"The indicator only animates transform, and the global reduced-motion override shortens it to 0.01ms."
		],
		props
	});
}
//#endregion
export { ProgressPage as component };
