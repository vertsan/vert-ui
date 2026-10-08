import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { ct as Select, dt as SelectItem, ft as SelectLabel, ht as SelectValue, lt as SelectContent, mt as SelectTrigger, pt as SelectSeparator, ut as SelectGroup } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/select-DFhRiU0W.js
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
		description: "Fires when the user picks an item."
	},
	{
		name: "disabled",
		type: "boolean",
		default: "false",
		description: "Blocks opening the list and dims the trigger."
	},
	{
		name: "SelectTrigger size",
		type: "\"sm\" | \"md\" | \"lg\"",
		default: "\"md\"",
		description: "Height and type scale of the button."
	},
	{
		name: "SelectTrigger invalid",
		type: "boolean",
		default: "false",
		description: "Switches to the destructive ring for validation errors."
	},
	{
		name: "SelectValue placeholder",
		type: "ReactNode",
		description: "Shown while no item is selected."
	},
	{
		name: "SelectItem value",
		type: "string",
		required: true,
		description: "Value reported by onValueChange; must be unique within the list."
	}
];
function SelectPage() {
	const [fruit, setFruit] = import_react.useState("apple");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Select",
		intro: "Single-value listbox trigger with typeahead and the same menu-item semantics as Dropdown Menu.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-xs space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				defaultValue: "apple",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					"aria-label": "Fruit",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Pick a fruit" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectGroup, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel, { children: "Fruit" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "apple",
							children: "Apple"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "banana",
							children: "Banana"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "cherry",
							children: "Cherry"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "other",
						children: "Something else"
					})
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: ["Selected: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono",
					children: fruit
				})]
			})]
		}),
		examples: [{
			title: "Controlled select",
			code: `const [fruit, setFruit] = useState("apple")

<Select value={fruit} onValueChange={setFruit}>
  <SelectTrigger aria-label="Fruit">
    <SelectValue placeholder="Pick a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectContent>
</Select>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: fruit,
					onValueChange: setFruit,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						"aria-label": "Fruit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Pick a fruit" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "apple",
							children: "Apple"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "banana",
							children: "Banana"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "cherry",
							children: "Cherry"
						})
					] })]
				})
			})
		}, {
			title: "Grouped and invalid",
			code: `<Select defaultValue="">
  <SelectTrigger invalid aria-label="Plan">
    <SelectValue placeholder="Choose a plan" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Plans</SelectLabel>
      <SelectItem value="free">Free</SelectItem>
      <SelectItem value="team">Team</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					defaultValue: "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						invalid: true,
						"aria-label": "Plan",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Choose a plan" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectGroup, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel, { children: "Plans" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "free",
							children: "Free"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "team",
							children: "Team"
						})
					] }) })]
				})
			})
		}],
		a11y: [
			"The trigger renders role=\"combobox\" with aria-expanded and aria-controls pointing at the listbox.",
			"Type a letter to jump to the next matching item; Home/End jump to the list ends.",
			"Escape closes the list and returns focus to the trigger; arrow keys open it when closed.",
			"SelectValue is required: without it the trigger has no accessible name — also pass aria-label when no visible label exists.",
			"SelectLabel must sit inside a SelectGroup; it becomes the group's accessible name.",
			"Use invalid together with an inline error message referenced by aria-describedby."
		],
		props
	});
}
//#endregion
export { SelectPage as component };
