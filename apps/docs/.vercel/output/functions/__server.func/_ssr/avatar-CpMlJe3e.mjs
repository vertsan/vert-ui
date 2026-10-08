import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { $ as AvatarGroup, Q as AvatarFallback, Z as Avatar, et as AvatarImage } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/avatar-CpMlJe3e.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "size",
		type: "\"sm\" | \"md\" | \"lg\"",
		default: "\"md\"",
		description: "Diameter of the avatar (8, 10 and 12 = 32/40/48px)."
	},
	{
		name: "variant",
		type: "\"default\" | \"brand\" | \"surface\"",
		default: "\"default\"",
		description: "Background used before an image loads and behind initials."
	},
	{
		name: "AvatarImage src / alt",
		type: "string",
		description: "Rendered only after the image loads; alt becomes the accessible name."
	},
	{
		name: "AvatarFallback",
		type: "ReactNode",
		description: "Initials or icon shown while (or when) no image is available."
	},
	{
		name: "AvatarGroup max",
		type: "number",
		default: "4",
		description: "Avatars rendered before the \"+N\" overflow counter appears."
	},
	{
		name: "AvatarGroup spacing",
		type: "number",
		default: "-10",
		description: "Overlap in pixels between avatars (negative values overlap)."
	},
	{
		name: "className",
		type: "string",
		description: "Merged last, so you can override size or rounding."
	}
];
function AvatarPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Avatar",
		intro: "Image with an initials fallback that keeps layout stable while it loads. The image is only mounted once it is ready, so there is no flash or shift.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "AK" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
					src: "/avatar.png",
					alt: "Jane Doe"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "JD" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					size: "lg",
					variant: "brand",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "MP" })
				})
			]
		}),
		examples: [{
			title: "In a list row",
			code: `<div className="flex items-center gap-3">
  <Avatar size="sm">
    <AvatarImage src={user.avatarUrl} alt="" />
    <AvatarFallback>{initials(user.name)}</AvatarFallback>
  </Avatar>
  <span>{user.name}</span>
</div>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "AK" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm",
					children: "Ada K."
				})]
			})
		}, {
			title: "Grouped avatars with overflow",
			code: `<AvatarGroup max={3}>
  {team.map((member) => (
    <Avatar key={member.id}>
      <AvatarImage src={member.avatarUrl} alt="" />
      <AvatarFallback>{initials(member.name)}</AvatarFallback>
    </Avatar>
  ))}
</AvatarGroup>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AvatarGroup, {
				max: 3,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "AK" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "JD" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "MP" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "RS" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "TW" })
					})
				]
			})
		}],
		a11y: [
			"Pass alt on AvatarImage so the image carries its own name; use alt=\"\" when adjacent text already names the person.",
			"The fallback renders text (initials), so the avatar is never an empty box for screen readers.",
			"The root is presentational — it has no implicit role, so it will not be announced as a widget.",
			"AvatarGroup's overflow counter is role=\"img\" labelled \"N more\", so hidden members are counted for screen readers.",
			"Avatars inside a group are decorative when the list already names each person — keep their alt empty in that case.",
			"Sizes are fixed, so swapping image for initials causes no layout shift."
		],
		props
	});
}
//#endregion
export { AvatarPage as component };
