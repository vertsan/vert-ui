import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { At as Switch } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/switch-BlijO0pQ.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "checked",
		type: "boolean",
		description: "Controlled state. Pair it with onCheckedChange."
	},
	{
		name: "defaultChecked",
		type: "boolean",
		default: "false",
		description: "Uncontrolled initial state."
	},
	{
		name: "onCheckedChange",
		type: "(checked: boolean) => void",
		description: "Fires when the user toggles with click or keyboard."
	},
	{
		name: "disabled",
		type: "boolean",
		default: "false",
		description: "Blocks interaction and dims the control."
	},
	{
		name: "variant",
		type: "\"default\" | \"brand\" | \"destructive\"",
		default: "\"default\"",
		description: "Color used for the on (checked) track."
	},
	{
		name: "size",
		type: "\"sm\" | \"md\" | \"lg\"",
		default: "\"md\"",
		description: "Track and thumb size."
	},
	{
		name: "name / value",
		type: "string",
		description: "Renders a hidden native input so the control posts inside a form."
	}
];
function SwitchPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Switch",
		intro: "Immediate on/off control for settings that apply as soon as they change. Space and Enter both toggle it.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center justify-between gap-6 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email notifications" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						"aria-label": "Email notifications",
						defaultChecked: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center justify-between gap-6 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Weekly digest" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { "aria-label": "Weekly digest" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center justify-between gap-6 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Compact density" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						"aria-label": "Compact density",
						size: "sm"
					})]
				})
			]
		}),
		examples: [{
			title: "Controlled setting",
			code: `const [enabled, setEnabled] = useState(false)

<label className="flex items-center justify-between">
  <span>Email notifications</span>
  <Switch checked={enabled} onCheckedChange={setEnabled} />
</label>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center justify-between gap-6 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email notifications" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { "aria-label": "Email notifications" })]
			})
		}, {
			title: "Destructive toggle",
			code: `<Switch variant="destructive" size="lg" aria-label="Maintenance mode" />`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center justify-between gap-6 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Maintenance mode" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					"aria-label": "Maintenance mode",
					variant: "destructive",
					size: "lg"
				})]
			})
		}],
		a11y: [
			"Renders role=\"switch\" with aria-checked, so screen readers announce on/off rather than checked/unchecked.",
			"Toggle with Space or Enter; both are handled natively by the underlying button.",
			"Use a real <label> wrapping the text (as above) or aria-label when there is no visible label.",
			"Switch is for immediate effects. For changes that need saving, prefer a Checkbox plus a save action.",
			"Disabled state uses opacity 50% and is announced as disabled, not just dimmed."
		],
		props
	});
}
//#endregion
export { SwitchPage as component };
