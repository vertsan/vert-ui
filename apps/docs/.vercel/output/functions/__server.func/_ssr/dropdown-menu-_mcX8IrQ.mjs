import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { Ct as DropdownMenuSeparator, Kt as Button, St as DropdownMenuRadioItem, _t as DropdownMenuCheckboxItem, bt as DropdownMenuLabel, gt as DropdownMenu, vt as DropdownMenuContent, wt as DropdownMenuTrigger, xt as DropdownMenuRadioGroup, yt as DropdownMenuItem } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dropdown-menu-_mcX8IrQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "DropdownMenu modal",
		type: "boolean",
		default: "true",
		description: "Keeps pointer events outside the menu blocked while it is open."
	},
	{
		name: "DropdownMenuTrigger asChild",
		type: "boolean",
		description: "Renders your own element as the trigger (Radix Slot), forwarding refs."
	},
	{
		name: "DropdownMenuContent side / align",
		type: "\"top\" | \"right\" | \"bottom\" | \"left\" / \"start\" | \"center\" | \"end\"",
		default: "\"bottom\" / \"end\"",
		description: "Placement of the panel; flips when it would overflow the viewport."
	},
	{
		name: "DropdownMenuItem onSelect",
		type: "(event: Event) => void",
		description: "Runs on selection; call event.preventDefault() to keep the menu open."
	},
	{
		name: "DropdownMenuCheckboxItem checked",
		type: "boolean",
		description: "Controlled check state; renders role=\"menuitemcheckbox\"."
	},
	{
		name: "DropdownMenuRadioItem value",
		type: "string",
		description: "Value inside a DropdownMenuRadioGroup; renders role=\"menuitemradio\"."
	}
];
function DropdownMenuPage() {
	const [checked, setChecked] = import_react.useState(true);
	const [layout, setLayout] = import_react.useState("list");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Dropdown Menu",
		intro: "Action menu with items, checkboxes and radio groups. Arrow keys move, typing selects by letter, Escape closes.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					children: "Actions"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
				align: "start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Project" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
						onSelect: () => {},
						children: "Rename"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
						onSelect: () => {},
						children: "Duplicate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
						variant: "destructive",
						onSelect: () => {},
						children: "Delete"
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "View options" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
					checked,
					onCheckedChange: setChecked,
					children: "Show timestamps"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuRadioGroup, {
					value: layout,
					onValueChange: setLayout,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuRadioItem, {
						value: "list",
						children: "List"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuRadioItem, {
						value: "grid",
						children: "Grid"
					})]
				})
			] })] })]
		}),
		examples: [{
			title: "Actions with a destructive item",
			code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Actions</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onSelect={rename}>Rename</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive" onSelect={destroy}>
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					children: "Actions"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					onSelect: () => {},
					children: "Rename"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					variant: "destructive",
					onSelect: () => {},
					children: "Delete"
				})
			] })] })
		}, {
			title: "Keep the menu open after choosing",
			code: `<DropdownMenuItem
  onSelect={(event) => {
    event.preventDefault() // stops the menu closing
    duplicate()
  }}
>
  Duplicate
</DropdownMenuItem>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					children: "More"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onSelect: (event) => event.preventDefault(),
				children: "Duplicate"
			}) })] })
		}],
		a11y: [
			"Renders role=\"menu\" with menuitem / menuitemcheckbox / menuitemradio children, so state is announced, not just colored.",
			"Arrow keys move through items, Home/End jump, and printable characters select the next matching item.",
			"Escape closes the menu and returns focus to the trigger; Tab closes without moving focus.",
			"Use DropdownMenuSeparator between unrelated groups — it is exposed as role=\"separator\".",
			"Label each group with DropdownMenuLabel when the items would not make sense out of context."
		],
		props
	});
}
//#endregion
export { DropdownMenuPage as component };
