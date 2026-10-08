import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { L as RadioGroup, R as RadioGroupItem } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/radio-group-DHT4BZbw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "value / defaultValue",
		type: "string",
		description: "Controlled or uncontrolled selection."
	},
	{
		name: "onValueChange",
		type: "(value: string) => void",
		description: "Fires when the user picks an item (click or arrow key)."
	},
	{
		name: "orientation",
		type: "\"vertical\" | \"horizontal\"",
		default: "\"vertical\"",
		description: "Stacking direction of the items; also sets data-orientation."
	},
	{
		name: "name",
		type: "string",
		description: "Groups the items into a native form field for submission."
	},
	{
		name: "RadioGroupItem value",
		type: "string",
		required: true,
		description: "Value reported by onValueChange; must be unique within the group."
	},
	{
		name: "RadioGroupItem size",
		type: "\"sm\" | \"md\" | \"lg\"",
		default: "\"md\"",
		description: "Diameter of the radio control."
	}
];
function RadioGroupPage() {
	const [plan, setPlan] = import_react.useState("team");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Radio Group",
		intro: "Single-choice control for mutually exclusive options that are all visible at once. Arrow keys move and select; Tab lands on the group.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
			"aria-label": "Plan",
			value: plan,
			onValueChange: setPlan,
			className: "gap-4",
			children: [
				{
					value: "free",
					label: "Free",
					hint: "One project, community support"
				},
				{
					value: "team",
					label: "Team",
					hint: "Unlimited projects, email support"
				},
				{
					value: "scale",
					label: "Scale",
					hint: "SSO, audit log, priority support"
				}
			].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex cursor-pointer items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
					value: option.value,
					className: "mt-0.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "space-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-medium",
						children: option.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-muted-foreground",
						children: option.hint
					})]
				})]
			}, option.value))
		}),
		examples: [{
			title: "Controlled selection",
			code: `const [plan, setPlan] = useState("team")

<RadioGroup value={plan} onValueChange={setPlan} aria-label="Plan">
  <label className="flex gap-3">
    <RadioGroupItem value="free" /> Free
  </label>
  <label className="flex gap-3">
    <RadioGroupItem value="team" /> Team
  </label>
</RadioGroup>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioGroup, {
				defaultValue: "team",
				"aria-label": "Plan demo",
				className: "gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex cursor-pointer items-center gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, { value: "free" }), " Free"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex cursor-pointer items-center gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, { value: "team" }), " Team"]
				})]
			})
		}, {
			title: "Horizontal with sizes",
			code: `<RadioGroup orientation="horizontal" defaultValue="s" aria-label="Size">
  <RadioGroupItem value="s" size="sm" />
  <RadioGroupItem value="m" size="md" />
  <RadioGroupItem value="l" size="lg" />
</RadioGroup>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioGroup, {
				orientation: "horizontal",
				defaultValue: "m",
				"aria-label": "Size demo",
				className: "gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
						value: "s",
						size: "sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
						value: "m",
						size: "md"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
						value: "l",
						size: "lg"
					})
				]
			})
		}],
		a11y: [
			"Renders role=\"radiogroup\" with role=\"radio\" children and aria-checked state — announced as a group of options.",
			"Wrap each item in a real <label> (as in the preview) or give RadioGroupItem an aria-label.",
			"Arrow keys move focus and select the new option, matching native radio behaviour; Tab moves past the whole group.",
			"Use radios for a small number of always-visible choices; use Select for long lists.",
			"Keep every option visible — hiding options behind a disclosure defeats the point of a radio group."
		],
		props
	});
}
//#endregion
export { RadioGroupPage as component };
