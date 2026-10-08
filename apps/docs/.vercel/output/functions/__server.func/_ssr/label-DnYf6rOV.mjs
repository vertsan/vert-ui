import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { Gt as Input, V as Label } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/label-DnYf6rOV.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "htmlFor",
		type: "string",
		description: "Id of the control this label names — the programmatic association."
	},
	{
		name: "children",
		type: "ReactNode",
		description: "The visible label text. Keep it short and unique on the page."
	},
	{
		name: "className",
		type: "string",
		description: "Merged last; add gap or color utilities as needed."
	}
];
function LabelPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Label",
		intro: "Form label wired to its control. Clicking it focuses the field, and screen readers announce it with the control's value.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-xs space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "demo-email",
					children: "Email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "demo-email",
					type: "email",
					placeholder: "you@example.com"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "demo-name",
					children: "Workspace name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "demo-name",
					defaultValue: "Acme Inc"
				})]
			})]
		}),
		examples: [{
			title: "Label with a hint",
			code: `<div className="space-y-2">
  <Label htmlFor="api-key">API key</Label>
  <Input id="api-key" type="password" />
  <p id="api-key-hint" className="text-xs text-muted-foreground">
    Found in workspace settings.
  </p>
</div>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xs space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "api-key",
						children: "API key"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "api-key",
						type: "password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Found in workspace settings."
					})
				]
			})
		}, {
			title: "Required marker",
			code: `<Label htmlFor="plan">
  Plan <span aria-hidden>*</span>
</Label>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				htmlFor: "plan-demo",
				children: ["Plan ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					children: "*"
				})]
			})
		}],
		a11y: [
			"Always pair a Label with htmlFor (or wrap the control) — an unlabelled input has no accessible name.",
			"One label points at one control; never reuse the same text on two fields.",
			"Decorative asterisks need aria-hidden; put \"required\" on the input itself, which Input does via the required attribute.",
			"Labels are focusable targets: clicking the text moves focus to the control, which helps motor-impaired users."
		],
		props
	});
}
//#endregion
export { LabelPage as component };
