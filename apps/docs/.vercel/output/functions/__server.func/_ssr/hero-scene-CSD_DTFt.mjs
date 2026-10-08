import { i as __toESM } from "../_runtime.mjs";
import { a as BufferGeometry, c as Shape, d as require_react, i as BufferAttribute, n as useFrame, o as EdgesGeometry, r as useThree, s as ExtrudeGeometry, t as Canvas, u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hero-scene-CSD_DTFt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PANELS = [
	{
		position: [
			2.6,
			1.5,
			-2.4
		],
		rotation: [
			.1,
			-.35,
			.06
		],
		width: 2.6,
		height: 1.6,
		depth: .1,
		radius: .24,
		phase: 0,
		bob: .12
	},
	{
		position: [
			-2.9,
			.7,
			-2
		],
		rotation: [
			.08,
			.42,
			-.08
		],
		width: 2.2,
		height: 1.45,
		depth: .1,
		radius: .22,
		phase: 1.1,
		bob: .1
	},
	{
		position: [
			-2.4,
			-2.3,
			-3
		],
		rotation: [
			-.05,
			.3,
			.1
		],
		width: 2.8,
		height: 1.7,
		depth: .1,
		radius: .26,
		phase: 2.3,
		bob: .14
	},
	{
		position: [
			2.9,
			-2.5,
			-3.6
		],
		rotation: [
			.06,
			-.25,
			-.07
		],
		width: 2.4,
		height: 1.5,
		depth: .1,
		radius: .22,
		phase: 3.4,
		bob: .16
	},
	{
		position: [
			-3.8,
			2.4,
			-4
		],
		rotation: [
			.12,
			.55,
			.05
		],
		width: 1.9,
		height: 1.25,
		depth: .1,
		radius: .2,
		phase: 4.2,
		bob: .11
	},
	{
		position: [
			3.9,
			.4,
			-3.6
		],
		rotation: [
			.05,
			-.5,
			.08
		],
		width: 1.8,
		height: 2.4,
		depth: .1,
		radius: .22,
		phase: 5,
		bob: .13
	},
	{
		position: [
			-1.4,
			2.9,
			-3.6
		],
		rotation: [
			.15,
			.15,
			-.1
		],
		width: 2,
		height: 1.3,
		depth: .1,
		radius: .2,
		phase: .6,
		bob: .09
	},
	{
		position: [
			.4,
			-3.1,
			-4.4
		],
		rotation: [
			-.08,
			-.1,
			.06
		],
		width: 3,
		height: 1.4,
		depth: .1,
		radius: .24,
		phase: 1.8,
		bob: .12
	}
];
function hex2(n) {
	return Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
}
function resolveBrandColor() {
	const raw = getComputedStyle(document.documentElement).getPropertyValue("--color-brand").trim();
	if (/^#[0-9a-f]{3,8}$/i.test(raw)) return raw;
	if (!raw) return null;
	try {
		const ctx = document.createElement("canvas").getContext("2d");
		if (ctx) {
			ctx.fillStyle = "#010203";
			ctx.fillStyle = raw;
			const out = ctx.fillStyle;
			if (out.toLowerCase() !== "#010203" && /^#[0-9a-f]{3,8}$/i.test(out)) return out;
			const m = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(out);
			if (m) return `#${hex2(Number(m[1]))}${hex2(Number(m[2]))}${hex2(Number(m[3]))}`;
		}
	} catch {}
	return null;
}
function useBrandColor() {
	const [color, setColor] = (0, import_react.useState)("#158048");
	(0, import_react.useEffect)(() => {
		const sync = () => {
			const next = resolveBrandColor();
			if (next) setColor(next);
		};
		sync();
		const observer = new MutationObserver(sync);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: [
				"class",
				"data-theme",
				"data-tone"
			]
		});
		return () => observer.disconnect();
	}, []);
	return color;
}
function buildPanelGeometry(width, height, depth, radius) {
	const x = -width / 2;
	const y = -height / 2;
	const shape = new Shape();
	shape.moveTo(x + radius, y);
	shape.lineTo(x + width - radius, y);
	shape.quadraticCurveTo(x + width, y, x + width, y + radius);
	shape.lineTo(x + width, y + height - radius);
	shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
	shape.lineTo(x + radius, y + height);
	shape.quadraticCurveTo(x, y + height, x, y + height - radius);
	shape.lineTo(x, y + radius);
	shape.quadraticCurveTo(x, y, x + radius, y);
	const fill = new ExtrudeGeometry(shape, {
		depth,
		bevelEnabled: true,
		bevelThickness: .015,
		bevelSize: .015,
		bevelSegments: 2,
		curveSegments: 8
	});
	fill.translate(0, 0, -depth / 2);
	return {
		fill,
		edges: new EdgesGeometry(fill, 25)
	};
}
function buildParticles() {
	const count = 110;
	const positions = /* @__PURE__ */ new Float32Array(330);
	for (let i = 0; i < count; i++) {
		positions[i * 3] = (Math.random() - .5) * 10;
		positions[i * 3 + 1] = (Math.random() - .5) * 7.5;
		positions[i * 3 + 2] = -6 + Math.random() * 6.5;
	}
	const geometry = new BufferGeometry();
	geometry.setAttribute("position", new BufferAttribute(positions, 3));
	return geometry;
}
function Constellation({ color, animate }) {
	const groupRef = (0, import_react.useRef)(null);
	const ringRef = (0, import_react.useRef)(null);
	const panelRefs = (0, import_react.useRef)([]);
	const pointer = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const time = (0, import_react.useRef)(0);
	const invalidate = useThree((state) => state.invalidate);
	const camera = useThree((state) => state.camera);
	const size = useThree((state) => state.size);
	const panels = (0, import_react.useMemo)(() => PANELS.map((spec) => ({
		spec,
		...buildPanelGeometry(spec.width, spec.height, spec.depth, spec.radius)
	})), []);
	const particles = (0, import_react.useMemo)(() => buildParticles(), []);
	(0, import_react.useLayoutEffect)(() => {
		const aspect = size.width / Math.max(1, size.height);
		const z = aspect >= .8 ? 9 : aspect >= .55 ? 12 : 20;
		camera.position.set(0, 0, z);
		camera.updateProjectionMatrix();
	}, [
		camera,
		size.width,
		size.height
	]);
	(0, import_react.useEffect)(() => () => {
		panels.forEach(({ fill, edges }) => {
			fill.dispose();
			edges.dispose();
		});
		particles.dispose();
	}, [panels, particles]);
	(0, import_react.useEffect)(() => {
		invalidate();
	}, [invalidate, color]);
	(0, import_react.useEffect)(() => {
		if (!animate) return;
		const onMove = (event) => {
			pointer.current.x = event.clientX / Math.max(1, window.innerWidth) * 2 - 1;
			pointer.current.y = -(event.clientY / Math.max(1, window.innerHeight) * 2 - 1);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => window.removeEventListener("pointermove", onMove);
	}, [animate]);
	useFrame((_state, delta) => {
		if (!animate || !groupRef.current) return;
		time.current += Math.min(delta, .05);
		const t = time.current;
		const group = groupRef.current;
		const ease = Math.min(1, delta * 1.6);
		group.position.x += (pointer.current.x * .35 - group.position.x) * ease;
		group.position.y += (pointer.current.y * .22 - group.position.y) * ease;
		group.rotation.y += (pointer.current.x * .06 - group.rotation.y) * ease;
		group.rotation.x += (-pointer.current.y * .04 - group.rotation.x) * ease;
		if (ringRef.current) ringRef.current.rotation.y = Math.sin(t * .1) * .1;
		panelRefs.current.forEach((panel, index) => {
			if (!panel) return;
			const spec = PANELS[index];
			panel.position.y = spec.position[1] + Math.sin(t * .6 + spec.phase) * spec.bob;
			panel.rotation.z = spec.rotation[2] + Math.sin(t * .35 + spec.phase) * .04;
			panel.rotation.y = spec.rotation[1] + Math.sin(t * .28 + spec.phase) * .06;
		});
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: groupRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
				ref: ringRef,
				children: panels.map(({ spec, fill, edges }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					ref: (element) => {
						panelRefs.current[index] = element;
					},
					position: spec.position,
					rotation: spec.rotation,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
						geometry: fill,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color,
							transparent: true,
							opacity: .14,
							roughness: .5,
							metalness: .05,
							depthWrite: false
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineSegments", {
						geometry: edges,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineBasicMaterial", {
							color,
							transparent: true,
							opacity: .75
						})
					})]
				}, index))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					3.3,
					-1.5,
					-1.6
				],
				rotation: [
					.6,
					.2,
					.3
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.5,
					.16,
					16,
					48
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color,
					emissive: color,
					emissiveIntensity: .35,
					roughness: .35
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-3.4,
					-1.9,
					-2
				],
				rotation: [
					0,
					0,
					-.5
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
					.28,
					.7,
					6,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color,
					emissive: color,
					emissiveIntensity: .3,
					roughness: .4
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					3.5,
					2.2,
					-3
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.42,
					32,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color,
					emissive: color,
					emissiveIntensity: .25,
					roughness: .3
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("points", {
				geometry: particles,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
					color,
					size: .05,
					sizeAttenuation: true,
					transparent: true,
					opacity: .5,
					depthWrite: false
				})
			})
		]
	});
}
function HeroScene({ animate }) {
	const color = useBrandColor();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		dpr: [1, 1.75],
		frameloop: animate ? "always" : "demand",
		camera: {
			position: [
				0,
				0,
				9
			],
			fov: 42
		},
		gl: {
			antialias: true,
			alpha: true,
			powerPreference: "high-performance"
		},
		style: { pointerEvents: "none" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .9 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					4,
					5,
					6
				],
				intensity: 1.1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					-5,
					-2,
					2
				],
				intensity: .4
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					0,
					0,
					-2
				],
				intensity: 6,
				distance: 10,
				color
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Constellation, {
				color,
				animate
			})
		]
	});
}
//#endregion
export { HeroScene as default };
