import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { It as Checkbox } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkbox-DrU598NH.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "checked",
		type: "\"checked\" | \"indeterminate\" | boolean",
		description: "Controlled state. Use onCheckedChange to update it."
	},
	{
		name: "defaultChecked",
		type: "boolean",
		description: "Uncontrolled initial state."
	},
	{
		name: "onCheckedChange",
		type: "(checked: boolean | \"indeterminate\") => void",
		description: "Fires when the box toggles via click, Space key or pointer."
	},
	{
		name: "size",
		type: "\"sm\" | \"md\" | \"lg\"",
		default: "\"md\"",
		description: "Box size — keeps the 44px hit target with a wrapping label."
	},
	{
		name: "invalid",
		type: "boolean",
		description: "Sets aria-invalid and the destructive border."
	},
	{
		name: "disabled",
		type: "boolean",
		description: "Native disabled state via Radix — dimmed and inert."
	},
	{
		name: "required / name / value",
		type: "boolean / string / string",
		description: "Forwarded to the hidden input so native forms keep working."
	}
];
function CheckboxPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Checkbox",
		intro: "Multi-select choice with checked, indeterminate and invalid states, powered by Radix UI.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex cursor-pointer items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
					defaultChecked: true,
					"aria-label": "Email notifications"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm",
					children: "Email me release notes"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex cursor-pointer items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, { "aria-label": "Slack notifications" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm",
					children: "Slack me for incidents"
				})]
			})]
		}),
		examples: [
			{
				title: "Indeterminate parent row",
				code: `const [state, setState] = useState<boolean | 'indeterminate'>('indeterminate')

<Checkbox
  checked={state}
  onCheckedChange={setState}
  aria-label="Select all"
/>
<span>Select all</span>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex cursor-pointer items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
						checked: "indeterminate",
						"aria-label": "Select all"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium",
						children: "Select all"
					})]
				})
			},
			{
				title: "Label, sizes and invalid state",
				code: `<div className="flex items-center gap-3">
  <Checkbox size="sm" aria-label="Sm" />
  <Checkbox size="md" aria-label="Md" />
  <Checkbox size="lg" aria-label="Lg" />
  <Checkbox invalid aria-label="Invalid" />
</div>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								size: "sm",
								"aria-label": "Small"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: "sm"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								size: "md",
								defaultChecked: true,
								"aria-label": "Medium"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: "md"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								size: "lg",
								"aria-label": "Large"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: "lg"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								invalid: true,
								"aria-label": "Invalid"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-destructive",
								children: "invalid"
							})]
						})
					]
				})
			},
			{
				title: "Disabled row",
				code: `<label className="flex items-center gap-3 opacity-50">
  <Checkbox disabled aria-label="Disabled option" />
  <span className="text-sm">Requires admin rights</span>
</label>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex cursor-pointer items-center gap-3 opacity-50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
						disabled: true,
						"aria-label": "Disabled option"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: "Requires admin rights"
					})]
				})
			}
		],
		a11y: [
			"Wrap the checkbox in a <label>, or give it aria-label / an associated Label — the box alone has no accessible name.",
			"The label must be clickable: it doubles the hit target and is the primary way motor-impaired users toggle.",
			"indeterminate is announced as \"partially checked\"; set it when a parent row mixes checked children.",
			"Space toggles the focused checkbox — never block the Space key on the control itself.",
			"Pass name and value so the hidden input submits inside a native <form>."
		],
		props
	});
}
//#endregion
export { CheckboxPage as component };
