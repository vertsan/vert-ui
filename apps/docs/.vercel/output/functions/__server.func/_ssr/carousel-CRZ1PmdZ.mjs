import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { a as Carousel, c as CarouselNext, l as CarouselPrevious, o as CarouselDots, s as CarouselItem, u as useCarousel } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/carousel-CRZ1PmdZ.js
var import_jsx_runtime = require_jsx_runtime();
var slides = [
	{
		title: "Precision",
		body: "Every token is measured, contrast-checked and documented."
	},
	{
		title: "Velocity",
		body: "Copy-paste components that ship without a build step."
	},
	{
		title: "Restraint",
		body: "Motion stays on transform and opacity, and honours reduced motion."
	}
];
var props = [
	{
		name: "orientation",
		type: "\"horizontal\" | \"vertical\"",
		default: "\"horizontal\"",
		description: "Slide direction; buttons reposition to the top edge when vertical."
	},
	{
		name: "loop",
		type: "boolean",
		default: "false",
		description: "Wraps from the last slide back to the first."
	},
	{
		name: "slidesToScroll",
		type: "number",
		default: "1",
		description: "How many slides each prev/next call advances."
	},
	{
		name: "defaultSlide",
		type: "number",
		default: "0",
		description: "Initial slide index (uncontrolled)."
	},
	{
		name: "onSlideChange",
		type: "(index: number) => void",
		description: "Fires with the selected slide index whenever it changes."
	},
	{
		name: "dragFree",
		type: "boolean",
		default: "false",
		description: "Decouples scroll position from drag distance for a free-flowing feel."
	},
	{
		name: "hideButtons",
		type: "boolean",
		default: "false",
		description: "Hides the built-in prev/next buttons — add your own labelled controls."
	},
	{
		name: "footer",
		type: "ReactNode",
		description: "Rendered below the viewport inside the carousel context — the right place for dots or custom controls, since direct children become slides."
	},
	{
		name: "CarouselPrevious / CarouselNext",
		type: "ButtonHTMLAttributes",
		description: "Default controls; disabled at each end and labelled \"Previous slide\" / \"Next slide\"."
	},
	{
		name: "CarouselDots",
		type: "HTMLAttributes",
		description: "One button per slide — labelled \"Go to slide n\", with aria-current on the active dot."
	},
	{
		name: "useCarousel",
		type: "() => CarouselContextValue",
		description: "Hook for custom parts (counters, progress, thumbnails): index, count, canPrev/canNext, scrollPrev/scrollNext/scrollTo and the embla API. Throws outside a Carousel."
	}
];
function Counter() {
	const { index, count, scrollTo } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			index + 1,
			" of ",
			count
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => scrollTo(0, true),
			className: "rounded-md px-2 py-1 outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring",
			children: "Back to start"
		})]
	});
}
function CarouselPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Carousel",
		intro: "Scroll-snap slider built on embla-carousel. The root owns the state; buttons, dots and items read it through context, and a focusable viewport plus a polite status region keep it keyboard- and screen-reader-friendly.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
			className: "w-full max-w-lg",
			"aria-label": "Principles",
			loop: true,
			children: slides.map((slide) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-background/70 p-8 text-center shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold",
					children: slide.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: slide.body
				})]
			}) }, slide.title))
		}),
		examples: [
			{
				title: "With dots and a callback",
				code: `<Carousel
  className="w-full max-w-lg"
  onSlideChange={setIndex}
  footer={<CarouselDots className="mt-4" />}
>
  {items.map((item) => (
    <CarouselItem key={item.id}>…</CarouselItem>
  ))}
</Carousel>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full max-w-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
						footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselDots, { className: "mt-4" }),
						children: slides.map((slide) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-border bg-background/70 p-8 text-center shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-semibold",
								children: slide.title
							})
						}) }, slide.title))
					})
				})
			},
			{
				title: "Custom controls",
				code: `<Carousel
  hideButtons
  footer={
    <div className="mt-4 flex items-center justify-center gap-2">
      <CarouselPrevious />
      <CarouselNext />
    </div>
  }
>
  {items.map((item) => (
    <CarouselItem key={item.id}>…</CarouselItem>
  ))}
</Carousel>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full max-w-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
						hideButtons: true,
						footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-4 flex items-center justify-center gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "static translate-y-0" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselDots, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "static translate-y-0" })
							]
						}),
						children: slides.map((slide) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-border bg-background/70 p-8 text-center shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-semibold",
								children: slide.title
							})
						}) }, slide.title))
					})
				})
			},
			{
				title: "Custom parts with useCarousel",
				code: `import { useCarousel } from "@/components/vert-ui/carousel"

function Counter() {
  const { index, count, scrollTo } = useCarousel()
  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <span>{index + 1} of {count}</span>
      <button type="button" onClick={() => scrollTo(0, true)}>Back to start</button>
    </div>
  )
}

<Carousel footer={<Counter />}>
  {items.map((item) => (
    <CarouselItem key={item.id}>…</CarouselItem>
  ))}
</Carousel>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full max-w-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
						"aria-label": "Principles",
						footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {}),
						children: slides.map((slide) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-border bg-background/70 p-8 text-center shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-semibold",
								children: slide.title
							})
						}) }, slide.title))
					})
				})
			}
		],
		a11y: [
			"The root is role=\"region\" with aria-roledescription=\"carousel\" — always pass an aria-label (\"Principles\" above) so it is a named landmark.",
			"With more than one slide the viewport is focusable: Arrow keys move along the carousel's axis, Home/End jump to the first/last slide. Keys are ignored while focus sits in an input or editable inside a slide.",
			"Slides carry role=\"group\" with aria-roledescription=\"slide\", so each one is identified while browsing.",
			"Previous/Next are real <button> elements with aria-label=\"Previous slide\" / \"Next slide\", visible focus rings and the disabled attribute at each end.",
			"Dots are buttons with accessible names (\"Go to slide n\") and aria-current on the active one — a second way to move, never the only way.",
			"A visually hidden status region (aria-live=\"polite\") announces \"Slide x of y\" after every move, including keyboard and dot navigation.",
			"Motion is transform-only (embla translates the container); under prefers-reduced-motion embla's animation duration drops to 0 and the global override kills CSS transitions.",
			"Never auto-advance: a carousel that moves on its own breaks focus and reading position."
		],
		props
	});
}
//#endregion
export { CarouselPage as component };
