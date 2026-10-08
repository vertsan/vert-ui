import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { V as Label, Wt as Textarea } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/textarea-XiCrSivd.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "invalid",
		type: "boolean",
		description: "Marks the field invalid: sets aria-invalid, data-invalid and the destructive border."
	},
	{
		name: "rows",
		type: "number",
		default: "3",
		description: "Initial visible height in text rows."
	},
	{
		name: "resize",
		type: "\"none\" | \"vertical\"",
		description: "Pass via className — resize-none for fixed heights, default is vertical."
	},
	{
		name: "disabled",
		type: "boolean",
		description: "Native disabled state — dimmed and skipped by keyboard."
	},
	{
		name: "required",
		type: "boolean",
		description: "Native required flag: browser validation plus SR announcement."
	},
	{
		name: "…native textarea attrs",
		type: "TextareaHTMLAttributes<HTMLTextAreaElement>",
		description: "value, onChange, maxLength, placeholder, …"
	}
];
function TextareaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Textarea",
		intro: "Multi-line text field with the same validation and focus behaviour as Input.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "demo-textarea",
					children: "Release notes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "demo-textarea",
					placeholder: "What changed in this version?",
					defaultValue: "Improved form validation messaging."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Markdown is supported."
				})
			]
		}),
		examples: [
			{
				title: "Invalid state",
				code: `<Textarea invalid aria-label="Description" defaultValue="hi" />
<p className="text-xs font-medium text-destructive">
  Description must be at least 20 characters.
</p>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						invalid: true,
						"aria-label": "Description",
						defaultValue: "hi"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-destructive",
						children: "Description must be at least 20 characters."
					})]
				})
			},
			{
				title: "Fixed height with counter",
				code: `<div className="space-y-2">
  <Textarea className="resize-none" maxLength={280} aria-label="Tweet" />
  <p className="text-right text-xs text-muted-foreground">280 characters max</p>
</div>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						className: "resize-none",
						maxLength: 280,
						"aria-label": "Tweet",
						placeholder: "Keep it short…"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-right text-xs text-muted-foreground",
						children: "280 characters max"
					})]
				})
			},
			{
				title: "Disabled",
				code: `<Textarea disabled defaultValue="Editing is locked." aria-label="Notes" />`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					disabled: true,
					defaultValue: "Editing is locked.",
					"aria-label": "Notes",
					className: "w-full max-w-sm"
				})
			}
		],
		a11y: [
			"Same naming rule as Input: pair with Label htmlFor or wrap it in Field.",
			"Keep resize vertical (default) — disabling resize entirely can trap content off-screen for low-vision users who zoom.",
			"Mark invalid with the invalid prop and describe the reason in text linked via aria-describedby.",
			"autoGrow behaviour is not built in: if you add it, keep the accessible height in sync (no display:none content)."
		],
		props
	});
}
//#endregion
export { TextareaPage as component };
