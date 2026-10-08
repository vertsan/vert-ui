import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { Gt as Input, V as Label } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-RKNpqPAu.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "invalid",
		type: "boolean",
		description: "Marks the field invalid: sets aria-invalid, data-invalid and the destructive border."
	},
	{
		name: "type",
		type: "string",
		default: "\"text\"",
		description: "Native input type — email, password, search, number…"
	},
	{
		name: "placeholder",
		type: "string",
		description: "Hint shown while empty. Not a substitute for a label."
	},
	{
		name: "disabled",
		type: "boolean",
		description: "Native disabled state — dimmed, skipped by tab and pointer."
	},
	{
		name: "required",
		type: "boolean",
		description: "Native required flag: browser validation plus SR announcement."
	},
	{
		name: "…native input attrs",
		type: "InputHTMLAttributes<HTMLInputElement>",
		description: "value, onChange, autoComplete, minLength, inputMode, …"
	}
];
function InputPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Input",
		intro: "Single-line text field with validation state, focus ring and file/placeholder support.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "demo-input-email",
					children: "Email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "demo-input-email",
					type: "email",
					placeholder: "you@example.com"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "demo-input-key",
						children: "API key"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "demo-input-key",
						type: "password",
						defaultValue: "vt_live_8f3a"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Found in workspace settings."
					})
				]
			})]
		}),
		examples: [
			{
				title: "Invalid state",
				code: `<Input invalid aria-label="Email" placeholder="you@example.com" />
<p className="text-xs font-medium text-destructive">
  Enter a valid email address.
</p>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						invalid: true,
						"aria-label": "Email",
						placeholder: "you@example.com",
						defaultValue: "not-an-email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-destructive",
						children: "Enter a valid email address."
					})]
				})
			},
			{
				title: "With label and hint",
				code: `<div className="space-y-2">
  <Label htmlFor="workspace">Workspace name</Label>
  <Input id="workspace" placeholder="Acme Inc" />
  <p className="text-xs text-muted-foreground">Visible to everyone in the org.</p>
</div>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "workspace-demo",
							children: "Workspace name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "workspace-demo",
							placeholder: "Acme Inc"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Visible to everyone in the org."
						})
					]
				})
			},
			{
				title: "Disabled and read-only sizing",
				code: `<Input disabled value="Locked field" readOnly aria-label="Field" />
<Input className="h-11 px-4 text-base" aria-label="Large input" />`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						disabled: true,
						defaultValue: "Locked field",
						"aria-label": "Field"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "h-11 px-4 text-base",
						"aria-label": "Large input",
						placeholder: "Larger variant"
					})]
				})
			}
		],
		a11y: [
			"Every input needs a programmatic name: pair it with Label htmlFor (or use Field, which wires it for you).",
			"invalid flips aria-invalid — screen readers announce the state on focus; keep an inline error text linked by aria-describedby (Field does this automatically).",
			"Placeholders vanish on typing and often fail contrast — keep them for examples, labels for real forms.",
			"Native required works with browser validation; a visual asterisk alone is not enough."
		],
		props
	});
}
//#endregion
export { InputPage as component };
