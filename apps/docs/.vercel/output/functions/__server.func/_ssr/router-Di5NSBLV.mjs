import { i as __toESM$1 } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { a as HeadContent, c as createRouter, d as createFileRoute, f as createRootRoute, i as Scripts, o as useRouterState, p as Link, r as require_react_dom, u as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as MotionConfig, t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Di5NSBLV.js
var import_react = /* @__PURE__ */ __toESM$1(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM$1(require_react_dom());
var __create = Object.create;
var __defProp$41 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp$41(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp$41(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp$41(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp$41(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var styles_default = "/assets/styles-DgzhwnAQ.css";
var __defProp$40 = Object.defineProperty;
var __name$40 = (target, value) => __defProp$40(target, "name", {
	value,
	configurable: true
});
function setRef$1(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$40(setRef$1, "setRef");
function composeRefs(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$1(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$1(refs[i], null);
			}
		};
	};
}
__name$40(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
	return import_react.useCallback(composeRefs(...refs), refs);
}
__name$40(useComposedRefs, "useComposedRefs");
var __defProp$39 = Object.defineProperty;
var __name$39 = (target, value) => __defProp$39(target, "name", {
	value,
	configurable: true
});
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent(children) && typeof use === "function") children = use(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent(child) && typeof use === "function") child = use(child._payload);
				slottableElement = getSlottableElementFromSlottable(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef$1(slottableElement) : void 0;
		const composedRef = useComposedRefs(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName));
			return children;
		}
		const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$39(createSlot, "createSlot");
var Slot$4 = /* @__PURE__ */ createSlot("Slot");
var SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$39((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
	return Slottable2;
}
__name$39(createSlottable, "createSlottable");
var getSlottableElementFromSlottable = /* @__PURE__ */ __name$39((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
		else if (propName === "aria-describedby") overrideProps[propName] = concatAriaDescribedby$3(childPropValue, slotPropValue);
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$39(mergeProps, "mergeProps");
function getElementRef$1(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$39(getElementRef$1, "getElementRef");
function isSlottable(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
__name$39(isSlottable, "isSlottable");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
function isLazyComponent(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
__name$39(isLazyComponent, "isLazyComponent");
function isPromiseLike(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$39(isPromiseLike, "isPromiseLike");
function concatAriaDescribedby$3(...values) {
	const ids = /* @__PURE__ */ new Set();
	for (const value of values) {
		if (typeof value !== "string") continue;
		for (const id of String(value).trim().split(/\s+/)) if (id) ids.add(id);
	}
	return ids.size > 0 ? Array.from(ids).join(" ") : void 0;
}
__name$39(concatAriaDescribedby$3, "concatAriaDescribedby");
var createSlotError = /* @__PURE__ */ __name$39((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError = /* @__PURE__ */ __name$39((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use = import_react[" use ".trim().toString()];
/**
* Copyright 2022 Joe Bell. All rights reserved.
*
* This file is licensed to you under the Apache License, Version 2.0
* (the "License"); you may not use this file except in compliance with the
* License. You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations under
* the License.
*/ var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
	var _config_compoundVariants;
	if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
	const { variants, defaultVariants } = config;
	const getVariantClassNames = Object.keys(variants).map((variant) => {
		const variantProp = props === null || props === void 0 ? void 0 : props[variant];
		const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
		if (variantProp === null) return null;
		const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
		return variants[variant][variantKey];
	});
	const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
		let [key, value] = param;
		if (value === void 0) return acc;
		acc[key] = value;
		return acc;
	}, {});
	return cx(base, getVariantClassNames, config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
		let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
		return Object.entries(compoundVariantOptions).every((param) => {
			let [key, value] = param;
			return Array.isArray(value) ? value.includes({
				...defaultVariants,
				...propsWithoutUndefined
			}[key]) : {
				...defaultVariants,
				...propsWithoutUndefined
			}[key] === value;
		}) ? [
			...acc,
			cvClass,
			cvClassName
		] : acc;
	}, []), props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
function cn$1(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			glow: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 luminous-border",
			destructive: "bg-red-500 text-white hover:bg-red-500/90"
		},
		size: {
			sm: "h-8 px-3 text-xs",
			md: "h-9 px-4",
			lg: "h-10 px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, loading, disabled, children, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot$4 : "button", {
		"data-slot": "button",
		"data-variant": variant || "default",
		"data-size": size || "md",
		disabled: disabled || loading,
		"aria-busy": loading ? "true" : void 0,
		className: cn$1(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		type: asChild ? void 0 : "button",
		...props,
		children: loading ? "Saving" : children
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type = "text", invalid, "aria-invalid": ariaInvalid, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		"data-slot": "input",
		"data-size": "md",
		"data-variant": "default",
		"data-invalid": invalid || void 0,
		"aria-invalid": invalid || ariaInvalid || void 0,
		className: cn$1("flex h-9 w-full rounded-md border border-border bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:border-destructive focus-visible:aria-invalid:ring-destructive/40 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, invalid, "aria-invalid": ariaInvalid, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		"data-slot": "textarea",
		"data-size": "md",
		"data-invalid": invalid || void 0,
		"aria-invalid": invalid || ariaInvalid || void 0,
		className: cn$1("flex min-h-[80px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:border-destructive focus-visible:aria-invalid:ring-destructive/40 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var cardVariants = cva("rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-[box-shadow,transform,border-color] duration-[140ms]", {
	variants: { variant: {
		default: "",
		/** Hoverable surface: lift + focus ring. Pair with an onClick or a link. */
		interactive: "cursor-pointer hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-raised focus-within:-translate-y-0.5 focus-within:border-brand/30 focus-within:shadow-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		raised: "shadow-raised",
		glow: "shadow-soft luminous-border"
	} },
	defaultVariants: { variant: "default" }
});
var Card = import_react.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	"data-slot": "card",
	"data-variant": variant || "default",
	className: cn$1(cardVariants({ variant }), className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn$1("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
	ref,
	className: cn$1("text-xl font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
	ref,
	className: cn$1("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn$1("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn$1("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var badgeVariants = cva("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: {
		variant: {
			default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
			secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
			outline: "text-foreground",
			ghost: "border-transparent hover:bg-accent hover:text-accent-foreground",
			warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-500/90"
		},
		size: {
			sm: "px-2 text-[10px] py-0",
			md: "px-2.5 py-0.5 text-xs",
			lg: "px-3 py-1 text-xs"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "md"
	}
});
function Badge$1({ className, variant, size, dot, asChild, children, ...props }) {
	const Comp = asChild ? Slot$4 : "div";
	const dotElement = dot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"data-slot": "badge-dot",
		className: "size-1.5 rounded-full bg-current"
	}) : null;
	if (asChild && dotElement) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		"data-slot": "badge",
		"data-variant": variant || "default",
		"data-size": size || "md",
		className: cn$1(badgeVariants({
			variant,
			size
		}), className),
		...props,
		children: import_react.Children.map(children, (child) => {
			if (import_react.isValidElement(child)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [dotElement, child] });
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [dotElement, child] });
		})
	});
	if (asChild) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		"data-slot": "badge",
		"data-variant": variant || "default",
		"data-size": size || "md",
		className: cn$1(badgeVariants({
			variant,
			size
		}), className),
		...props,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Comp, {
		"data-slot": "badge",
		"data-variant": variant || "default",
		"data-size": size || "md",
		className: cn$1(badgeVariants({
			variant,
			size
		}), className),
		...props,
		children: [dotElement, children]
	});
}
var __defProp$38 = Object.defineProperty;
var __name$38 = (target, value) => __defProp$38(target, "name", {
	value,
	configurable: true
});
// @__NO_SIDE_EFFECTS__
function createContext2(rootComponentName, defaultContext) {
	const Context = import_react.createContext(defaultContext);
	Context.displayName = rootComponentName + "Context";
	const Provider = /* @__PURE__ */ __name$38((props) => {
		const { children, ...context } = props;
		const value = import_react.useMemo(() => context, Object.values(context));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
			value,
			children
		});
	}, "Provider");
	Provider.displayName = rootComponentName + "Provider";
	function useContext2(consumerName, options = {}) {
		const { optional = false } = options;
		const context = import_react.useContext(Context);
		if (context) return context;
		if (defaultContext !== void 0) return defaultContext;
		if (optional) return void 0;
		throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
	}
	__name$38(useContext2, "useContext");
	return [Provider, useContext2];
}
__name$38(createContext2, "createContext");
// @__NO_SIDE_EFFECTS__
function createContextScope(scopeName, createContextScopeDeps = []) {
	let defaultContexts = [];
	function createContext3(rootComponentName, defaultContext) {
		const BaseContext = import_react.createContext(defaultContext);
		BaseContext.displayName = rootComponentName + "Context";
		const index = defaultContexts.length;
		defaultContexts = [...defaultContexts, defaultContext];
		const Provider = /* @__PURE__ */ __name$38((props) => {
			const { scope, children, ...context } = props;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const value = import_react.useMemo(() => context, Object.values(context));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
				value,
				children
			});
		}, "Provider");
		Provider.displayName = rootComponentName + "Provider";
		function useContext2(consumerName, scope, options = {}) {
			const { optional = false } = options;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const context = import_react.useContext(Context);
			if (context) return context;
			if (defaultContext !== void 0) return defaultContext;
			if (optional) return void 0;
			throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
		}
		__name$38(useContext2, "useContext");
		return [Provider, useContext2];
	}
	__name$38(createContext3, "createContext");
	const createScope = /* @__PURE__ */ __name$38(() => {
		const scopeContexts = defaultContexts.map((defaultContext) => {
			return import_react.createContext(defaultContext);
		});
		return /* @__PURE__ */ __name$38(function useScope(scope) {
			const contexts = scope?.[scopeName] || scopeContexts;
			return import_react.useMemo(() => ({ [`__scope${scopeName}`]: {
				...scope,
				[scopeName]: contexts
			} }), [scope, contexts]);
		}, "useScope");
	}, "createScope");
	createScope.scopeName = scopeName;
	return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
__name$38(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
	const baseScope = scopes[0];
	if (scopes.length === 1) return baseScope;
	const createScope = /* @__PURE__ */ __name$38(() => {
		const scopeHooks = scopes.map((createScope2) => ({
			useScope: createScope2(),
			scopeName: createScope2.scopeName
		}));
		return /* @__PURE__ */ __name$38(function useComposedScopes(overrideScopes) {
			const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
				const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
				return {
					...nextScopes2,
					...currentScope
				};
			}, {});
			return import_react.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
		}, "useComposedScopes");
	}, "createScope");
	createScope.scopeName = baseScope.scopeName;
	return createScope;
}
__name$38(composeContextScopes, "composeContextScopes");
var __defProp$37 = Object.defineProperty;
var __name$37 = (target, value) => __defProp$37(target, "name", {
	value,
	configurable: true
});
var canUseDOM$1 = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
	return /* @__PURE__ */ __name$37(function handleEvent(event) {
		originalEventHandler?.(event);
		if (checkForDefaultPrevented === false || !event || !event.defaultPrevented) return ourEventHandler?.(event);
	}, "handleEvent");
}
__name$37(composeEventHandlers, "composeEventHandlers");
function getOwnerWindow(element) {
	if (!canUseDOM$1) throw new Error("Cannot access window outside of the DOM");
	return element?.ownerDocument?.defaultView ?? window;
}
__name$37(getOwnerWindow, "getOwnerWindow");
function getOwnerDocument(element) {
	if (!canUseDOM$1) throw new Error("Cannot access document outside of the DOM");
	return element?.ownerDocument ?? document;
}
__name$37(getOwnerDocument, "getOwnerDocument");
function getActiveElement(node, activeDescendant = false) {
	const { activeElement } = getOwnerDocument(node);
	if (!activeElement?.nodeName) return null;
	if (isFrame(activeElement) && activeElement.contentDocument) return getActiveElement(activeElement.contentDocument.body, activeDescendant);
	if (activeDescendant) {
		const id = activeElement.getAttribute("aria-activedescendant");
		if (id) {
			const element = getOwnerDocument(activeElement).getElementById(id);
			if (element) return element;
		}
	}
	return activeElement;
}
__name$37(getActiveElement, "getActiveElement");
function isFrame(element) {
	return element.tagName === "IFRAME";
}
__name$37(isFrame, "isFrame");
var useLayoutEffect2 = globalThis?.document ? import_react.useLayoutEffect : () => {};
var __defProp$36 = Object.defineProperty;
var __name$36 = (target, value) => __defProp$36(target, "name", {
	value,
	configurable: true
});
var useReactEffectEvent = import_react[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = import_react[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
	if (typeof useReactEffectEvent === "function") return useReactEffectEvent(callback);
	const ref = import_react.useRef(() => {
		throw new Error("Cannot call an event handler while rendering.");
	});
	if (typeof useReactInsertionEffect === "function") useReactInsertionEffect(() => {
		ref.current = callback;
	});
	else useLayoutEffect2(() => {
		ref.current = callback;
	});
	return import_react.useMemo(() => ((...args) => ref.current?.(...args)), []);
}
__name$36(useEffectEvent, "useEffectEvent");
var __defProp$35 = Object.defineProperty;
var __name$35 = (target, value) => __defProp$35(target, "name", {
	value,
	configurable: true
});
var useInsertionEffect = import_react[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({ prop, defaultProp, onChange = /* @__PURE__ */ __name$35(() => {}, "onChange"), caller }) {
	const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
		defaultProp,
		onChange
	});
	const isControlled = prop !== void 0;
	return [isControlled ? prop : uncontrolledProp, import_react.useCallback((nextValue) => {
		if (isControlled) {
			const value2 = isFunction$4(nextValue) ? nextValue(prop) : nextValue;
			if (value2 !== prop) onChangeRef.current?.(value2);
		} else setUncontrolledProp(nextValue);
	}, [
		isControlled,
		prop,
		setUncontrolledProp,
		onChangeRef
	])];
}
__name$35(useControllableState, "useControllableState");
function useUncontrolledState({ defaultProp, onChange }) {
	const [value, setValue] = import_react.useState(defaultProp);
	const prevValueRef = import_react.useRef(value);
	const onChangeRef = import_react.useRef(onChange);
	useInsertionEffect(() => {
		onChangeRef.current = onChange;
	}, [onChange]);
	import_react.useEffect(() => {
		if (prevValueRef.current !== value) {
			onChangeRef.current?.(value);
			prevValueRef.current = value;
		}
	}, [value, prevValueRef]);
	return [
		value,
		setValue,
		onChangeRef
	];
}
__name$35(useUncontrolledState, "useUncontrolledState");
function isFunction$4(value) {
	return typeof value === "function";
}
__name$35(isFunction$4, "isFunction");
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
	const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
	const isControlled = controlledState !== void 0;
	const onChange = useEffectEvent(onChangeProp);
	const args = [{
		...initialArg,
		state: defaultProp
	}];
	if (init) args.push(init);
	const [internalState, dispatch] = import_react.useReducer((state2, action) => {
		if (action.type === SYNC_STATE) return {
			...state2,
			state: action.state
		};
		const next = reducer(state2, action);
		if (isControlled && !Object.is(next.state, state2.state)) onChange(next.state);
		return next;
	}, ...args);
	const uncontrolledState = internalState.state;
	const prevValueRef = import_react.useRef(uncontrolledState);
	import_react.useEffect(() => {
		if (prevValueRef.current !== uncontrolledState) {
			prevValueRef.current = uncontrolledState;
			if (!isControlled) onChange(uncontrolledState);
		}
	}, [
		uncontrolledState,
		prevValueRef,
		isControlled
	]);
	const state = import_react.useMemo(() => {
		if (controlledState !== void 0) return {
			...internalState,
			state: controlledState
		};
		return internalState;
	}, [internalState, controlledState]);
	import_react.useEffect(() => {
		if (isControlled && !Object.is(controlledState, internalState.state)) dispatch({
			type: SYNC_STATE,
			state: controlledState
		});
	}, [
		controlledState,
		internalState.state,
		isControlled
	]);
	return [state, dispatch];
}
__name$35(useControllableStateReducer, "useControllableStateReducer");
var __defProp$34 = Object.defineProperty;
var __name$34 = (target, value) => __defProp$34(target, "name", {
	value,
	configurable: true
});
function useSize(element) {
	const [size, setSize] = import_react.useState(void 0);
	useLayoutEffect2(() => {
		if (element) {
			setSize({
				width: element.offsetWidth,
				height: element.offsetHeight
			});
			let rAF = 0;
			const resizeObserver = new ResizeObserver((entries) => {
				if (!Array.isArray(entries)) return;
				if (!entries.length) return;
				const entry = entries[0];
				window.cancelAnimationFrame(rAF);
				rAF = window.requestAnimationFrame(() => {
					let width;
					let height;
					if ("borderBoxSize" in entry) {
						const borderSizeEntry = entry["borderBoxSize"];
						const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
						width = borderSize["inlineSize"];
						height = borderSize["blockSize"];
					} else {
						width = element.offsetWidth;
						height = element.offsetHeight;
					}
					setSize({
						width,
						height
					});
				});
			});
			resizeObserver.observe(element, { box: "border-box" });
			return () => {
				window.cancelAnimationFrame(rAF);
				resizeObserver.unobserve(element);
			};
		} else setSize(void 0);
	}, [element]);
	return size;
}
__name$34(useSize, "useSize");
var __defProp$33 = Object.defineProperty;
var __name$33 = (target, value) => __defProp$33(target, "name", {
	value,
	configurable: true
});
function useStateMachine(initialState, machine) {
	return import_react.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
__name$33(useStateMachine, "useStateMachine");
var Presence = /* @__PURE__ */ __name$33((props) => {
	const { present, children } = props;
	const presence = usePresence(present);
	const child = typeof children === "function" ? children({ present: presence.isPresent }) : import_react.Children.only(children);
	const ref = useStableComposedRefs(presence.ref, getElementRef(child));
	return typeof children === "function" || presence.isPresent ? import_react.cloneElement(child, { ref }) : null;
}, "Presence");
function usePresence(present) {
	const [node, setNode] = import_react.useState();
	const stylesRef = import_react.useRef(null);
	const prevPresentRef = import_react.useRef(present);
	const prevAnimationNameRef = import_react.useRef("none");
	const mountAnimationNameRef = import_react.useRef(void 0);
	const [state, send] = useStateMachine(present ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	import_react.useEffect(() => {
		if (state === "mounted") {
			prevAnimationNameRef.current = mountAnimationNameRef.current ?? getAnimationName(stylesRef.current);
			mountAnimationNameRef.current = void 0;
		} else prevAnimationNameRef.current = "none";
	}, [state]);
	useLayoutEffect2(() => {
		const styles = stylesRef.current;
		const wasPresent = prevPresentRef.current;
		if (wasPresent !== present) {
			const prevAnimationName = prevAnimationNameRef.current;
			const currentAnimationName = getAnimationName(styles);
			if (present) {
				mountAnimationNameRef.current = currentAnimationName;
				send("MOUNT");
			} else if (currentAnimationName === "none" || styles?.display === "none") send("UNMOUNT");
			else if (wasPresent && prevAnimationName !== currentAnimationName) send("ANIMATION_OUT");
			else send("UNMOUNT");
			prevPresentRef.current = present;
		}
	}, [present, send]);
	useLayoutEffect2(() => {
		if (node) {
			let timeoutId;
			const ownerWindow = node.ownerDocument.defaultView ?? window;
			const handleAnimationEnd = /* @__PURE__ */ __name$33((event) => {
				const isCurrentAnimation = getAnimationName(stylesRef.current).includes(CSS.escape(event.animationName));
				if (event.target === node && isCurrentAnimation) {
					send("ANIMATION_END");
					if (!prevPresentRef.current) {
						const currentFillMode = node.style.animationFillMode;
						node.style.animationFillMode = "forwards";
						timeoutId = ownerWindow.setTimeout(() => {
							if (node.style.animationFillMode === "forwards") node.style.animationFillMode = currentFillMode;
						});
					}
				}
			}, "handleAnimationEnd");
			const handleAnimationStart = /* @__PURE__ */ __name$33((event) => {
				if (event.target === node) prevAnimationNameRef.current = getAnimationName(stylesRef.current);
			}, "handleAnimationStart");
			node.addEventListener("animationstart", handleAnimationStart);
			node.addEventListener("animationcancel", handleAnimationEnd);
			node.addEventListener("animationend", handleAnimationEnd);
			return () => {
				ownerWindow.clearTimeout(timeoutId);
				node.removeEventListener("animationstart", handleAnimationStart);
				node.removeEventListener("animationcancel", handleAnimationEnd);
				node.removeEventListener("animationend", handleAnimationEnd);
			};
		} else send("ANIMATION_END");
	}, [node, send]);
	return {
		isPresent: ["mounted", "unmountSuspended"].includes(state),
		ref: import_react.useCallback((node2) => {
			if (node2) {
				const styles = getComputedStyle(node2);
				stylesRef.current = styles;
				mountAnimationNameRef.current = getAnimationName(styles);
			} else stylesRef.current = null;
			setNode(node2);
		}, [])
	};
}
__name$33(usePresence, "usePresence");
function setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$33(setRef, "setRef");
function useStableComposedRefs(...refs) {
	const refsRef = import_react.useRef(refs);
	refsRef.current = refs;
	return import_react.useCallback((node) => {
		const currentRefs = refsRef.current;
		let hasCleanup = false;
		const cleanups = currentRefs.map((ref) => {
			const cleanup = setRef(ref, node);
			if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup === "function") cleanup();
				else setRef(currentRefs[i], null);
			}
		};
	}, []);
}
__name$33(useStableComposedRefs, "useStableComposedRefs");
function getAnimationName(styles) {
	return styles?.animationName || "none";
}
__name$33(getAnimationName, "getAnimationName");
function getElementRef(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$33(getElementRef, "getElementRef");
var __defProp$32 = Object.defineProperty;
var __name$32 = (target, value) => __defProp$32(target, "name", {
	value,
	configurable: true
});
var Primitive = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((primitive, node) => {
	const Slot = /* @__PURE__ */ createSlot(`Primitive.${node}`);
	const Node = import_react.forwardRef((props, forwardedRef) => {
		const { asChild, ...primitiveProps } = props;
		const Comp = asChild ? Slot : node;
		if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
			...primitiveProps,
			ref: forwardedRef
		});
	});
	Node.displayName = `Primitive.${node}`;
	return {
		...primitive,
		[node]: Node
	};
}, {});
function dispatchDiscreteCustomEvent(target, event) {
	if (target) import_react_dom.flushSync(() => target.dispatchEvent(event));
}
__name$32(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
var __defProp$31 = Object.defineProperty;
var __name$31 = (target, value) => __defProp$31(target, "name", {
	value,
	configurable: true
});
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = /* @__PURE__ */ createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
	const { __scopeCheckbox, checked: checkedProp, children, defaultChecked, disabled, form, name, onCheckedChange, required, value = "on", internal_do_not_use_render } = props;
	const [checked, setChecked] = useControllableState({
		prop: checkedProp,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange,
		caller: CHECKBOX_NAME
	});
	const [control, setControl] = import_react.useState(null);
	const [bubbleInput, setBubbleInput] = import_react.useState(null);
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const [userInteractionCount, onUserInteraction] = import_react.useReducer((count) => count + 1, 0);
	const isFormControl = control ? !!form || !!control.closest("form") : true;
	const context = {
		checked,
		disabled,
		setChecked,
		control,
		setControl,
		name,
		form,
		value,
		hasConsumerStoppedPropagationRef,
		userInteractionCount,
		onUserInteraction,
		required,
		defaultChecked: isIndeterminate$1(defaultChecked) ? false : defaultChecked,
		isFormControl,
		bubbleInput,
		setBubbleInput
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProviderImpl, {
		scope: __scopeCheckbox,
		...context,
		children: isFunction$3(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
	});
}
__name$31(CheckboxProvider, "CheckboxProvider");
var TRIGGER_NAME$11 = "CheckboxTrigger";
var CheckboxTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$31(function CheckboxTrigger2({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) {
	const { control, value, disabled, checked, required, setControl, setChecked, hasConsumerStoppedPropagationRef, onUserInteraction, isFormControl, bubbleInput } = useCheckboxContext(TRIGGER_NAME$11, __scopeCheckbox);
	const composedRefs = useComposedRefs(forwardedRef, setControl);
	const initialCheckedStateRef = import_react.useRef(checked);
	import_react.useEffect(() => {
		const form = control?.form;
		if (form) {
			const reset = /* @__PURE__ */ __name$31(() => setChecked(initialCheckedStateRef.current), "reset");
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [control, setChecked]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": isIndeterminate$1(checked) ? "mixed" : checked,
		"aria-required": required,
		"data-state": getState$6(checked),
		"data-disabled": disabled ? "" : void 0,
		disabled,
		value,
		...checkboxProps,
		ref: composedRefs,
		onKeyDown: composeEventHandlers(onKeyDown, (event) => {
			if (event.key === "Enter") event.preventDefault();
		}),
		onClick: composeEventHandlers(onClick, (event) => {
			onUserInteraction();
			setChecked((prevChecked) => isIndeterminate$1(prevChecked) ? true : !prevChecked);
			if (bubbleInput && isFormControl) {
				hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
				if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
			}
		})
	});
}, "CheckboxTrigger"));
var Checkbox$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$31(function Checkbox2(props, forwardedRef) {
	const { __scopeCheckbox, name, checked, defaultChecked, required, disabled, value, onCheckedChange, form, ...checkboxProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProvider, {
		__scopeCheckbox,
		checked,
		defaultChecked,
		disabled,
		required,
		onCheckedChange,
		name,
		form,
		value,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxTrigger, {
			...checkboxProps,
			ref: forwardedRef,
			__scopeCheckbox
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxBubbleInput, { __scopeCheckbox })] })
	});
}, "Checkbox"));
var INDICATOR_NAME$2 = "CheckboxIndicator";
var CheckboxIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$31(function CheckboxIndicator2(props, forwardedRef) {
	const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
	const context = useCheckboxContext(INDICATOR_NAME$2, __scopeCheckbox);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isIndeterminate$1(context.checked) || context.checked === true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			"data-state": getState$6(context.checked),
			"data-disabled": context.disabled ? "" : void 0,
			...indicatorProps,
			ref: forwardedRef,
			style: {
				pointerEvents: "none",
				...props.style
			}
		})
	});
}, "CheckboxIndicator"));
var BUBBLE_INPUT_NAME$3 = "CheckboxBubbleInput";
var CheckboxBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$31(function CheckboxBubbleInput2({ __scopeCheckbox, onClick, ...props }, forwardedRef) {
	const { control, hasConsumerStoppedPropagationRef, userInteractionCount, checked, defaultChecked, required, disabled, name, value, form, bubbleInput, setBubbleInput } = useCheckboxContext(BUBBLE_INPUT_NAME$3, __scopeCheckbox);
	const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
	const controlSize = useSize(control);
	const shouldStopClickPropagationRef = import_react.useRef(false);
	const prevCheckedRef = import_react.useRef(checked);
	const prevUserInteractionCountRef = import_react.useRef(userInteractionCount);
	import_react.useEffect(() => {
		const input = bubbleInput;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		const isUserInteraction = userInteractionCount !== prevUserInteractionCountRef.current;
		prevUserInteractionCountRef.current = userInteractionCount;
		const checkedChanged = prevCheckedRef.current !== checked;
		prevCheckedRef.current = checked;
		const bubbles = !(isUserInteraction && hasConsumerStoppedPropagationRef.current);
		if (checkedChanged && setChecked) {
			shouldStopClickPropagationRef.current = !isUserInteraction;
			const event = new Event("click", { bubbles });
			input.indeterminate = isIndeterminate$1(checked);
			setChecked.call(input, isIndeterminate$1(checked) ? false : checked);
			input.dispatchEvent(event);
			shouldStopClickPropagationRef.current = false;
		}
	}, [
		bubbleInput,
		checked,
		hasConsumerStoppedPropagationRef,
		userInteractionCount
	]);
	const defaultCheckedRef = import_react.useRef(isIndeterminate$1(checked) ? false : checked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "checkbox",
		"aria-hidden": true,
		defaultChecked: defaultChecked ?? defaultCheckedRef.current,
		required,
		disabled,
		name,
		value,
		form,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		onClick: composeEventHandlers(onClick, (event) => {
			if (shouldStopClickPropagationRef.current) event.stopPropagation();
		}),
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
}, "CheckboxBubbleInput"));
function isFunction$3(value) {
	return typeof value === "function";
}
__name$31(isFunction$3, "isFunction");
function isIndeterminate$1(checked) {
	return checked === "indeterminate";
}
__name$31(isIndeterminate$1, "isIndeterminate");
function getState$6(checked) {
	return isIndeterminate$1(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
__name$31(getState$6, "getState");
var checkboxVariants = cva("peer flex shrink-0 items-center justify-center border bg-surface text-brand-foreground shadow-soft outline-none transition-[background-color,border-color,color,transform] duration-[140ms] ease-out-quart hover:border-border-strong aria-invalid:border-destructive active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-brand data-[state=checked]:bg-brand data-[state=indeterminate]:border-brand data-[state=indeterminate]:bg-brand", {
	variants: { size: {
		sm: "size-4 rounded-[5px] [&_svg]:size-2.5",
		md: "size-5 rounded-md [&_svg]:size-3",
		lg: "size-6 rounded-md [&_svg]:size-3.5"
	} },
	defaultVariants: { size: "md" }
});
function Checkbox({ className, size, invalid, "aria-invalid": ariaInvalidProp, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
		"data-slot": "checkbox",
		"data-size": size ?? "md",
		"data-invalid": invalid || void 0,
		"aria-invalid": invalid || ariaInvalidProp,
		className: cn$1(checkboxVariants({ size }), className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxIndicator, {
			"data-slot": "checkbox-indicator",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 12 12",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": true,
				className: "hidden [[data-state=checked]_&]:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 6.5 4.75 8.75 9.5 3.5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 12 12",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				"aria-hidden": true,
				className: "hidden [[data-state=indeterminate]_&]:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 6h7" })
			})]
		})
	});
}
var alertVariants = cva("relative flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-sm [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:mt-0.5", {
	variants: {
		variant: {
			default: "border-border bg-muted text-foreground",
			brand: "border-brand/25 bg-brand-soft text-brand-soft-foreground",
			info: "border-info/25 bg-info-soft text-info-soft-foreground",
			success: "border-success/25 bg-success-soft text-success-soft-foreground",
			warning: "border-warning/25 bg-warning-soft text-warning-soft-foreground",
			destructive: "border-destructive/25 bg-destructive-soft text-destructive-soft-foreground"
		},
		size: {
			sm: "px-3 py-2 text-xs [&_svg]:size-3.5",
			md: "px-4 py-3 text-sm",
			lg: "px-5 py-4 text-base [&_svg]:size-5"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "md"
	}
});
var Alert = import_react.forwardRef(({ className, variant, size, icon, children, onDismiss, dismissLabel = "Dismiss", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	ref,
	"data-slot": "alert",
	"data-variant": variant || "default",
	"data-size": size || "md",
	"data-dismissible": onDismiss ? "true" : void 0,
	className: cn$1(alertVariants({
		variant,
		size
	}), className),
	...props,
	children: [
		icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-slot": "alert-icon",
			"aria-hidden": "true",
			className: "contents",
			children: icon
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-slot": "alert-body",
			className: "flex-1 min-w-0",
			children
		}),
		onDismiss ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"data-slot": "alert-dismiss",
			"aria-label": dismissLabel,
			onClick: onDismiss,
			className: "-mr-1 -mt-1 self-start rounded-md p-1 text-current opacity-70 outline-none transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				"aria-hidden": "true",
				className: "size-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6 6 18M6 6l12 12" })
			})
		}) : null
	]
}));
Alert.displayName = "Alert";
var AlertTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
	ref,
	"data-slot": "alert-title",
	className: cn$1("font-medium leading-snug", className),
	...props
}));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	"data-slot": "alert-description",
	className: cn$1("mt-1 text-sm opacity-90 [&_p]:leading-relaxed", className),
	...props
}));
AlertDescription.displayName = "AlertDescription";
var separatorVariants = cva("shrink-0 bg-border", {
	variants: { orientation: {
		horizontal: "h-px w-full",
		vertical: "h-full w-px"
	} },
	defaultVariants: { orientation: "horizontal" }
});
var Separator = import_react.forwardRef(({ className, orientation, decorative = false, role, ...props }, ref) => {
	const dir = orientation ?? "horizontal";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		"data-slot": "separator",
		"data-orientation": dir,
		role: decorative ? void 0 : role || "separator",
		"aria-orientation": decorative ? void 0 : dir,
		"aria-hidden": decorative || void 0,
		className: cn$1(separatorVariants({ orientation: dir }), className),
		...props
	});
});
Separator.displayName = "Separator";
var __defProp$30 = Object.defineProperty;
var __name$30 = (target, value) => __defProp$30(target, "name", {
	value,
	configurable: true
});
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext, createProgressScope] = /* @__PURE__ */ createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$30(function Progress2(props, forwardedRef) {
	const { __scopeProgress, value: valueProp = null, max: maxProp, getValueLabel = defaultGetValueLabel, ...progressProps } = props;
	if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
	const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
	if (valueProp !== null && !isValidValueNumber(valueProp, max)) console.error(getInvalidValueError(`${valueProp}`, "Progress"));
	const value = isValidValueNumber(valueProp, max) ? valueProp : null;
	const valueLabel = isNumber$1(value) ? getValueLabel(value, max) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressProvider, {
		scope: __scopeProgress,
		value,
		max,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"aria-valuemax": max,
			"aria-valuemin": 0,
			"aria-valuenow": isNumber$1(value) ? value : void 0,
			"aria-valuetext": valueLabel,
			role: "progressbar",
			"data-state": getProgressState(value, max),
			"data-value": value ?? void 0,
			"data-max": max,
			...progressProps,
			ref: forwardedRef
		})
	});
}, "Progress"));
var INDICATOR_NAME$1 = "ProgressIndicator";
var ProgressIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$30(function ProgressIndicator2(props, forwardedRef) {
	const { __scopeProgress, ...indicatorProps } = props;
	const context = useProgressContext(INDICATOR_NAME$1, __scopeProgress);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getProgressState(context.value, context.max),
		"data-value": context.value ?? void 0,
		"data-max": context.max,
		...indicatorProps,
		ref: forwardedRef
	});
}, "ProgressIndicator"));
function defaultGetValueLabel(value, max) {
	return `${Math.round(value / max * 100)}%`;
}
__name$30(defaultGetValueLabel, "defaultGetValueLabel");
function getProgressState(value, maxValue) {
	return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
__name$30(getProgressState, "getProgressState");
function isNumber$1(value) {
	return typeof value === "number";
}
__name$30(isNumber$1, "isNumber");
function isValidMaxNumber(max) {
	return isNumber$1(max) && !isNaN(max) && max > 0;
}
__name$30(isValidMaxNumber, "isValidMaxNumber");
function isValidValueNumber(value, max) {
	return isNumber$1(value) && !isNaN(value) && value <= max && value >= 0;
}
__name$30(isValidValueNumber, "isValidValueNumber");
function getInvalidMaxError(propValue, componentName) {
	return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
__name$30(getInvalidMaxError, "getInvalidMaxError");
function getInvalidValueError(propValue, componentName) {
	return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
__name$30(getInvalidValueError, "getInvalidValueError");
var progressVariants = cva("relative w-full overflow-hidden rounded-full bg-muted", {
	variants: {
		variant: {
			default: "bg-muted",
			brand: "bg-brand/20",
			destructive: "bg-destructive/20"
		},
		size: {
			sm: "h-1.5",
			md: "h-2.5",
			lg: "h-4"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "md"
	}
});
var progressIndicatorVariants = cva("h-full w-full origin-left rounded-full bg-primary transition-transform duration-[300ms] ease-out", {
	variants: { variant: {
		default: "bg-primary",
		brand: "bg-brand",
		destructive: "bg-destructive"
	} },
	defaultVariants: { variant: "default" }
});
var Progress = import_react.forwardRef(({ className, variant, size, value, max = 100, valueText, ...props }, ref) => {
	const clamped = typeof value === "number" ? Math.min(Math.max(value, 0), max) : void 0;
	const percent = typeof clamped === "number" && max > 0 ? clamped / max * 100 : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress$1, {
		ref,
		"data-slot": "progress",
		"data-variant": variant || "default",
		"data-size": size || "md",
		"aria-valuemin": 0,
		"aria-valuemax": max,
		"aria-valuenow": clamped,
		"aria-valuetext": valueText,
		className: cn$1(progressVariants({
			variant,
			size
		}), className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressIndicator, {
			"data-slot": "progress-indicator",
			"data-variant": variant || "default",
			className: progressIndicatorVariants({ variant }),
			style: { transform: `translateX(-${100 - (percent ?? 100)}%)` }
		})
	});
});
Progress.displayName = "Progress";
var __defProp$29 = Object.defineProperty;
var __name$29 = (target, value) => __defProp$29(target, "name", {
	value,
	configurable: true
});
var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = /* @__PURE__ */ createContextScope(SWITCH_NAME);
var [SwitchProviderImpl, useSwitchContext] = createSwitchContext(SWITCH_NAME);
function SwitchProvider(props) {
	const { __scopeSwitch, checked: checkedProp, children, defaultChecked, disabled, form, name, onCheckedChange, required, value = "on", internal_do_not_use_render } = props;
	const [checked, setChecked] = useControllableState({
		prop: checkedProp,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange,
		caller: SWITCH_NAME
	});
	const [control, setControl] = import_react.useState(null);
	const [bubbleInput, setBubbleInput] = import_react.useState(null);
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const [userInteractionCount, onUserInteraction] = import_react.useReducer((count) => count + 1, 0);
	const context = {
		checked,
		setChecked,
		disabled,
		control,
		setControl,
		name,
		form,
		value,
		hasConsumerStoppedPropagationRef,
		userInteractionCount,
		onUserInteraction,
		required,
		defaultChecked,
		isFormControl: control ? !!form || !!control.closest("form") : true,
		bubbleInput,
		setBubbleInput
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchProviderImpl, {
		scope: __scopeSwitch,
		...context,
		children: isFunction$2(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
	});
}
__name$29(SwitchProvider, "SwitchProvider");
var TRIGGER_NAME$10 = "SwitchTrigger";
var SwitchTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$29(function SwitchTrigger2({ __scopeSwitch, onClick, ...switchProps }, forwardedRef) {
	const { control, form, value, disabled, checked, required, setControl, setChecked, hasConsumerStoppedPropagationRef, onUserInteraction, isFormControl, bubbleInput } = useSwitchContext(TRIGGER_NAME$10, __scopeSwitch);
	const composedRefs = useComposedRefs(forwardedRef, setControl);
	const initialCheckedStateRef = import_react.useRef(checked);
	import_react.useEffect(() => {
		const associatedForm = form ? control?.ownerDocument.getElementById(form) : control?.form;
		if (associatedForm instanceof HTMLFormElement) {
			const reset = /* @__PURE__ */ __name$29(() => setChecked(initialCheckedStateRef.current), "reset");
			associatedForm.addEventListener("reset", reset);
			return () => associatedForm.removeEventListener("reset", reset);
		}
	}, [
		control,
		form,
		setChecked
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		role: "switch",
		"aria-checked": checked,
		"aria-required": required,
		"data-state": getState$5(checked),
		"data-disabled": disabled ? "" : void 0,
		disabled,
		value,
		...switchProps,
		ref: composedRefs,
		onClick: composeEventHandlers(onClick, (event) => {
			onUserInteraction();
			setChecked((prevChecked) => !prevChecked);
			if (bubbleInput && isFormControl) {
				hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
				if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
			}
		})
	});
}, "SwitchTrigger"));
var Switch$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$29(function Switch2(props, forwardedRef) {
	const { __scopeSwitch, name, checked, defaultChecked, required, disabled, value, onCheckedChange, form, ...switchProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchProvider, {
		__scopeSwitch,
		checked,
		defaultChecked,
		disabled,
		required,
		onCheckedChange,
		name,
		form,
		value,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchTrigger, {
			...switchProps,
			ref: forwardedRef,
			__scopeSwitch
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchBubbleInput, { __scopeSwitch })] })
	});
}, "Switch"));
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$29(function SwitchThumb2(props, forwardedRef) {
	const { __scopeSwitch, ...thumbProps } = props;
	const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-state": getState$5(context.checked),
		"data-disabled": context.disabled ? "" : void 0,
		...thumbProps,
		ref: forwardedRef
	});
}, "SwitchThumb"));
var BUBBLE_INPUT_NAME$2 = "SwitchBubbleInput";
var SwitchBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$29(function SwitchBubbleInput2({ __scopeSwitch, onClick, ...props }, forwardedRef) {
	const { control, hasConsumerStoppedPropagationRef, userInteractionCount, checked, defaultChecked, required, disabled, name, value, form, bubbleInput, setBubbleInput } = useSwitchContext(BUBBLE_INPUT_NAME$2, __scopeSwitch);
	const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
	const controlSize = useSize(control);
	const shouldStopClickPropagationRef = import_react.useRef(false);
	const prevCheckedRef = import_react.useRef(checked);
	const prevUserInteractionCountRef = import_react.useRef(userInteractionCount);
	import_react.useEffect(() => {
		const input = bubbleInput;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		const isUserInteraction = userInteractionCount !== prevUserInteractionCountRef.current;
		prevUserInteractionCountRef.current = userInteractionCount;
		const checkedChanged = prevCheckedRef.current !== checked;
		prevCheckedRef.current = checked;
		const bubbles = !(isUserInteraction && hasConsumerStoppedPropagationRef.current);
		if (checkedChanged && setChecked) {
			shouldStopClickPropagationRef.current = !isUserInteraction;
			const event = new Event("click", { bubbles });
			setChecked.call(input, checked);
			input.dispatchEvent(event);
			shouldStopClickPropagationRef.current = false;
		}
	}, [
		bubbleInput,
		checked,
		hasConsumerStoppedPropagationRef,
		userInteractionCount
	]);
	const defaultCheckedRef = import_react.useRef(checked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "checkbox",
		"aria-hidden": true,
		defaultChecked: defaultChecked ?? defaultCheckedRef.current,
		required,
		disabled,
		name,
		value,
		form,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		onClick: composeEventHandlers(onClick, (event) => {
			if (shouldStopClickPropagationRef.current) event.stopPropagation();
		}),
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
}, "SwitchBubbleInput"));
function isFunction$2(value) {
	return typeof value === "function";
}
__name$29(isFunction$2, "isFunction");
function getState$5(checked) {
	return checked ? "checked" : "unchecked";
}
__name$29(getState$5, "getState");
var switchVariants = cva("peer inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent outline-none transition-colors duration-[140ms] ease-out-quart focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", {
	variants: {
		variant: {
			default: "",
			brand: "data-[state=checked]:bg-brand",
			destructive: "data-[state=checked]:bg-destructive"
		},
		size: {
			sm: "h-5 w-9",
			md: "h-6 w-11",
			lg: "h-7 w-12"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "md"
	}
});
var switchThumbVariants = cva("pointer-events-none block rounded-full bg-white shadow-soft transition-transform duration-[140ms] ease-out-quart data-[state=unchecked]:shadow-none", {
	variants: { size: {
		sm: "size-4 translate-x-0.5 data-[state=checked]:translate-x-[18px]",
		md: "size-5 translate-x-0.5 data-[state=checked]:translate-x-[22px]",
		lg: "size-6 translate-x-0.5 data-[state=checked]:translate-x-[22px]"
	} },
	defaultVariants: { size: "md" }
});
var Switch = import_react.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	ref,
	"data-slot": "switch",
	"data-variant": variant || "default",
	"data-size": size || "md",
	className: cn$1(switchVariants({
		variant,
		size
	}), className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, {
		"data-slot": "switch-thumb",
		className: cn$1(switchThumbVariants({ size }))
	})
}));
Switch.displayName = "Switch";
var __defProp$28 = Object.defineProperty;
var __name$28 = (target, value) => __defProp$28(target, "name", {
	value,
	configurable: true
});
// @__NO_SIDE_EFFECTS__
function createCollection(name) {
	const PROVIDER_NAME = name + "CollectionProvider";
	const [createCollectionContext, createCollectionScope] = /* @__PURE__ */ createContextScope(PROVIDER_NAME);
	const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	});
	const CollectionProvider = /* @__PURE__ */ __name$28((props) => {
		const { scope, children } = props;
		const ref = import_react.useRef(null);
		const itemMap = import_react.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionProviderImpl, {
			scope,
			itemMap,
			collectionRef: ref,
			children
		});
	}, "CollectionProvider");
	CollectionProvider.displayName = PROVIDER_NAME;
	const COLLECTION_SLOT_NAME = name + "CollectionSlot";
	const CollectionSlotImpl = /* @__PURE__ */ createSlot(COLLECTION_SLOT_NAME);
	const CollectionSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children } = props;
		const composedRefs = useComposedRefs(forwardedRef, useCollectionContext(COLLECTION_SLOT_NAME, scope).collectionRef);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionSlotImpl, {
			ref: composedRefs,
			children
		});
	});
	CollectionSlot.displayName = COLLECTION_SLOT_NAME;
	const ITEM_SLOT_NAME = name + "CollectionItemSlot";
	const ITEM_DATA_ATTR = "data-radix-collection-item";
	const CollectionItemSlotImpl = /* @__PURE__ */ createSlot(ITEM_SLOT_NAME);
	const CollectionItemSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children, ...itemData } = props;
		const ref = import_react.useRef(null);
		const composedRefs = useComposedRefs(forwardedRef, ref);
		const context = useCollectionContext(ITEM_SLOT_NAME, scope);
		import_react.useEffect(() => {
			context.itemMap.set(ref, {
				ref,
				...itemData
			});
			return () => void context.itemMap.delete(ref);
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionItemSlotImpl, {
			[ITEM_DATA_ATTR]: "",
			ref: composedRefs,
			children
		});
	});
	CollectionItemSlot.displayName = ITEM_SLOT_NAME;
	function useCollection(scope) {
		const context = useCollectionContext(name + "CollectionConsumer", scope);
		return import_react.useCallback(() => {
			const collectionNode = context.collectionRef.current;
			if (!collectionNode) return [];
			const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
			return Array.from(context.itemMap.values()).sort((a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));
		}, [context.collectionRef, context.itemMap]);
	}
	__name$28(useCollection, "useCollection");
	return [
		{
			Provider: CollectionProvider,
			Slot: CollectionSlot,
			ItemSlot: CollectionItemSlot
		},
		useCollection,
		createCollectionScope
	];
}
__name$28(createCollection, "createCollection");
var __instanciated = /* @__PURE__ */ new WeakMap();
var OrderedDict = class _OrderedDict extends Map {
	static {
		__name$28(this, "OrderedDict");
	}
	#keys;
	constructor(entries) {
		super(entries);
		this.#keys = [...super.keys()];
		__instanciated.set(this, true);
	}
	set(key, value) {
		if (__instanciated.get(this)) {
			if (this.has(key)) this.#keys[this.#keys.indexOf(key)] = key;
			else this.#keys.push(key);
		}
		super.set(key, value);
		return this;
	}
	insert(index, key, value) {
		const has = this.has(key);
		const length = this.#keys.length;
		const relativeIndex = toSafeInteger(index);
		let actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
		const safeIndex = actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
		if (safeIndex === this.size || has && safeIndex === this.size - 1 || safeIndex === -1) {
			this.set(key, value);
			return this;
		}
		const size = this.size + (has ? 0 : 1);
		if (relativeIndex < 0) actualIndex++;
		const keys = [...this.#keys];
		let nextValue;
		let shouldSkip = false;
		for (let i = actualIndex; i < size; i++) if (actualIndex === i) {
			let nextKey = keys[i];
			if (keys[i] === key) nextKey = keys[i + 1];
			if (has) this.delete(key);
			nextValue = this.get(nextKey);
			this.set(key, value);
		} else {
			if (!shouldSkip && keys[i - 1] === key) shouldSkip = true;
			const currentKey = keys[shouldSkip ? i : i - 1];
			const currentValue = nextValue;
			nextValue = this.get(currentKey);
			this.delete(currentKey);
			this.set(currentKey, currentValue);
		}
		return this;
	}
	with(index, key, value) {
		const copy = new _OrderedDict(this);
		copy.insert(index, key, value);
		return copy;
	}
	before(key) {
		const index = this.#keys.indexOf(key) - 1;
		if (index < 0) return;
		return this.entryAt(index);
	}
	/**
	* Sets a new key-value pair at the position before the given key.
	*/
	setBefore(key, newKey, value) {
		const index = this.#keys.indexOf(key);
		if (index === -1) return this;
		return this.insert(index, newKey, value);
	}
	after(key) {
		let index = this.#keys.indexOf(key);
		index = index === -1 || index === this.size - 1 ? -1 : index + 1;
		if (index === -1) return;
		return this.entryAt(index);
	}
	/**
	* Sets a new key-value pair at the position after the given key.
	*/
	setAfter(key, newKey, value) {
		const index = this.#keys.indexOf(key);
		if (index === -1) return this;
		return this.insert(index + 1, newKey, value);
	}
	first() {
		return this.entryAt(0);
	}
	last() {
		return this.entryAt(-1);
	}
	clear() {
		this.#keys = [];
		return super.clear();
	}
	delete(key) {
		const deleted = super.delete(key);
		if (deleted) this.#keys.splice(this.#keys.indexOf(key), 1);
		return deleted;
	}
	deleteAt(index) {
		const key = this.keyAt(index);
		if (key !== void 0) return this.delete(key);
		return false;
	}
	at(index) {
		const key = at(this.#keys, index);
		if (key !== void 0) return this.get(key);
	}
	entryAt(index) {
		const key = at(this.#keys, index);
		if (key !== void 0) return [key, this.get(key)];
	}
	indexOf(key) {
		return this.#keys.indexOf(key);
	}
	keyAt(index) {
		return at(this.#keys, index);
	}
	from(key, offset) {
		const index = this.indexOf(key);
		if (index === -1) return;
		let dest = index + offset;
		if (dest < 0) dest = 0;
		if (dest >= this.size) dest = this.size - 1;
		return this.at(dest);
	}
	keyFrom(key, offset) {
		const index = this.indexOf(key);
		if (index === -1) return;
		let dest = index + offset;
		if (dest < 0) dest = 0;
		if (dest >= this.size) dest = this.size - 1;
		return this.keyAt(dest);
	}
	find(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return entry;
			index++;
		}
	}
	findIndex(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return index;
			index++;
		}
		return -1;
	}
	filter(predicate, thisArg) {
		const entries = [];
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) entries.push(entry);
			index++;
		}
		return new _OrderedDict(entries);
	}
	map(callbackfn, thisArg) {
		const entries = [];
		let index = 0;
		for (const entry of this) {
			entries.push([entry[0], Reflect.apply(callbackfn, thisArg, [
				entry,
				index,
				this
			])]);
			index++;
		}
		return new _OrderedDict(entries);
	}
	reduce(...args) {
		const [callbackfn, initialValue] = args;
		let index = 0;
		let accumulator = initialValue ?? this.at(0);
		for (const entry of this) {
			if (index === 0 && args.length === 1) accumulator = entry;
			else accumulator = Reflect.apply(callbackfn, this, [
				accumulator,
				entry,
				index,
				this
			]);
			index++;
		}
		return accumulator;
	}
	reduceRight(...args) {
		const [callbackfn, initialValue] = args;
		let accumulator = initialValue ?? this.at(-1);
		for (let index = this.size - 1; index >= 0; index--) {
			const entry = this.at(index);
			if (index === this.size - 1 && args.length === 1) accumulator = entry;
			else accumulator = Reflect.apply(callbackfn, this, [
				accumulator,
				entry,
				index,
				this
			]);
		}
		return accumulator;
	}
	toSorted(compareFn) {
		const entries = [...this.entries()].sort(compareFn);
		return new _OrderedDict(entries);
	}
	toReversed() {
		const reversed = new _OrderedDict();
		for (let index = this.size - 1; index >= 0; index--) {
			const key = this.keyAt(index);
			const element = this.get(key);
			reversed.set(key, element);
		}
		return reversed;
	}
	toSpliced(...args) {
		const entries = [...this.entries()];
		entries.splice(...args);
		return new _OrderedDict(entries);
	}
	slice(start, end) {
		const result = new _OrderedDict();
		let stop = this.size - 1;
		if (start === void 0) return result;
		if (start < 0) start = start + this.size;
		if (end !== void 0 && end > 0) stop = end - 1;
		for (let index = start; index <= stop; index++) {
			const key = this.keyAt(index);
			const element = this.get(key);
			result.set(key, element);
		}
		return result;
	}
	every(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (!Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return false;
			index++;
		}
		return true;
	}
	some(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return true;
			index++;
		}
		return false;
	}
};
function at(array, index) {
	if ("at" in Array.prototype) return Array.prototype.at.call(array, index);
	const actualIndex = toSafeIndex(array, index);
	return actualIndex === -1 ? void 0 : array[actualIndex];
}
__name$28(at, "at");
function toSafeIndex(array, index) {
	const length = array.length;
	const relativeIndex = toSafeInteger(index);
	const actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
	return actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
}
__name$28(toSafeIndex, "toSafeIndex");
function toSafeInteger(number) {
	return number !== number || number === 0 ? 0 : Math.trunc(number);
}
__name$28(toSafeInteger, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function createCollection2(name) {
	const PROVIDER_NAME = name + "CollectionProvider";
	const [createCollectionContext, createCollectionScope] = /* @__PURE__ */ createContextScope(PROVIDER_NAME);
	const [CollectionContextProvider, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new OrderedDict(),
		setItemMap: /* @__PURE__ */ __name$28(() => void 0, "setItemMap")
	});
	const CollectionProvider = /* @__PURE__ */ __name$28(({ state, ...props }) => {
		return state ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionProviderImpl, {
			...props,
			state
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionInit, { ...props });
	}, "CollectionProvider");
	CollectionProvider.displayName = PROVIDER_NAME;
	const CollectionInit = /* @__PURE__ */ __name$28((props) => {
		const state = useInitCollection();
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionProviderImpl, {
			...props,
			state
		});
	}, "CollectionInit");
	CollectionInit.displayName = PROVIDER_NAME + "Init";
	const CollectionProviderImpl = /* @__PURE__ */ __name$28((props) => {
		const { scope, children, state } = props;
		const ref = import_react.useRef(null);
		const [collectionElement, setCollectionElement] = import_react.useState(null);
		const composeRefs = useComposedRefs(ref, setCollectionElement);
		const [itemMap, setItemMap] = state;
		import_react.useEffect(() => {
			if (!collectionElement) return;
			const observer = getChildListObserver(() => {});
			observer.observe(collectionElement, {
				childList: true,
				subtree: true
			});
			return () => {
				observer.disconnect();
			};
		}, [collectionElement]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionContextProvider, {
			scope,
			itemMap,
			setItemMap,
			collectionRef: composeRefs,
			collectionRefObject: ref,
			collectionElement,
			children
		});
	}, "CollectionProviderImpl");
	CollectionProviderImpl.displayName = PROVIDER_NAME + "Impl";
	const COLLECTION_SLOT_NAME = name + "CollectionSlot";
	const CollectionSlotImpl = /* @__PURE__ */ createSlot(COLLECTION_SLOT_NAME);
	const CollectionSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children } = props;
		const composedRefs = useComposedRefs(forwardedRef, useCollectionContext(COLLECTION_SLOT_NAME, scope).collectionRef);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionSlotImpl, {
			ref: composedRefs,
			children
		});
	});
	CollectionSlot.displayName = COLLECTION_SLOT_NAME;
	const ITEM_SLOT_NAME = name + "CollectionItemSlot";
	const ITEM_DATA_ATTR = "data-radix-collection-item";
	const CollectionItemSlotImpl = /* @__PURE__ */ createSlot(ITEM_SLOT_NAME);
	const CollectionItemSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children, ...itemData } = props;
		const ref = import_react.useRef(null);
		const [element, setElement] = import_react.useState(null);
		const composedRefs = useComposedRefs(forwardedRef, ref, setElement);
		const { setItemMap } = useCollectionContext(ITEM_SLOT_NAME, scope);
		const itemDataRef = import_react.useRef(itemData);
		if (!shallowEqual(itemDataRef.current, itemData)) itemDataRef.current = itemData;
		const memoizedItemData = itemDataRef.current;
		import_react.useEffect(() => {
			const itemData2 = memoizedItemData;
			setItemMap((map) => {
				if (!element) return map;
				if (!map.has(element)) {
					map.set(element, {
						...itemData2,
						element
					});
					return map.toSorted(sortByDocumentPosition);
				}
				return map.set(element, {
					...itemData2,
					element
				}).toSorted(sortByDocumentPosition);
			});
			return () => {
				setItemMap((map) => {
					if (!element || !map.has(element)) return map;
					map.delete(element);
					return new OrderedDict(map);
				});
			};
		}, [
			element,
			memoizedItemData,
			setItemMap
		]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionItemSlotImpl, {
			[ITEM_DATA_ATTR]: "",
			ref: composedRefs,
			children
		});
	});
	CollectionItemSlot.displayName = ITEM_SLOT_NAME;
	function useInitCollection() {
		return import_react.useState(new OrderedDict());
	}
	__name$28(useInitCollection, "useInitCollection");
	function useCollection(scope) {
		const { itemMap } = useCollectionContext(name + "CollectionConsumer", scope);
		return itemMap;
	}
	__name$28(useCollection, "useCollection");
	return [{
		Provider: CollectionProvider,
		Slot: CollectionSlot,
		ItemSlot: CollectionItemSlot
	}, {
		createCollectionScope,
		useCollection,
		useInitCollection
	}];
}
__name$28(createCollection2, "createCollection");
function shallowEqual(a, b) {
	if (a === b) return true;
	if (typeof a !== "object" || typeof b !== "object") return false;
	if (a == null || b == null) return false;
	const keysA = Object.keys(a);
	const keysB = Object.keys(b);
	if (keysA.length !== keysB.length) return false;
	for (const key of keysA) {
		if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
		if (a[key] !== b[key]) return false;
	}
	return true;
}
__name$28(shallowEqual, "shallowEqual");
function isElementPreceding(a, b) {
	return !!(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
__name$28(isElementPreceding, "isElementPreceding");
function sortByDocumentPosition(a, b) {
	return !a[1].element || !b[1].element ? 0 : isElementPreceding(a[1].element, b[1].element) ? -1 : 1;
}
__name$28(sortByDocumentPosition, "sortByDocumentPosition");
function getChildListObserver(callback) {
	return new MutationObserver((mutationsList) => {
		for (const mutation of mutationsList) if (mutation.type === "childList") {
			callback();
			return;
		}
	});
}
__name$28(getChildListObserver, "getChildListObserver");
var __defProp$27 = Object.defineProperty;
var __name$27 = (target, value) => __defProp$27(target, "name", {
	value,
	configurable: true
});
var useReactId = import_react[" useId ".trim().toString()] || (() => void 0);
var count$1 = 0;
function useId(deterministicId) {
	const [id, setId] = import_react.useState(useReactId());
	useLayoutEffect2(() => {
		if (!deterministicId) setId((reactId) => reactId ?? String(count$1++));
	}, [deterministicId]);
	return deterministicId || (id ? `radix-${id}` : "");
}
__name$27(useId, "useId");
var __defProp$26 = Object.defineProperty;
var __name$26 = (target, value) => __defProp$26(target, "name", {
	value,
	configurable: true
});
function useCallbackRef$1(callback) {
	const callbackRef = import_react.useRef(callback);
	import_react.useEffect(() => {
		callbackRef.current = callback;
	});
	return import_react.useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}
__name$26(useCallbackRef$1, "useCallbackRef");
var __defProp$25 = Object.defineProperty;
var __name$25 = (target, value) => __defProp$25(target, "name", {
	value,
	configurable: true
});
var Direction$3 = {
	LTR: "ltr",
	RTL: "rtl"
};
var DirectionContext = import_react.createContext(void 0);
function useDirection(localDir) {
	const globalDir = import_react.useContext(DirectionContext);
	return localDir || globalDir || Direction$3.LTR;
}
__name$25(useDirection, "useDirection");
var __defProp$24 = Object.defineProperty;
var __name$24 = (target, value) => __defProp$24(target, "name", {
	value,
	configurable: true
});
var _isHydrated = false;
function useIsHydrated() {
	const [isHydrated, setIsHydrated] = import_react.useState(_isHydrated);
	import_react.useEffect(() => {
		if (!_isHydrated) {
			_isHydrated = true;
			setIsHydrated(true);
		}
	}, []);
	return isHydrated;
}
__name$24(useIsHydrated, "useIsHydrated");
var useReactSyncExternalStore = import_react[" useSyncExternalStore ".trim().toString()];
function subscribe() {
	return () => {};
}
__name$24(subscribe, "subscribe");
function useIsHydratedModern() {
	return useReactSyncExternalStore(subscribe, () => true, () => false);
}
__name$24(useIsHydratedModern, "useIsHydratedModern");
var useIsHydrated2 = typeof useReactSyncExternalStore === "function" ? useIsHydratedModern : useIsHydrated;
var __defProp$23 = Object.defineProperty;
var __name$23 = (target, value) => __defProp$23(target, "name", {
	value,
	configurable: true
});
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS$1 = {
	bubbles: false,
	cancelable: true
};
var GROUP_NAME = "RovingFocusGroup";
var [Collection$4, useCollection$4, createCollectionScope$4] = /* @__PURE__ */ createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = /* @__PURE__ */ createContextScope(GROUP_NAME, [createCollectionScope$4]);
var Orientation$1 = {
	Vertical: "vertical",
	Horizontal: "horizontal"
};
var Direction$2 = {
	LTR: "ltr",
	RTL: "rtl"
};
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$23(function RovingFocusGroup2(props, forwardedRef) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$4.Provider, {
		scope: props.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$4.Slot, {
			scope: props.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroupImpl, {
				...props,
				ref: forwardedRef
			})
		})
	});
}, "RovingFocusGroup"));
var RovingFocusGroupImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$23(function RovingFocusGroupImpl2(props, forwardedRef) {
	const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, preventScrollOnEntryFocus = false, ...groupProps } = props;
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const direction = useDirection(dir);
	const [currentTabStopId, setCurrentTabStopId] = useControllableState({
		prop: currentTabStopIdProp,
		defaultProp: defaultCurrentTabStopId ?? null,
		onChange: onCurrentTabStopIdChange,
		caller: GROUP_NAME
	});
	const [isTabbingBackOut, setIsTabbingBackOut] = import_react.useState(false);
	const handleEntryFocus = useCallbackRef$1(onEntryFocus);
	const getItems = useCollection$4(__scopeRovingFocusGroup);
	const isClickFocusRef = import_react.useRef(false);
	const [focusableItemsCount, setFocusableItemsCount] = import_react.useState(0);
	import_react.useEffect(() => {
		const node = ref.current;
		if (node) {
			node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
			return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
		}
	}, [handleEntryFocus]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusProvider, {
		scope: __scopeRovingFocusGroup,
		orientation,
		dir: direction,
		loop,
		currentTabStopId,
		onItemFocus: import_react.useCallback((tabStopId) => setCurrentTabStopId(tabStopId), [setCurrentTabStopId]),
		onItemShiftTab: import_react.useCallback(() => setIsTabbingBackOut(true), []),
		onFocusableItemAdd: import_react.useCallback(() => setFocusableItemsCount((prevCount) => prevCount + 1), []),
		onFocusableItemRemove: import_react.useCallback(() => setFocusableItemsCount((prevCount) => prevCount - 1), []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
			"data-orientation": orientation,
			...groupProps,
			ref: composedRefs,
			style: {
				outline: "none",
				...props.style
			},
			onMouseDown: composeEventHandlers(props.onMouseDown, () => {
				isClickFocusRef.current = true;
			}),
			onFocus: composeEventHandlers(props.onFocus, (event) => {
				const isKeyboardFocus = !isClickFocusRef.current;
				if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
					const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS$1);
					event.currentTarget.dispatchEvent(entryFocusEvent);
					if (!entryFocusEvent.defaultPrevented) {
						const items = getItems().filter((item) => item.focusable);
						focusFirst$3([
							items.find((item) => item.active),
							items.find((item) => item.id === currentTabStopId),
							...items
						].filter(Boolean).map((item) => item.ref.current), preventScrollOnEntryFocus);
					}
				}
				isClickFocusRef.current = false;
			}),
			onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
		})
	});
}, "RovingFocusGroupImpl"));
var ITEM_NAME$3 = "RovingFocusGroupItem";
var RovingFocusGroupItem = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$23(function RovingFocusGroupItem2(props, forwardedRef) {
	const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, children, ...itemProps } = props;
	const autoId = useId();
	const id = tabStopId || autoId;
	const context = useRovingFocusContext(ITEM_NAME$3, __scopeRovingFocusGroup);
	const isCurrentTabStop = context.currentTabStopId === id;
	const getItems = useCollection$4(__scopeRovingFocusGroup);
	const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
	const isHydrated = useIsHydrated2();
	useLayoutEffect2(() => {
		if (!isHydrated || !focusable) return;
		onFocusableItemAdd();
		return () => onFocusableItemRemove();
	}, [
		isHydrated,
		focusable,
		onFocusableItemAdd,
		onFocusableItemRemove
	]);
	import_react.useEffect(() => {
		if (isHydrated || !focusable) return;
		onFocusableItemAdd();
		return () => onFocusableItemRemove();
	}, [
		isHydrated,
		focusable,
		onFocusableItemAdd,
		onFocusableItemRemove
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$4.ItemSlot, {
		scope: __scopeRovingFocusGroup,
		id,
		focusable,
		active,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			tabIndex: isCurrentTabStop ? 0 : -1,
			"data-orientation": context.orientation,
			...itemProps,
			ref: forwardedRef,
			onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
				if (!focusable) event.preventDefault();
				else context.onItemFocus(id);
			}),
			onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if (event.key === "Tab" && event.shiftKey) {
					context.onItemShiftTab();
					return;
				}
				if (event.target !== event.currentTarget) return;
				const focusIntent = getFocusIntent(event, context.orientation, context.dir);
				if (focusIntent !== void 0) {
					if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
					event.preventDefault();
					let candidateNodes = getItems().filter((item) => item.focusable).map((item) => item.ref.current);
					if (focusIntent === "last") candidateNodes.reverse();
					else if (focusIntent === "prev" || focusIntent === "next") {
						if (focusIntent === "prev") candidateNodes.reverse();
						const currentIndex = candidateNodes.indexOf(event.currentTarget);
						candidateNodes = context.loop ? wrapArray$2(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
					}
					setTimeout(() => focusFirst$3(candidateNodes));
				}
			}),
			children: typeof children === "function" ? children({
				isCurrentTabStop,
				hasTabStop: currentTabStopId != null
			}) : children
		})
	});
}, "RovingFocusGroupItem"));
var MAP_KEY_TO_FOCUS_INTENT = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function getDirectionAwareKey(key, dir) {
	if (dir !== Direction$2.RTL) return key;
	return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
__name$23(getDirectionAwareKey, "getDirectionAwareKey");
function getFocusIntent(event, orientation, dir) {
	const key = getDirectionAwareKey(event.key, dir);
	if (orientation === Orientation$1.Vertical && ["ArrowLeft", "ArrowRight"].includes(key)) return;
	if (orientation === Orientation$1.Horizontal && ["ArrowUp", "ArrowDown"].includes(key)) return;
	return MAP_KEY_TO_FOCUS_INTENT[key];
}
__name$23(getFocusIntent, "getFocusIntent");
function focusFirst$3(candidates, preventScroll = false) {
	const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
	for (const candidate of candidates) {
		if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
		candidate.focus({ preventScroll });
		if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
	}
}
__name$23(focusFirst$3, "focusFirst");
function wrapArray$2(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
__name$23(wrapArray$2, "wrapArray");
var __defProp$22 = Object.defineProperty;
var __name$22 = (target, value) => __defProp$22(target, "name", {
	value,
	configurable: true
});
var ActivationMode = {
	Automatic: "automatic",
	Manual: "manual"
};
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = /* @__PURE__ */ createContextScope(TABS_NAME, [createRovingFocusGroupScope]);
var useRovingFocusGroupScope$2 = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$22(function Tabs2(props, forwardedRef) {
	const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = ActivationMode.Automatic, ...tabsProps } = props;
	const direction = useDirection(dir);
	const [value, setValue] = useControllableState({
		prop: valueProp,
		onChange: onValueChange,
		defaultProp: defaultValue ?? "",
		caller: TABS_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsProvider, {
		scope: __scopeTabs,
		baseId: useId(),
		value,
		onValueChange: setValue,
		orientation,
		dir: direction,
		activationMode,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			dir: direction,
			"data-orientation": orientation,
			...tabsProps,
			ref: forwardedRef
		})
	});
}, "Tabs"));
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$22(function TabsList2(props, forwardedRef) {
	const { __scopeTabs, loop = true, ...listProps } = props;
	const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
	const rovingFocusGroupScope = useRovingFocusGroupScope$2(__scopeTabs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroup, {
		asChild: true,
		...rovingFocusGroupScope,
		orientation: context.orientation,
		dir: context.dir,
		loop,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			role: "tablist",
			"aria-orientation": context.orientation,
			...listProps,
			ref: forwardedRef
		})
	});
}, "TabsList"));
var TRIGGER_NAME$9 = "TabsTrigger";
var TabsTrigger$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$22(function TabsTrigger2(props, forwardedRef) {
	const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
	const context = useTabsContext(TRIGGER_NAME$9, __scopeTabs);
	const rovingFocusGroupScope = useRovingFocusGroupScope$2(__scopeTabs);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const isSelected = value === context.value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroupItem, {
		asChild: true,
		...rovingFocusGroupScope,
		focusable: !disabled,
		active: isSelected,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "tab",
			"aria-selected": isSelected,
			"aria-controls": contentId,
			"data-state": isSelected ? "active" : "inactive",
			"data-disabled": disabled ? "" : void 0,
			disabled,
			id: triggerId,
			...triggerProps,
			ref: forwardedRef,
			onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
				if (!disabled && event.button === 0 && event.ctrlKey === false) {
					event.currentTarget.focus();
					context.onValueChange(value);
				} else event.preventDefault();
			}),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if (disabled || event.target !== event.currentTarget) return;
				if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
			}),
			onFocus: composeEventHandlers(props.onFocus, () => {
				const isAutomaticActivation = context.activationMode !== ActivationMode.Manual;
				if (!isSelected && !disabled && isAutomaticActivation) context.onValueChange(value);
			})
		})
	});
}, "TabsTrigger"));
var CONTENT_NAME$10 = "TabsContent";
var TabsContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$22(function TabsContent2(props, forwardedRef) {
	const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
	const context = useTabsContext(CONTENT_NAME$10, __scopeTabs);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const isSelected = value === context.value;
	const isMountAnimationPreventedRef = import_react.useRef(isSelected);
	import_react.useEffect(() => {
		const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
		return () => cancelAnimationFrame(rAF);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isSelected,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": isSelected ? "active" : "inactive",
			"data-orientation": context.orientation,
			role: "tabpanel",
			"aria-labelledby": triggerId,
			hidden: !present,
			id: contentId,
			tabIndex: 0,
			...contentProps,
			ref: forwardedRef,
			style: {
				...props.style,
				animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
			},
			children: present && children
		})
	});
}, "TabsContent"));
function makeTriggerId(baseId, value) {
	return `${baseId}-trigger-${value}`;
}
__name$22(makeTriggerId, "makeTriggerId");
function makeContentId(baseId, value) {
	return `${baseId}-content-${value}`;
}
__name$22(makeContentId, "makeContentId");
var tabsListVariants = cva("relative flex items-center gap-1", {
	variants: {
		variant: {
			line: "border-b border-border",
			pill: "rounded-lg bg-muted p-1"
		},
		size: {
			sm: "text-xs",
			md: "text-sm",
			lg: "text-sm"
		}
	},
	defaultVariants: {
		variant: "line",
		size: "md"
	}
});
var tabsTriggerVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground", {
	variants: {
		variant: {
			line: "border-b-2 border-transparent px-3 pb-2 -mb-px text-muted-foreground hover:text-foreground data-[state=active]:border-primary",
			pill: "px-3 py-1.5 text-muted-foreground hover:text-foreground data-[state=active]:bg-card data-[state=active]:shadow-soft"
		},
		size: {
			sm: "text-xs px-2.5 pb-1.5",
			md: "text-sm px-3 pb-2",
			lg: "text-sm px-4 pb-2.5"
		}
	},
	defaultVariants: {
		variant: "line",
		size: "md"
	}
});
var tabsContentVariants = cva("mt-3 rounded-lg outline-none transition-[opacity,transform] duration-[140ms] ease-out-quart focus-visible:ring-2 focus-visible:ring-ring", {
	variants: { variant: {
		line: "",
		pill: "mt-2 border border-border bg-card p-4"
	} },
	defaultVariants: { variant: "line" }
});
var TabsContext = import_react.createContext({
	variant: "line",
	size: "md"
});
function Tabs({ className, variant, size, ...props }) {
	const activeVariant = variant ?? "line";
	const activeSize = size ?? "md";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContext.Provider, {
		value: {
			variant: activeVariant,
			size: activeSize
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs$1, {
			"data-slot": "tabs",
			"data-variant": activeVariant,
			"data-size": activeSize,
			className: cn$1("flex flex-col", className),
			...props
		})
	});
}
Tabs.displayName = "Tabs";
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => {
	const { variant, size } = import_react.useContext(TabsContext);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList$1, {
		ref,
		"data-slot": "tabs-list",
		"data-variant": variant,
		"data-size": size,
		className: cn$1(tabsListVariants({
			variant,
			size
		}), className),
		...props
	});
});
TabsList.displayName = "TabsList";
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => {
	const { variant, size } = import_react.useContext(TabsContext);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger$1, {
		ref,
		"data-slot": "tabs-trigger",
		"data-variant": variant,
		"data-size": size,
		className: cn$1(tabsTriggerVariants({
			variant,
			size
		}), className),
		...props
	});
});
TabsTrigger.displayName = "TabsTrigger";
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { variant } = import_react.useContext(TabsContext);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent$1, {
		ref,
		"data-slot": "tabs-content",
		"data-variant": variant,
		className: cn$1(tabsContentVariants({ variant }), className),
		...props
	});
});
TabsContent.displayName = "TabsContent";
var __defProp$21 = Object.defineProperty;
var __name$21 = (target, value) => __defProp$21(target, "name", {
	value,
	configurable: true
});
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = import_react.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
});
var DismissableLayer = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$21(function DismissableLayer2(props, forwardedRef) {
	const { disableOutsidePointerEvents = false, deferPointerDownOutside = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
	const context = import_react.useContext(DismissableLayerContext);
	const [node, setNode] = import_react.useState(null);
	const ownerDocument = node?.ownerDocument ?? globalThis?.document;
	const [, force] = import_react.useState({});
	const composedRefs = useComposedRefs(forwardedRef, setNode);
	const layers = Array.from(context.layers);
	const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
	const highestLayerWithOutsidePointerEventsDisabledIndex = highestLayerWithOutsidePointerEventsDisabled ? layers.indexOf(highestLayerWithOutsidePointerEventsDisabled) : -1;
	const index = node ? layers.indexOf(node) : -1;
	const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
	const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
	const isDeferredPointerDownOutsideRef = import_react.useRef(false);
	const pointerDownOutside = usePointerDownOutside((event) => {
		onPointerDownOutside?.(event);
		onInteractOutside?.(event);
		if (!event.defaultPrevented) onDismiss?.();
	}, {
		ownerDocument,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces: context.dismissableSurfaces,
		shouldHandlePointerDownOutside: import_react.useCallback((target) => {
			if (!(target instanceof Node)) return false;
			const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
			return isPointerEventsEnabled && !isPointerDownOnBranch;
		}, [context.branches, isPointerEventsEnabled])
	});
	const focusOutside = useFocusOutside((event) => {
		if (deferPointerDownOutside && isDeferredPointerDownOutsideRef.current) return;
		const target = event.target;
		if ([...context.branches].some((branch) => branch.contains(target))) return;
		onFocusOutside?.(event);
		onInteractOutside?.(event);
		if (!event.defaultPrevented) onDismiss?.();
	}, ownerDocument);
	const isHighestLayer = node ? index === layers.length - 1 : false;
	const handleKeyDown = useCallbackRef$1((event) => {
		if (event.key !== "Escape") return;
		onEscapeKeyDown?.(event);
		if (!event.defaultPrevented && onDismiss) {
			event.preventDefault();
			onDismiss();
		}
	});
	import_react.useEffect(() => {
		if (!isHighestLayer) return;
		ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
		return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
	}, [
		ownerDocument,
		isHighestLayer,
		handleKeyDown
	]);
	import_react.useEffect(() => {
		if (!node) return;
		if (disableOutsidePointerEvents) {
			if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
				originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
				ownerDocument.body.style.pointerEvents = "none";
			}
			context.layersWithOutsidePointerEventsDisabled.add(node);
		}
		context.layers.add(node);
		dispatchUpdate();
		return () => {
			if (disableOutsidePointerEvents) {
				context.layersWithOutsidePointerEventsDisabled.delete(node);
				if (context.layersWithOutsidePointerEventsDisabled.size === 0) ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
			}
		};
	}, [
		node,
		ownerDocument,
		disableOutsidePointerEvents,
		context
	]);
	import_react.useEffect(() => {
		return () => {
			if (!node) return;
			context.layers.delete(node);
			context.layersWithOutsidePointerEventsDisabled.delete(node);
			dispatchUpdate();
		};
	}, [node, context]);
	import_react.useEffect(() => {
		const handleUpdate = /* @__PURE__ */ __name$21(() => force({}), "handleUpdate");
		document.addEventListener(CONTEXT_UPDATE, handleUpdate);
		return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...layerProps,
		ref: composedRefs,
		style: {
			pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
			...props.style
		},
		onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
		onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
	});
}, "DismissableLayer"));
var DismissableLayerBranch = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$21(function DismissableLayerBranch2(props, forwardedRef) {
	const context = import_react.useContext(DismissableLayerContext);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	import_react.useEffect(() => {
		const node = ref.current;
		if (node) {
			context.branches.add(node);
			return () => {
				context.branches.delete(node);
			};
		}
	}, [context.branches]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...props,
		ref: composedRefs
	});
}, "DismissableLayerBranch"));
function useDismissableLayerSurface() {
	const context = import_react.useContext(DismissableLayerContext);
	const [node, setNode] = import_react.useState(null);
	import_react.useEffect(() => {
		if (!node) return;
		context.dismissableSurfaces.add(node);
		return () => {
			context.dismissableSurfaces.delete(node);
		};
	}, [node, context.dismissableSurfaces]);
	return setNode;
}
__name$21(useDismissableLayerSurface, "useDismissableLayerSurface");
var IS_TRUE = /* @__PURE__ */ __name$21(() => true, "IS_TRUE");
function usePointerDownOutside(onPointerDownOutside, args) {
	const { ownerDocument = globalThis?.document, deferPointerDownOutside = false, isDeferredPointerDownOutsideRef, dismissableSurfaces, shouldHandlePointerDownOutside = IS_TRUE } = args;
	const handlePointerDownOutside = useCallbackRef$1(onPointerDownOutside);
	const isPointerInsideReactTreeRef = import_react.useRef(false);
	const isPointerDownOutsideRef = import_react.useRef(false);
	const interceptedOutsideInteractionEventsRef = import_react.useRef(/* @__PURE__ */ new Map());
	const handleClickRef = import_react.useRef(() => {});
	import_react.useEffect(() => {
		function resetOutsideInteraction() {
			isPointerDownOutsideRef.current = false;
			isDeferredPointerDownOutsideRef.current = false;
			interceptedOutsideInteractionEventsRef.current.clear();
		}
		__name$21(resetOutsideInteraction, "resetOutsideInteraction");
		function isOutsideInteractionIntercepted() {
			return Array.from(interceptedOutsideInteractionEventsRef.current.values()).some(Boolean);
		}
		__name$21(isOutsideInteractionIntercepted, "isOutsideInteractionIntercepted");
		function handleInteractionCapture(event) {
			if (!isPointerDownOutsideRef.current) return;
			const target = event.target;
			if (!(target instanceof Node && [...dismissableSurfaces].some((surface) => surface.contains(target)))) interceptedOutsideInteractionEventsRef.current.set(event.type, true);
			if (event.type === "click") window.setTimeout(() => {
				if (isPointerDownOutsideRef.current) handleClickRef.current();
			}, 0);
		}
		__name$21(handleInteractionCapture, "handleInteractionCapture");
		function handleInteractionBubble(event) {
			if (isPointerDownOutsideRef.current) interceptedOutsideInteractionEventsRef.current.set(event.type, false);
		}
		__name$21(handleInteractionBubble, "handleInteractionBubble");
		const handlePointerDown = /* @__PURE__ */ __name$21((event) => {
			if (event.target && !isPointerInsideReactTreeRef.current) {
				let handleAndDispatchPointerDownOutsideEvent2 = function() {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					const wasOutsideInteractionIntercepted = isOutsideInteractionIntercepted();
					resetOutsideInteraction();
					if (!wasOutsideInteractionIntercepted) handleAndDispatchCustomEvent$1(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, { discrete: true });
				};
				__name$21(handleAndDispatchPointerDownOutsideEvent2, "handleAndDispatchPointerDownOutsideEvent");
				if (!shouldHandlePointerDownOutside(event.target)) {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					resetOutsideInteraction();
					isPointerInsideReactTreeRef.current = false;
					return;
				}
				const eventDetail = { originalEvent: event };
				isPointerDownOutsideRef.current = true;
				isDeferredPointerDownOutsideRef.current = deferPointerDownOutside && event.button === 0;
				interceptedOutsideInteractionEventsRef.current.clear();
				if (!deferPointerDownOutside || event.button !== 0) handleAndDispatchPointerDownOutsideEvent2();
				else {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
					ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
				}
			} else {
				ownerDocument.removeEventListener("click", handleClickRef.current);
				resetOutsideInteraction();
			}
			isPointerInsideReactTreeRef.current = false;
		}, "handlePointerDown");
		const outsideInteractionEvents = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (const eventName of outsideInteractionEvents) {
			ownerDocument.addEventListener(eventName, handleInteractionCapture, true);
			ownerDocument.addEventListener(eventName, handleInteractionBubble);
		}
		const timerId = window.setTimeout(() => {
			ownerDocument.addEventListener("pointerdown", handlePointerDown);
		}, 0);
		return () => {
			window.clearTimeout(timerId);
			ownerDocument.removeEventListener("pointerdown", handlePointerDown);
			ownerDocument.removeEventListener("click", handleClickRef.current);
			for (const eventName of outsideInteractionEvents) {
				ownerDocument.removeEventListener(eventName, handleInteractionCapture, true);
				ownerDocument.removeEventListener(eventName, handleInteractionBubble);
			}
		};
	}, [
		ownerDocument,
		handlePointerDownOutside,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces,
		shouldHandlePointerDownOutside
	]);
	return { onPointerDownCapture: /* @__PURE__ */ __name$21(() => isPointerInsideReactTreeRef.current = true, "onPointerDownCapture") };
}
__name$21(usePointerDownOutside, "usePointerDownOutside");
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
	const handleFocusOutside = useCallbackRef$1(onFocusOutside);
	const isFocusInsideReactTreeRef = import_react.useRef(false);
	import_react.useEffect(() => {
		const handleFocus = /* @__PURE__ */ __name$21((event) => {
			if (event.target && !isFocusInsideReactTreeRef.current) handleAndDispatchCustomEvent$1(FOCUS_OUTSIDE, handleFocusOutside, { originalEvent: event }, { discrete: false });
		}, "handleFocus");
		ownerDocument.addEventListener("focusin", handleFocus);
		return () => ownerDocument.removeEventListener("focusin", handleFocus);
	}, [ownerDocument, handleFocusOutside]);
	return {
		onFocusCapture: /* @__PURE__ */ __name$21(() => isFocusInsideReactTreeRef.current = true, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ __name$21(() => isFocusInsideReactTreeRef.current = false, "onBlurCapture")
	};
}
__name$21(useFocusOutside, "useFocusOutside");
function dispatchUpdate() {
	const event = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(event);
}
__name$21(dispatchUpdate, "dispatchUpdate");
function handleAndDispatchCustomEvent$1(name, handler, detail, { discrete }) {
	const target = detail.originalEvent.target;
	const event = new CustomEvent(name, {
		bubbles: false,
		cancelable: true,
		detail
	});
	if (handler) target.addEventListener(name, handler, { once: true });
	if (discrete) dispatchDiscreteCustomEvent(target, event);
	else target.dispatchEvent(event);
}
__name$21(handleAndDispatchCustomEvent$1, "handleAndDispatchCustomEvent");
/**
* Custom positioning reference element.
* @see https://floating-ui.com/docs/virtual-elements
*/
var sides = [
	"top",
	"right",
	"bottom",
	"left"
];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
	x: v,
	y: v
});
var oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function clamp$1(start, value, end) {
	return max(start, min(value, end));
}
function evaluate(value, param) {
	return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
	return placement.split("-")[0];
}
function getAlignment(placement) {
	return placement.split("-")[1];
}
function getOppositeAxis(axis) {
	return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
	return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
	const firstChar = placement[0];
	return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
	return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
	if (rtl === void 0) rtl = false;
	const alignment = getAlignment(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const length = getAxisLength(alignmentAxis);
	let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
	if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
	return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
	const oppositePlacement = getOppositePlacement(placement);
	return [
		getOppositeAlignmentPlacement(placement),
		oppositePlacement,
		getOppositeAlignmentPlacement(oppositePlacement)
	];
}
function getOppositeAlignmentPlacement(placement) {
	return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
	switch (side) {
		case "top":
		case "bottom":
			if (rtl) return isStart ? rlPlacement : lrPlacement;
			return isStart ? lrPlacement : rlPlacement;
		case "left":
		case "right": return isStart ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
	const alignment = getAlignment(placement);
	let list = getSideList(getSide(placement), direction === "start", rtl);
	if (alignment) {
		list = list.map((side) => side + "-" + alignment);
		if (flipAlignment) list = list.concat(list.map(getOppositeAlignmentPlacement));
	}
	return list;
}
function getOppositePlacement(placement) {
	const side = getSide(placement);
	return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
	var _padding$top, _padding$right, _padding$bottom, _padding$left;
	return {
		top: (_padding$top = padding.top) != null ? _padding$top : 0,
		right: (_padding$right = padding.right) != null ? _padding$right : 0,
		bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
		left: (_padding$left = padding.left) != null ? _padding$left : 0
	};
}
function getPaddingObject(padding) {
	return typeof padding !== "number" ? expandPaddingObject(padding) : {
		top: padding,
		right: padding,
		bottom: padding,
		left: padding
	};
}
function rectToClientRect(rect) {
	const { x, y, width, height } = rect;
	return {
		width,
		height,
		top: y,
		left: x,
		right: x + width,
		bottom: y + height,
		x,
		y
	};
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
	let { reference, floating } = _ref;
	const sideAxis = getSideAxis(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const alignLength = getAxisLength(alignmentAxis);
	const side = getSide(placement);
	const isVertical = sideAxis === "y";
	const commonX = reference.x + reference.width / 2 - floating.width / 2;
	const commonY = reference.y + reference.height / 2 - floating.height / 2;
	const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
	let coords;
	switch (side) {
		case "top":
			coords = {
				x: commonX,
				y: reference.y - floating.height
			};
			break;
		case "bottom":
			coords = {
				x: commonX,
				y: reference.y + reference.height
			};
			break;
		case "right":
			coords = {
				x: reference.x + reference.width,
				y: commonY
			};
			break;
		case "left":
			coords = {
				x: reference.x - floating.width,
				y: commonY
			};
			break;
		default: coords = {
			x: reference.x,
			y: reference.y
		};
	}
	const alignment = getAlignment(placement);
	if (alignment) coords[alignmentAxis] += commonAlign * (alignment === "end" ? 1 : -1) * (rtl && isVertical ? -1 : 1);
	return coords;
}
/**
* Resolves with an object of overflow side offsets that determine how much the
* element is overflowing a given clipping boundary on each side.
* - positive = overflowing the boundary by that number of pixels
* - negative = how many pixels left before it will overflow
* - 0 = lies flush with the boundary
* @see https://floating-ui.com/docs/detectOverflow
*/
async function detectOverflow(state, options) {
	var _await$platform$isEle;
	if (options === void 0) options = {};
	const { x, y, platform, rects, elements, strategy } = state;
	const { boundary = "clippingAncestors", rootBoundary = "viewport", elementContext = "floating", altBoundary = false, padding = 0 } = evaluate(options, state);
	const paddingObject = getPaddingObject(padding);
	const element = elements[altBoundary ? elementContext === "floating" ? "reference" : "floating" : elementContext];
	const clippingClientRect = rectToClientRect(await platform.getClippingRect({
		element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
		boundary,
		rootBoundary,
		strategy
	}));
	const rect = elementContext === "floating" ? {
		x,
		y,
		width: rects.floating.width,
		height: rects.floating.height
	} : rects.reference;
	const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
	const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) && await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
		x: 1,
		y: 1
	};
	const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements,
		rect,
		offsetParent,
		strategy
	}) : rect);
	return {
		top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
		bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
		left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
		right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
	};
}
var MAX_RESET_COUNT = 50;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
*
* This export does not have any `platform` interface logic. You will need to
* write one for the platform you are using Floating UI with.
*/
var computePosition$1 = async (reference, floating, config) => {
	const { placement = "bottom", strategy = "absolute", middleware = [], platform } = config;
	const platformWithDetectOverflow = platform.detectOverflow ? platform : {
		...platform,
		detectOverflow
	};
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
	let rects = await platform.getElementRects({
		reference,
		floating,
		strategy
	});
	let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
	let statefulPlacement = placement;
	let resetCount = 0;
	const middlewareData = {};
	for (let i = 0; i < middleware.length; i++) {
		const currentMiddleware = middleware[i];
		if (!currentMiddleware) continue;
		const { name, fn } = currentMiddleware;
		const { x: nextX, y: nextY, data, reset } = await fn({
			x,
			y,
			initialPlacement: placement,
			placement: statefulPlacement,
			strategy,
			middlewareData,
			rects,
			platform: platformWithDetectOverflow,
			elements: {
				reference,
				floating
			}
		});
		x = nextX != null ? nextX : x;
		y = nextY != null ? nextY : y;
		middlewareData[name] = {
			...middlewareData[name],
			...data
		};
		if (reset && resetCount < MAX_RESET_COUNT) {
			resetCount++;
			if (typeof reset === "object") {
				if (reset.placement) statefulPlacement = reset.placement;
				if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
					reference,
					floating,
					strategy
				}) : reset.rects;
				({x, y} = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
			}
			i = -1;
		}
	}
	return {
		x,
		y,
		placement: statefulPlacement,
		strategy,
		middlewareData
	};
};
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow$3 = (options) => ({
	name: "arrow",
	options,
	async fn(state) {
		const { x, y, placement, rects, platform, elements, middlewareData } = state;
		const { element, padding = 0 } = evaluate(options, state) || {};
		if (element == null) return {};
		const paddingObject = getPaddingObject(padding);
		const coords = {
			x,
			y
		};
		const axis = getAlignmentAxis(placement);
		const length = getAxisLength(axis);
		const arrowDimensions = await platform.getDimensions(element);
		const isYAxis = axis === "y";
		const minProp = isYAxis ? "top" : "left";
		const maxProp = isYAxis ? "bottom" : "right";
		const clientProp = isYAxis ? "clientHeight" : "clientWidth";
		const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
		const startDiff = coords[axis] - rects.reference[axis];
		const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
		let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
		if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) clientSize = elements.floating[clientProp] || rects.floating[length];
		const centerToReference = endDiff / 2 - startDiff / 2;
		const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
		const minPadding = min(paddingObject[minProp], largestPossiblePadding);
		const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
		const max = clientSize - arrowDimensions[length] - maxPadding;
		const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
		const offset = clamp$1(minPadding, center, max);
		const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < minPadding ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
		const alignmentOffset = shouldAddOffset ? center < minPadding ? center - minPadding : center - max : 0;
		return {
			[axis]: coords[axis] + alignmentOffset,
			data: {
				[axis]: offset,
				centerOffset: center - offset - alignmentOffset,
				...shouldAddOffset && { alignmentOffset }
			},
			reset: shouldAddOffset
		};
	}
});
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip$2 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "flip",
		options,
		async fn(state) {
			var _middlewareData$arrow, _middlewareData$flip;
			const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = "bestFit", fallbackAxisSideDirection = "none", flipAlignment = true, ...detectOverflowOptions } = evaluate(options, state);
			if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			const side = getSide(placement);
			const initialSideAxis = getSideAxis(initialPlacement);
			const isBasePlacement = getSide(initialPlacement) === initialPlacement;
			const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
			const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
			const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
			if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
			const placements = [initialPlacement, ...fallbackPlacements];
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const overflows = [];
			let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
			if (checkMainAxis) overflows.push(overflow[side]);
			if (checkCrossAxis) {
				const sides = getAlignmentSides(placement, rects, rtl);
				overflows.push(overflow[sides[0]], overflow[sides[1]]);
			}
			overflowsData = [...overflowsData, {
				placement,
				overflows
			}];
			if (!overflows.every((side) => side <= 0)) {
				var _middlewareData$flip2, _overflowsData$filter;
				const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
				const nextPlacement = placements[nextIndex];
				if (nextPlacement) {
					if (!(checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false) || overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) return {
						data: {
							index: nextIndex,
							overflows: overflowsData
						},
						reset: { placement: nextPlacement }
					};
				}
				let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
				if (!resetPlacement) switch (fallbackStrategy) {
					case "bestFit": {
						var _overflowsData$filter2;
						const placement = (_overflowsData$filter2 = overflowsData.filter((d) => {
							if (hasFallbackAxisSideDirection) {
								const currentSideAxis = getSideAxis(d.placement);
								return currentSideAxis === initialSideAxis || currentSideAxis === "y";
							}
							return true;
						}).map((d) => [d.placement, d.overflows.filter((overflow) => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
						if (placement) resetPlacement = placement;
						break;
					}
					case "initialPlacement": resetPlacement = initialPlacement;
				}
				if (placement !== resetPlacement) return { reset: { placement: resetPlacement } };
			}
			return {};
		}
	};
};
function getSideOffsets(overflow, rect) {
	return {
		top: overflow.top - rect.height,
		right: overflow.right - rect.width,
		bottom: overflow.bottom - rect.height,
		left: overflow.left - rect.width
	};
}
function isAnySideFullyClipped(overflow) {
	return sides.some((side) => overflow[side] >= 0);
}
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide$2 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "hide",
		options,
		async fn(state) {
			const { rects, platform } = state;
			const { strategy = "referenceHidden", ...detectOverflowOptions } = evaluate(options, state);
			switch (strategy) {
				case "referenceHidden": {
					const offsets = getSideOffsets(await platform.detectOverflow(state, {
						...detectOverflowOptions,
						elementContext: "reference"
					}), rects.reference);
					return { data: {
						referenceHiddenOffsets: offsets,
						referenceHidden: isAnySideFullyClipped(offsets)
					} };
				}
				case "escaped": {
					const offsets = getSideOffsets(await platform.detectOverflow(state, {
						...detectOverflowOptions,
						altBoundary: true
					}), rects.floating);
					return { data: {
						escapedOffsets: offsets,
						escaped: isAnySideFullyClipped(offsets)
					} };
				}
				default: return {};
			}
		}
	};
};
var originSides = /*#__PURE__*/ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
	const { placement, platform, elements } = state;
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
	const side = getSide(placement);
	const alignment = getAlignment(placement);
	const isVertical = getSideAxis(placement) === "y";
	const mainAxisMulti = originSides.has(side) ? -1 : 1;
	const crossAxisMulti = rtl && isVertical ? -1 : 1;
	const rawValue = evaluate(options, state);
	let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === "number" ? {
		mainAxis: rawValue,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: rawValue.mainAxis || 0,
		crossAxis: rawValue.crossAxis || 0,
		alignmentAxis: rawValue.alignmentAxis
	};
	if (alignment && typeof alignmentAxis === "number") crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
	return isVertical ? {
		x: crossAxis * crossAxisMulti,
		y: mainAxis * mainAxisMulti
	} : {
		x: mainAxis * mainAxisMulti,
		y: crossAxis * crossAxisMulti
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset$2 = function(options) {
	if (options === void 0) options = 0;
	return {
		name: "offset",
		options,
		async fn(state) {
			var _middlewareData$offse, _middlewareData$arrow;
			const { x, y, placement, middlewareData } = state;
			const diffCoords = await convertValueToCoords(state, options);
			if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			return {
				x: x + diffCoords.x,
				y: y + diffCoords.y,
				data: {
					...diffCoords,
					placement
				}
			};
		}
	};
};
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift$2 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "shift",
		options,
		async fn(state) {
			const { x, y, placement, platform } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = { fn: (_ref) => {
				let { x, y } = _ref;
				return {
					x,
					y
				};
			} }, ...detectOverflowOptions } = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const crossAxis = getSideAxis(placement);
			const mainAxis = getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			const clampCoord = (axis, coord) => clamp$1(coord + overflow[axis === "y" ? "top" : "left"], coord, coord - overflow[axis === "y" ? "bottom" : "right"]);
			if (checkMainAxis) mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
			if (checkCrossAxis) crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
			const limitedCoords = limiter.fn({
				...state,
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			});
			return {
				...limitedCoords,
				data: {
					x: limitedCoords.x - x,
					y: limitedCoords.y - y,
					enabled: {
						[mainAxis]: checkMainAxis,
						[crossAxis]: checkCrossAxis
					}
				}
			};
		}
	};
};
/**
* Built-in `limiter` that will stop `shift()` at a certain point.
*/
var limitShift$2 = function(options) {
	if (options === void 0) options = {};
	return {
		options,
		fn(state) {
			var _rawOffset$mainAxis, _rawOffset$crossAxis;
			const { x, y, placement, rects, middlewareData } = state;
			const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const crossAxis = getSideAxis(placement);
			const mainAxis = getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			const rawOffset = evaluate(offset, state);
			const computedOffset = typeof rawOffset === "number" ? {
				mainAxis: rawOffset,
				crossAxis: 0
			} : {
				mainAxis: (_rawOffset$mainAxis = rawOffset.mainAxis) != null ? _rawOffset$mainAxis : 0,
				crossAxis: (_rawOffset$crossAxis = rawOffset.crossAxis) != null ? _rawOffset$crossAxis : 0
			};
			if (checkMainAxis) {
				const len = mainAxis === "y" ? "height" : "width";
				const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
				const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
				if (mainAxisCoord < limitMin) mainAxisCoord = limitMin;
				else if (mainAxisCoord > limitMax) mainAxisCoord = limitMax;
			}
			if (checkCrossAxis) {
				var _middlewareData$offse, _middlewareData$offse2;
				const len = mainAxis === "y" ? "width" : "height";
				const isOriginSide = originSides.has(getSide(placement));
				const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
				const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
				if (crossAxisCoord < limitMin) crossAxisCoord = limitMin;
				else if (crossAxisCoord > limitMax) crossAxisCoord = limitMax;
			}
			return {
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			};
		}
	};
};
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size$2 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "size",
		options,
		async fn(state) {
			const { placement, rects, platform, elements } = state;
			const { apply = () => {}, ...detectOverflowOptions } = evaluate(options, state);
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const side = getSide(placement);
			const alignment = getAlignment(placement);
			const isYAxis = getSideAxis(placement) === "y";
			const { width, height } = rects.floating;
			let heightSide;
			let widthSide;
			if (side === "top" || side === "bottom") {
				heightSide = side;
				widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
			} else {
				widthSide = side;
				heightSide = alignment === "end" ? "top" : "bottom";
			}
			const maximumClippingHeight = height - overflow.top - overflow.bottom;
			const maximumClippingWidth = width - overflow.left - overflow.right;
			const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
			const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
			const shiftData = state.middlewareData.shift;
			const noShift = !shiftData;
			let availableHeight = overflowAvailableHeight;
			let availableWidth = overflowAvailableWidth;
			if (shiftData != null && shiftData.enabled.x) availableWidth = maximumClippingWidth;
			if (shiftData != null && shiftData.enabled.y) availableHeight = maximumClippingHeight;
			if (noShift && !alignment) {
				if (isYAxis) availableWidth = width - 2 * max(overflow.left, overflow.right);
				else availableHeight = height - 2 * max(overflow.top, overflow.bottom);
			}
			await apply({
				...state,
				availableWidth,
				availableHeight
			});
			const nextDimensions = await platform.getDimensions(elements.floating);
			if (width !== nextDimensions.width || height !== nextDimensions.height) return { reset: { rects: true } };
			return {};
		}
	};
};
function hasWindow() {
	return typeof window !== "undefined";
}
function getNodeName(node) {
	if (isNode(node)) return (node.nodeName || "").toLowerCase();
	return "#document";
}
function getWindow(node) {
	var _node$ownerDocument;
	return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
	var _ref;
	return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
	if (!hasWindow()) return false;
	return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
	if (!hasWindow()) return false;
	return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement$1(value) {
	if (!hasWindow()) return false;
	return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
	if (!hasWindow() || typeof ShadowRoot === "undefined") return false;
	return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
	const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
	return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
	return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
	try {
		if (element.matches(":popover-open")) return true;
	} catch (_e) {}
	try {
		return element.matches(":modal");
	} catch (_e) {
		return false;
	}
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
	const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
	return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
	let currentNode = getParentNode(element);
	while (isHTMLElement$1(currentNode) && !isLastTraversableNode(currentNode)) {
		if (isContainingBlock(currentNode)) return currentNode;
		else if (isTopLayer(currentNode)) return null;
		currentNode = getParentNode(currentNode);
	}
	return null;
}
function isWebKit() {
	if (isWebKitValue == null) isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
	return isWebKitValue;
}
function isLastTraversableNode(node) {
	return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
	if (isElement(element)) return {
		scrollLeft: element.scrollLeft,
		scrollTop: element.scrollTop
	};
	return {
		scrollLeft: element.scrollX,
		scrollTop: element.scrollY
	};
}
function getParentNode(node) {
	if (getNodeName(node) === "html") return node;
	const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
	return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
	const parentNode = getParentNode(node);
	if (isLastTraversableNode(parentNode)) return (node.ownerDocument || node).body;
	if (isHTMLElement$1(parentNode) && isOverflowElement(parentNode)) return parentNode;
	return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
	var _node$ownerDocument2;
	if (list === void 0) list = [];
	if (traverseIframes === void 0) traverseIframes = true;
	const scrollableAncestor = getNearestOverflowAncestor(node);
	const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
	const win = getWindow(scrollableAncestor);
	if (isBody) {
		const frameElement = getFrameElement(win);
		return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
	} else return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
	return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
	const css = getComputedStyle$1(element);
	let width = parseFloat(css.width) || 0;
	let height = parseFloat(css.height) || 0;
	const hasOffset = isHTMLElement$1(element);
	const offsetWidth = hasOffset ? element.offsetWidth : width;
	const offsetHeight = hasOffset ? element.offsetHeight : height;
	const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
	if (shouldFallback) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height,
		$: shouldFallback
	};
}
function unwrapElement(element) {
	return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
	const domElement = unwrapElement(element);
	if (!isHTMLElement$1(domElement)) return createCoords(1);
	const rect = domElement.getBoundingClientRect();
	const { width, height, $ } = getCssDimensions(domElement);
	let x = ($ ? round(rect.width) : rect.width) / width;
	let y = ($ ? round(rect.height) : rect.height) / height;
	if (!x || !Number.isFinite(x)) x = 1;
	if (!y || !Number.isFinite(y)) y = 1;
	return {
		x,
		y
	};
}
var noOffsets = /*#__PURE__*/ createCoords(0);
function getVisualOffsets(element) {
	const win = getWindow(element);
	if (!isWebKit() || !win.visualViewport) return noOffsets;
	return {
		x: win.visualViewport.offsetLeft,
		y: win.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
	if (isFixed === void 0) isFixed = false;
	return !!floatingOffsetParent && isFixed && floatingOffsetParent === getWindow(element);
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	const clientRect = element.getBoundingClientRect();
	const domElement = unwrapElement(element);
	let scale = createCoords(1);
	if (includeScale) {
		if (offsetParent) {
			if (isElement(offsetParent)) scale = getScale(offsetParent);
		} else scale = getScale(element);
	}
	const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
	let x = (clientRect.left + visualOffsets.x) / scale.x;
	let y = (clientRect.top + visualOffsets.y) / scale.y;
	let width = clientRect.width / scale.x;
	let height = clientRect.height / scale.y;
	if (domElement && offsetParent) {
		const win = getWindow(domElement);
		const offsetWin = isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
		let currentWin = win;
		let currentIFrame = getFrameElement(currentWin);
		while (currentIFrame && offsetWin !== currentWin) {
			const iframeScale = getScale(currentIFrame);
			const iframeRect = currentIFrame.getBoundingClientRect();
			const css = getComputedStyle$1(currentIFrame);
			const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
			const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
			x *= iframeScale.x;
			y *= iframeScale.y;
			width *= iframeScale.x;
			height *= iframeScale.y;
			x += left;
			y += top;
			currentWin = getWindow(currentIFrame);
			currentIFrame = getFrameElement(currentWin);
		}
	}
	return rectToClientRect({
		width,
		height,
		x,
		y
	});
}
function getWindowScrollBarX(element, rect) {
	const leftScroll = getNodeScroll(element).scrollLeft;
	if (!rect) return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
	return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
	const htmlRect = documentElement.getBoundingClientRect();
	return {
		x: htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect),
		y: htmlRect.top + scroll.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
	let { elements, rect, offsetParent, strategy } = _ref;
	const isFixed = strategy === "fixed";
	const documentElement = getDocumentElement(offsetParent);
	const topLayer = elements ? isTopLayer(elements.floating) : false;
	if (offsetParent === documentElement || topLayer && isFixed) return rect;
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	let scale = createCoords(1);
	const offsets = createCoords(0);
	const isOffsetParentAnElement = isHTMLElement$1(offsetParent);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent);
			scale = getScale(offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		width: rect.width * scale.x,
		height: rect.height * scale.y,
		x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
		y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
	};
}
function getClientRects(element) {
	return element.getClientRects ? Array.from(element.getClientRects()) : [];
}
function getDocumentRect(html) {
	const scroll = getNodeScroll(html);
	const body = html.ownerDocument.body;
	const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
	const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
	let x = -scroll.scrollLeft + getWindowScrollBarX(html);
	const y = -scroll.scrollTop;
	if (getComputedStyle$1(body).direction === "rtl") x += max(html.clientWidth, body.clientWidth) - width;
	return {
		width,
		height,
		x,
		y
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy, rootBoundary) {
	if (rootBoundary === void 0) rootBoundary = "viewport";
	const isLayoutViewport = rootBoundary === "layoutViewport";
	const win = getWindow(element);
	const html = getDocumentElement(element);
	const visualViewport = win.visualViewport;
	let width = html.clientWidth;
	let height = html.clientHeight;
	let x = 0;
	let y = 0;
	if (visualViewport) {
		const layoutRelativeClientCoords = !isWebKit() || strategy === "fixed";
		if (isLayoutViewport) {
			if (!layoutRelativeClientCoords) {
				x = -visualViewport.offsetLeft;
				y = -visualViewport.offsetTop;
			}
		} else {
			width = visualViewport.width;
			height = visualViewport.height;
			if (layoutRelativeClientCoords) {
				x = visualViewport.offsetLeft;
				y = visualViewport.offsetTop;
			}
		}
	}
	if (getWindowScrollBarX(html) <= 0) {
		const doc = html.ownerDocument;
		const body = doc.body;
		const bodyStyles = getComputedStyle(body);
		const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
		const reservedWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
		const gutter = getComputedStyle(html).scrollbarGutter === "stable both-edges" ? reservedWidth / 2 : reservedWidth;
		if (gutter <= SCROLLBAR_MAX) width -= gutter;
	}
	return {
		width,
		height,
		x,
		y
	};
}
function getInnerBoundingClientRect(element, strategy) {
	const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
	const top = clientRect.top + element.clientTop;
	const left = clientRect.left + element.clientLeft;
	const scale = getScale(element);
	return {
		width: element.clientWidth * scale.x,
		height: element.clientHeight * scale.y,
		x: left * scale.x,
		y: top * scale.y
	};
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
	let rect;
	if (clippingAncestor === "viewport" || clippingAncestor === "layoutViewport") rect = getViewportRect(element, strategy, clippingAncestor);
	else if (clippingAncestor === "document") rect = getDocumentRect(getDocumentElement(element));
	else if (isElement(clippingAncestor)) rect = getInnerBoundingClientRect(clippingAncestor, strategy);
	else {
		const visualOffsets = getVisualOffsets(element);
		rect = {
			x: clippingAncestor.x - visualOffsets.x,
			y: clippingAncestor.y - visualOffsets.y,
			width: clippingAncestor.width,
			height: clippingAncestor.height
		};
	}
	return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
	const cachedResult = cache.get(element);
	if (cachedResult) return cachedResult;
	let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
	let lastKeptComputedStyle = null;
	const elementIsFixed = getComputedStyle$1(element).position === "fixed";
	let currentNode = elementIsFixed ? getParentNode(element) : element;
	while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
		const computedStyle = getComputedStyle$1(currentNode);
		const currentNodeIsContaining = isContainingBlock(currentNode);
		const lastPosition = lastKeptComputedStyle ? lastKeptComputedStyle.position : elementIsFixed ? "fixed" : "";
		if (!currentNodeIsContaining && (lastPosition === "fixed" || lastPosition === "absolute" && computedStyle.position === "static")) result = result.filter((ancestor) => ancestor !== currentNode);
		else lastKeptComputedStyle = computedStyle;
		currentNode = getParentNode(currentNode);
	}
	cache.set(element, result);
	return result;
}
function getClippingRect(_ref) {
	let { element, boundary, rootBoundary, strategy } = _ref;
	const clippingAncestors = [...boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary), rootBoundary];
	const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
	let top = firstRect.top;
	let right = firstRect.right;
	let bottom = firstRect.bottom;
	let left = firstRect.left;
	for (let i = 1; i < clippingAncestors.length; i++) {
		const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
		top = max(rect.top, top);
		right = min(rect.right, right);
		bottom = min(rect.bottom, bottom);
		left = max(rect.left, left);
	}
	return {
		width: right - left,
		height: bottom - top,
		x: left,
		y: top
	};
}
function getDimensions(element) {
	const { width, height } = getCssDimensions(element);
	return {
		width,
		height
	};
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
	const isOffsetParentAnElement = isHTMLElement$1(offsetParent);
	const documentElement = getDocumentElement(offsetParent);
	const isFixed = strategy === "fixed";
	const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	const offsets = createCoords(0);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	if (!isOffsetParentAnElement && documentElement) offsets.x = getWindowScrollBarX(documentElement);
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		x: rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x,
		y: rect.top + scroll.scrollTop - offsets.y - htmlOffset.y,
		width: rect.width,
		height: rect.height
	};
}
function isStaticPositioned(element) {
	return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
	if (!isHTMLElement$1(element) || getComputedStyle$1(element).position === "fixed") return null;
	if (polyfill) return polyfill(element);
	let rawOffsetParent = element.offsetParent;
	if (getDocumentElement(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
	return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
	const win = getWindow(element);
	if (isTopLayer(element)) return win;
	if (!isHTMLElement$1(element)) {
		let svgOffsetParent = getParentNode(element);
		while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
			if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
			svgOffsetParent = getParentNode(svgOffsetParent);
		}
		return win;
	}
	let offsetParent = getTrueOffsetParent(element, polyfill);
	while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) offsetParent = getTrueOffsetParent(offsetParent, polyfill);
	if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) return win;
	return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
	const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
	const getDimensionsFn = this.getDimensions;
	const floatingDimensions = await getDimensionsFn(data.floating);
	return {
		reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
		floating: {
			x: 0,
			y: 0,
			width: floatingDimensions.width,
			height: floatingDimensions.height
		}
	};
};
function isRTL(element) {
	return getComputedStyle$1(element).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement,
	isRTL
};
function rectsAreEqual(a, b) {
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove, ancestorResize) {
	let io = null;
	let timeoutId;
	const root = getDocumentElement(element);
	function cleanup() {
		var _io;
		clearTimeout(timeoutId);
		(_io = io) == null || _io.disconnect();
		io = null;
	}
	function refresh(skip, threshold) {
		if (skip === void 0) skip = false;
		if (threshold === void 0) threshold = 1;
		cleanup();
		const elementRectForRootMargin = element.getBoundingClientRect();
		const { left, top, width, height } = elementRectForRootMargin;
		if (!skip) onMove();
		if (!width || !height) return;
		const insetTop = floor(top);
		const insetRight = floor(root.clientWidth - (left + width));
		const insetBottom = floor(root.clientHeight - (top + height));
		const insetLeft = floor(left);
		const options = {
			rootMargin: -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px",
			threshold: max(0, min(1, threshold)) || 1
		};
		let isFirstUpdate = true;
		function handleObserve(entries) {
			const ratio = entries[0].intersectionRatio;
			if (!rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) return refresh();
			if (ratio !== threshold) {
				if (!isFirstUpdate) return refresh();
				if (!ratio) timeoutId = setTimeout(() => {
					refresh(false, 1e-7);
				}, 1e3);
				else refresh(false, ratio);
			}
			isFirstUpdate = false;
		}
		try {
			io = new IntersectionObserver(handleObserve, {
				...options,
				root: root.ownerDocument
			});
		} catch (_e) {
			io = new IntersectionObserver(handleObserve, options);
		}
		io.observe(element);
	}
	const win = getWindow(element);
	const handleResize = () => refresh(ancestorResize);
	win.addEventListener("resize", handleResize);
	refresh(true);
	return () => {
		win.removeEventListener("resize", handleResize);
		cleanup();
	};
}
/**
* Automatically updates the position of the floating element when necessary.
* Should only be called when the floating element is mounted on the DOM or
* visible on the screen.
* @returns cleanup function that should be invoked when the floating element is
* removed from the DOM or hidden from the screen.
* @see https://floating-ui.com/docs/autoUpdate
*/
function autoUpdate(reference, floating, update, options) {
	if (options === void 0) options = {};
	const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === "function", layoutShift = typeof IntersectionObserver === "function", animationFrame = false } = options;
	const referenceEl = unwrapElement(reference);
	const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
	ancestors.forEach((ancestor) => {
		ancestorScroll && ancestor.addEventListener("scroll", update);
		ancestorResize && ancestor.addEventListener("resize", update);
	});
	const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update, ancestorResize) : null;
	let reobserveFrame = -1;
	let resizeObserver = null;
	if (elementResize) {
		resizeObserver = new ResizeObserver((_ref) => {
			let [firstEntry] = _ref;
			if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
				resizeObserver.unobserve(floating);
				cancelAnimationFrame(reobserveFrame);
				reobserveFrame = requestAnimationFrame(() => {
					var _resizeObserver;
					(_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
				});
			}
			update();
		});
		if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
		if (floating) resizeObserver.observe(floating);
	}
	let frameId;
	let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
	if (animationFrame) frameLoop();
	function frameLoop() {
		const nextRefRect = getBoundingClientRect(reference);
		if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
		prevRefRect = nextRefRect;
		frameId = requestAnimationFrame(frameLoop);
	}
	update();
	return () => {
		var _resizeObserver2;
		ancestors.forEach((ancestor) => {
			ancestorScroll && ancestor.removeEventListener("scroll", update);
			ancestorResize && ancestor.removeEventListener("resize", update);
		});
		cleanupIo?.();
		(_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
		resizeObserver = null;
		if (animationFrame) cancelAnimationFrame(frameId);
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset$1 = offset$2;
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift$1 = shift$2;
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip$1 = flip$2;
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size$1 = size$2;
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide$1 = hide$2;
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow$2 = arrow$3;
/**
* Built-in `limiter` that will stop `shift()` at a certain point.
*/
var limitShift$1 = limitShift$2;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
*/
var computePosition = (reference, floating, options) => {
	const cache = /* @__PURE__ */ new Map();
	const mergedOptions = options != null ? options : {};
	const platformWithCache = {
		...platform,
		...mergedOptions.platform,
		_c: cache
	};
	return computePosition$1(reference, floating, {
		...mergedOptions,
		platform: platformWithCache
	});
};
var index = typeof document !== "undefined" ? import_react.useLayoutEffect : function noop() {};
function deepEqual(a, b) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (typeof a === "function" && a.toString() === b.toString()) return true;
	let length;
	let i;
	let keys;
	if (a && b && typeof a === "object") {
		if (Array.isArray(a)) {
			length = a.length;
			if (length !== b.length) return false;
			for (i = length; i-- !== 0;) if (!deepEqual(a[i], b[i])) return false;
			return true;
		}
		keys = Object.keys(a);
		length = keys.length;
		if (length !== Object.keys(b).length) return false;
		for (i = length; i-- !== 0;) if (!{}.hasOwnProperty.call(b, keys[i])) return false;
		for (i = length; i-- !== 0;) {
			const key = keys[i];
			if (key === "_owner" && a.$$typeof) continue;
			if (!deepEqual(a[key], b[key])) return false;
		}
		return true;
	}
	return a !== a && b !== b;
}
function getDPR(element) {
	if (typeof window === "undefined") return 1;
	return (element.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(element, value) {
	const dpr = getDPR(element);
	return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
	const ref = import_react.useRef(value);
	index(() => {
		ref.current = value;
	});
	return ref;
}
/**
* Provides data to position a floating element.
* @see https://floating-ui.com/docs/useFloating
*/
function useFloating(options) {
	if (options === void 0) options = {};
	const { placement = "bottom", strategy = "absolute", middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
	const [data, setData] = import_react.useState({
		x: 0,
		y: 0,
		strategy,
		placement,
		middlewareData: {},
		isPositioned: false
	});
	const [latestMiddleware, setLatestMiddleware] = import_react.useState(middleware);
	if (!deepEqual(latestMiddleware, middleware)) setLatestMiddleware(middleware);
	const [_reference, _setReference] = import_react.useState(null);
	const [_floating, _setFloating] = import_react.useState(null);
	const setReference = import_react.useCallback((node) => {
		if (node !== referenceRef.current) {
			referenceRef.current = node;
			_setReference(node);
		}
	}, []);
	const setFloating = import_react.useCallback((node) => {
		if (node !== floatingRef.current) {
			floatingRef.current = node;
			_setFloating(node);
		}
	}, []);
	const referenceEl = externalReference || _reference;
	const floatingEl = externalFloating || _floating;
	const referenceRef = import_react.useRef(null);
	const floatingRef = import_react.useRef(null);
	const dataRef = import_react.useRef(data);
	const hasWhileElementsMounted = whileElementsMounted != null;
	const whileElementsMountedRef = useLatestRef(whileElementsMounted);
	const platformRef = useLatestRef(platform);
	const openRef = useLatestRef(open);
	const update = import_react.useCallback(() => {
		if (!referenceRef.current || !floatingRef.current) return;
		const config = {
			placement,
			strategy,
			middleware: latestMiddleware
		};
		if (platformRef.current) config.platform = platformRef.current;
		computePosition(referenceRef.current, floatingRef.current, config).then((data) => {
			const fullData = {
				...data,
				isPositioned: openRef.current !== false
			};
			if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
				dataRef.current = fullData;
				import_react_dom.flushSync(() => {
					setData(fullData);
				});
			}
		});
	}, [
		latestMiddleware,
		placement,
		strategy,
		platformRef,
		openRef
	]);
	index(() => {
		if (open === false && dataRef.current.isPositioned) {
			dataRef.current.isPositioned = false;
			setData((data) => ({
				...data,
				isPositioned: false
			}));
		}
	}, [open]);
	const isMountedRef = import_react.useRef(false);
	index(() => {
		isMountedRef.current = true;
		return () => {
			isMountedRef.current = false;
		};
	}, []);
	index(() => {
		if (referenceEl) referenceRef.current = referenceEl;
		if (floatingEl) floatingRef.current = floatingEl;
		if (referenceEl && floatingEl) {
			if (whileElementsMountedRef.current) return whileElementsMountedRef.current(referenceEl, floatingEl, update);
			update();
		}
	}, [
		referenceEl,
		floatingEl,
		update,
		whileElementsMountedRef,
		hasWhileElementsMounted
	]);
	const refs = import_react.useMemo(() => ({
		reference: referenceRef,
		floating: floatingRef,
		setReference,
		setFloating
	}), [setReference, setFloating]);
	const elements = import_react.useMemo(() => ({
		reference: referenceEl,
		floating: floatingEl
	}), [referenceEl, floatingEl]);
	const floatingStyles = import_react.useMemo(() => {
		const initialStyles = {
			position: strategy,
			left: 0,
			top: 0
		};
		if (!elements.floating) return initialStyles;
		const x = roundByDPR(elements.floating, data.x);
		const y = roundByDPR(elements.floating, data.y);
		if (transform) return {
			...initialStyles,
			transform: "translate(" + x + "px, " + y + "px)",
			...getDPR(elements.floating) >= 1.5 && { willChange: "transform" }
		};
		return {
			position: strategy,
			left: x,
			top: y
		};
	}, [
		strategy,
		transform,
		elements.floating,
		data.x,
		data.y
	]);
	return import_react.useMemo(() => ({
		...data,
		update,
		refs,
		elements,
		floatingStyles
	}), [
		data,
		update,
		refs,
		elements,
		floatingStyles
	]);
}
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* This wraps the core `arrow` middleware to allow React refs as the element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow$1 = (options) => {
	function isRef(value) {
		return {}.hasOwnProperty.call(value, "current");
	}
	return {
		name: "arrow",
		options,
		fn(state) {
			const { element, padding } = typeof options === "function" ? options(state) : options;
			if (element && isRef(element)) {
				if (element.current != null) return arrow$2({
					element: element.current,
					padding
				}).fn(state);
				return {};
			}
			if (element) return arrow$2({
				element,
				padding
			}).fn(state);
			return {};
		}
	};
};
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset = (options, deps) => {
	const result = offset$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift = (options, deps) => {
	const result = shift$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Built-in `limiter` that will stop `shift()` at a certain point.
*/
var limitShift = (options, deps) => {
	return {
		fn: limitShift$1(options).fn,
		options: [options, deps]
	};
};
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip = (options, deps) => {
	const result = flip$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size = (options, deps) => {
	const result = size$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide = (options, deps) => {
	const result = hide$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* This wraps the core `arrow` middleware to allow React refs as the element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow = (options, deps) => {
	const result = arrow$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
var __defProp$20 = Object.defineProperty;
var __name$20 = (target, value) => __defProp$20(target, "name", {
	value,
	configurable: true
});
var Arrow = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$20(function Arrow2(props, forwardedRef) {
	const { children, width = 10, height = 5, ...arrowProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.svg, {
		...arrowProps,
		ref: forwardedRef,
		width,
		height,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: props.asChild ? children : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "0,0 30,0 15,10" })
	});
}, "Arrow"));
var __defProp$19 = Object.defineProperty;
var __name$19 = (target, value) => __defProp$19(target, "name", {
	value,
	configurable: true
});
var Sticky = {
	Partial: "partial",
	Always: "always"
};
var UpdatePositionStrategy = {
	Optimized: "optimized",
	Always: "always"
};
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = /* @__PURE__ */ createContextScope(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = /* @__PURE__ */ __name$19((props) => {
	const { __scopePopper, children } = props;
	const [anchor, setAnchor] = import_react.useState(null);
	const [placementState, setPlacementState] = import_react.useState(void 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperProvider, {
		scope: __scopePopper,
		anchor,
		onAnchorChange: setAnchor,
		placementState,
		setPlacementState,
		children
	});
}, "Popper");
var ANCHOR_NAME$1 = "PopperAnchor";
var PopperAnchor = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$19(function PopperAnchor2(props, forwardedRef) {
	const { __scopePopper, virtualRef, ...anchorProps } = props;
	const context = usePopperContext(ANCHOR_NAME$1, __scopePopper);
	const ref = import_react.useRef(null);
	const onAnchorChange = context.onAnchorChange;
	const composedRefs = useComposedRefs(forwardedRef, import_react.useCallback((node) => {
		ref.current = node;
		if (node) onAnchorChange(node);
	}, [onAnchorChange]));
	const anchorRef = import_react.useRef(null);
	import_react.useEffect(() => {
		if (!virtualRef) return;
		const previousAnchor = anchorRef.current;
		anchorRef.current = virtualRef.current;
		if (previousAnchor !== anchorRef.current) onAnchorChange(anchorRef.current);
	});
	const sideAndAlign = context.placementState && getSideAndAlignFromPlacement(context.placementState);
	const placedSide = sideAndAlign?.[0];
	const placedAlign = sideAndAlign?.[1];
	return virtualRef ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-radix-popper-side": placedSide,
		"data-radix-popper-align": placedAlign,
		...anchorProps,
		ref: composedRefs
	});
}, "PopperAnchor"));
var CONTENT_NAME$9 = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME$9);
var PopperContent = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$19(function PopperContent2(props, forwardedRef) {
	const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = Sticky.Partial, hideWhenDetached = false, updatePositionStrategy = UpdatePositionStrategy.Optimized, onPlaced, ...contentProps } = props;
	const context = usePopperContext(CONTENT_NAME$9, __scopePopper);
	const [content, setContent] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, setContent);
	const [arrow$4, setArrow] = import_react.useState(null);
	const arrowSize = useSize(arrow$4);
	const arrowWidth = arrowSize?.width ?? 0;
	const arrowHeight = arrowSize?.height ?? 0;
	const desiredPlacement = side + (align !== "center" ? "-" + align : "");
	const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...collisionPaddingProp
	};
	const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
	const hasExplicitBoundaries = boundary.length > 0;
	const detectOverflowOptions = {
		padding: collisionPadding,
		boundary: boundary.filter(isNotNull),
		altBoundary: hasExplicitBoundaries
	};
	const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
		strategy: "fixed",
		placement: desiredPlacement,
		whileElementsMounted: /* @__PURE__ */ __name$19((...args) => {
			return autoUpdate(...args, { animationFrame: updatePositionStrategy === UpdatePositionStrategy.Always });
		}, "whileElementsMounted"),
		elements: { reference: context.anchor },
		middleware: [
			offset({
				mainAxis: sideOffset + arrowHeight,
				alignmentAxis: alignOffset
			}),
			avoidCollisions && shift({
				mainAxis: true,
				crossAxis: false,
				limiter: sticky === Sticky.Partial ? limitShift() : void 0,
				...detectOverflowOptions
			}),
			avoidCollisions && flip({ ...detectOverflowOptions }),
			size({
				...detectOverflowOptions,
				apply: /* @__PURE__ */ __name$19(({ elements, rects, availableWidth, availableHeight }) => {
					const { width: anchorWidth, height: anchorHeight } = rects.reference;
					const contentStyle = elements.floating.style;
					contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
					contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
					contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
					contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
				}, "apply")
			}),
			arrow$4 && arrow({
				element: arrow$4,
				padding: arrowPadding
			}),
			transformOrigin({
				arrowWidth,
				arrowHeight
			}),
			hideWhenDetached && hide({
				strategy: "referenceHidden",
				...detectOverflowOptions,
				boundary: hasExplicitBoundaries ? detectOverflowOptions.boundary : void 0
			})
		]
	});
	const setPlacementState = context.setPlacementState;
	useLayoutEffect2(() => {
		setPlacementState(placement);
		return () => {
			setPlacementState(void 0);
		};
	}, [placement, setPlacementState]);
	const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
	const handlePlaced = useCallbackRef$1(onPlaced);
	useLayoutEffect2(() => {
		if (isPositioned) handlePlaced?.();
	}, [isPositioned, handlePlaced]);
	const arrowX = middlewareData.arrow?.x;
	const arrowY = middlewareData.arrow?.y;
	const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
	const [contentZIndex, setContentZIndex] = import_react.useState();
	useLayoutEffect2(() => {
		if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
	}, [content]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: refs.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...floatingStyles,
			transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: contentZIndex,
			"--radix-popper-transform-origin": [middlewareData.transformOrigin?.x, middlewareData.transformOrigin?.y].join(" "),
			...middlewareData.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: props.dir,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperContentProvider, {
			scope: __scopePopper,
			placedSide,
			placedAlign,
			onArrowChange: setArrow,
			arrowX,
			arrowY,
			shouldHideArrow: cannotCenterArrow,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				"data-side": placedSide,
				"data-align": placedAlign,
				...contentProps,
				ref: composedRefs,
				style: {
					...contentProps.style,
					animation: !isPositioned ? "none" : contentProps.style?.animation
				}
			})
		})
	});
}, "PopperContent"));
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
};
var PopperArrow = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$19(function PopperArrow2(props, forwardedRef) {
	const { __scopePopper, ...arrowProps } = props;
	const contentContext = useContentContext(ARROW_NAME, __scopePopper);
	const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref: contentContext.onArrowChange,
		style: {
			position: "absolute",
			left: contentContext.arrowX,
			top: contentContext.arrowY,
			[baseSide]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[contentContext.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: `rotate(180deg)`,
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[contentContext.placedSide],
			visibility: contentContext.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {
			...arrowProps,
			ref: forwardedRef,
			style: {
				...arrowProps.style,
				display: "block"
			}
		})
	});
}, "PopperArrow"));
function isNotNull(value) {
	return value !== null;
}
__name$19(isNotNull, "isNotNull");
var transformOrigin = /* @__PURE__ */ __name$19((options) => ({
	name: "transformOrigin",
	options,
	fn(data) {
		const { placement, rects, middlewareData } = data;
		const isArrowHidden = middlewareData.arrow?.centerOffset !== 0;
		const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
		const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
		const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
		const noArrowAlign = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[placedAlign];
		const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
		const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
		let x = "";
		let y = "";
		if (placedSide === "bottom") {
			x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
			y = `${-arrowHeight}px`;
		} else if (placedSide === "top") {
			x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
			y = `${rects.floating.height + arrowHeight}px`;
		} else if (placedSide === "right") {
			x = `${-arrowHeight}px`;
			y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
		} else if (placedSide === "left") {
			x = `${rects.floating.width + arrowHeight}px`;
			y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
		}
		return { data: {
			x,
			y
		} };
	}
}), "transformOrigin");
function getSideAndAlignFromPlacement(placement) {
	const [side, align = "center"] = placement.split("-");
	return [side, align];
}
__name$19(getSideAndAlignFromPlacement, "getSideAndAlignFromPlacement");
var __defProp$18 = Object.defineProperty;
var __name$18 = (target, value) => __defProp$18(target, "name", {
	value,
	configurable: true
});
var Portal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$18(function Portal2(props, forwardedRef) {
	const { container: containerProp, ...portalProps } = props;
	const [mounted, setMounted] = import_react.useState(false);
	useLayoutEffect2(() => setMounted(true), []);
	const container = containerProp || mounted && globalThis?.document?.body;
	return container ? import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...portalProps,
		ref: forwardedRef
	}), container) : null;
}, "Portal"));
var __defProp$17 = Object.defineProperty;
var __name$17 = (target, value) => __defProp$17(target, "name", {
	value,
	configurable: true
});
var VISUALLY_HIDDEN_STYLES = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
});
var VisuallyHidden = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$17(function VisuallyHidden2(props, forwardedRef) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...props,
		ref: forwardedRef,
		style: {
			...VISUALLY_HIDDEN_STYLES,
			...props.style
		}
	});
}, "VisuallyHidden"));
var __defProp$16 = Object.defineProperty;
var __name$16 = (target, value) => __defProp$16(target, "name", {
	value,
	configurable: true
});
var [createTooltipContext, createTooltipScope] = /* @__PURE__ */ createContextScope("Tooltip", [createPopperScope]);
var usePopperScope$4 = createPopperScope();
var PROVIDER_NAME$1 = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME$1);
var TooltipProvider = /* @__PURE__ */ __name$16((props) => {
	const { __scopeTooltip, delayDuration = DEFAULT_DELAY_DURATION, skipDelayDuration = 300, disableHoverableContent = false, children } = props;
	const isOpenDelayedRef = import_react.useRef(true);
	const isPointerInTransitRef = import_react.useRef(false);
	const skipDelayTimerRef = import_react.useRef(0);
	import_react.useEffect(() => {
		const skipDelayTimer = skipDelayTimerRef.current;
		return () => window.clearTimeout(skipDelayTimer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProviderContextProvider, {
		scope: __scopeTooltip,
		isOpenDelayedRef,
		delayDuration,
		onOpen: import_react.useCallback(() => {
			if (skipDelayDuration <= 0) return;
			window.clearTimeout(skipDelayTimerRef.current);
			isOpenDelayedRef.current = false;
		}, [skipDelayDuration]),
		onClose: import_react.useCallback(() => {
			if (skipDelayDuration <= 0) return;
			window.clearTimeout(skipDelayTimerRef.current);
			skipDelayTimerRef.current = window.setTimeout(() => isOpenDelayedRef.current = true, skipDelayDuration);
		}, [skipDelayDuration]),
		isPointerInTransitRef,
		onPointerInTransitChange: import_react.useCallback((inTransit) => {
			isPointerInTransitRef.current = inTransit;
		}, []),
		disableHoverableContent,
		children
	});
}, "TooltipProvider");
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip$1 = /* @__PURE__ */ __name$16((props) => {
	const { __scopeTooltip, children, open: openProp, defaultOpen, onOpenChange, disableHoverableContent: disableHoverableContentProp, delayDuration: delayDurationProp } = props;
	const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
	const popperScope = usePopperScope$4(__scopeTooltip);
	const [trigger, setTrigger] = import_react.useState(null);
	const [contentIdState, setContentId] = import_react.useState(void 0);
	const generatedContentId = useId();
	const openTimerRef = import_react.useRef(0);
	const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
	const delayDuration = delayDurationProp ?? providerContext.delayDuration;
	const wasOpenDelayedRef = import_react.useRef(false);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: /* @__PURE__ */ __name$16((open2) => {
			if (open2) {
				providerContext.onOpen();
				document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
			} else providerContext.onClose();
			onOpenChange?.(open2);
		}, "onChange"),
		caller: TOOLTIP_NAME
	});
	const stateAttribute = import_react.useMemo(() => {
		return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
	}, [open]);
	const handleOpen = import_react.useCallback(() => {
		window.clearTimeout(openTimerRef.current);
		openTimerRef.current = 0;
		wasOpenDelayedRef.current = false;
		setOpen(true);
	}, [setOpen]);
	const handleClose = import_react.useCallback(() => {
		window.clearTimeout(openTimerRef.current);
		openTimerRef.current = 0;
		setOpen(false);
	}, [setOpen]);
	const handleDelayedOpen = import_react.useCallback(() => {
		window.clearTimeout(openTimerRef.current);
		openTimerRef.current = window.setTimeout(() => {
			wasOpenDelayedRef.current = true;
			setOpen(true);
			openTimerRef.current = 0;
		}, delayDuration);
	}, [delayDuration, setOpen]);
	import_react.useEffect(() => {
		return () => {
			if (openTimerRef.current) {
				window.clearTimeout(openTimerRef.current);
				openTimerRef.current = 0;
			}
		};
	}, []);
	const contentId = contentIdState ?? generatedContentId;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popper, {
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContextProvider, {
			scope: __scopeTooltip,
			contentId,
			setContentId,
			open,
			stateAttribute,
			trigger,
			onTriggerChange: setTrigger,
			onTriggerEnter: import_react.useCallback(() => {
				if (providerContext.isOpenDelayedRef.current) handleDelayedOpen();
				else handleOpen();
			}, [
				providerContext.isOpenDelayedRef,
				handleDelayedOpen,
				handleOpen
			]),
			onTriggerLeave: import_react.useCallback(() => {
				if (disableHoverableContent) handleClose();
				else {
					window.clearTimeout(openTimerRef.current);
					openTimerRef.current = 0;
				}
			}, [handleClose, disableHoverableContent]),
			onOpen: handleOpen,
			onClose: handleClose,
			disableHoverableContent,
			children
		})
	});
}, "Tooltip");
var TRIGGER_NAME$8 = "TooltipTrigger";
var TooltipTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$16(function TooltipTrigger2(props, forwardedRef) {
	const { __scopeTooltip, "aria-describedby": ariaDescribedby, ...triggerProps } = props;
	const context = useTooltipContext(TRIGGER_NAME$8, __scopeTooltip);
	const providerContext = useTooltipProviderContext(TRIGGER_NAME$8, __scopeTooltip);
	const popperScope = usePopperScope$4(__scopeTooltip);
	const composedRefs = useComposedRefs(forwardedRef, import_react.useRef(null), context.onTriggerChange);
	const isPointerDownRef = import_react.useRef(false);
	const hasPointerMoveOpenedRef = import_react.useRef(false);
	const handlePointerUp = import_react.useCallback(() => isPointerDownRef.current = false, []);
	import_react.useEffect(() => {
		return () => document.removeEventListener("pointerup", handlePointerUp);
	}, [handlePointerUp]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperAnchor, {
		asChild: true,
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			"aria-describedby": context.open ? concatAriaDescribedby$2(ariaDescribedby, context.contentId) : ariaDescribedby,
			"data-state": context.stateAttribute,
			...triggerProps,
			ref: composedRefs,
			onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
				if (event.pointerType === "touch") return;
				if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
					context.onTriggerEnter();
					hasPointerMoveOpenedRef.current = true;
				}
			}),
			onPointerLeave: composeEventHandlers(props.onPointerLeave, () => {
				context.onTriggerLeave();
				hasPointerMoveOpenedRef.current = false;
			}),
			onPointerDown: composeEventHandlers(props.onPointerDown, () => {
				if (context.open) context.onClose();
				isPointerDownRef.current = true;
				document.addEventListener("pointerup", handlePointerUp, { once: true });
			}),
			onFocus: composeEventHandlers(props.onFocus, () => {
				if (!isPointerDownRef.current) context.onOpen();
			}),
			onBlur: composeEventHandlers(props.onBlur, context.onClose),
			onClick: composeEventHandlers(props.onClick, context.onClose)
		})
	});
}, "TooltipTrigger"));
var PORTAL_NAME$4 = "TooltipPortal";
var [PortalProvider$5, usePortalContext$5] = createTooltipContext(PORTAL_NAME$4, { forceMount: void 0 });
var TooltipPortal = /* @__PURE__ */ __name$16((props) => {
	const { __scopeTooltip, forceMount, children, container } = props;
	const context = useTooltipContext(PORTAL_NAME$4, __scopeTooltip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider$5, {
		scope: __scopeTooltip,
		forceMount,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children
			})
		})
	});
}, "TooltipPortal");
var CONTENT_NAME$8 = "TooltipContent";
var TooltipContent = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$16(function TooltipContent2(props, forwardedRef) {
	const portalContext = usePortalContext$5(CONTENT_NAME$8, props.__scopeTooltip);
	const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
	const context = useTooltipContext(CONTENT_NAME$8, props.__scopeTooltip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.disableHoverableContent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContentImpl, {
			side,
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContentHoverable, {
			side,
			...contentProps,
			ref: forwardedRef
		})
	});
}, "TooltipContent"));
var TooltipContentHoverable = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$16(function TooltipContentHoverable2(props, forwardedRef) {
	const context = useTooltipContext(CONTENT_NAME$8, props.__scopeTooltip);
	const providerContext = useTooltipProviderContext(CONTENT_NAME$8, props.__scopeTooltip);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const [pointerGraceArea, setPointerGraceArea] = import_react.useState(null);
	const { trigger, onClose } = context;
	const content = ref.current;
	const { onPointerInTransitChange } = providerContext;
	const handleRemoveGraceArea = import_react.useCallback(() => {
		setPointerGraceArea(null);
		onPointerInTransitChange(false);
	}, [onPointerInTransitChange]);
	const handleCreateGraceArea = import_react.useCallback((event, hoverTarget) => {
		const currentTarget = event.currentTarget;
		const exitPoint = {
			x: event.clientX,
			y: event.clientY
		};
		const paddedExitPoints = getPaddedExitPoints(exitPoint, getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect()));
		const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
		const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
		setPointerGraceArea(graceArea);
		onPointerInTransitChange(true);
	}, [onPointerInTransitChange]);
	import_react.useEffect(() => {
		return () => handleRemoveGraceArea();
	}, [handleRemoveGraceArea]);
	import_react.useEffect(() => {
		if (trigger && content) {
			const handleTriggerLeave = /* @__PURE__ */ __name$16((event) => handleCreateGraceArea(event, content), "handleTriggerLeave");
			const handleContentLeave = /* @__PURE__ */ __name$16((event) => handleCreateGraceArea(event, trigger), "handleContentLeave");
			trigger.addEventListener("pointerleave", handleTriggerLeave);
			content.addEventListener("pointerleave", handleContentLeave);
			return () => {
				trigger.removeEventListener("pointerleave", handleTriggerLeave);
				content.removeEventListener("pointerleave", handleContentLeave);
			};
		}
	}, [
		trigger,
		content,
		handleCreateGraceArea,
		handleRemoveGraceArea
	]);
	import_react.useEffect(() => {
		if (pointerGraceArea) {
			const handleTrackPointerGrace = /* @__PURE__ */ __name$16((event) => {
				const target = event.target;
				const pointerPosition = {
					x: event.clientX,
					y: event.clientY
				};
				const hasEnteredTarget = trigger?.contains(target) || content?.contains(target);
				const isPointerOutsideGraceArea = !isPointInPolygon$1(pointerPosition, pointerGraceArea);
				if (hasEnteredTarget) handleRemoveGraceArea();
				else if (isPointerOutsideGraceArea) {
					handleRemoveGraceArea();
					onClose();
				}
			}, "handleTrackPointerGrace");
			document.addEventListener("pointermove", handleTrackPointerGrace);
			return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
		}
	}, [
		trigger,
		content,
		pointerGraceArea,
		onClose,
		handleRemoveGraceArea
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContentImpl, {
		...props,
		ref: composedRefs
	});
}, "TooltipContentHoverable"));
var Slottable = /* @__PURE__ */ createSlottable("TooltipContent");
var TooltipContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$16(function TooltipContentImpl2(props, forwardedRef) {
	const { __scopeTooltip, children, "aria-label": ariaLabel, id: idProp, onEscapeKeyDown, onPointerDownOutside, ...contentProps } = props;
	const context = useTooltipContext(CONTENT_NAME$8, __scopeTooltip);
	const popperScope = usePopperScope$4(__scopeTooltip);
	const { onClose } = context;
	import_react.useEffect(() => {
		document.addEventListener(TOOLTIP_OPEN, onClose);
		return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
	}, [onClose]);
	import_react.useEffect(() => {
		if (context.trigger) {
			const handleScroll = /* @__PURE__ */ __name$16((event) => {
				if (event.target instanceof Node && event.target.contains(context.trigger)) onClose();
			}, "handleScroll");
			window.addEventListener("scroll", handleScroll, { capture: true });
			return () => window.removeEventListener("scroll", handleScroll, { capture: true });
		}
	}, [context.trigger, onClose]);
	const { setContentId } = context;
	useLayoutEffect2(() => {
		setContentId(idProp);
		return () => {
			setContentId(void 0);
		};
	}, [idProp, setContentId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
		asChild: true,
		disableOutsidePointerEvents: false,
		onEscapeKeyDown,
		onPointerDownOutside,
		onFocusOutside: (event) => event.preventDefault(),
		onDismiss: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopperContent, {
			"data-state": context.stateAttribute,
			role: ariaLabel ? void 0 : "tooltip",
			id: ariaLabel ? void 0 : context.contentId,
			...popperScope,
			...contentProps,
			ref: forwardedRef,
			style: {
				...contentProps.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slottable, { children }), ariaLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisuallyHidden, {
				id: context.contentId,
				role: "tooltip",
				children: ariaLabel
			}) : null]
		})
	});
}, "TooltipContentImpl"));
var TooltipArrow = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$16(function TooltipArrow2(props, forwardedRef) {
	const { __scopeTooltip, ...arrowProps } = props;
	const popperScope = usePopperScope$4(__scopeTooltip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperArrow, {
		...popperScope,
		...arrowProps,
		ref: forwardedRef
	});
}, "TooltipArrow"));
function getExitSideFromRect(point, rect) {
	const top = Math.abs(rect.top - point.y);
	const bottom = Math.abs(rect.bottom - point.y);
	const right = Math.abs(rect.right - point.x);
	const left = Math.abs(rect.left - point.x);
	switch (Math.min(top, bottom, right, left)) {
		case left: return "left";
		case right: return "right";
		case top: return "top";
		case bottom: return "bottom";
		default: throw new Error("unreachable");
	}
}
__name$16(getExitSideFromRect, "getExitSideFromRect");
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
	const paddedExitPoints = [];
	switch (exitSide) {
		case "top":
			paddedExitPoints.push({
				x: exitPoint.x - padding,
				y: exitPoint.y + padding
			}, {
				x: exitPoint.x + padding,
				y: exitPoint.y + padding
			});
			break;
		case "bottom":
			paddedExitPoints.push({
				x: exitPoint.x - padding,
				y: exitPoint.y - padding
			}, {
				x: exitPoint.x + padding,
				y: exitPoint.y - padding
			});
			break;
		case "left":
			paddedExitPoints.push({
				x: exitPoint.x + padding,
				y: exitPoint.y - padding
			}, {
				x: exitPoint.x + padding,
				y: exitPoint.y + padding
			});
			break;
		case "right": paddedExitPoints.push({
			x: exitPoint.x - padding,
			y: exitPoint.y - padding
		}, {
			x: exitPoint.x - padding,
			y: exitPoint.y + padding
		});
	}
	return paddedExitPoints;
}
__name$16(getPaddedExitPoints, "getPaddedExitPoints");
function getPointsFromRect(rect) {
	const { top, right, bottom, left } = rect;
	return [
		{
			x: left,
			y: top
		},
		{
			x: right,
			y: top
		},
		{
			x: right,
			y: bottom
		},
		{
			x: left,
			y: bottom
		}
	];
}
__name$16(getPointsFromRect, "getPointsFromRect");
function isPointInPolygon$1(point, polygon) {
	const { x, y } = point;
	let inside = false;
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const ii = polygon[i];
		const jj = polygon[j];
		const xi = ii.x;
		const yi = ii.y;
		const xj = jj.x;
		const yj = jj.y;
		if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
	}
	return inside;
}
__name$16(isPointInPolygon$1, "isPointInPolygon");
function getHull(points) {
	const newPoints = points.slice();
	newPoints.sort((a, b) => {
		if (a.x < b.x) return -1;
		else if (a.x > b.x) return 1;
		else if (a.y < b.y) return -1;
		else if (a.y > b.y) return 1;
		else return 0;
	});
	return getHullPresorted(newPoints);
}
__name$16(getHull, "getHull");
function getHullPresorted(points) {
	if (points.length <= 1) return points.slice();
	const upperHull = [];
	for (let i = 0; i < points.length; i++) {
		const p = points[i];
		while (upperHull.length >= 2) {
			const q = upperHull[upperHull.length - 1];
			const r = upperHull[upperHull.length - 2];
			if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
			else break;
		}
		upperHull.push(p);
	}
	upperHull.pop();
	const lowerHull = [];
	for (let i = points.length - 1; i >= 0; i--) {
		const p = points[i];
		while (lowerHull.length >= 2) {
			const q = lowerHull[lowerHull.length - 1];
			const r = lowerHull[lowerHull.length - 2];
			if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
			else break;
		}
		lowerHull.push(p);
	}
	lowerHull.pop();
	if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
	else return upperHull.concat(lowerHull);
}
__name$16(getHullPresorted, "getHullPresorted");
function concatAriaDescribedby$2(...values) {
	const ids = /* @__PURE__ */ new Set();
	for (const value of values) {
		if (typeof value !== "string") continue;
		for (const id of String(value).trim().split(/\s+/)) if (id) ids.add(id);
	}
	return ids.size > 0 ? Array.from(ids).join(" ") : void 0;
}
__name$16(concatAriaDescribedby$2, "concatAriaDescribedby");
var sideOffsetClass$1 = {
	top: "origin-bottom",
	right: "origin-left",
	bottom: "origin-top",
	left: "origin-right"
};
/**
* Tooltip — hover/focus bubble built on Radix.
*
* The trigger receives `aria-describedby` while open, so label the trigger
* itself; never put focusable elements or essential-only information inside
* `content`.
*/
function Tooltip({ content, side = "top", align = "center", sideOffset = 6, showArrow = true, children, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		skipDelayDuration: 200,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip$1, {
			...props,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
				asChild: true,
				children
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipContent, {
				side,
				align,
				sideOffset,
				"data-slot": "tooltip-content",
				className: cn$1("z-50 max-w-[260px] rounded-md border border-border bg-foreground px-2.5 py-1.5 text-xs font-medium leading-snug text-background shadow-raised animate-[vert-pop-in_140ms_ease-out]", sideOffsetClass$1[side], className),
				children: [content, showArrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipArrow, {
					"data-slot": "tooltip-arrow",
					className: "size-2.5 rotate-45 rounded-[2px] bg-foreground"
				}) : null]
			}) })]
		})
	});
}
var __defProp$15 = Object.defineProperty;
var __name$15 = (target, value) => __defProp$15(target, "name", {
	value,
	configurable: true
});
var count = 0;
var guards = null;
function FocusGuards(props) {
	useFocusGuards();
	return props.children;
}
__name$15(FocusGuards, "FocusGuards");
function useFocusGuards() {
	import_react.useEffect(() => {
		if (!guards) guards = {
			start: createFocusGuard(),
			end: createFocusGuard()
		};
		const { start, end } = guards;
		if (document.body.firstElementChild !== start) document.body.insertAdjacentElement("afterbegin", start);
		if (document.body.lastElementChild !== end) document.body.insertAdjacentElement("beforeend", end);
		count++;
		return () => {
			if (count === 1) {
				guards?.start.remove();
				guards?.end.remove();
				guards = null;
			}
			count = Math.max(0, count - 1);
		};
	}, []);
}
__name$15(useFocusGuards, "useFocusGuards");
function createFocusGuard() {
	const element = document.createElement("span");
	element.setAttribute("data-radix-focus-guard", "");
	element.tabIndex = 0;
	element.style.outline = "none";
	element.style.opacity = "0";
	element.style.position = "fixed";
	element.style.pointerEvents = "none";
	return element;
}
__name$15(createFocusGuard, "createFocusGuard");
var __defProp$14 = Object.defineProperty;
var __name$14 = (target, value) => __defProp$14(target, "name", {
	value,
	configurable: true
});
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
var FocusScope = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$14(function FocusScope2(props, forwardedRef) {
	const { loop = false, trapped = false, branches, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
	const [container, setContainer] = import_react.useState(null);
	const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
	const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
	const lastFocusedElementRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, setContainer);
	const branchesRef = import_react.useRef(branches);
	import_react.useEffect(() => {
		branchesRef.current = branches;
	});
	const isTargetInScope = import_react.useCallback((target) => {
		if (!target) return false;
		if (container?.contains(target)) return true;
		return Boolean(branchesRef.current?.some((branch) => branch.contains(target)));
	}, [container]);
	const focusScope = import_react.useRef({
		paused: false,
		pause() {
			this.paused = true;
		},
		resume() {
			this.paused = false;
		}
	}).current;
	import_react.useEffect(() => {
		if (trapped) {
			let handleFocusIn2 = function(event) {
				if (focusScope.paused || !container) return;
				const target = event.target;
				if (isTargetInScope(target)) lastFocusedElementRef.current = target;
				else focus(lastFocusedElementRef.current, { select: true });
			}, handleFocusOut2 = function(event) {
				if (focusScope.paused || !container) return;
				const relatedTarget = event.relatedTarget;
				if (relatedTarget === null) return;
				if (!isTargetInScope(relatedTarget)) focus(lastFocusedElementRef.current, { select: true });
			}, handleMutations2 = function(mutations) {
				if (document.activeElement !== document.body) return;
				for (const mutation of mutations) if (mutation.removedNodes.length > 0) focus(container);
			};
			__name$14(handleFocusIn2, "handleFocusIn");
			__name$14(handleFocusOut2, "handleFocusOut");
			__name$14(handleMutations2, "handleMutations");
			document.addEventListener("focusin", handleFocusIn2);
			document.addEventListener("focusout", handleFocusOut2);
			const mutationObserver = new MutationObserver(handleMutations2);
			if (container) mutationObserver.observe(container, {
				childList: true,
				subtree: true
			});
			return () => {
				document.removeEventListener("focusin", handleFocusIn2);
				document.removeEventListener("focusout", handleFocusOut2);
				mutationObserver.disconnect();
			};
		}
	}, [
		trapped,
		container,
		focusScope.paused,
		isTargetInScope
	]);
	import_react.useEffect(() => {
		if (container) {
			focusScopesStack.add(focusScope);
			const previouslyFocusedElement = document.activeElement;
			if (!container.contains(previouslyFocusedElement)) {
				const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				container.dispatchEvent(mountEvent);
				if (!mountEvent.defaultPrevented) {
					focusFirst$2(removeLinks(getTabbableCandidates$1(container)), { select: true });
					if (document.activeElement === previouslyFocusedElement) focus(container);
				}
			}
			return () => {
				container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				setTimeout(() => {
					const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
					container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					container.dispatchEvent(unmountEvent);
					if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? document.body, { select: true });
					container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					focusScopesStack.remove(focusScope);
				}, 0);
			};
		}
	}, [
		container,
		onMountAutoFocus,
		onUnmountAutoFocus,
		focusScope
	]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (!loop && !trapped) return;
		if (focusScope.paused) return;
		const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
		const focusedElement = document.activeElement;
		if (isTabKey && focusedElement) {
			const container2 = event.currentTarget;
			const [first, last] = getTabbableEdges(container2);
			if (!(first && last)) {
				if (focusedElement === container2) event.preventDefault();
			} else if (!event.shiftKey && focusedElement === last) {
				event.preventDefault();
				if (loop) focus(first, { select: true });
			} else if (event.shiftKey && focusedElement === first) {
				event.preventDefault();
				if (loop) focus(last, { select: true });
			}
		}
	}, [
		loop,
		trapped,
		focusScope.paused
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		tabIndex: -1,
		...scopeProps,
		ref: composedRefs,
		onKeyDown: handleKeyDown
	});
}, "FocusScope"));
var FocusScopeBranchContext = import_react.createContext(null);
function FocusScopeBranchProvider({ registry, children }) {
	if (!registry) return children;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScopeBranchContext.Provider, {
		value: registry,
		children
	});
}
__name$14(FocusScopeBranchProvider, "FocusScopeBranchProvider");
function useFocusScopeBranchRegistry() {
	const [nodes, setNodes] = import_react.useState([]);
	return {
		nodes,
		registry: import_react.useMemo(() => ({
			add: /* @__PURE__ */ __name$14((node) => setNodes((prev) => prev.includes(node) ? prev : [...prev, node]), "add"),
			remove: /* @__PURE__ */ __name$14((node) => setNodes((prev) => prev.filter((current) => current !== node)), "remove")
		}), [])
	};
}
__name$14(useFocusScopeBranchRegistry, "useFocusScopeBranchRegistry");
function useFocusScopeBranch(node) {
	const registry = import_react.useContext(FocusScopeBranchContext);
	import_react.useEffect(() => {
		if (!node || !registry) return;
		registry.add(node);
		return () => registry.remove(node);
	}, [node, registry]);
}
__name$14(useFocusScopeBranch, "useFocusScopeBranch");
function focusFirst$2(candidates, { select = false } = {}) {
	const previouslyFocusedElement = document.activeElement;
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (document.activeElement !== previouslyFocusedElement) return;
	}
}
__name$14(focusFirst$2, "focusFirst");
function getTabbableEdges(container) {
	const candidates = getTabbableCandidates$1(container);
	return [findVisible(candidates, container), findVisible(candidates.reverse(), container)];
}
__name$14(getTabbableEdges, "getTabbableEdges");
function getTabbableCandidates$1(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ __name$14((node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
__name$14(getTabbableCandidates$1, "getTabbableCandidates");
function findVisible(elements, container) {
	const canUseCheckVisibility = typeof container.checkVisibility === "function" && container.checkVisibility({ checkVisibilityCSS: true });
	for (const element of elements) if (!(canUseCheckVisibility ? !element.checkVisibility({ checkVisibilityCSS: true }) : isHidden(element, { upTo: container }))) return element;
}
__name$14(findVisible, "findVisible");
function isHidden(node, { upTo }) {
	if (getComputedStyle(node).visibility === "hidden") return true;
	while (node) {
		if (upTo !== void 0 && node === upTo) return false;
		if (getComputedStyle(node).display === "none") return true;
		node = node.parentElement;
	}
	return false;
}
__name$14(isHidden, "isHidden");
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
__name$14(isSelectableInput, "isSelectableInput");
function focus(element, { select = false } = {}) {
	if (element && element.focus) {
		const previouslyFocusedElement = document.activeElement;
		element.focus({ preventScroll: true });
		if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
	}
}
__name$14(focus, "focus");
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let stack = [];
	return {
		add(focusScope) {
			const activeFocusScope = stack[0];
			if (focusScope !== activeFocusScope) activeFocusScope?.pause();
			stack = arrayRemove(stack, focusScope);
			stack.unshift(focusScope);
		},
		remove(focusScope) {
			stack = arrayRemove(stack, focusScope);
			stack[0]?.resume();
		}
	};
}
__name$14(createFocusScopesStack, "createFocusScopesStack");
function arrayRemove(array, item) {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
}
__name$14(arrayRemove, "arrayRemove");
function removeLinks(items) {
	return items.filter((item) => item.tagName !== "A");
}
__name$14(removeLinks, "removeLinks");
var getDefaultParent = function(originalTarget) {
	if (typeof document === "undefined") return null;
	return (Array.isArray(originalTarget) ? originalTarget[0] : originalTarget).ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
	return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
	return targets.map(function(target) {
		if (parent.contains(target)) return target;
		var correctedTarget = unwrapHost(target);
		if (correctedTarget && parent.contains(correctedTarget)) return correctedTarget;
		console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
		return null;
	}).filter(function(x) {
		return Boolean(x);
	});
};
/**
* Marks everything except given node(or nodes) as aria-hidden
* @param {Element | Element[]} originalTarget - elements to keep on the page
* @param [parentNode] - top element, defaults to document.body
* @param {String} [markerName] - a special attribute to mark every node
* @param {String} [controlAttribute] - html Attribute to control
* @return {Undo} undo command
*/
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
	var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	if (!markerMap[markerName]) markerMap[markerName] = /* @__PURE__ */ new WeakMap();
	var markerCounter = markerMap[markerName];
	var hiddenNodes = [];
	var elementsToKeep = /* @__PURE__ */ new Set();
	var elementsToStop = new Set(targets);
	var keep = function(el) {
		if (!el || elementsToKeep.has(el)) return;
		elementsToKeep.add(el);
		keep(el.parentNode);
	};
	targets.forEach(keep);
	var deep = function(parent) {
		if (!parent || elementsToStop.has(parent)) return;
		Array.prototype.forEach.call(parent.children, function(node) {
			if (elementsToKeep.has(node)) deep(node);
			else try {
				var attr = node.getAttribute(controlAttribute);
				var alreadyHidden = attr !== null && attr !== "false";
				var counterValue = (counterMap.get(node) || 0) + 1;
				var markerValue = (markerCounter.get(node) || 0) + 1;
				counterMap.set(node, counterValue);
				markerCounter.set(node, markerValue);
				hiddenNodes.push(node);
				if (counterValue === 1 && alreadyHidden) uncontrolledNodes.set(node, true);
				if (markerValue === 1) node.setAttribute(markerName, "true");
				if (!alreadyHidden) node.setAttribute(controlAttribute, "true");
			} catch (e) {
				console.error("aria-hidden: cannot operate on ", node, e);
			}
		});
	};
	deep(parentNode);
	elementsToKeep.clear();
	lockCount++;
	return function() {
		hiddenNodes.forEach(function(node) {
			var counterValue = counterMap.get(node) - 1;
			var markerValue = markerCounter.get(node) - 1;
			counterMap.set(node, counterValue);
			markerCounter.set(node, markerValue);
			if (!counterValue) {
				if (!uncontrolledNodes.has(node)) node.removeAttribute(controlAttribute);
				uncontrolledNodes.delete(node);
			}
			if (!markerValue) node.removeAttribute(markerName);
		});
		lockCount--;
		if (!lockCount) {
			counterMap = /* @__PURE__ */ new WeakMap();
			counterMap = /* @__PURE__ */ new WeakMap();
			uncontrolledNodes = /* @__PURE__ */ new WeakMap();
			markerMap = {};
		}
	};
};
/**
* Marks everything except given node(or nodes) as aria-hidden
* @param {Element | Element[]} originalTarget - elements to keep on the page
* @param [parentNode] - top element, defaults to document.body
* @param {String} [markerName] - a special attribute to mark every node
* @return {Undo} undo command
*/
var hideOthers = function(originalTarget, parentNode, markerName) {
	if (markerName === void 0) markerName = "data-aria-hidden";
	var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	var activeParentNode = parentNode || getDefaultParent(originalTarget);
	if (!activeParentNode) return function() {
		return null;
	};
	targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
	return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};
var { __extends, __assign, __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __exportStar, __createBinding, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension } = (/* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	/******************************************************************************
	Copyright (c) Microsoft Corporation.
	
	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.
	
	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	var __extends;
	var __assign;
	var __rest;
	var __decorate;
	var __param;
	var __esDecorate;
	var __runInitializers;
	var __propKey;
	var __setFunctionName;
	var __metadata;
	var __awaiter;
	var __generator;
	var __exportStar;
	var __values;
	var __read;
	var __spread;
	var __spreadArrays;
	var __spreadArray;
	var __await;
	var __asyncGenerator;
	var __asyncDelegator;
	var __asyncValues;
	var __makeTemplateObject;
	var __importStar;
	var __importDefault;
	var __classPrivateFieldGet;
	var __classPrivateFieldSet;
	var __classPrivateFieldIn;
	var __createBinding;
	var __addDisposableResource;
	var __disposeResources;
	var __rewriteRelativeImportExtension;
	(function(factory) {
		var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
		if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(exports$1) {
			factory(createExporter(root, createExporter(exports$1)));
		});
		else if (typeof module === "object" && typeof module.exports === "object") factory(createExporter(root, createExporter(module.exports)));
		else factory(createExporter(root));
		function createExporter(exports$2, previous) {
			if (exports$2 !== root) {
				if (typeof Object.create === "function") Object.defineProperty(exports$2, "__esModule", { value: true });
				else exports$2.__esModule = true;
			}
			return function(id, v) {
				return exports$2[id] = previous ? previous(id, v) : v;
			};
		}
	})(function(exporter) {
		var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
			d.__proto__ = b;
		} || function(d, b) {
			for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
		};
		__extends = function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		__assign = Object.assign || function(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		__rest = function(s, e) {
			var t = {};
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
			if (s != null && typeof Object.getOwnPropertySymbols === "function") {
				for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
			}
			return t;
		};
		__decorate = function(decorators, target, key, desc) {
			var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
			if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
			else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
			return c > 3 && r && Object.defineProperty(target, key, r), r;
		};
		__param = function(paramIndex, decorator) {
			return function(target, key) {
				decorator(target, key, paramIndex);
			};
		};
		__esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
			function accept(f) {
				if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
				return f;
			}
			var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
			var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
			var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
			var _, done = false;
			for (var i = decorators.length - 1; i >= 0; i--) {
				var context = {};
				for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
				for (var p in contextIn.access) context.access[p] = contextIn.access[p];
				context.addInitializer = function(f) {
					if (done) throw new TypeError("Cannot add initializers after decoration has completed");
					extraInitializers.push(accept(f || null));
				};
				var result = (0, decorators[i])(kind === "accessor" ? {
					get: descriptor.get,
					set: descriptor.set
				} : descriptor[key], context);
				if (kind === "accessor") {
					if (result === void 0) continue;
					if (result === null || typeof result !== "object") throw new TypeError("Object expected");
					if (_ = accept(result.get)) descriptor.get = _;
					if (_ = accept(result.set)) descriptor.set = _;
					if (_ = accept(result.init)) initializers.unshift(_);
				} else if (_ = accept(result)) {
					if (kind === "field") initializers.unshift(_);
					else descriptor[key] = _;
				}
			}
			if (target) Object.defineProperty(target, contextIn.name, descriptor);
			done = true;
		};
		__runInitializers = function(thisArg, initializers, value) {
			var useValue = arguments.length > 2;
			for (var i = 0; i < initializers.length; i++) value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
			return useValue ? value : void 0;
		};
		__propKey = function(x) {
			return typeof x === "symbol" ? x : "".concat(x);
		};
		__setFunctionName = function(f, name, prefix) {
			if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
			return Object.defineProperty(f, "name", {
				configurable: true,
				value: prefix ? "".concat(prefix, " ", name) : name
			});
		};
		__metadata = function(metadataKey, metadataValue) {
			if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
		};
		__awaiter = function(thisArg, _arguments, P, generator) {
			function adopt(value) {
				return value instanceof P ? value : new P(function(resolve) {
					resolve(value);
				});
			}
			return new (P || (P = Promise))(function(resolve, reject) {
				function fulfilled(value) {
					try {
						step(generator.next(value));
					} catch (e) {
						reject(e);
					}
				}
				function rejected(value) {
					try {
						step(generator["throw"](value));
					} catch (e) {
						reject(e);
					}
				}
				function step(result) {
					result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
				}
				step((generator = generator.apply(thisArg, _arguments || [])).next());
			});
		};
		__generator = function(thisArg, body) {
			var _ = {
				label: 0,
				sent: function() {
					if (t[0] & 1) throw t[1];
					return t[1];
				},
				trys: [],
				ops: []
			}, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
			return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
				return this;
			}), g;
			function verb(n) {
				return function(v) {
					return step([n, v]);
				};
			}
			function step(op) {
				if (f) throw new TypeError("Generator is already executing.");
				while (g && (g = 0, op[0] && (_ = 0)), _) try {
					if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
					if (y = 0, t) op = [op[0] & 2, t.value];
					switch (op[0]) {
						case 0:
						case 1:
							t = op;
							break;
						case 4:
							_.label++;
							return {
								value: op[1],
								done: false
							};
						case 5:
							_.label++;
							y = op[1];
							op = [0];
							continue;
						case 7:
							op = _.ops.pop();
							_.trys.pop();
							continue;
						default:
							if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
								_ = 0;
								continue;
							}
							if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
								_.label = op[1];
								break;
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1];
								t = op;
								break;
							}
							if (t && _.label < t[2]) {
								_.label = t[2];
								_.ops.push(op);
								break;
							}
							if (t[2]) _.ops.pop();
							_.trys.pop();
							continue;
					}
					op = body.call(thisArg, _);
				} catch (e) {
					op = [6, e];
					y = 0;
				} finally {
					f = t = 0;
				}
				if (op[0] & 5) throw op[1];
				return {
					value: op[0] ? op[1] : void 0,
					done: true
				};
			}
		};
		__exportStar = function(m, o) {
			for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
		};
		__createBinding = Object.create ? (function(o, m, k, k2) {
			if (k2 === void 0) k2 = k;
			var desc = Object.getOwnPropertyDescriptor(m, k);
			if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
				enumerable: true,
				get: function() {
					return m[k];
				}
			};
			Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
			if (k2 === void 0) k2 = k;
			o[k2] = m[k];
		});
		__values = function(o) {
			var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
			if (m) return m.call(o);
			if (o && typeof o.length === "number") return { next: function() {
				if (o && i >= o.length) o = void 0;
				return {
					value: o && o[i++],
					done: !o
				};
			} };
			throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
		};
		__read = function(o, n) {
			var m = typeof Symbol === "function" && o[Symbol.iterator];
			if (!m) return o;
			var i = m.call(o), r, ar = [], e;
			try {
				while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
			} catch (error) {
				e = { error };
			} finally {
				try {
					if (r && !r.done && (m = i["return"])) m.call(i);
				} finally {
					if (e) throw e.error;
				}
			}
			return ar;
		};
		/** @deprecated */
		__spread = function() {
			for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
			return ar;
		};
		/** @deprecated */
		__spreadArrays = function() {
			for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
			for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
			return r;
		};
		__spreadArray = function(to, from, pack) {
			if (pack || arguments.length === 2) {
				for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
					if (!ar) ar = Array.prototype.slice.call(from, 0, i);
					ar[i] = from[i];
				}
			}
			return to.concat(ar || Array.prototype.slice.call(from));
		};
		__await = function(v) {
			return this instanceof __await ? (this.v = v, this) : new __await(v);
		};
		__asyncGenerator = function(thisArg, _arguments, generator) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var g = generator.apply(thisArg, _arguments || []), i, q = [];
			return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
				return this;
			}, i;
			function awaitReturn(f) {
				return function(v) {
					return Promise.resolve(v).then(f, reject);
				};
			}
			function verb(n, f) {
				if (g[n]) {
					i[n] = function(v) {
						return new Promise(function(a, b) {
							q.push([
								n,
								v,
								a,
								b
							]) > 1 || resume(n, v);
						});
					};
					if (f) i[n] = f(i[n]);
				}
			}
			function resume(n, v) {
				try {
					step(g[n](v));
				} catch (e) {
					settle(q[0][3], e);
				}
			}
			function step(r) {
				r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
			}
			function fulfill(value) {
				resume("next", value);
			}
			function reject(value) {
				resume("throw", value);
			}
			function settle(f, v) {
				if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
			}
		};
		__asyncDelegator = function(o) {
			var i = {}, p;
			return verb("next"), verb("throw", function(e) {
				throw e;
			}), verb("return"), i[Symbol.iterator] = function() {
				return this;
			}, i;
			function verb(n, f) {
				i[n] = o[n] ? function(v) {
					return (p = !p) ? {
						value: __await(o[n](v)),
						done: false
					} : f ? f(v) : v;
				} : f;
			}
		};
		__asyncValues = function(o) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var m = o[Symbol.asyncIterator], i;
			return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
				return this;
			}, i);
			function verb(n) {
				i[n] = o[n] && function(v) {
					return new Promise(function(resolve, reject) {
						v = o[n](v), settle(resolve, reject, v.done, v.value);
					});
				};
			}
			function settle(resolve, reject, d, v) {
				Promise.resolve(v).then(function(v) {
					resolve({
						value: v,
						done: d
					});
				}, reject);
			}
		};
		__makeTemplateObject = function(cooked, raw) {
			if (Object.defineProperty) Object.defineProperty(cooked, "raw", { value: raw });
			else cooked.raw = raw;
			return cooked;
		};
		var __setModuleDefault = Object.create ? (function(o, v) {
			Object.defineProperty(o, "default", {
				enumerable: true,
				value: v
			});
		}) : function(o, v) {
			o["default"] = v;
		};
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		__importStar = function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
		__importDefault = function(mod) {
			return mod && mod.__esModule ? mod : { "default": mod };
		};
		__classPrivateFieldGet = function(receiver, state, kind, f) {
			if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
			if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
			return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
		};
		__classPrivateFieldSet = function(receiver, state, value, kind, f) {
			if (kind === "m") throw new TypeError("Private method is not writable");
			if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
			if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
			return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
		};
		__classPrivateFieldIn = function(state, receiver) {
			if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
			return typeof state === "function" ? receiver === state : state.has(receiver);
		};
		__addDisposableResource = function(env, value, async) {
			if (value !== null && value !== void 0) {
				if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
				var dispose, inner;
				if (async) {
					if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
					dispose = value[Symbol.asyncDispose];
				}
				if (dispose === void 0) {
					if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
					dispose = value[Symbol.dispose];
					if (async) inner = dispose;
				}
				if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
				if (inner) dispose = function() {
					try {
						inner.call(this);
					} catch (e) {
						return Promise.reject(e);
					}
				};
				env.stack.push({
					value,
					dispose,
					async
				});
			} else if (async) env.stack.push({ async: true });
			return value;
		};
		var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
			var e = new Error(message);
			return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
		};
		__disposeResources = function(env) {
			function fail(e) {
				env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
				env.hasError = true;
			}
			var r, s = 0;
			function next() {
				while (r = env.stack.pop()) try {
					if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
					if (r.dispose) {
						var result = r.dispose.call(r.value);
						if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
							fail(e);
							return next();
						});
					} else s |= 1;
				} catch (e) {
					fail(e);
				}
				if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
				if (env.hasError) throw env.error;
			}
			return next();
		};
		__rewriteRelativeImportExtension = function(path, preserveJsx) {
			if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
				return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
			});
			return path;
		};
		exporter("__extends", __extends);
		exporter("__assign", __assign);
		exporter("__rest", __rest);
		exporter("__decorate", __decorate);
		exporter("__param", __param);
		exporter("__esDecorate", __esDecorate);
		exporter("__runInitializers", __runInitializers);
		exporter("__propKey", __propKey);
		exporter("__setFunctionName", __setFunctionName);
		exporter("__metadata", __metadata);
		exporter("__awaiter", __awaiter);
		exporter("__generator", __generator);
		exporter("__exportStar", __exportStar);
		exporter("__createBinding", __createBinding);
		exporter("__values", __values);
		exporter("__read", __read);
		exporter("__spread", __spread);
		exporter("__spreadArrays", __spreadArrays);
		exporter("__spreadArray", __spreadArray);
		exporter("__await", __await);
		exporter("__asyncGenerator", __asyncGenerator);
		exporter("__asyncDelegator", __asyncDelegator);
		exporter("__asyncValues", __asyncValues);
		exporter("__makeTemplateObject", __makeTemplateObject);
		exporter("__importStar", __importStar);
		exporter("__importDefault", __importDefault);
		exporter("__classPrivateFieldGet", __classPrivateFieldGet);
		exporter("__classPrivateFieldSet", __classPrivateFieldSet);
		exporter("__classPrivateFieldIn", __classPrivateFieldIn);
		exporter("__addDisposableResource", __addDisposableResource);
		exporter("__disposeResources", __disposeResources);
		exporter("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension);
	});
	0 && (module.exports = {
		__extends,
		__assign,
		__rest,
		__decorate,
		__param,
		__esDecorate,
		__runInitializers,
		__propKey,
		__setFunctionName,
		__metadata,
		__awaiter,
		__generator,
		__exportStar,
		__createBinding,
		__values,
		__read,
		__spread,
		__spreadArrays,
		__spreadArray,
		__await,
		__asyncGenerator,
		__asyncDelegator,
		__asyncValues,
		__makeTemplateObject,
		__importStar,
		__importDefault,
		__classPrivateFieldGet,
		__classPrivateFieldSet,
		__classPrivateFieldIn,
		__addDisposableResource,
		__disposeResources,
		__rewriteRelativeImportExtension
	});
})))())).default;
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
/**
* Name of a CSS variable containing the amount of "hidden" scrollbar
* ! might be undefined ! use will fallback!
*/
var removedBarSizeVariable = "--removed-body-scroll-bar-size";
/**
* Assigns a value for a given ref, no matter of the ref format
* @param {RefObject} ref - a callback function or ref object
* @param value - a new value
*
* @see https://github.com/theKashey/use-callback-ref#assignref
* @example
* const refObject = useRef();
* const refFn = (ref) => {....}
*
* assignRef(refObject, "refValue");
* assignRef(refFn, "refValue");
*/
function assignRef(ref, value) {
	if (typeof ref === "function") ref(value);
	else if (ref) ref.current = value;
	return ref;
}
/**
* creates a MutableRef with ref change callback
* @param initialValue - initial ref value
* @param {Function} callback - a callback to run when value changes
*
* @example
* const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
* ref.current = 1;
* // prints 0 -> 1
*
* @see https://reactjs.org/docs/hooks-reference.html#useref
* @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
* @returns {MutableRefObject}
*/
function useCallbackRef(initialValue, callback) {
	var ref = (0, import_react.useState)(function() {
		return {
			value: initialValue,
			callback,
			facade: {
				get current() {
					return ref.value;
				},
				set current(value) {
					var last = ref.value;
					if (last !== value) {
						ref.value = value;
						ref.callback(value, last);
					}
				}
			}
		};
	})[0];
	ref.callback = callback;
	return ref.facade;
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
/**
* Merges two or more refs together providing a single interface to set their value
* @param {RefObject|Ref} refs
* @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
*
* @see {@link mergeRefs} a version without buit-in memoization
* @see https://github.com/theKashey/use-callback-ref#usemergerefs
* @example
* const Component = React.forwardRef((props, ref) => {
*   const ownRef = useRef();
*   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
*   return <div ref={domRef}>...</div>
* }
*/
function useMergeRefs(refs, defaultValue) {
	var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
		return refs.forEach(function(ref) {
			return assignRef(ref, newValue);
		});
	});
	useIsomorphicLayoutEffect(function() {
		var oldValue = currentValues.get(callbackRef);
		if (oldValue) {
			var prevRefs_1 = new Set(oldValue);
			var nextRefs_1 = new Set(refs);
			var current_1 = callbackRef.current;
			prevRefs_1.forEach(function(ref) {
				if (!nextRefs_1.has(ref)) assignRef(ref, null);
			});
			nextRefs_1.forEach(function(ref) {
				if (!prevRefs_1.has(ref)) assignRef(ref, current_1);
			});
		}
		currentValues.set(callbackRef, refs);
	}, [refs]);
	return callbackRef;
}
function ItoI(a) {
	return a;
}
function innerCreateMedium(defaults, middleware) {
	if (middleware === void 0) middleware = ItoI;
	var buffer = [];
	var assigned = false;
	return {
		read: function() {
			if (assigned) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			if (buffer.length) return buffer[buffer.length - 1];
			return defaults;
		},
		useMedium: function(data) {
			var item = middleware(data, assigned);
			buffer.push(item);
			return function() {
				buffer = buffer.filter(function(x) {
					return x !== item;
				});
			};
		},
		assignSyncMedium: function(cb) {
			assigned = true;
			while (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
			}
			buffer = {
				push: function(x) {
					return cb(x);
				},
				filter: function() {
					return buffer;
				}
			};
		},
		assignMedium: function(cb) {
			assigned = true;
			var pendingQueue = [];
			if (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
				pendingQueue = buffer;
			}
			var executeQueue = function() {
				var cbs = pendingQueue;
				pendingQueue = [];
				cbs.forEach(cb);
			};
			var cycle = function() {
				return Promise.resolve().then(executeQueue);
			};
			cycle();
			buffer = {
				push: function(x) {
					pendingQueue.push(x);
					cycle();
				},
				filter: function(filter) {
					pendingQueue = pendingQueue.filter(filter);
					return buffer;
				}
			};
		}
	};
}
function createSidecarMedium(options) {
	if (options === void 0) options = {};
	var medium = innerCreateMedium(null);
	medium.options = __assign({
		async: true,
		ssr: false
	}, options);
	return medium;
}
var SideCar = function(_a) {
	var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
	if (!sideCar) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
	var Target = sideCar.read();
	if (!Target) throw new Error("Sidecar medium not found");
	return import_react.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
	medium.useMedium(exported);
	return SideCar;
}
var effectCar = createSidecarMedium();
var nothing = function() {};
/**
* Removes scrollbar from the page and contain the scroll within the Lock
*/
var RemoveScroll = import_react.forwardRef(function(props, parentRef) {
	var ref = import_react.useRef(null);
	var _a = import_react.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), callbacks = _a[0], setCallbacks = _a[1];
	var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]);
	var SideCar = sideCar;
	var containerRef = useMergeRefs([ref, parentRef]);
	var containerProps = __assign(__assign({}, rest), callbacks);
	return import_react.createElement(import_react.Fragment, null, enabled && import_react.createElement(SideCar, {
		sideCar: effectCar,
		removeScrollBar,
		shards,
		noRelative,
		noIsolation,
		inert,
		setCallbacks,
		allowPinchZoom: !!allowPinchZoom,
		lockRef: ref,
		gapMode
	}), forwardProps ? import_react.cloneElement(import_react.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : import_react.createElement(Container, __assign({}, containerProps, {
		className,
		ref: containerRef
	}), children));
});
RemoveScroll.defaultProps = {
	enabled: true,
	removeScrollBar: true,
	inert: false
};
RemoveScroll.classNames = {
	fullWidth: fullWidthClassName,
	zeroRight: zeroRightClassName
};
var getNonce = function() {
	if (typeof __webpack_nonce__ !== "undefined") return __webpack_nonce__;
};
function makeStyleTag() {
	if (!document) return null;
	var tag = document.createElement("style");
	tag.type = "text/css";
	var nonce = getNonce();
	if (nonce) tag.setAttribute("nonce", nonce);
	return tag;
}
function injectStyles(tag, css) {
	if (tag.styleSheet) tag.styleSheet.cssText = css;
	else tag.appendChild(document.createTextNode(css));
}
function insertStyleTag(tag) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(tag);
}
var stylesheetSingleton = function() {
	var counter = 0;
	var stylesheet = null;
	return {
		add: function(style) {
			if (counter == 0) {
				if (stylesheet = makeStyleTag()) {
					injectStyles(stylesheet, style);
					insertStyleTag(stylesheet);
				}
			}
			counter++;
		},
		remove: function() {
			counter--;
			if (!counter && stylesheet) {
				stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
				stylesheet = null;
			}
		}
	};
};
/**
* creates a hook to control style singleton
* @see {@link styleSingleton} for a safer component version
* @example
* ```tsx
* const useStyle = styleHookSingleton();
* ///
* useStyle('body { overflow: hidden}');
*/
var styleHookSingleton = function() {
	var sheet = stylesheetSingleton();
	return function(styles, isDynamic) {
		import_react.useEffect(function() {
			sheet.add(styles);
			return function() {
				sheet.remove();
			};
		}, [styles && isDynamic]);
	};
};
/**
* create a Component to add styles on demand
* - styles are added when first instance is mounted
* - styles are removed when the last instance is unmounted
* - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
*/
var styleSingleton = function() {
	var useStyle = styleHookSingleton();
	var Sheet = function(_a) {
		var styles = _a.styles, dynamic = _a.dynamic;
		useStyle(styles, dynamic);
		return null;
	};
	return Sheet;
};
var zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
};
var parse = function(x) {
	return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
	var cs = window.getComputedStyle(document.body);
	var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
	var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
	var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(left),
		parse(top),
		parse(right)
	];
};
var getGapWidth = function(gapMode) {
	if (gapMode === void 0) gapMode = "margin";
	if (typeof window === "undefined") return zeroGap;
	var offsets = getOffset(gapMode);
	var documentWidth = document.documentElement.clientWidth;
	var windowWidth = window.innerWidth;
	return {
		left: offsets[0],
		top: offsets[1],
		right: offsets[2],
		gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
	};
};
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
	var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
	if (gapMode === void 0) gapMode = "margin";
	return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
		allowRelative && "position: relative ".concat(important, ";"),
		gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
		gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
	].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
	var counter = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
	import_react.useEffect(function() {
		document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
		return function() {
			var newCounter = getCurrentUseCounter() - 1;
			if (newCounter <= 0) document.body.removeAttribute(lockAttribute);
			else document.body.setAttribute(lockAttribute, newCounter.toString());
		};
	}, []);
};
/**
* Removes page scrollbar and blocks page scroll when mounted
*/
var RemoveScrollBar = function(_a) {
	var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
	useLockAttribute();
	var gap = import_react.useMemo(function() {
		return getGapWidth(gapMode);
	}, [gapMode]);
	return import_react.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};
var passiveSupported = false;
if (typeof window !== "undefined") try {
	var options = Object.defineProperty({}, "passive", { get: function() {
		passiveSupported = true;
		return true;
	} });
	window.addEventListener("test", options, options);
	window.removeEventListener("test", options, options);
} catch (err) {
	passiveSupported = false;
}
var nonPassive = passiveSupported ? { passive: false } : false;
var alwaysContainsScroll = function(node) {
	return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
	if (!(node instanceof Element)) return false;
	var styles = window.getComputedStyle(node);
	return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
};
var elementCouldBeVScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
	var ownerDocument = node.ownerDocument;
	var current = node;
	do {
		if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) current = current.host;
		if (elementCouldBeScrolled(axis, current)) {
			var _a = getScrollVariables(axis, current);
			if (_a[1] > _a[2]) return true;
		}
		current = current.parentNode;
	} while (current && current !== ownerDocument.body);
	return false;
};
var getVScrollVariables = function(_a) {
	return [
		_a.scrollTop,
		_a.scrollHeight,
		_a.clientHeight
	];
};
var getHScrollVariables = function(_a) {
	return [
		_a.scrollLeft,
		_a.scrollWidth,
		_a.clientWidth
	];
};
var elementCouldBeScrolled = function(axis, node) {
	return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
	return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
	/**
	* If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
	* and then increasingly negative as you scroll towards the end of the content.
	* @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
	*/
	return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
	var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
	var delta = directionFactor * sourceDelta;
	var target = event.target;
	var targetInLock = endTarget.contains(target);
	var shouldCancelScroll = false;
	var isDeltaPositive = delta > 0;
	var availableScroll = 0;
	var availableScrollTop = 0;
	do {
		if (!target) break;
		var _a = getScrollVariables(axis, target), position = _a[0];
		var elementScroll = _a[1] - _a[2] - directionFactor * position;
		if (position || elementScroll) {
			if (elementCouldBeScrolled(axis, target)) {
				availableScroll += elementScroll;
				availableScrollTop += position;
			}
		}
		var parent_1 = target.parentNode;
		target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
	} while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
	if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) shouldCancelScroll = true;
	else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) shouldCancelScroll = true;
	return shouldCancelScroll;
};
var getTouchXY = function(event) {
	return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
	return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
	return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
	return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
	return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
	var shouldPreventQueue = import_react.useRef([]);
	var touchStartRef = import_react.useRef([0, 0]);
	var activeAxis = import_react.useRef();
	var id = import_react.useState(idCounter++)[0];
	var Style = import_react.useState(styleSingleton)[0];
	var lastProps = import_react.useRef(props);
	import_react.useEffect(function() {
		lastProps.current = props;
	}, [props]);
	import_react.useEffect(function() {
		if (props.inert) {
			document.body.classList.add("block-interactivity-".concat(id));
			var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
			allow_1.forEach(function(el) {
				return el.classList.add("allow-interactivity-".concat(id));
			});
			return function() {
				document.body.classList.remove("block-interactivity-".concat(id));
				allow_1.forEach(function(el) {
					return el.classList.remove("allow-interactivity-".concat(id));
				});
			};
		}
	}, [
		props.inert,
		props.lockRef.current,
		props.shards
	]);
	var shouldCancelEvent = import_react.useCallback(function(event, parent) {
		if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) return !lastProps.current.allowPinchZoom;
		var touch = getTouchXY(event);
		var touchStart = touchStartRef.current;
		var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
		var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
		var currentAxis;
		var target = event.target;
		var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
		if ("touches" in event && moveDirection === "h" && target.type === "range") return false;
		var selection = window.getSelection();
		var anchorNode = selection && selection.anchorNode;
		if (anchorNode ? anchorNode === target || anchorNode.contains(target) : false) return false;
		var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		if (!canBeScrolledInMainDirection) return true;
		if (canBeScrolledInMainDirection) currentAxis = moveDirection;
		else {
			currentAxis = moveDirection === "v" ? "h" : "v";
			canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		}
		if (!canBeScrolledInMainDirection) return false;
		if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) activeAxis.current = currentAxis;
		if (!currentAxis) return true;
		var cancelingAxis = activeAxis.current || currentAxis;
		return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
	}, []);
	var shouldPrevent = import_react.useCallback(function(_event) {
		var event = _event;
		if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) return;
		var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
		var sourceEvent = shouldPreventQueue.current.filter(function(e) {
			return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
		})[0];
		if (sourceEvent && sourceEvent.should) {
			if (event.cancelable) event.preventDefault();
			return;
		}
		if (!sourceEvent) {
			var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
				return node.contains(event.target);
			});
			if (shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation) {
				if (event.cancelable) event.preventDefault();
			}
		}
	}, []);
	var shouldCancel = import_react.useCallback(function(name, delta, target, should) {
		var event = {
			name,
			delta,
			target,
			should,
			shadowParent: getOutermostShadowParent(target)
		};
		shouldPreventQueue.current.push(event);
		setTimeout(function() {
			shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
				return e !== event;
			});
		}, 1);
	}, []);
	var scrollTouchStart = import_react.useCallback(function(event) {
		touchStartRef.current = getTouchXY(event);
		activeAxis.current = void 0;
	}, []);
	var scrollWheel = import_react.useCallback(function(event) {
		shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	var scrollTouchMove = import_react.useCallback(function(event) {
		shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	import_react.useEffect(function() {
		lockStack.push(Style);
		props.setCallbacks({
			onScrollCapture: scrollWheel,
			onWheelCapture: scrollWheel,
			onTouchMoveCapture: scrollTouchMove
		});
		document.addEventListener("wheel", shouldPrevent, nonPassive);
		document.addEventListener("touchmove", shouldPrevent, nonPassive);
		document.addEventListener("touchstart", scrollTouchStart, nonPassive);
		return function() {
			lockStack = lockStack.filter(function(inst) {
				return inst !== Style;
			});
			document.removeEventListener("wheel", shouldPrevent, nonPassive);
			document.removeEventListener("touchmove", shouldPrevent, nonPassive);
			document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
		};
	}, []);
	var removeScrollBar = props.removeScrollBar, inert = props.inert;
	return import_react.createElement(import_react.Fragment, null, inert ? import_react.createElement(Style, { styles: generateStyle(id) }) : null, removeScrollBar ? import_react.createElement(RemoveScrollBar, {
		noRelative: props.noRelative,
		gapMode: props.gapMode
	}) : null);
}
function getOutermostShadowParent(node) {
	var shadowParent = null;
	while (node !== null) {
		if (node instanceof ShadowRoot) {
			shadowParent = node.host;
			node = node.host;
		}
		node = node.parentNode;
	}
	return shadowParent;
}
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);
var ReactRemoveScroll = import_react.forwardRef(function(props, ref) {
	return import_react.createElement(RemoveScroll, __assign({}, props, {
		ref,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var __defProp$13 = Object.defineProperty;
var __name$13 = (target, value) => __defProp$13(target, "name", {
	value,
	configurable: true
});
var SELECTION_KEYS$1 = ["Enter", " "];
var FIRST_KEYS = [
	"ArrowDown",
	"PageUp",
	"Home"
];
var LAST_KEYS = [
	"ArrowUp",
	"PageDown",
	"End"
];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
[...SELECTION_KEYS$1], [...SELECTION_KEYS$1];
var MENU_NAME = "Menu";
var [Collection$3, useCollection$3, createCollectionScope$3] = /* @__PURE__ */ createCollection(MENU_NAME);
var [createMenuContext, createMenuScope] = /* @__PURE__ */ createContextScope(MENU_NAME, [
	createCollectionScope$3,
	createPopperScope,
	createRovingFocusGroupScope
]);
var usePopperScope$3 = createPopperScope();
var useRovingFocusGroupScope$1 = createRovingFocusGroupScope();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu = /* @__PURE__ */ __name$13((props) => {
	const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
	const popperScope = usePopperScope$3(__scopeMenu);
	const [content, setContent] = import_react.useState(null);
	const isUsingKeyboardRef = import_react.useRef(false);
	const handleOpenChange = useCallbackRef$1(onOpenChange);
	const direction = useDirection(dir);
	import_react.useEffect(() => {
		const handleKeyDown = /* @__PURE__ */ __name$13(() => {
			isUsingKeyboardRef.current = true;
			document.addEventListener("pointerdown", handlePointer, {
				capture: true,
				once: true
			});
			document.addEventListener("pointermove", handlePointer, {
				capture: true,
				once: true
			});
		}, "handleKeyDown");
		const handlePointer = /* @__PURE__ */ __name$13(() => isUsingKeyboardRef.current = false, "handlePointer");
		document.addEventListener("keydown", handleKeyDown, { capture: true });
		return () => {
			document.removeEventListener("keydown", handleKeyDown, { capture: true });
			document.removeEventListener("pointerdown", handlePointer, { capture: true });
			document.removeEventListener("pointermove", handlePointer, { capture: true });
		};
	}, []);
	import_react.useEffect(() => {
		if (!open) return;
		const handleBlur = /* @__PURE__ */ __name$13(() => handleOpenChange(false), "handleBlur");
		window.addEventListener("blur", handleBlur);
		return () => window.removeEventListener("blur", handleBlur);
	}, [open, handleOpenChange]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popper, {
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuProvider, {
			scope: __scopeMenu,
			open,
			onOpenChange: handleOpenChange,
			content,
			onContentChange: setContent,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRootProvider, {
				scope: __scopeMenu,
				onClose: import_react.useCallback(() => handleOpenChange(false), [handleOpenChange]),
				isUsingKeyboardRef,
				dir: direction,
				modal,
				children
			})
		})
	});
}, "Menu");
var MenuAnchor = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$13(function MenuAnchor2(props, forwardedRef) {
	const { __scopeMenu, ...anchorProps } = props;
	const popperScope = usePopperScope$3(__scopeMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperAnchor, {
		...popperScope,
		...anchorProps,
		ref: forwardedRef
	});
}, "MenuAnchor"));
var PORTAL_NAME$3 = "MenuPortal";
var [PortalProvider$4, usePortalContext$4] = createMenuContext(PORTAL_NAME$3, { forceMount: void 0 });
var MenuPortal = /* @__PURE__ */ __name$13((props) => {
	const { __scopeMenu, forceMount, children, container } = props;
	const context = useMenuContext(PORTAL_NAME$3, __scopeMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider$4, {
		scope: __scopeMenu,
		forceMount,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children
			})
		})
	});
}, "MenuPortal");
var CONTENT_NAME$7 = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME$7);
var MenuContent = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$13(function MenuContent2(props, forwardedRef) {
	const portalContext = usePortalContext$4(CONTENT_NAME$7, props.__scopeMenu);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useMenuContext(CONTENT_NAME$7, props.__scopeMenu);
	const rootContext = useMenuRootContext(CONTENT_NAME$7, props.__scopeMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$3.Provider, {
		scope: props.__scopeMenu,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$3.Slot, {
				scope: props.__scopeMenu,
				children: rootContext.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRootContentModal, {
					...contentProps,
					ref: forwardedRef
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRootContentNonModal, {
					...contentProps,
					ref: forwardedRef
				})
			})
		})
	});
}, "MenuContent"));
var MenuRootContentModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$13(function MenuRootContentModal2(props, forwardedRef) {
	const context = useMenuContext(CONTENT_NAME$7, props.__scopeMenu);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	import_react.useEffect(() => {
		const content = ref.current;
		if (content) return hideOthers(content);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuContentImpl, {
		...props,
		ref: composedRefs,
		trapFocus: context.open,
		disableOutsidePointerEvents: context.open,
		disableOutsideScroll: true,
		onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault(), { checkForDefaultPrevented: false }),
		onDismiss: () => context.onOpenChange(false)
	});
}, "MenuRootContentModal"));
var MenuRootContentNonModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$13(function MenuRootContentNonModal2(props, forwardedRef) {
	const context = useMenuContext(CONTENT_NAME$7, props.__scopeMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuContentImpl, {
		...props,
		ref: forwardedRef,
		trapFocus: false,
		disableOutsidePointerEvents: false,
		disableOutsideScroll: false,
		onDismiss: () => context.onOpenChange(false)
	});
}, "MenuRootContentNonModal"));
var Slot$3 = /* @__PURE__ */ createSlot("MenuContent.ScrollLock");
var MenuContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$13(function MenuContentImpl2(props, forwardedRef) {
	const { __scopeMenu, loop = false, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEntryFocus, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, disableOutsideScroll, ...contentProps } = props;
	const context = useMenuContext(CONTENT_NAME$7, __scopeMenu);
	const rootContext = useMenuRootContext(CONTENT_NAME$7, __scopeMenu);
	const popperScope = usePopperScope$3(__scopeMenu);
	const rovingFocusGroupScope = useRovingFocusGroupScope$1(__scopeMenu);
	const getItems = useCollection$3(__scopeMenu);
	const [currentItemId, setCurrentItemId] = import_react.useState(null);
	const contentRef = import_react.useRef(null);
	const [branchNode, setBranchNode] = import_react.useState(null);
	useFocusScopeBranch(branchNode);
	const { nodes: branchNodes, registry: branchRegistry } = useFocusScopeBranchRegistry();
	const isModal = Boolean(trapFocus || disableOutsideScroll);
	const composedRefs = useComposedRefs(forwardedRef, contentRef, context.onContentChange, setBranchNode);
	const timerRef = import_react.useRef(0);
	const searchRef = import_react.useRef("");
	const pointerGraceTimerRef = import_react.useRef(0);
	const pointerGraceIntentRef = import_react.useRef(null);
	const pointerDirRef = import_react.useRef("right");
	const lastPointerXRef = import_react.useRef(0);
	const shards = import_react.useMemo(() => disableOutsideScroll ? [contentRef, ...branchNodes.map((node) => ({ current: node }))] : [], [
		contentRef,
		branchNodes,
		disableOutsideScroll
	]);
	const ScrollLockWrapper = disableOutsideScroll ? ReactRemoveScroll : import_react.Fragment;
	const scrollLockWrapperProps = disableOutsideScroll ? {
		as: Slot$3,
		allowPinchZoom: true,
		shards
	} : void 0;
	const handleTypeaheadSearch = /* @__PURE__ */ __name$13((key) => {
		const search = searchRef.current + key;
		const items = getItems().filter((item) => !item.disabled);
		const currentItem = document.activeElement;
		const currentMatch = items.find((item) => item.ref.current === currentItem)?.textValue;
		const nextMatch = getNextMatch(items.map((item) => item.textValue), search, currentMatch);
		const newItem = items.find((item) => item.textValue === nextMatch)?.ref.current;
		(/* @__PURE__ */ __name$13((function updateSearch(value) {
			searchRef.current = value;
			window.clearTimeout(timerRef.current);
			if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
		}), "updateSearch"))(search);
		if (newItem) setTimeout(() => newItem.focus());
	}, "handleTypeaheadSearch");
	import_react.useEffect(() => {
		return () => window.clearTimeout(timerRef.current);
	}, []);
	useFocusGuards();
	const isPointerMovingToSubmenu = import_react.useCallback((event) => {
		return pointerDirRef.current === pointerGraceIntentRef.current?.side && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuContentProvider, {
		scope: __scopeMenu,
		searchRef,
		onItemEnter: import_react.useCallback((event) => {
			if (isPointerMovingToSubmenu(event)) event.preventDefault();
		}, [isPointerMovingToSubmenu]),
		onItemLeave: import_react.useCallback((event) => {
			if (isPointerMovingToSubmenu(event)) return;
			contentRef.current?.focus();
			setCurrentItemId(null);
		}, [isPointerMovingToSubmenu]),
		onTriggerLeave: import_react.useCallback((event) => {
			if (isPointerMovingToSubmenu(event)) event.preventDefault();
		}, [isPointerMovingToSubmenu]),
		pointerGraceTimerRef,
		onPointerGraceIntentChange: import_react.useCallback((intent) => {
			pointerGraceIntentRef.current = intent;
		}, []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScopeBranchProvider, {
			registry: isModal ? branchRegistry : null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollLockWrapper, {
				...scrollLockWrapperProps,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
					asChild: true,
					trapped: trapFocus,
					branches: branchNodes,
					onMountAutoFocus: composeEventHandlers(onOpenAutoFocus, (event) => {
						event.preventDefault();
						contentRef.current?.focus({ preventScroll: true });
					}),
					onUnmountAutoFocus: onCloseAutoFocus,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
						asChild: true,
						disableOutsidePointerEvents,
						onEscapeKeyDown,
						onPointerDownOutside,
						onFocusOutside,
						onInteractOutside,
						onDismiss,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroup, {
							asChild: true,
							...rovingFocusGroupScope,
							dir: rootContext.dir,
							orientation: "vertical",
							loop,
							currentTabStopId: currentItemId,
							onCurrentTabStopIdChange: setCurrentItemId,
							onEntryFocus: composeEventHandlers(onEntryFocus, (event) => {
								if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
							}),
							preventScrollOnEntryFocus: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperContent, {
								role: "menu",
								"aria-orientation": "vertical",
								"data-state": getOpenState(context.open),
								"data-radix-menu-content": "",
								dir: rootContext.dir,
								...popperScope,
								...contentProps,
								ref: composedRefs,
								style: {
									outline: "none",
									...contentProps.style
								},
								onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
									const isKeyDownInside = event.target.closest("[data-radix-menu-content]") === event.currentTarget;
									const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
									const isCharacterKey = event.key.length === 1;
									if (isKeyDownInside) {
										if (event.key === "Tab") event.preventDefault();
										if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
									}
									const content = contentRef.current;
									if (event.target !== content) return;
									if (!FIRST_LAST_KEYS.includes(event.key)) return;
									event.preventDefault();
									const candidateNodes = getItems().filter((item) => !item.disabled).map((item) => item.ref.current);
									if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
									focusFirst$1(candidateNodes);
								}),
								onBlur: composeEventHandlers(props.onBlur, (event) => {
									if (!event.currentTarget.contains(event.target)) {
										window.clearTimeout(timerRef.current);
										searchRef.current = "";
									}
								}),
								onPointerMove: composeEventHandlers(props.onPointerMove, whenMouse((event) => {
									const target = event.target;
									const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
									if (event.currentTarget.contains(target) && pointerXHasChanged) {
										const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
										pointerDirRef.current = newDir;
										lastPointerXRef.current = event.clientX;
									}
								}))
							})
						})
					})
				})
			})
		})
	});
}, "MenuContentImpl"));
var MenuGroup = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$13(function MenuGroup2(props, forwardedRef) {
	const { __scopeMenu, ...groupProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		role: "group",
		...groupProps,
		ref: forwardedRef
	});
}, "MenuGroup"));
var MenuLabel = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$13(function MenuLabel2(props, forwardedRef) {
	const { __scopeMenu, ...labelProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...labelProps,
		ref: forwardedRef
	});
}, "MenuLabel"));
var ITEM_NAME$2 = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$13(function MenuItem2(props, forwardedRef) {
	const { disabled = false, onSelect, ...itemProps } = props;
	const ref = import_react.useRef(null);
	const rootContext = useMenuRootContext(ITEM_NAME$2, props.__scopeMenu);
	const contentContext = useMenuContentContext(ITEM_NAME$2, props.__scopeMenu);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const isPointerDownRef = import_react.useRef(false);
	const handleSelect = /* @__PURE__ */ __name$13(() => {
		const menuItem = ref.current;
		if (!disabled && menuItem) {
			const itemSelectEvent = new CustomEvent(ITEM_SELECT, {
				bubbles: true,
				cancelable: true
			});
			menuItem.addEventListener(ITEM_SELECT, (event) => onSelect?.(event), { once: true });
			dispatchDiscreteCustomEvent(menuItem, itemSelectEvent);
			if (itemSelectEvent.defaultPrevented) isPointerDownRef.current = false;
			else rootContext.onClose();
		}
	}, "handleSelect");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItemImpl, {
		...itemProps,
		ref: composedRefs,
		disabled,
		onClick: composeEventHandlers(props.onClick, handleSelect),
		onPointerDown: (event) => {
			props.onPointerDown?.(event);
			isPointerDownRef.current = true;
		},
		onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
			if (!isPointerDownRef.current) event.currentTarget?.click();
		}),
		onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
			if (disabled || event.target !== event.currentTarget) return;
			if (contentContext.searchRef.current !== "" && event.key === " ") return;
			if (SELECTION_KEYS$1.includes(event.key)) {
				event.currentTarget.click();
				event.preventDefault();
			}
		})
	});
}, "MenuItem"));
var MenuItemImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$13(function MenuItemImpl2(props, forwardedRef) {
	const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
	const contentContext = useMenuContentContext(ITEM_NAME$2, __scopeMenu);
	const rovingFocusGroupScope = useRovingFocusGroupScope$1(__scopeMenu);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const [isFocused, setIsFocused] = import_react.useState(false);
	const [textContent, setTextContent] = import_react.useState("");
	import_react.useEffect(() => {
		const menuItem = ref.current;
		if (menuItem) setTextContent((menuItem.textContent ?? "").trim());
	}, [itemProps.children]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$3.ItemSlot, {
		scope: __scopeMenu,
		disabled,
		textValue: textValue ?? textContent,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroupItem, {
			asChild: true,
			...rovingFocusGroupScope,
			focusable: !disabled,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				role: "menuitem",
				"data-highlighted": isFocused ? "" : void 0,
				"aria-disabled": disabled || void 0,
				"data-disabled": disabled ? "" : void 0,
				...itemProps,
				ref: composedRefs,
				onPointerMove: composeEventHandlers(props.onPointerMove, whenMouse((event) => {
					if (disabled) contentContext.onItemLeave(event);
					else {
						contentContext.onItemEnter(event);
						if (!event.defaultPrevented) event.currentTarget.focus({ preventScroll: true });
					}
				})),
				onPointerLeave: composeEventHandlers(props.onPointerLeave, whenMouse((event) => contentContext.onItemLeave(event))),
				onFocus: composeEventHandlers(props.onFocus, () => setIsFocused(true)),
				onBlur: composeEventHandlers(props.onBlur, () => setIsFocused(false))
			})
		})
	});
}, "MenuItemImpl"));
var MenuCheckboxItem = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$13(function MenuCheckboxItem2(props, forwardedRef) {
	const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicatorProvider, {
		scope: props.__scopeMenu,
		checked,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
			role: "menuitemcheckbox",
			"aria-checked": isIndeterminate(checked) ? "mixed" : checked,
			...checkboxItemProps,
			ref: forwardedRef,
			"data-state": getCheckedState(checked),
			onSelect: composeEventHandlers(checkboxItemProps.onSelect, () => onCheckedChange?.(isIndeterminate(checked) ? true : !checked), { checkForDefaultPrevented: false })
		})
	});
}, "MenuCheckboxItem"));
var [RadioGroupProvider$1, useRadioGroupContext$1] = createMenuContext("MenuRadioGroup", {
	value: void 0,
	onValueChange: /* @__PURE__ */ __name$13(() => {}, "onValueChange")
});
var MenuRadioGroup = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$13(function MenuRadioGroup2(props, forwardedRef) {
	const { value, onValueChange, ...groupProps } = props;
	const handleValueChange = useCallbackRef$1(onValueChange);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupProvider$1, {
		scope: props.__scopeMenu,
		value,
		onValueChange: handleValueChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuGroup, {
			...groupProps,
			ref: forwardedRef
		})
	});
}, "MenuRadioGroup"));
var RADIO_ITEM_NAME = "MenuRadioItem";
var MenuRadioItem = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$13(function MenuRadioItem2(props, forwardedRef) {
	const { value, ...radioItemProps } = props;
	const context = useRadioGroupContext$1(RADIO_ITEM_NAME, props.__scopeMenu);
	const checked = value === context.value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicatorProvider, {
		scope: props.__scopeMenu,
		checked,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
			role: "menuitemradio",
			"aria-checked": checked,
			...radioItemProps,
			ref: forwardedRef,
			"data-state": getCheckedState(checked),
			onSelect: composeEventHandlers(radioItemProps.onSelect, () => context.onValueChange?.(value), { checkForDefaultPrevented: false })
		})
	});
}, "MenuRadioItem"));
var ITEM_INDICATOR_NAME$1 = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME$1, { checked: false });
var MenuItemIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$13(function MenuItemIndicator2(props, forwardedRef) {
	const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
	const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME$1, __scopeMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			...itemIndicatorProps,
			ref: forwardedRef,
			"data-state": getCheckedState(indicatorContext.checked)
		})
	});
}, "MenuItemIndicator"));
var MenuSeparator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$13(function MenuSeparator2(props, forwardedRef) {
	const { __scopeMenu, ...separatorProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...separatorProps,
		ref: forwardedRef
	});
}, "MenuSeparator"));
var [MenuSubProvider, useMenuSubContext] = createMenuContext("MenuSub");
function getOpenState(open) {
	return open ? "open" : "closed";
}
__name$13(getOpenState, "getOpenState");
function isIndeterminate(checked) {
	return checked === "indeterminate";
}
__name$13(isIndeterminate, "isIndeterminate");
function getCheckedState(checked) {
	return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
__name$13(getCheckedState, "getCheckedState");
function focusFirst$1(candidates) {
	const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
	for (const candidate of candidates) {
		if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
		candidate.focus();
		if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
	}
}
__name$13(focusFirst$1, "focusFirst");
function wrapArray$1(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
__name$13(wrapArray$1, "wrapArray");
function getNextMatch(values, search, currentMatch) {
	const normalizedSearch = search.length > 1 && Array.from(search).every((char) => char === search[0]) ? search[0] : search;
	const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
	let wrappedValues = wrapArray$1(values, Math.max(currentMatchIndex, 0));
	if (normalizedSearch.length === 1) wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
	const nextMatch = wrappedValues.find((value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
	return nextMatch !== currentMatch ? nextMatch : void 0;
}
__name$13(getNextMatch, "getNextMatch");
function isPointInPolygon(point, polygon) {
	const { x, y } = point;
	let inside = false;
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const ii = polygon[i];
		const jj = polygon[j];
		const xi = ii.x;
		const yi = ii.y;
		const xj = jj.x;
		const yj = jj.y;
		if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
	}
	return inside;
}
__name$13(isPointInPolygon, "isPointInPolygon");
function isPointerInGraceArea(event, area) {
	if (!area) return false;
	return isPointInPolygon({
		x: event.clientX,
		y: event.clientY
	}, area);
}
__name$13(isPointerInGraceArea, "isPointerInGraceArea");
function whenMouse(handler) {
	return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
__name$13(whenMouse, "whenMouse");
var __defProp$12 = Object.defineProperty;
var __name$12 = (target, value) => __defProp$12(target, "name", {
	value,
	configurable: true
});
var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = /* @__PURE__ */ createContextScope(DROPDOWN_MENU_NAME, [createMenuScope]);
var useMenuScope = createMenuScope();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu$1 = /* @__PURE__ */ __name$12((props) => {
	const { __scopeDropdownMenu, children, dir, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
	const menuScope = useMenuScope(__scopeDropdownMenu);
	const triggerRef = import_react.useRef(null);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: DROPDOWN_MENU_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuProvider, {
		scope: __scopeDropdownMenu,
		triggerId: useId(),
		triggerRef,
		contentId: useId(),
		open,
		onOpenChange: setOpen,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		modal,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
			...menuScope,
			open,
			onOpenChange: setOpen,
			dir,
			modal,
			children
		})
	});
}, "DropdownMenu");
var TRIGGER_NAME$7 = "DropdownMenuTrigger";
var DropdownMenuTrigger$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DropdownMenuTrigger2(props, forwardedRef) {
	const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
	const context = useDropdownMenuContext(TRIGGER_NAME$7, __scopeDropdownMenu);
	const menuScope = useMenuScope(__scopeDropdownMenu);
	const composedRefs = useComposedRefs(forwardedRef, context.triggerRef);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuAnchor, {
		asChild: true,
		...menuScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			id: context.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": context.open,
			"aria-controls": context.open ? context.contentId : void 0,
			"data-state": context.open ? "open" : "closed",
			"data-disabled": disabled ? "" : void 0,
			disabled,
			...triggerProps,
			ref: composedRefs,
			onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
				if (!disabled && event.button === 0 && event.ctrlKey === false) {
					context.onOpenToggle();
					if (!context.open) event.preventDefault();
				}
			}),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if (disabled) return;
				if (["Enter", " "].includes(event.key)) context.onOpenToggle();
				if (event.key === "ArrowDown") context.onOpenChange(true);
				if ([
					"Enter",
					" ",
					"ArrowDown"
				].includes(event.key)) event.preventDefault();
			})
		})
	});
}, "DropdownMenuTrigger"));
var DropdownMenuPortal = /* @__PURE__ */ __name$12((props) => {
	const { __scopeDropdownMenu, ...portalProps } = props;
	const menuScope = useMenuScope(__scopeDropdownMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuPortal, {
		...menuScope,
		...portalProps
	});
}, "DropdownMenuPortal");
var CONTENT_NAME$6 = "DropdownMenuContent";
var DropdownMenuContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DropdownMenuContent2(props, forwardedRef) {
	const { __scopeDropdownMenu, ...contentProps } = props;
	const context = useDropdownMenuContext(CONTENT_NAME$6, __scopeDropdownMenu);
	const menuScope = useMenuScope(__scopeDropdownMenu);
	const hasInteractedOutsideRef = import_react.useRef(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuContent, {
		id: context.contentId,
		"aria-labelledby": context.triggerId,
		...menuScope,
		...contentProps,
		ref: forwardedRef,
		onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
			if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
			hasInteractedOutsideRef.current = false;
			event.preventDefault();
		}),
		onInteractOutside: composeEventHandlers(props.onInteractOutside, (event) => {
			const originalEvent = event.detail.originalEvent;
			const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
			const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
			if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
		}),
		style: {
			...props.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "DropdownMenuContent"));
var DropdownMenuGroup$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DropdownMenuGroup2(props, forwardedRef) {
	const { __scopeDropdownMenu, ...groupProps } = props;
	const menuScope = useMenuScope(__scopeDropdownMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuGroup, {
		...menuScope,
		...groupProps,
		ref: forwardedRef
	});
}, "DropdownMenuGroup"));
var DropdownMenuLabel$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DropdownMenuLabel2(props, forwardedRef) {
	const { __scopeDropdownMenu, ...labelProps } = props;
	const menuScope = useMenuScope(__scopeDropdownMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLabel, {
		...menuScope,
		...labelProps,
		ref: forwardedRef
	});
}, "DropdownMenuLabel"));
var DropdownMenuItem$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DropdownMenuItem2(props, forwardedRef) {
	const { __scopeDropdownMenu, ...itemProps } = props;
	const menuScope = useMenuScope(__scopeDropdownMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
		...menuScope,
		...itemProps,
		ref: forwardedRef
	});
}, "DropdownMenuItem"));
var DropdownMenuCheckboxItem$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DropdownMenuCheckboxItem2(props, forwardedRef) {
	const { __scopeDropdownMenu, ...checkboxItemProps } = props;
	const menuScope = useMenuScope(__scopeDropdownMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuCheckboxItem, {
		...menuScope,
		...checkboxItemProps,
		ref: forwardedRef
	});
}, "DropdownMenuCheckboxItem"));
var DropdownMenuRadioGroup$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DropdownMenuRadioGroup2(props, forwardedRef) {
	const { __scopeDropdownMenu, ...radioGroupProps } = props;
	const menuScope = useMenuScope(__scopeDropdownMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRadioGroup, {
		...menuScope,
		...radioGroupProps,
		ref: forwardedRef
	});
}, "DropdownMenuRadioGroup"));
var DropdownMenuRadioItem$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DropdownMenuRadioItem2(props, forwardedRef) {
	const { __scopeDropdownMenu, ...radioItemProps } = props;
	const menuScope = useMenuScope(__scopeDropdownMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRadioItem, {
		...menuScope,
		...radioItemProps,
		ref: forwardedRef
	});
}, "DropdownMenuRadioItem"));
var DropdownMenuItemIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DropdownMenuItemIndicator2(props, forwardedRef) {
	const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
	const menuScope = useMenuScope(__scopeDropdownMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItemIndicator, {
		...menuScope,
		...itemIndicatorProps,
		ref: forwardedRef
	});
}, "DropdownMenuItemIndicator"));
var DropdownMenuSeparator$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DropdownMenuSeparator2(props, forwardedRef) {
	const { __scopeDropdownMenu, ...separatorProps } = props;
	const menuScope = useMenuScope(__scopeDropdownMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSeparator, {
		...menuScope,
		...separatorProps,
		ref: forwardedRef
	});
}, "DropdownMenuSeparator"));
var itemClasses = "relative flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0";
function DropdownMenu(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenu$1, {
		"data-slot": "dropdown-menu",
		...props
	});
}
var DropdownMenuTrigger = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger$1, {
	ref,
	"data-slot": "dropdown-menu-trigger",
	...props
}));
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent$1, {
	ref,
	"data-slot": "dropdown-menu-content",
	sideOffset,
	className: cn$1("z-50 min-w-[12rem] overflow-hidden rounded-lg border border-border bg-card p-1 text-foreground shadow-raised outline-none animate-[vert-pop-in_140ms_ease-out]", "data-[side=top]:origin-bottom data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left", className),
	...props
}) }));
DropdownMenuContent.displayName = "DropdownMenuContent";
var DropdownMenuItem = import_react.forwardRef(({ className, inset, variant = "default", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem$1, {
	ref,
	"data-slot": "dropdown-menu-item",
	"data-variant": variant,
	className: cn$1(itemClasses, inset && "pl-8", variant === "destructive" && "text-destructive focus:bg-destructive/10 focus:text-destructive", className),
	...props
}));
DropdownMenuItem.displayName = "DropdownMenuItem";
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuCheckboxItem$1, {
	ref,
	"data-slot": "dropdown-menu-checkbox-item",
	className: cn$1(itemClasses, "pl-8", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex size-4 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true",
			className: "size-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6 9 17l-5-5" })
		}) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";
var DropdownMenuRadioGroup = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuRadioGroup$1, {
	ref,
	"data-slot": "dropdown-menu-radio-group",
	...props
}));
DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup";
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuRadioItem$1, {
	ref,
	"data-slot": "dropdown-menu-radio-item",
	className: cn$1(itemClasses, "pl-8", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex size-4 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			fill: "currentColor",
			"aria-hidden": "true",
			className: "size-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "6"
			})
		}) })
	}), children]
}));
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel$1, {
	ref,
	"data-slot": "dropdown-menu-label",
	className: cn$1("px-2 py-1.5 text-xs font-semibold text-muted-foreground", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = "DropdownMenuLabel";
var DropdownMenuGroup = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuGroup$1, {
	ref,
	"data-slot": "dropdown-menu-group",
	...props
}));
DropdownMenuGroup.displayName = "DropdownMenuGroup";
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator$1, {
	ref,
	"data-slot": "dropdown-menu-separator",
	className: cn$1("-mx-1 my-1 h-px bg-border", className),
	...props
}));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
function DropdownMenuShortcut({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: cn$1("ml-auto text-xs tracking-widest text-muted-foreground", className),
		...props
	});
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var __defProp$11 = Object.defineProperty;
var __name$11 = (target, value) => __defProp$11(target, "name", {
	value,
	configurable: true
});
function clamp(value, [min, max]) {
	return Math.min(max, Math.max(min, value));
}
__name$11(clamp, "clamp");
var __defProp$10 = Object.defineProperty;
var __name$10 = (target, value) => __defProp$10(target, "name", {
	value,
	configurable: true
});
function usePrevious(value) {
	const ref = import_react.useRef({
		value,
		previous: value
	});
	return import_react.useMemo(() => {
		if (ref.current.value !== value) {
			ref.current.previous = ref.current.value;
			ref.current.value = value;
		}
		return ref.current.previous;
	}, [value]);
}
__name$10(usePrevious, "usePrevious");
var __defProp$9 = Object.defineProperty;
var __name$9 = (target, value) => __defProp$9(target, "name", {
	value,
	configurable: true
});
var Position = {
	ItemAligned: "item-aligned",
	Popper: "popper"
};
var Direction$1 = {
	LTR: "ltr",
	RTL: "rtl"
};
var OPEN_KEYS = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
];
var SELECTION_KEYS = [" ", "Enter"];
var SELECT_NAME = "Select";
var [Collection$2, useCollection$2, createCollectionScope$2] = /* @__PURE__ */ createCollection(SELECT_NAME);
var [createSelectContext, createSelectScope] = /* @__PURE__ */ createContextScope(SELECT_NAME, [createCollectionScope$2, createPopperScope]);
var usePopperScope$2 = createPopperScope();
var [SelectProviderImpl, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
function SelectProvider(props) {
	const { __scopeSelect, children, open: openProp, defaultOpen, onOpenChange, value: valueProp, defaultValue, onValueChange, dir, name, autoComplete, disabled, required, form, internal_do_not_use_render } = props;
	const popperScope = usePopperScope$2(__scopeSelect);
	const [trigger, setTrigger] = import_react.useState(null);
	const [valueNode, setValueNode] = import_react.useState(null);
	const [valueNodeHasChildren, setValueNodeHasChildren] = import_react.useState(false);
	const direction = useDirection(dir);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: SELECT_NAME
	});
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue,
		onChange: onValueChange,
		caller: SELECT_NAME
	});
	const triggerPointerDownPosRef = import_react.useRef(null);
	const initialValueRef = import_react.useRef(value);
	import_react.useEffect(() => {
		const associatedForm = form ? trigger?.ownerDocument.getElementById(form) : trigger?.form;
		if (associatedForm instanceof HTMLFormElement) {
			const reset = /* @__PURE__ */ __name$9(() => setValue(initialValueRef.current), "reset");
			associatedForm.addEventListener("reset", reset);
			return () => associatedForm.removeEventListener("reset", reset);
		}
	}, [
		form,
		trigger,
		setValue
	]);
	const isFormControl = trigger ? !!form || !!trigger.closest("form") : true;
	const [nativeOptionsSet, setNativeOptionsSet] = import_react.useState(/* @__PURE__ */ new Set());
	const contentId = useId();
	const nativeSelectKey = Array.from(nativeOptionsSet).map((option) => option.props.value).join(";");
	const handleNativeOptionAdd = import_react.useCallback((option) => {
		setNativeOptionsSet((prev) => new Set(prev).add(option));
	}, []);
	const handleNativeOptionRemove = import_react.useCallback((option) => {
		setNativeOptionsSet((prev) => {
			const optionsSet = new Set(prev);
			optionsSet.delete(option);
			return optionsSet;
		});
	}, []);
	const context = {
		required,
		trigger,
		onTriggerChange: setTrigger,
		valueNode,
		onValueNodeChange: setValueNode,
		valueNodeHasChildren,
		onValueNodeHasChildrenChange: setValueNodeHasChildren,
		contentId,
		value,
		onValueChange: setValue,
		open,
		onOpenChange: setOpen,
		dir: direction,
		triggerPointerDownPosRef,
		disabled,
		name,
		autoComplete,
		form,
		nativeOptions: nativeOptionsSet,
		nativeSelectKey,
		isFormControl
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popper, {
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectProviderImpl, {
			scope: __scopeSelect,
			...context,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$2.Provider, {
				scope: __scopeSelect,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectNativeOptionsProvider, {
					scope: __scopeSelect,
					onNativeOptionAdd: handleNativeOptionAdd,
					onNativeOptionRemove: handleNativeOptionRemove,
					children: isFunction$1(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
				})
			})
		})
	});
}
__name$9(SelectProvider, "SelectProvider");
var Select$1 = /* @__PURE__ */ __name$9((props) => {
	const { __scopeSelect, children, ...providerProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectProvider, {
		__scopeSelect,
		...providerProps,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [children, isFormControl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectBubbleInput, { __scopeSelect }) : null] })
	});
}, "Select");
var TRIGGER_NAME$6 = "SelectTrigger";
var SelectTrigger$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectTrigger2(props, forwardedRef) {
	const { __scopeSelect, disabled = false, ...triggerProps } = props;
	const popperScope = usePopperScope$2(__scopeSelect);
	const context = useSelectContext(TRIGGER_NAME$6, __scopeSelect);
	const isDisabled = context.disabled || disabled;
	const composedRefs = useComposedRefs(forwardedRef, context.onTriggerChange);
	const getItems = useCollection$2(__scopeSelect);
	const pointerTypeRef = import_react.useRef("touch");
	const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch((search) => {
		const enabledItems = getItems().filter((item) => !item.disabled);
		const nextItem = findNextItem(enabledItems, search, enabledItems.find((item) => item.value === context.value));
		if (nextItem !== void 0) context.onValueChange(nextItem.value);
	});
	const handleOpen = /* @__PURE__ */ __name$9((pointerEvent) => {
		if (!isDisabled) {
			context.onOpenChange(true);
			resetTypeahead();
		}
		if (pointerEvent) context.triggerPointerDownPosRef.current = {
			x: Math.round(pointerEvent.pageX),
			y: Math.round(pointerEvent.pageY)
		};
	}, "handleOpen");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperAnchor, {
		asChild: true,
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "combobox",
			"aria-controls": context.open ? context.contentId : void 0,
			"aria-expanded": context.open,
			"aria-required": context.required,
			"aria-autocomplete": "none",
			dir: context.dir,
			"data-state": context.open ? "open" : "closed",
			disabled: isDisabled,
			"data-disabled": isDisabled ? "" : void 0,
			"data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
			...triggerProps,
			ref: composedRefs,
			onClick: composeEventHandlers(triggerProps.onClick, (event) => {
				event.currentTarget.focus();
				if (pointerTypeRef.current !== "mouse") handleOpen(event);
			}),
			onPointerDown: composeEventHandlers(triggerProps.onPointerDown, (event) => {
				pointerTypeRef.current = event.pointerType;
				const target = event.target;
				if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
				if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
					handleOpen(event);
					event.preventDefault();
				}
			}),
			onKeyDown: composeEventHandlers(triggerProps.onKeyDown, (event) => {
				const isTypingAhead = searchRef.current !== "";
				if (!(event.ctrlKey || event.altKey || event.metaKey) && event.key.length === 1) handleTypeaheadSearch(event.key);
				if (isTypingAhead && event.key === " ") return;
				if (OPEN_KEYS.includes(event.key)) {
					handleOpen();
					event.preventDefault();
				}
			})
		})
	});
}, "SelectTrigger"));
var VALUE_NAME = "SelectValue";
var SelectValue$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectValue2(props, forwardedRef) {
	const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
	const context = useSelectContext(VALUE_NAME, __scopeSelect);
	const { onValueNodeHasChildrenChange } = context;
	const hasChildren = children !== void 0;
	const composedRefs = useComposedRefs(forwardedRef, context.onValueNodeChange);
	useLayoutEffect2(() => {
		onValueNodeHasChildrenChange(hasChildren);
	}, [onValueNodeHasChildrenChange, hasChildren]);
	const showPlaceholder = shouldShowPlaceholder(context.value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...valueProps,
		asChild: showPlaceholder ? false : valueProps.asChild,
		ref: composedRefs,
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: showPlaceholder ? placeholder : children }, showPlaceholder ? "placeholder" : "value")
	});
}, "SelectValue"));
var SelectIcon = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectIcon2(props, forwardedRef) {
	const { __scopeSelect, children, ...iconProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"aria-hidden": true,
		...iconProps,
		ref: forwardedRef,
		children: children || "▼"
	});
}, "SelectIcon"));
var [PortalProvider$3, usePortalContext$3] = createSelectContext("SelectPortal", { forceMount: void 0 });
var SelectPortal = /* @__PURE__ */ __name$9((props) => {
	const { __scopeSelect, forceMount, ...portalProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider$3, {
		scope: props.__scopeSelect,
		forceMount,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
			asChild: true,
			...portalProps
		})
	});
}, "SelectPortal");
var CONTENT_NAME$5 = "SelectContent";
var SelectContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectContent2(props, forwardedRef) {
	const portalContext = usePortalContext$3(CONTENT_NAME$5, props.__scopeSelect);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useSelectContext(CONTENT_NAME$5, props.__scopeSelect);
	const [fragment, setFragment] = import_react.useState();
	useLayoutEffect2(() => {
		setFragment(new DocumentFragment());
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: ({ present }) => present ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentImpl, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentFragment, {
			...contentProps,
			fragment
		})
	});
}, "SelectContent"));
var SelectContentFragment = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectContentFragment2(props, forwardedRef) {
	const { __scopeSelect, children, fragment } = props;
	if (!fragment) return null;
	return import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentProvider, {
		scope: __scopeSelect,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$2.Slot, {
			scope: __scopeSelect,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: forwardedRef,
				children
			})
		})
	}), fragment);
}, "SelectContentFragment"));
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME$5);
var Slot$2 = /* @__PURE__ */ createSlot("SelectContent.RemoveScroll");
var SelectContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectContentImpl2(props, forwardedRef) {
	const { __scopeSelect } = props;
	const { position = Position.ItemAligned, onCloseAutoFocus, onEscapeKeyDown, onPointerDownOutside, side, sideOffset, align, alignOffset, arrowPadding, collisionBoundary, collisionPadding, sticky, hideWhenDetached, avoidCollisions, ...contentProps } = props;
	const context = useSelectContext(CONTENT_NAME$5, __scopeSelect);
	const [content, setContent] = import_react.useState(null);
	const [viewport, setViewport] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, setContent);
	const [selectedItem, setSelectedItem] = import_react.useState(null);
	const [selectedItemText, setSelectedItemText] = import_react.useState(null);
	const getItems = useCollection$2(__scopeSelect);
	const [isPositioned, setIsPositioned] = import_react.useState(false);
	const firstValidItemFoundRef = import_react.useRef(false);
	import_react.useEffect(() => {
		if (content) return hideOthers(content);
	}, [content]);
	useFocusGuards();
	const focusFirst = import_react.useCallback((candidates) => {
		const [firstItem, ...restItems] = getItems().map((item) => item.ref.current);
		const [lastItem] = restItems.slice(-1);
		const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
		for (const candidate of candidates) {
			if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
			candidate?.scrollIntoView({ block: "nearest" });
			if (candidate === firstItem && viewport) viewport.scrollTop = 0;
			if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
			candidate?.focus();
			if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
		}
	}, [getItems, viewport]);
	const focusSelectedItem = import_react.useCallback(() => focusFirst([selectedItem, content]), [
		focusFirst,
		selectedItem,
		content
	]);
	import_react.useEffect(() => {
		if (isPositioned) focusSelectedItem();
	}, [isPositioned, focusSelectedItem]);
	const { onOpenChange, triggerPointerDownPosRef } = context;
	import_react.useEffect(() => {
		if (content) {
			let pointerMoveDelta = {
				x: 0,
				y: 0
			};
			const handlePointerMove = /* @__PURE__ */ __name$9((event) => {
				pointerMoveDelta = {
					x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.current?.x ?? 0)),
					y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.current?.y ?? 0))
				};
			}, "handlePointerMove");
			const handlePointerUp = /* @__PURE__ */ __name$9((event) => {
				if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) event.preventDefault();
				else if (!event.composedPath().includes(content)) onOpenChange(false);
				document.removeEventListener("pointermove", handlePointerMove);
				triggerPointerDownPosRef.current = null;
			}, "handlePointerUp");
			if (triggerPointerDownPosRef.current !== null) {
				document.addEventListener("pointermove", handlePointerMove);
				document.addEventListener("pointerup", handlePointerUp, {
					capture: true,
					once: true
				});
			}
			return () => {
				document.removeEventListener("pointermove", handlePointerMove);
				document.removeEventListener("pointerup", handlePointerUp, { capture: true });
			};
		}
	}, [
		content,
		onOpenChange,
		triggerPointerDownPosRef
	]);
	import_react.useEffect(() => {
		const close = /* @__PURE__ */ __name$9(() => onOpenChange(false), "close");
		window.addEventListener("blur", close);
		window.addEventListener("resize", close);
		return () => {
			window.removeEventListener("blur", close);
			window.removeEventListener("resize", close);
		};
	}, [onOpenChange]);
	const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch((search) => {
		const enabledItems = getItems().filter((item) => !item.disabled);
		const nextItem = findNextItem(enabledItems, search, enabledItems.find((item) => item.ref.current === document.activeElement));
		if (nextItem) setTimeout(() => nextItem.ref.current?.focus());
	});
	const itemRefCallback = import_react.useCallback((node, value, disabled) => {
		const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
		if (context.value !== void 0 && context.value === value || isFirstValidItem) {
			setSelectedItem(node);
			if (isFirstValidItem) firstValidItemFoundRef.current = true;
		}
	}, [context.value]);
	const handleItemLeave = import_react.useCallback(() => content?.focus(), [content]);
	const itemTextRefCallback = import_react.useCallback((node, value, disabled) => {
		const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
		if (context.value !== void 0 && context.value === value || isFirstValidItem) setSelectedItemText(node);
	}, [context.value]);
	const SelectPosition = position === Position.Popper ? SelectPopperPosition : SelectItemAlignedPosition;
	const popperContentProps = SelectPosition === SelectPopperPosition ? {
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		collisionBoundary,
		collisionPadding,
		sticky,
		hideWhenDetached,
		avoidCollisions
	} : {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentProvider, {
		scope: __scopeSelect,
		content,
		viewport,
		onViewportChange: setViewport,
		itemRefCallback,
		selectedItem,
		onItemLeave: handleItemLeave,
		itemTextRefCallback,
		focusSelectedItem,
		selectedItemText,
		position,
		isPositioned,
		searchRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactRemoveScroll, {
			as: Slot$2,
			allowPinchZoom: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
				asChild: true,
				trapped: context.open,
				onMountAutoFocus: (event) => {
					event.preventDefault();
				},
				onUnmountAutoFocus: composeEventHandlers(onCloseAutoFocus, (event) => {
					context.trigger?.focus({ preventScroll: true });
					event.preventDefault();
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
					asChild: true,
					disableOutsidePointerEvents: true,
					onEscapeKeyDown,
					onPointerDownOutside,
					onFocusOutside: (event) => event.preventDefault(),
					onDismiss: () => context.onOpenChange(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPosition, {
						role: "listbox",
						id: context.contentId,
						"data-state": context.open ? "open" : "closed",
						dir: context.dir,
						onContextMenu: (event) => event.preventDefault(),
						...contentProps,
						...popperContentProps,
						onPlaced: () => setIsPositioned(true),
						ref: composedRefs,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...contentProps.style
						},
						onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
							const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
							if (event.key === "Tab") event.preventDefault();
							if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
							if ([
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(event.key)) {
								let candidateNodes = getItems().filter((item) => !item.disabled).map((item) => item.ref.current);
								if (["ArrowUp", "End"].includes(event.key)) candidateNodes = candidateNodes.slice().reverse();
								if (["ArrowUp", "ArrowDown"].includes(event.key)) {
									const currentElement = event.target;
									const currentIndex = candidateNodes.indexOf(currentElement);
									candidateNodes = candidateNodes.slice(currentIndex + 1);
								}
								setTimeout(() => focusFirst(candidateNodes));
								event.preventDefault();
							}
						})
					})
				})
			})
		})
	});
}, "SelectContentImpl"));
var SelectItemAlignedPosition = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectItemAlignedPosition2(props, forwardedRef) {
	const { __scopeSelect, onPlaced, ...popperProps } = props;
	const context = useSelectContext(CONTENT_NAME$5, __scopeSelect);
	const contentContext = useSelectContentContext(CONTENT_NAME$5, __scopeSelect);
	const [contentWrapper, setContentWrapper] = import_react.useState(null);
	const [content, setContent] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, setContent);
	const getItems = useCollection$2(__scopeSelect);
	const shouldExpandOnScrollRef = import_react.useRef(false);
	const shouldRepositionRef = import_react.useRef(true);
	const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
	const position = import_react.useCallback(() => {
		if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
			const triggerRect = context.trigger.getBoundingClientRect();
			const contentRect = content.getBoundingClientRect();
			const valueNodeRect = context.valueNode.getBoundingClientRect();
			const itemTextRect = selectedItemText.getBoundingClientRect();
			if (context.dir !== Direction$1.RTL) {
				const itemTextOffset = itemTextRect.left - contentRect.left;
				const left = valueNodeRect.left - itemTextOffset;
				const leftDelta = triggerRect.left - left;
				const minContentWidth = triggerRect.width + leftDelta;
				const contentWidth = Math.max(minContentWidth, contentRect.width);
				const rightEdge = window.innerWidth - CONTENT_MARGIN;
				const clampedLeft = clamp(left, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, rightEdge - contentWidth)]);
				contentWrapper.style.minWidth = minContentWidth + "px";
				contentWrapper.style.left = clampedLeft + "px";
			} else {
				const itemTextOffset = contentRect.right - itemTextRect.right;
				const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
				const rightDelta = window.innerWidth - triggerRect.right - right;
				const minContentWidth = triggerRect.width + rightDelta;
				const contentWidth = Math.max(minContentWidth, contentRect.width);
				const leftEdge = window.innerWidth - CONTENT_MARGIN;
				const clampedRight = clamp(right, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, leftEdge - contentWidth)]);
				contentWrapper.style.minWidth = minContentWidth + "px";
				contentWrapper.style.right = clampedRight + "px";
			}
			const items = getItems();
			const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
			const itemsHeight = viewport.scrollHeight;
			const contentStyles = window.getComputedStyle(content);
			const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
			const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
			const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
			const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
			const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
			const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
			const viewportStyles = window.getComputedStyle(viewport);
			const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
			const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
			const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
			const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
			const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
			const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
			const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
			const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
			if (contentTopToItemMiddle <= topEdgeToTriggerMiddle) {
				const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
				contentWrapper.style.bottom = "0px";
				const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
				const height = contentTopToItemMiddle + Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
				contentWrapper.style.height = height + "px";
			} else {
				const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
				contentWrapper.style.top = "0px";
				const height = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight) + itemMiddleToContentBottom;
				contentWrapper.style.height = height + "px";
				viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
			}
			contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
			contentWrapper.style.minHeight = minContentHeight + "px";
			contentWrapper.style.maxHeight = availableHeight + "px";
			onPlaced?.();
			requestAnimationFrame(() => shouldExpandOnScrollRef.current = true);
		}
	}, [
		getItems,
		context.trigger,
		context.valueNode,
		contentWrapper,
		content,
		viewport,
		selectedItem,
		selectedItemText,
		context.dir,
		onPlaced
	]);
	useLayoutEffect2(() => position(), [position]);
	const [contentZIndex, setContentZIndex] = import_react.useState();
	useLayoutEffect2(() => {
		if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
	}, [content]);
	const handleScrollButtonChange = import_react.useCallback((node) => {
		if (node && shouldRepositionRef.current === true) {
			position();
			focusSelectedItem?.();
			shouldRepositionRef.current = false;
		}
	}, [position, focusSelectedItem]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewportProvider, {
		scope: __scopeSelect,
		contentWrapper,
		shouldExpandOnScrollRef,
		onScrollButtonChange: handleScrollButtonChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: setContentWrapper,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: contentZIndex
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				...popperProps,
				ref: composedRefs,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...popperProps.style
				}
			})
		})
	});
}, "SelectItemAlignedPosition"));
var SelectPopperPosition = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectPopperPosition2(props, forwardedRef) {
	const { __scopeSelect, align = "start", collisionPadding = CONTENT_MARGIN, ...popperProps } = props;
	const popperScope = usePopperScope$2(__scopeSelect);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperContent, {
		...popperScope,
		...popperProps,
		ref: forwardedRef,
		align,
		collisionPadding,
		style: {
			boxSizing: "border-box",
			...popperProps.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "SelectPopperPosition"));
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME$5, {});
var VIEWPORT_NAME$1 = "SelectViewport";
var SelectViewport = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectViewport2(props, forwardedRef) {
	const { __scopeSelect, nonce, ...viewportProps } = props;
	const contentContext = useSelectContentContext(VIEWPORT_NAME$1, __scopeSelect);
	const viewportContext = useSelectViewportContext(VIEWPORT_NAME$1, __scopeSelect);
	const composedRefs = useComposedRefs(forwardedRef, contentContext.onViewportChange);
	const prevScrollTopRef = import_react.useRef(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
		dangerouslySetInnerHTML: { __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}` },
		nonce
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$2.Slot, {
		scope: __scopeSelect,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...viewportProps,
			ref: composedRefs,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...viewportProps.style
			},
			onScroll: composeEventHandlers(viewportProps.onScroll, (event) => {
				const viewport = event.currentTarget;
				const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
				if (shouldExpandOnScrollRef?.current && contentWrapper) {
					const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
					if (scrolledBy > 0) {
						const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
						const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
						const cssHeight = parseFloat(contentWrapper.style.height);
						const prevHeight = Math.max(cssMinHeight, cssHeight);
						if (prevHeight < availableHeight) {
							const nextHeight = prevHeight + scrolledBy;
							const clampedNextHeight = Math.min(availableHeight, nextHeight);
							const heightDiff = nextHeight - clampedNextHeight;
							contentWrapper.style.height = clampedNextHeight + "px";
							if (contentWrapper.style.bottom === "0px") {
								viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
								contentWrapper.style.justifyContent = "flex-end";
							}
						}
					}
				}
				prevScrollTopRef.current = viewport.scrollTop;
			})
		})
	})] });
}, "SelectViewport"));
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext("SelectGroup");
var SelectGroup$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectGroup2(props, forwardedRef) {
	const { __scopeSelect, ...groupProps } = props;
	const groupId = useId();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGroupContextProvider, {
		scope: __scopeSelect,
		id: groupId,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			role: "group",
			"aria-labelledby": groupId,
			...groupProps,
			ref: forwardedRef
		})
	});
}, "SelectGroup"));
var LABEL_NAME = "SelectLabel";
var SelectLabel$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectLabel2(props, forwardedRef) {
	const { __scopeSelect, ...labelProps } = props;
	const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		id: groupContext.id,
		...labelProps,
		ref: forwardedRef
	});
}, "SelectLabel"));
var ITEM_NAME$1 = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME$1);
var SelectItem$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectItem2(props, forwardedRef) {
	const { __scopeSelect, value, disabled = false, textValue: textValueProp, ...itemProps } = props;
	const context = useSelectContext(ITEM_NAME$1, __scopeSelect);
	const contentContext = useSelectContentContext(ITEM_NAME$1, __scopeSelect);
	const isSelected = context.value === value;
	const [textValue, setTextValue] = import_react.useState(textValueProp ?? "");
	const [isFocused, setIsFocused] = import_react.useState(false);
	const composedRefs = useComposedRefs(forwardedRef, useCallbackRef$1((node) => contentContext.itemRefCallback?.(node, value, disabled)));
	const textId = useId();
	const pointerTypeRef = import_react.useRef("touch");
	const handleSelect = /* @__PURE__ */ __name$9(() => {
		context.onValueChange(value);
		context.onOpenChange(false);
	}, "handleSelect");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemContextProvider, {
		scope: __scopeSelect,
		value,
		disabled,
		textId,
		isSelected,
		onItemTextChange: import_react.useCallback((node) => {
			setTextValue((prevTextValue) => prevTextValue || (node?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$2.ItemSlot, {
			scope: __scopeSelect,
			value,
			disabled,
			textValue,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				role: "option",
				"aria-labelledby": textId,
				"data-highlighted": isFocused ? "" : void 0,
				"aria-selected": isSelected && isFocused,
				"data-state": isSelected ? "checked" : "unchecked",
				"aria-disabled": disabled || void 0,
				"data-disabled": disabled ? "" : void 0,
				tabIndex: disabled ? void 0 : -1,
				...itemProps,
				ref: composedRefs,
				onFocus: composeEventHandlers(itemProps.onFocus, () => setIsFocused(true)),
				onBlur: composeEventHandlers(itemProps.onBlur, () => setIsFocused(false)),
				onClick: composeEventHandlers(itemProps.onClick, () => {
					if (disabled) return;
					if (pointerTypeRef.current !== "mouse") handleSelect();
				}),
				onPointerUp: composeEventHandlers(itemProps.onPointerUp, () => {
					if (disabled) return;
					if (pointerTypeRef.current === "mouse") handleSelect();
				}),
				onPointerDown: composeEventHandlers(itemProps.onPointerDown, (event) => {
					pointerTypeRef.current = event.pointerType;
				}),
				onPointerMove: composeEventHandlers(itemProps.onPointerMove, (event) => {
					pointerTypeRef.current = event.pointerType;
					if (disabled) contentContext.onItemLeave?.();
					else if (pointerTypeRef.current === "mouse") event.currentTarget.focus({ preventScroll: true });
				}),
				onPointerLeave: composeEventHandlers(itemProps.onPointerLeave, (event) => {
					if (event.currentTarget === document.activeElement) contentContext.onItemLeave?.();
				}),
				onKeyDown: composeEventHandlers(itemProps.onKeyDown, (event) => {
					if (disabled || event.target !== event.currentTarget) return;
					if (contentContext.searchRef?.current !== "" && event.key === " ") return;
					if (SELECTION_KEYS.includes(event.key)) handleSelect();
					if (event.key === " ") event.preventDefault();
				})
			})
		})
	});
}, "SelectItem"));
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectItemText2(props, forwardedRef) {
	const { __scopeSelect, className, style, ...itemTextProps } = props;
	const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
	const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
	const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
	const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
	const [itemTextNode, setItemTextNode] = import_react.useState(null);
	const handleItemTextRefCallback = useCallbackRef$1((node) => contentContext.itemTextRefCallback?.(node, itemContext.value, itemContext.disabled));
	const composedRefs = useComposedRefs(forwardedRef, setItemTextNode, itemContext.onItemTextChange, handleItemTextRefCallback);
	const textContent = itemTextNode?.textContent;
	const nativeOption = import_react.useMemo(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
		value: itemContext.value,
		disabled: itemContext.disabled,
		children: textContent
	}, itemContext.value), [
		itemContext.disabled,
		itemContext.value,
		textContent
	]);
	const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
	useLayoutEffect2(() => {
		onNativeOptionAdd(nativeOption);
		return () => onNativeOptionRemove(nativeOption);
	}, [
		onNativeOptionAdd,
		onNativeOptionRemove,
		nativeOption
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		id: itemContext.textId,
		...itemTextProps,
		ref: composedRefs
	}), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren && !shouldShowPlaceholder(context.value) ? import_react_dom.createPortal(itemTextProps.children, context.valueNode) : null] });
}, "SelectItemText"));
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectItemIndicator2(props, forwardedRef) {
	const { __scopeSelect, ...itemIndicatorProps } = props;
	return useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect).isSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"aria-hidden": true,
		...itemIndicatorProps,
		ref: forwardedRef
	}) : null;
}, "SelectItemIndicator"));
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectScrollUpButton2(props, forwardedRef) {
	const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
	const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
	const [canScrollUp, setCanScrollUp] = import_react.useState(false);
	const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
	useLayoutEffect2(() => {
		if (contentContext.viewport && contentContext.isPositioned) {
			let handleScroll2 = function() {
				const canScrollUp2 = viewport.scrollTop > 0;
				setCanScrollUp(canScrollUp2);
			};
			__name$9(handleScroll2, "handleScroll");
			const viewport = contentContext.viewport;
			handleScroll2();
			viewport.addEventListener("scroll", handleScroll2);
			return () => viewport.removeEventListener("scroll", handleScroll2);
		}
	}, [contentContext.viewport, contentContext.isPositioned]);
	return canScrollUp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
		...props,
		ref: composedRefs,
		onAutoScroll: () => {
			const { viewport, selectedItem } = contentContext;
			if (viewport && selectedItem) viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
		}
	}) : null;
}, "SelectScrollUpButton"));
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectScrollDownButton2(props, forwardedRef) {
	const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
	const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
	const [canScrollDown, setCanScrollDown] = import_react.useState(false);
	const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
	useLayoutEffect2(() => {
		if (contentContext.viewport && contentContext.isPositioned) {
			let handleScroll2 = function() {
				const maxScroll = viewport.scrollHeight - viewport.clientHeight;
				const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
				setCanScrollDown(canScrollDown2);
			};
			__name$9(handleScroll2, "handleScroll");
			const viewport = contentContext.viewport;
			handleScroll2();
			viewport.addEventListener("scroll", handleScroll2);
			return () => viewport.removeEventListener("scroll", handleScroll2);
		}
	}, [contentContext.viewport, contentContext.isPositioned]);
	return canScrollDown ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
		...props,
		ref: composedRefs,
		onAutoScroll: () => {
			const { viewport, selectedItem } = contentContext;
			if (viewport && selectedItem) viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
		}
	}) : null;
}, "SelectScrollDownButton"));
var SelectScrollButtonImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectScrollButtonImpl2(props, forwardedRef) {
	const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
	const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
	const autoScrollTimerRef = import_react.useRef(null);
	const getItems = useCollection$2(__scopeSelect);
	const clearAutoScrollTimer = import_react.useCallback(() => {
		if (autoScrollTimerRef.current !== null) {
			window.clearInterval(autoScrollTimerRef.current);
			autoScrollTimerRef.current = null;
		}
	}, []);
	import_react.useEffect(() => {
		return () => clearAutoScrollTimer();
	}, [clearAutoScrollTimer]);
	useLayoutEffect2(() => {
		getItems().find((item) => item.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [getItems]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"aria-hidden": true,
		...scrollIndicatorProps,
		ref: forwardedRef,
		style: {
			flexShrink: 0,
			...scrollIndicatorProps.style
		},
		onPointerDown: composeEventHandlers(scrollIndicatorProps.onPointerDown, () => {
			if (autoScrollTimerRef.current === null) autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
		}),
		onPointerMove: composeEventHandlers(scrollIndicatorProps.onPointerMove, () => {
			contentContext.onItemLeave?.();
			if (autoScrollTimerRef.current === null) autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
		}),
		onPointerLeave: composeEventHandlers(scrollIndicatorProps.onPointerLeave, () => {
			clearAutoScrollTimer();
		})
	});
}, "SelectScrollButtonImpl"));
var SelectSeparator$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectSeparator2(props, forwardedRef) {
	const { __scopeSelect, ...separatorProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"aria-hidden": true,
		...separatorProps,
		ref: forwardedRef
	});
}, "SelectSeparator"));
var BUBBLE_INPUT_NAME$1 = "SelectBubbleInput";
var SelectBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function SelectBubbleInput2({ __scopeSelect, ...props }, forwardedRef) {
	const context = useSelectContext(BUBBLE_INPUT_NAME$1, __scopeSelect);
	const { value, onValueChange, required, disabled, name, autoComplete, form } = context;
	const { nativeOptions, nativeSelectKey } = context;
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const selectValue = value ?? "";
	const prevValue = usePrevious(selectValue);
	const hasEmptyValueOption = Array.from(nativeOptions).some((option) => (option.props.value ?? "") === "");
	import_react.useEffect(() => {
		const select = ref.current;
		if (!select) return;
		const selectProto = window.HTMLSelectElement.prototype;
		const setValue = Object.getOwnPropertyDescriptor(selectProto, "value").set;
		if (prevValue !== selectValue && setValue) {
			const event = new Event("change", { bubbles: true });
			setValue.call(select, selectValue);
			select.dispatchEvent(event);
		}
	}, [prevValue, selectValue]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Primitive.select, {
		"aria-hidden": true,
		required,
		tabIndex: -1,
		name,
		autoComplete,
		disabled,
		form,
		onChange: (event) => onValueChange(event.target.value),
		...props,
		style: {
			...VISUALLY_HIDDEN_STYLES,
			...props.style
		},
		ref: composedRefs,
		defaultValue: selectValue,
		children: [shouldShowPlaceholder(value) && !hasEmptyValueOption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "" }) : null, Array.from(nativeOptions)]
	}, nativeSelectKey);
}, "SelectBubbleInput"));
function isFunction$1(value) {
	return typeof value === "function";
}
__name$9(isFunction$1, "isFunction");
function shouldShowPlaceholder(value) {
	return value === "" || value === void 0;
}
__name$9(shouldShowPlaceholder, "shouldShowPlaceholder");
function useTypeaheadSearch(onSearchChange) {
	const handleSearchChange = useCallbackRef$1(onSearchChange);
	const searchRef = import_react.useRef("");
	const timerRef = import_react.useRef(0);
	const handleTypeaheadSearch = import_react.useCallback((key) => {
		const search = searchRef.current + key;
		handleSearchChange(search);
		(/* @__PURE__ */ __name$9((function updateSearch(value) {
			searchRef.current = value;
			window.clearTimeout(timerRef.current);
			if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
		}), "updateSearch"))(search);
	}, [handleSearchChange]);
	const resetTypeahead = import_react.useCallback(() => {
		searchRef.current = "";
		window.clearTimeout(timerRef.current);
	}, []);
	import_react.useEffect(() => {
		return () => window.clearTimeout(timerRef.current);
	}, []);
	return [
		searchRef,
		handleTypeaheadSearch,
		resetTypeahead
	];
}
__name$9(useTypeaheadSearch, "useTypeaheadSearch");
function findNextItem(items, search, currentItem) {
	const normalizedSearch = search.length > 1 && Array.from(search).every((char) => char === search[0]) ? search[0] : search;
	const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
	let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
	if (normalizedSearch.length === 1) wrappedItems = wrappedItems.filter((v) => v !== currentItem);
	const nextItem = wrappedItems.find((item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
	return nextItem !== currentItem ? nextItem : void 0;
}
__name$9(findNextItem, "findNextItem");
function wrapArray(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
__name$9(wrapArray, "wrapArray");
function Select(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select$1, {
		"data-slot": "select",
		...props
	});
}
var SelectTrigger = import_react.forwardRef(({ className, size = "md", invalid, "aria-invalid": ariaInvalid, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	"data-slot": "select-trigger",
	"data-size": size,
	"data-invalid": invalid || void 0,
	"aria-invalid": invalid || ariaInvalid || void 0,
	className: cn$1("flex w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 text-sm font-medium text-foreground shadow-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground data-[invalid]:border-destructive data-[invalid]:focus-visible:ring-destructive [&>span]:min-w-0 [&>span]:truncate", size === "sm" && "h-8 text-xs", size === "md" && "h-9", size === "lg" && "h-10", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true",
			className: "size-4 shrink-0 text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 9 6 6 6-6" })
		})
	})]
}));
SelectTrigger.displayName = "SelectTrigger";
var SelectValue = SelectValue$1;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	"data-slot": "select-content",
	position,
	className: cn$1("relative z-50 max-h-[min(var(--radix-select-content-available-height,320px),320px)] w-full min-w-[var(--radix-select-trigger-width)] overflow-y-auto rounded-lg border border-border bg-card p-1 text-foreground shadow-raised outline-none animate-[vert-pop-in_140ms_ease-out]", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {
			className: "flex h-6 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				"aria-hidden": "true",
				className: "size-3.5 text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m18 15-6-6-6 6" })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: "p-1",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {
			className: "flex h-6 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				"aria-hidden": "true",
				className: "size-3.5 text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 9 6 6 6-6" })
			})
		})
	]
}) }));
SelectContent.displayName = "SelectContent";
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	"data-slot": "select-item",
	className: cn$1("relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-2 pr-8 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:font-medium [&_svg]:size-4 [&_svg]:shrink-0", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex size-4 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true",
			className: "size-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6 9 17l-5-5" })
		}) })
	})]
}));
SelectItem.displayName = "SelectItem";
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	"data-slot": "select-label",
	className: cn$1("px-2 py-1.5 text-xs font-semibold text-muted-foreground", className),
	...props
}));
SelectLabel.displayName = "SelectLabel";
var SelectGroup = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGroup$1, {
	ref,
	"data-slot": "select-group",
	...props
}));
SelectGroup.displayName = "SelectGroup";
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	"data-slot": "select-separator",
	className: cn$1("-mx-1 my-1 h-px bg-border", className),
	...props
}));
SelectSeparator.displayName = "SelectSeparator";
var __defProp$8 = Object.defineProperty;
var __name$8 = (target, value) => __defProp$8(target, "name", {
	value,
	configurable: true
});
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = /* @__PURE__ */ createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog$1 = /* @__PURE__ */ __name$8((props) => {
	const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
	const triggerRef = import_react.useRef(null);
	const contentRef = import_react.useRef(null);
	const { nodes: branchNodes, registry: branchRegistry } = useFocusScopeBranchRegistry();
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: DIALOG_NAME
	});
	const [titleCount, setTitleCount] = import_react.useState(0);
	const [descriptionCount, setDescriptionCount] = import_react.useState(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
		scope: __scopeDialog,
		triggerRef,
		contentRef,
		contentId: useId(),
		titleId: useId(),
		descriptionId: useId(),
		titlePresent: titleCount > 0,
		descriptionPresent: descriptionCount > 0,
		setTitleCount,
		setDescriptionCount,
		open,
		onOpenChange: setOpen,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		modal,
		branchNodes,
		branchRegistry,
		children
	});
}, "Dialog");
var TRIGGER_NAME$5 = "DialogTrigger";
var DialogTrigger$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogTrigger2(props, forwardedRef) {
	const { __scopeDialog, ...triggerProps } = props;
	const context = useDialogContext(TRIGGER_NAME$5, __scopeDialog);
	const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": context.open,
		"aria-controls": context.open ? context.contentId : void 0,
		"data-state": getState$4(context.open),
		...triggerProps,
		ref: composedTriggerRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
}, "DialogTrigger"));
var PORTAL_NAME$2 = "DialogPortal";
var [PortalProvider$2, usePortalContext$2] = createDialogContext(PORTAL_NAME$2, { forceMount: void 0 });
var DialogPortal$1 = /* @__PURE__ */ __name$8((props) => {
	const { __scopeDialog, forceMount, children, container } = props;
	const context = useDialogContext(PORTAL_NAME$2, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider$2, {
		scope: __scopeDialog,
		forceMount,
		children: import_react.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children: child
			})
		}))
	});
}, "DialogPortal");
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogOverlay2(props, forwardedRef) {
	const portalContext = usePortalContext$2(OVERLAY_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
	return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayImpl, {
			...overlayProps,
			ref: forwardedRef
		})
	}) : null;
}, "DialogOverlay"));
var Slot$1 = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogOverlayImpl2(props, forwardedRef) {
	const { __scopeDialog, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
	const composedRefs = useComposedRefs(forwardedRef, useDismissableLayerSurface());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactRemoveScroll, {
		as: Slot$1,
		allowPinchZoom: true,
		shards: import_react.useMemo(() => [context.contentRef, ...context.branchNodes.map((node) => ({ current: node }))], [context.contentRef, context.branchNodes]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState$4(context.open),
			...overlayProps,
			ref: composedRefs,
			style: {
				pointerEvents: "auto",
				...overlayProps.style
			}
		})
	});
}, "DialogOverlayImpl"));
var CONTENT_NAME$4 = "DialogContent";
var DialogContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogContent2(props, forwardedRef) {
	const portalContext = usePortalContext$2(CONTENT_NAME$4, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME$4, props.__scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentModal, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentNonModal, {
			...contentProps,
			ref: forwardedRef
		})
	});
}, "DialogContent"));
var DialogContentModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogContentModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME$4, props.__scopeDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
	import_react.useEffect(() => {
		const content = contentRef.current;
		if (content) return hideOthers(content);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: composedRefs,
		trapFocus: context.open,
		disableOutsidePointerEvents: context.open,
		onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
			event.preventDefault();
			context.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
			const originalEvent = event.detail.originalEvent;
			const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
			if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault())
	});
}, "DialogContentModal"));
var DialogContentNonModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogContentNonModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME$4, props.__scopeDialog);
	const hasInteractedOutsideRef = import_react.useRef(false);
	const hasPointerDownOutsideRef = import_react.useRef(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: forwardedRef,
		trapFocus: false,
		disableOutsidePointerEvents: false,
		onCloseAutoFocus: (event) => {
			props.onCloseAutoFocus?.(event);
			if (!event.defaultPrevented) {
				if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
				event.preventDefault();
			}
			hasInteractedOutsideRef.current = false;
			hasPointerDownOutsideRef.current = false;
		},
		onInteractOutside: (event) => {
			props.onInteractOutside?.(event);
			if (!event.defaultPrevented) {
				hasInteractedOutsideRef.current = true;
				if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
			}
			const target = event.target;
			if (context.triggerRef.current?.contains(target)) event.preventDefault();
			if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
		}
	});
}, "DialogContentNonModal"));
var DialogContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogContentImpl2(props, forwardedRef) {
	const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, "aria-describedby": ariaDescribedby, children, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME$4, __scopeDialog);
	useFocusGuards();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScopeBranchProvider, {
		registry: context.branchRegistry,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
			asChild: true,
			loop: true,
			trapped: trapFocus,
			branches: context.branchNodes,
			onMountAutoFocus: onOpenAutoFocus,
			onUnmountAutoFocus: onCloseAutoFocus,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
				role: "dialog",
				id: context.contentId,
				"aria-labelledby": context.titlePresent ? context.titleId : void 0,
				"aria-describedby": context.descriptionPresent ? concatAriaDescribedby$1(ariaDescribedby, context.descriptionId) : ariaDescribedby,
				"data-state": getState$4(context.open),
				...contentProps,
				ref: forwardedRef,
				deferPointerDownOutside: true,
				onDismiss: () => context.onOpenChange(false),
				children
			})
		})
	});
}, "DialogContentImpl"));
var DialogTitle$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogTitle2(props, forwardedRef) {
	const { __scopeDialog, ...titleProps } = props;
	const context = useDialogContext("DialogTitle", __scopeDialog);
	const { setTitleCount } = context;
	useLayoutEffect2(() => {
		setTitleCount((count) => count + 1);
		return () => setTitleCount((count) => count - 1);
	}, [setTitleCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h2, {
		id: context.titleId,
		...titleProps,
		ref: forwardedRef
	});
}, "DialogTitle"));
var DialogDescription$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogDescription2(props, forwardedRef) {
	const { __scopeDialog, ...descriptionProps } = props;
	const context = useDialogContext("DialogDescription", __scopeDialog);
	const { setDescriptionCount } = context;
	useLayoutEffect2(() => {
		setDescriptionCount((count) => count + 1);
		return () => setDescriptionCount((count) => count - 1);
	}, [setDescriptionCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.p, {
		id: context.descriptionId,
		...descriptionProps,
		ref: forwardedRef
	});
}, "DialogDescription"));
var CLOSE_NAME$1 = "DialogClose";
var DialogClose$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$8(function DialogClose2(props, forwardedRef) {
	const { __scopeDialog, ...closeProps } = props;
	const context = useDialogContext(CLOSE_NAME$1, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...closeProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
	});
}, "DialogClose"));
function concatAriaDescribedby$1(...values) {
	const ids = /* @__PURE__ */ new Set();
	for (const value of values) {
		if (typeof value !== "string") continue;
		for (const id of String(value).trim().split(/\s+/)) if (id) ids.add(id);
	}
	return ids.size > 0 ? Array.from(ids).join(" ") : void 0;
}
__name$8(concatAriaDescribedby$1, "concatAriaDescribedby");
function getState$4(open) {
	return open ? "open" : "closed";
}
__name$8(getState$4, "getState");
var DialogContext = import_react.createContext({ modal: true });
function Dialog({ modal = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContext.Provider, {
		value: { modal },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
			"data-slot": "dialog",
			modal,
			...props
		})
	});
}
var DialogTrigger = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger$1, {
	ref,
	"data-slot": "dialog-trigger",
	...props
}));
DialogTrigger.displayName = "DialogTrigger";
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	"data-slot": "dialog-overlay",
	className: cn$1("fixed inset-0 z-40 bg-black/55 animate-[vert-fade-in_140ms_ease-out]", className),
	...props
}));
DialogOverlay.displayName = "DialogOverlay";
var DialogContent = import_react.forwardRef(({ className, children, hideClose, modal, ...props }, ref) => {
	const { modal: rootModal } = import_react.useContext(DialogContext);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		ref,
		"data-slot": "dialog-content",
		"aria-modal": modal ?? rootModal ? true : void 0,
		className: cn$1("fixed inset-0 z-50 m-auto flex h-fit max-h-[calc(100vh-2rem)] w-full max-w-lg flex-col gap-4 overflow-y-auto rounded-xl border border-border bg-card p-6 text-foreground shadow-pop outline-none animate-[vert-pop-in_160ms_ease-out]", className),
		...props,
		children: [children, hideClose ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose$1, {
			"data-slot": "dialog-close",
			className: "absolute right-4 top-4 rounded-md p-1 text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
			"aria-label": "Close",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				"aria-hidden": "true",
				className: "size-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6 6 18M6 6l12 12" })
			})
		})]
	})] });
});
DialogContent.displayName = "DialogContent";
var DialogHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	"data-slot": "dialog-header",
	className: cn$1("flex flex-col gap-1.5 pr-8 text-left", className),
	...props
}));
DialogHeader.displayName = "DialogHeader";
var DialogFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	"data-slot": "dialog-footer",
	className: cn$1("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
	...props
}));
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	"data-slot": "dialog-title",
	className: cn$1("text-lg font-semibold leading-snug tracking-tight", className),
	...props
}));
DialogTitle.displayName = "DialogTitle";
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	"data-slot": "dialog-description",
	className: cn$1("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = "DialogDescription";
var DialogClose = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose$1, {
	ref,
	"data-slot": "dialog-close-button",
	...props
}));
DialogClose.displayName = "DialogClose";
var __defProp$7 = Object.defineProperty;
var __name$7 = (target, value) => __defProp$7(target, "name", {
	value,
	configurable: true
});
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = /* @__PURE__ */ createContextScope(AVATAR_NAME);
var ImageLoadingStatus = {
	Idle: "idle",
	Loading: "loading",
	Loaded: "loaded",
	Error: "error"
};
var STATIC_IMAGE_COUNT_STATE = [0, () => void 0];
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$7(function Avatar2(props, forwardedRef) {
	const { __scopeAvatar, ...avatarProps } = props;
	const [imageLoadingStatus, setImageLoadingStatus] = import_react.useState(ImageLoadingStatus.Idle);
	const [imageCount, setImageCount] = useImageCount();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarProvider, {
		scope: __scopeAvatar,
		imageLoadingStatus,
		setImageLoadingStatus,
		imageCount,
		setImageCount,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			...avatarProps,
			ref: forwardedRef
		})
	});
}, "Avatar"));
var IMAGE_NAME = "AvatarImage";
var AvatarImage$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$7(function AvatarImage2(props, forwardedRef) {
	const { __scopeAvatar, src, onLoadingStatusChange, ...imageProps } = props;
	const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
	context.setImageCount;
	const imageLoadingStatus = useImageLoadingStatus(src, {
		referrerPolicy: imageProps.referrerPolicy,
		crossOrigin: imageProps.crossOrigin,
		loadingStatus: context.imageLoadingStatus,
		setLoadingStatus: context.setImageLoadingStatus
	});
	const handleLoadingStatusChange = useCallbackRef$1((status) => {
		onLoadingStatusChange?.(status);
	});
	const loadingStatusRef = import_react.useRef(imageLoadingStatus);
	useLayoutEffect2(() => {
		const previousLoadingStatus = loadingStatusRef.current;
		loadingStatusRef.current = imageLoadingStatus;
		if (imageLoadingStatus !== previousLoadingStatus) handleLoadingStatusChange(imageLoadingStatus);
	}, [imageLoadingStatus, handleLoadingStatusChange]);
	return imageLoadingStatus === ImageLoadingStatus.Loaded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.img, {
		...imageProps,
		ref: forwardedRef,
		src
	}) : null;
}, "AvatarImage"));
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$7(function AvatarFallback2(props, forwardedRef) {
	const { __scopeAvatar, delayMs, ...fallbackProps } = props;
	const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
	const [canRender, setCanRender] = import_react.useState(delayMs === void 0);
	import_react.useEffect(() => {
		if (delayMs !== void 0) {
			const timerId = window.setTimeout(() => setCanRender(true), delayMs);
			return () => window.clearTimeout(timerId);
		}
	}, [delayMs]);
	return canRender && context.imageLoadingStatus !== ImageLoadingStatus.Loaded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...fallbackProps,
		ref: forwardedRef
	}) : null;
}, "AvatarFallback"));
function useImageLoadingStatus(src, { loadingStatus, setLoadingStatus, referrerPolicy, crossOrigin }) {
	useLayoutEffect2(() => {
		if (!src) {
			setLoadingStatus(ImageLoadingStatus.Error);
			return;
		}
		const image = new window.Image();
		const handleLoad = /* @__PURE__ */ __name$7((event) => {
			const image2 = event.currentTarget;
			setLoadingStatus(getImageLoadingStatus(image2));
		}, "handleLoad");
		const handleError = /* @__PURE__ */ __name$7(() => setLoadingStatus(ImageLoadingStatus.Error), "handleError");
		image.addEventListener("load", handleLoad);
		image.addEventListener("error", handleError);
		if (referrerPolicy) image.referrerPolicy = referrerPolicy;
		image.crossOrigin = crossOrigin ?? null;
		image.src = src;
		setLoadingStatus(getImageLoadingStatus(image));
		return () => {
			image.removeEventListener("load", handleLoad);
			image.removeEventListener("error", handleError);
			setLoadingStatus(ImageLoadingStatus.Idle);
		};
	}, [
		src,
		crossOrigin,
		referrerPolicy,
		setLoadingStatus
	]);
	return loadingStatus;
}
__name$7(useImageLoadingStatus, "useImageLoadingStatus");
function getImageLoadingStatus(image) {
	return image.complete ? image.naturalWidth > 0 ? ImageLoadingStatus.Loaded : ImageLoadingStatus.Error : ImageLoadingStatus.Loading;
}
__name$7(getImageLoadingStatus, "getImageLoadingStatus");
function useImageCount() {
	return STATIC_IMAGE_COUNT_STATE;
}
__name$7(useImageCount, "useImageCount");
function useUpdateImageCount(setImageCount) {}
__name$7(useUpdateImageCount, "useUpdateImageCount");
var avatarVariants = cva("relative inline-flex shrink-0 overflow-hidden rounded-full", {
	variants: {
		variant: {
			default: "bg-muted text-foreground",
			brand: "bg-brand/15 text-brand",
			surface: "bg-surface text-muted-foreground"
		},
		size: {
			sm: "size-8 text-xs",
			md: "size-10 text-sm",
			lg: "size-12 text-base"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "md"
	}
});
var Avatar = import_react.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	"data-slot": "avatar",
	"data-variant": variant || "default",
	"data-size": size || "md",
	className: cn$1(avatarVariants({
		variant,
		size
	}), className),
	...props
}));
Avatar.displayName = "Avatar";
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	"data-slot": "avatar-image",
	className: cn$1("size-full object-cover", className),
	...props
}));
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	"data-slot": "avatar-fallback",
	className: cn$1("flex size-full items-center justify-center rounded-full font-medium", className),
	...props
}));
AvatarFallback.displayName = "AvatarFallback";
/**
* AvatarGroup — overlapping stack of avatars with a "+N" overflow counter.
* The counter carries the hidden avatars' count to assistive tech; the group
* itself is a list item-free plain container so it composes anywhere.
*/
var AvatarGroup = import_react.forwardRef(({ max = 4, spacing = -10, className, style, children, ...props }, ref) => {
	const items = import_react.Children.toArray(children).filter(import_react.isValidElement);
	const visible = items.slice(0, Math.max(max, 0));
	const overflow = items.length - visible.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		"data-slot": "avatar-group",
		"data-overflow": overflow > 0 ? overflow : void 0,
		className: cn$1("flex items-center", className),
		style: {
			...style,
			gap: spacing
		},
		...props,
		children: [visible.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-slot": "avatar-group-item",
			className: "rounded-full ring-2 ring-background",
			style: { zIndex: items.length - i },
			children: child
		}, i)), overflow > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			"data-slot": "avatar-group-overflow",
			"aria-label": `${overflow} more`,
			role: "img",
			className: cn$1(avatarVariants({ variant: "brand" }), "z-0 items-center justify-center rounded-full text-xs font-medium ring-2 ring-background"),
			children: ["+", overflow]
		}) : null]
	});
});
AvatarGroup.displayName = "AvatarGroup";
/**
* Skeleton — decorative loading placeholder. Mark your loading region with
* aria-busy yourself; the skeleton itself is hidden from assistive tech.
*/
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "skeleton",
		"aria-hidden": "true",
		className: cn$1("animate-pulse rounded-md bg-muted motion-reduce:animate-none", className),
		...props
	});
}
Skeleton.displayName = "Skeleton";
var Table = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	"data-slot": "table-container",
	className: "relative w-full overflow-x-auto",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
		ref,
		"data-slot": "table",
		className: cn$1("w-full caption-bottom border-collapse text-sm", className),
		...props
	})
}));
Table.displayName = "Table";
var TableHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
	ref,
	"data-slot": "table-header",
	className: cn$1("[&_tr]:border-b [&_tr]:border-border", className),
	...props
}));
TableHeader.displayName = "TableHeader";
var TableBody = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
	ref,
	"data-slot": "table-body",
	className: cn$1("[&_tr:last-child]:border-0", className),
	...props
}));
TableBody.displayName = "TableBody";
var TableFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
	ref,
	"data-slot": "table-footer",
	className: cn$1("border-t border-border bg-muted/50 font-medium", className),
	...props
}));
TableFooter.displayName = "TableFooter";
var TableRow = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
	ref,
	"data-slot": "table-row",
	className: cn$1("border-b border-border transition-colors hover:bg-accent/50 data-[state=selected]:bg-accent", className),
	...props
}));
TableRow.displayName = "TableRow";
var TableHead = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
	ref,
	"data-slot": "table-head",
	scope: "col",
	className: cn$1("h-10 whitespace-nowrap px-3 text-left align-middle text-xs font-semibold text-muted-foreground", className),
	...props
}));
TableHead.displayName = "TableHead";
var TableCell = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
	ref,
	"data-slot": "table-cell",
	className: cn$1("px-3 py-2.5 align-middle", className),
	...props
}));
TableCell.displayName = "TableCell";
var TableCaption = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
	ref,
	"data-slot": "table-caption",
	className: cn$1("mt-3 text-sm text-muted-foreground", className),
	...props
}));
TableCaption.displayName = "TableCaption";
var __defProp$6 = Object.defineProperty;
var __name$6 = (target, value) => __defProp$6(target, "name", {
	value,
	configurable: true
});
var Label$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function Label2(props, forwardedRef) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.label, {
		...props,
		ref: forwardedRef,
		onMouseDown: (event) => {
			if (event.target.closest("button, input, select, textarea")) return;
			props.onMouseDown?.(event);
			if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
		}
	});
}, "Label"));
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
	ref,
	"data-slot": "label",
	className: cn$1("inline-flex select-none items-center gap-1.5 text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
	...props
}));
Label.displayName = "Label";
var Field = import_react.forwardRef(({ label, description, error, required, disabled, className, children, ...props }, ref) => {
	const controlId = `field-${import_react.useId()}`;
	const errorId = `${controlId}-error`;
	const descriptionId = `${controlId}-description`;
	const field = {
		id: controlId,
		"aria-describedby": [error ? errorId : null, description ? descriptionId : null].filter(Boolean).join(" ") || void 0,
		"aria-invalid": error ? true : void 0,
		required: required || void 0,
		disabled: disabled || void 0
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		"data-slot": "field",
		"data-invalid": error ? true : void 0,
		className: cn$1("grid gap-2", className),
		...props,
		children: [
			label != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				htmlFor: controlId,
				children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "text-destructive",
					children: "*"
				}) : null]
			}) : null,
			children(field),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: descriptionId,
				"data-slot": "field-description",
				className: "text-xs text-muted-foreground",
				children: description
			}) : null,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: errorId,
				"data-slot": "field-error",
				className: "text-xs font-medium text-destructive",
				children: error
			}) : null
		]
	});
});
Field.displayName = "Field";
var FieldGroup = import_react.forwardRef(({ label, className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	"data-slot": "field-group",
	role: label ? "group" : void 0,
	"aria-label": label,
	className: cn$1("flex flex-col gap-6", className),
	...props
}));
FieldGroup.displayName = "FieldGroup";
var FieldDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
	ref,
	"data-slot": "field-description",
	className: cn$1("text-xs text-muted-foreground", className),
	...props
}));
FieldDescription.displayName = "FieldDescription";
var FieldError = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
	ref,
	"data-slot": "field-error",
	className: cn$1("text-xs font-medium text-destructive", className),
	...props
}));
FieldError.displayName = "FieldError";
var __defProp$5 = Object.defineProperty;
var __name$5 = (target, value) => __defProp$5(target, "name", {
	value,
	configurable: true
});
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = /* @__PURE__ */ createContextScope(RADIO_NAME);
var [RadioProviderImpl, useRadioContext] = createRadioContext(RADIO_NAME);
function RadioProvider(props) {
	const { __scopeRadio, checked = false, children, disabled, form, name, onCheck, required, value = "on", internal_do_not_use_render } = props;
	const [control, setControl] = import_react.useState(null);
	const [bubbleInput, setBubbleInput] = import_react.useState(null);
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const [userInteractionCount, onUserInteraction] = import_react.useReducer((count) => count + 1, 0);
	const context = {
		checked,
		disabled,
		required,
		name,
		form,
		value,
		control,
		setControl,
		hasConsumerStoppedPropagationRef,
		userInteractionCount,
		onUserInteraction,
		isFormControl: control ? !!form || !!control.closest("form") : true,
		bubbleInput,
		setBubbleInput,
		onCheck: /* @__PURE__ */ __name$5(() => onCheck?.(), "onCheck")
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioProviderImpl, {
		scope: __scopeRadio,
		...context,
		children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
	});
}
__name$5(RadioProvider, "RadioProvider");
var TRIGGER_NAME$4 = "RadioTrigger";
var RadioTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$5(function RadioTrigger2({ __scopeRadio, onClick, ...radioProps }, forwardedRef) {
	const { checked, disabled, value, setControl, onCheck, hasConsumerStoppedPropagationRef, onUserInteraction, isFormControl, bubbleInput } = useRadioContext(TRIGGER_NAME$4, __scopeRadio);
	const composedRefs = useComposedRefs(forwardedRef, setControl);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		role: "radio",
		"aria-checked": checked,
		"data-state": getState$3(checked),
		"data-disabled": disabled ? "" : void 0,
		disabled,
		value,
		...radioProps,
		ref: composedRefs,
		onClick: composeEventHandlers(onClick, (event) => {
			if (!checked) {
				onUserInteraction();
				onCheck();
			}
			if (bubbleInput && isFormControl) {
				hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
				if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
			}
		})
	});
}, "RadioTrigger"));
var INDICATOR_NAME = "RadioIndicator";
var RadioIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$5(function RadioIndicator2(props, forwardedRef) {
	const { __scopeRadio, forceMount, ...indicatorProps } = props;
	const context = useRadioContext(INDICATOR_NAME, __scopeRadio);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.checked,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			"data-state": getState$3(context.checked),
			"data-disabled": context.disabled ? "" : void 0,
			...indicatorProps,
			ref: forwardedRef
		})
	});
}, "RadioIndicator"));
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var RadioBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$5(function RadioBubbleInput2({ __scopeRadio, onClick, ...props }, forwardedRef) {
	const { control, checked, required, disabled, name, value, form, bubbleInput, setBubbleInput, hasConsumerStoppedPropagationRef, userInteractionCount } = useRadioContext(BUBBLE_INPUT_NAME, __scopeRadio);
	const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
	const controlSize = useSize(control);
	const shouldStopClickPropagationRef = import_react.useRef(false);
	const prevCheckedRef = import_react.useRef(checked);
	const prevUserInteractionCountRef = import_react.useRef(userInteractionCount);
	import_react.useEffect(() => {
		const input = bubbleInput;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		const isUserInteraction = userInteractionCount !== prevUserInteractionCountRef.current;
		prevUserInteractionCountRef.current = userInteractionCount;
		const checkedChanged = prevCheckedRef.current !== checked;
		prevCheckedRef.current = checked;
		const bubbles = !(isUserInteraction && hasConsumerStoppedPropagationRef.current);
		if (checkedChanged && setChecked) {
			shouldStopClickPropagationRef.current = !isUserInteraction;
			const event = new Event("click", { bubbles });
			setChecked.call(input, checked);
			input.dispatchEvent(event);
			shouldStopClickPropagationRef.current = false;
		}
	}, [
		bubbleInput,
		checked,
		hasConsumerStoppedPropagationRef,
		userInteractionCount
	]);
	const defaultCheckedRef = import_react.useRef(checked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "radio",
		"aria-hidden": true,
		defaultChecked: defaultCheckedRef.current,
		required,
		disabled,
		name,
		value,
		form,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		onClick: composeEventHandlers(onClick, (event) => {
			if (shouldStopClickPropagationRef.current) event.stopPropagation();
		}),
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
}, "RadioBubbleInput"));
function isFunction(value) {
	return typeof value === "function";
}
__name$5(isFunction, "isFunction");
function getState$3(checked) {
	return checked ? "checked" : "unchecked";
}
__name$5(getState$3, "getState");
var ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext, createRadioGroupScope] = /* @__PURE__ */ createContextScope(RADIO_GROUP_NAME, [createRovingFocusGroupScope, createRadioScope]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$5(function RadioGroup2(props, forwardedRef) {
	const { __scopeRadioGroup, name, form, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
	const direction = useDirection(dir);
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? null,
		onChange: onValueChange,
		caller: RADIO_GROUP_NAME
	});
	const [control, setControl] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, setControl);
	const initialValueRef = import_react.useRef(value);
	import_react.useEffect(() => {
		const associatedForm = form ? control?.ownerDocument.getElementById(form) : control?.closest("form");
		if (associatedForm instanceof HTMLFormElement) {
			const reset = /* @__PURE__ */ __name$5(() => setValue(initialValueRef.current), "reset");
			associatedForm.addEventListener("reset", reset);
			return () => associatedForm.removeEventListener("reset", reset);
		}
	}, [
		control,
		form,
		setValue
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupProvider, {
		scope: __scopeRadioGroup,
		name,
		form,
		required,
		disabled,
		value,
		onValueChange: setValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroup, {
			asChild: true,
			...rovingFocusGroupScope,
			orientation,
			dir: direction,
			loop,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				role: "radiogroup",
				"aria-required": required,
				"aria-orientation": orientation,
				"data-disabled": disabled ? "" : void 0,
				dir: direction,
				...groupProps,
				ref: composedRefs
			})
		})
	});
}, "RadioGroup"));
var ITEM_PROVIDER_NAME = "RadioGroupItemProvider";
var ITEM_TRIGGER_NAME = "RadioGroupItemTrigger";
function RadioGroupItemProvider(props) {
	const { __scopeRadioGroup, value, disabled, children, internal_do_not_use_render } = props;
	const context = useRadioGroupContext(ITEM_PROVIDER_NAME, __scopeRadioGroup);
	const radioScope = useRadioScope(__scopeRadioGroup);
	const isDisabled = context.disabled || disabled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioProvider, {
		...radioScope,
		checked: context.value === value,
		disabled: isDisabled,
		required: context.required,
		name: context.name,
		form: context.form,
		value,
		onCheck: () => context.onValueChange(value),
		internal_do_not_use_render,
		children
	});
}
__name$5(RadioGroupItemProvider, "RadioGroupItemProvider");
var RadioGroupItemTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$5(function RadioGroupItemTrigger2(props, forwardedRef) {
	const { __scopeRadioGroup, ...triggerProps } = props;
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
	const radioScope = useRadioScope(__scopeRadioGroup);
	const { checked, disabled } = useRadioContext(ITEM_TRIGGER_NAME, radioScope.__scopeRadio);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const isArrowKeyPressedRef = import_react.useRef(false);
	import_react.useEffect(() => {
		const handleKeyDown = /* @__PURE__ */ __name$5((event) => {
			if (ARROW_KEYS.includes(event.key)) isArrowKeyPressedRef.current = true;
		}, "handleKeyDown");
		const handleKeyUp = /* @__PURE__ */ __name$5(() => isArrowKeyPressedRef.current = false, "handleKeyUp");
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroupItem, {
		asChild: true,
		...rovingFocusGroupScope,
		focusable: !disabled,
		active: checked,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioTrigger, {
			...radioScope,
			...triggerProps,
			ref: composedRefs,
			onKeyDown: composeEventHandlers(triggerProps.onKeyDown, (event) => {
				if (event.key === "Enter") event.preventDefault();
			}),
			onFocus: composeEventHandlers(triggerProps.onFocus, () => {
				if (isArrowKeyPressedRef.current) ref.current?.click();
			})
		})
	});
}, "RadioGroupItemTrigger"));
var RadioGroupItem$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$5(function RadioGroupItem2(props, forwardedRef) {
	const { __scopeRadioGroup, value, disabled, ...itemProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItemProvider, {
		__scopeRadioGroup,
		value,
		disabled,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItemTrigger, {
			...itemProps,
			ref: forwardedRef,
			__scopeRadioGroup
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItemBubbleInput, { __scopeRadioGroup })] })
	});
}, "RadioGroupItem"));
var RadioGroupItemBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$5(function RadioGroupItemBubbleInput2(props, forwardedRef) {
	const { __scopeRadioGroup, ...bubbleProps } = props;
	const radioScope = useRadioScope(__scopeRadioGroup);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioBubbleInput, {
		...radioScope,
		...bubbleProps,
		ref: forwardedRef
	});
}, "RadioGroupItemBubbleInput"));
var RadioGroupIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$5(function RadioGroupIndicator2(props, forwardedRef) {
	const { __scopeRadioGroup, ...indicatorProps } = props;
	const radioScope = useRadioScope(__scopeRadioGroup);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioIndicator, {
		...radioScope,
		...indicatorProps,
		ref: forwardedRef
	});
}, "RadioGroupIndicator"));
var radioGroupVariants = cva("grid gap-2", {
	variants: { orientation: {
		horizontal: "grid-flow-col justify-start",
		vertical: "grid-flow-row"
	} },
	defaultVariants: { orientation: "vertical" }
});
var radioGroupItemVariants = cva("peer flex shrink-0 items-center justify-center rounded-full border border-border-strong bg-background text-brand outline-none transition-colors duration-[140ms] hover:border-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 aria-checked:border-brand aria-checked:bg-brand aria-checked:text-brand-foreground data-[state=checked]:border-brand data-[state=checked]:bg-brand data-[state=checked]:text-brand-foreground", {
	variants: { size: {
		sm: "size-4 [&_span]:size-1.5",
		md: "size-5 [&_span]:size-2",
		lg: "size-6 [&_span]:size-2.5"
	} },
	defaultVariants: { size: "md" }
});
function RadioGroup({ className, orientation, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
		"data-slot": "radio-group",
		"data-orientation": orientation || "vertical",
		className: cn$1(radioGroupVariants({ orientation }), className),
		...props
	});
}
RadioGroup.displayName = "RadioGroup";
var RadioGroupItem = import_react.forwardRef(({ className, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem$1, {
	ref,
	"data-slot": "radio-group-item",
	"data-size": size || "md",
	className: cn$1(radioGroupItemVariants({ size }), className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupIndicator, {
		"data-slot": "radio-group-indicator",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block rounded-full bg-current" })
	})
}));
RadioGroupItem.displayName = "RadioGroupItem";
var __defProp$4 = Object.defineProperty;
var __name$4 = (target, value) => __defProp$4(target, "name", {
	value,
	configurable: true
});
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = /* @__PURE__ */ createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function Collapsible2(props, forwardedRef) {
	const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: COLLAPSIBLE_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleProvider, {
		scope: __scopeCollapsible,
		disabled,
		contentId: useId(),
		open,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState$2(open),
			"data-disabled": disabled ? "" : void 0,
			...collapsibleProps,
			ref: forwardedRef
		})
	});
}, "Collapsible"));
var TRIGGER_NAME$3 = "CollapsibleTrigger";
var CollapsibleTrigger$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function CollapsibleTrigger2(props, forwardedRef) {
	const { __scopeCollapsible, ...triggerProps } = props;
	const context = useCollapsibleContext(TRIGGER_NAME$3, __scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-controls": context.open ? context.contentId : void 0,
		"aria-expanded": context.open || false,
		"data-state": getState$2(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		disabled: context.disabled,
		...triggerProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
}, "CollapsibleTrigger"));
var CONTENT_NAME$3 = "CollapsibleContent";
var CollapsibleContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function CollapsibleContent2(props, forwardedRef) {
	const { forceMount, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME$3, props.__scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContentImpl, {
			...contentProps,
			ref: forwardedRef,
			present
		})
	});
}, "CollapsibleContent"));
var CollapsibleContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function CollapsibleContentImpl2(props, forwardedRef) {
	const { __scopeCollapsible, present, children, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME$3, __scopeCollapsible);
	const [isPresent, setIsPresent] = import_react.useState(present);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const heightRef = import_react.useRef(0);
	const height = heightRef.current;
	const widthRef = import_react.useRef(0);
	const width = widthRef.current;
	const isOpen = context.open || isPresent;
	const isMountAnimationPreventedRef = import_react.useRef(isOpen);
	const originalStylesRef = import_react.useRef(void 0);
	import_react.useEffect(() => {
		const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
		return () => cancelAnimationFrame(rAF);
	}, []);
	useLayoutEffect2(() => {
		const node = ref.current;
		if (node) {
			originalStylesRef.current = originalStylesRef.current || {
				transitionDuration: node.style.transitionDuration,
				animationName: node.style.animationName
			};
			node.style.transitionDuration = "0s";
			node.style.animationName = "none";
			const rect = node.getBoundingClientRect();
			heightRef.current = rect.height;
			widthRef.current = rect.width;
			if (!isMountAnimationPreventedRef.current) {
				node.style.transitionDuration = originalStylesRef.current.transitionDuration;
				node.style.animationName = originalStylesRef.current.animationName;
			}
			setIsPresent(present);
		}
	}, [context.open, present]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getState$2(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		id: context.contentId,
		hidden: !isOpen,
		...contentProps,
		ref: composedRefs,
		style: {
			[`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
			[`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
			...props.style
		},
		children: isOpen && children
	});
}, "CollapsibleContentImpl"));
function getState$2(open) {
	return open ? "open" : "closed";
}
__name$4(getState$2, "getState");
function Collapsible(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collapsible$1, {
		"data-slot": "collapsible",
		...props
	});
}
var CollapsibleTrigger = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger$1, {
	ref,
	"data-slot": "collapsible-trigger",
	...props
}));
CollapsibleTrigger.displayName = "CollapsibleTrigger";
var CollapsibleContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent$1, {
	ref,
	"data-slot": "collapsible-content",
	className: cn$1("overflow-hidden data-[state=closed]:animate-[vert-fade-out_140ms_ease-out] data-[state=open]:animate-[vert-fade-in_140ms_ease-out]", className),
	...props
}));
CollapsibleContent.displayName = "CollapsibleContent";
var __defProp$3 = Object.defineProperty;
var __name$3 = (target, value) => __defProp$3(target, "name", {
	value,
	configurable: true
});
var AccordionType = {
	Single: "single",
	Multiple: "multiple"
};
var Orientation = {
	Vertical: "vertical",
	Horizontal: "horizontal"
};
var Direction = {
	LTR: "ltr",
	RTL: "rtl"
};
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = [
	"Home",
	"End",
	"ArrowDown",
	"ArrowUp",
	"ArrowLeft",
	"ArrowRight"
];
var [Collection$1, useCollection$1, createCollectionScope$1] = /* @__PURE__ */ createCollection(ACCORDION_NAME);
var [createAccordionContext, createAccordionScope] = /* @__PURE__ */ createContextScope(ACCORDION_NAME, [createCollectionScope$1, createCollapsibleScope]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function Accordion2(props, forwardedRef) {
	const { type, ...accordionProps } = props;
	const singleProps = accordionProps;
	const multipleProps = accordionProps;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$1.Provider, {
		scope: props.__scopeAccordion,
		children: type === AccordionType.Multiple ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImplMultiple, {
			...multipleProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImplSingle, {
			...singleProps,
			ref: forwardedRef
		})
	});
}, "Accordion"));
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(ACCORDION_NAME, { collapsible: false });
var AccordionImplSingle = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function AccordionImplSingle2(props, forwardedRef) {
	const { value: valueProp, defaultValue, onValueChange = /* @__PURE__ */ __name$3(() => {}, "onValueChange"), collapsible = false, ...accordionSingleProps } = props;
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange,
		caller: ACCORDION_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionValueProvider, {
		scope: props.__scopeAccordion,
		value: import_react.useMemo(() => value ? [value] : [], [value]),
		onItemOpen: setValue,
		onItemClose: import_react.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionCollapsibleProvider, {
			scope: props.__scopeAccordion,
			collapsible,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImpl, {
				...accordionSingleProps,
				ref: forwardedRef
			})
		})
	});
}, "AccordionImplSingle"));
var AccordionImplMultiple = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function AccordionImplMultiple2(props, forwardedRef) {
	const { value: valueProp, defaultValue, onValueChange = /* @__PURE__ */ __name$3(() => {}, "onValueChange"), ...accordionMultipleProps } = props;
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? [],
		onChange: onValueChange,
		caller: ACCORDION_NAME
	});
	const handleItemOpen = import_react.useCallback((itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]), [setValue]);
	const handleItemClose = import_react.useCallback((itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)), [setValue]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionValueProvider, {
		scope: props.__scopeAccordion,
		value,
		onItemOpen: handleItemOpen,
		onItemClose: handleItemClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionCollapsibleProvider, {
			scope: props.__scopeAccordion,
			collapsible: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImpl, {
				...accordionMultipleProps,
				ref: forwardedRef
			})
		})
	});
}, "AccordionImplMultiple"));
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function AccordionImpl2(props, forwardedRef) {
	const { __scopeAccordion, disabled, dir, orientation = Orientation.Vertical, ...accordionProps } = props;
	const composedRefs = useComposedRefs(import_react.useRef(null), forwardedRef);
	const getItems = useCollection$1(__scopeAccordion);
	const isDirectionLTR = useDirection(dir) === Direction.LTR;
	const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
		if (!ACCORDION_KEYS.includes(event.key)) return;
		const target = event.target;
		const triggerCollection = getItems().filter((item) => !item.ref.current?.disabled);
		const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
		const triggerCount = triggerCollection.length;
		if (triggerIndex === -1) return;
		event.preventDefault();
		let nextIndex = triggerIndex;
		const homeIndex = 0;
		const endIndex = triggerCount - 1;
		const moveNext = /* @__PURE__ */ __name$3(() => {
			nextIndex = triggerIndex + 1;
			if (nextIndex > endIndex) nextIndex = homeIndex;
		}, "moveNext");
		const movePrev = /* @__PURE__ */ __name$3(() => {
			nextIndex = triggerIndex - 1;
			if (nextIndex < homeIndex) nextIndex = endIndex;
		}, "movePrev");
		switch (event.key) {
			case "Home":
				nextIndex = homeIndex;
				break;
			case "End":
				nextIndex = endIndex;
				break;
			case "ArrowRight":
				if (orientation === Orientation.Horizontal) {
					if (isDirectionLTR) moveNext();
					else movePrev();
				}
				break;
			case "ArrowDown":
				if (orientation === Orientation.Vertical) moveNext();
				break;
			case "ArrowLeft":
				if (orientation === Orientation.Horizontal) {
					if (isDirectionLTR) movePrev();
					else moveNext();
				}
				break;
			case "ArrowUp": if (orientation === Orientation.Vertical) movePrev();
		}
		triggerCollection[nextIndex % triggerCount].ref.current?.focus();
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImplProvider, {
		scope: __scopeAccordion,
		disabled,
		direction: dir,
		orientation,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$1.Slot, {
			scope: __scopeAccordion,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				...accordionProps,
				"data-orientation": orientation,
				ref: composedRefs,
				onKeyDown: disabled ? void 0 : handleKeyDown
			})
		})
	});
}, "AccordionImpl"));
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function AccordionItem2(props, forwardedRef) {
	const { __scopeAccordion, value, ...accordionItemProps } = props;
	const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
	const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
	const collapsibleScope = useCollapsibleScope(__scopeAccordion);
	const triggerId = useId();
	const open = value && valueContext.value.includes(value) || false;
	const disabled = accordionContext.disabled || props.disabled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItemProvider, {
		scope: __scopeAccordion,
		open,
		disabled,
		triggerId,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collapsible$1, {
			"data-orientation": accordionContext.orientation,
			"data-state": getState$1(open),
			...collapsibleScope,
			...accordionItemProps,
			ref: forwardedRef,
			disabled,
			open,
			onOpenChange: (open2) => {
				if (open2) valueContext.onItemOpen(value);
				else valueContext.onItemClose(value);
			}
		})
	});
}, "AccordionItem"));
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function AccordionHeader2(props, forwardedRef) {
	const { __scopeAccordion, ...headerProps } = props;
	const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
	const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h3, {
		"data-orientation": accordionContext.orientation,
		"data-state": getState$1(itemContext.open),
		"data-disabled": itemContext.disabled ? "" : void 0,
		...headerProps,
		ref: forwardedRef
	});
}, "AccordionHeader"));
var TRIGGER_NAME$2 = "AccordionTrigger";
var AccordionTrigger$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function AccordionTrigger2(props, forwardedRef) {
	const { __scopeAccordion, ...triggerProps } = props;
	const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
	const itemContext = useAccordionItemContext(TRIGGER_NAME$2, __scopeAccordion);
	const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME$2, __scopeAccordion);
	const collapsibleScope = useCollapsibleScope(__scopeAccordion);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$1.ItemSlot, {
		scope: __scopeAccordion,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger$1, {
			"aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
			"data-orientation": accordionContext.orientation,
			id: itemContext.triggerId,
			...collapsibleScope,
			...triggerProps,
			ref: forwardedRef
		})
	});
}, "AccordionTrigger"));
var CONTENT_NAME$2 = "AccordionContent";
var AccordionContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function AccordionContent2(props, forwardedRef) {
	const { __scopeAccordion, ...contentProps } = props;
	const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
	const itemContext = useAccordionItemContext(CONTENT_NAME$2, __scopeAccordion);
	const collapsibleScope = useCollapsibleScope(__scopeAccordion);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent$1, {
		role: "region",
		"aria-labelledby": itemContext.triggerId,
		"data-orientation": accordionContext.orientation,
		...collapsibleScope,
		...contentProps,
		ref: forwardedRef,
		style: {
			"--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
			"--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
			...props.style
		}
	});
}, "AccordionContent"));
function getState$1(open) {
	return open ? "open" : "closed";
}
__name$3(getState$1, "getState");
var accordionItemVariants = cva("border-b border-border", {
	variants: { variant: {
		default: "border-b",
		bordered: "rounded-lg border border-border px-4"
	} },
	defaultVariants: { variant: "default" }
});
function Accordion({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion$1, {
		"data-slot": "accordion",
		"data-variant": variant || "default",
		className: cn$1(className),
		...props
	});
}
Accordion.displayName = "Accordion";
var AccordionItem = import_react.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	"data-slot": "accordion-item",
	className: cn$1(accordionItemVariants({ variant }), className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		"data-slot": "accordion-trigger",
		className: cn$1("flex flex-1 items-center justify-between gap-4 py-4 text-left text-sm font-medium outline-none transition-colors hover:text-foreground/80 focus-visible:ring-2 focus-visible:ring-ring [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true",
			className: "size-4 shrink-0 text-muted-foreground transition-transform duration-[200ms] ease-out",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 9 6 6 6-6" })
		})]
	})
}));
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	"data-slot": "accordion-content",
	className: cn$1("overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-[vert-fade-out_140ms_ease-out] data-[state=open]:animate-[vert-fade-in_140ms_ease-out]", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pb-4 pt-0",
		children
	})
}));
AccordionContent.displayName = "AccordionContent";
var __defProp$2 = Object.defineProperty;
var __name$2 = (target, value) => __defProp$2(target, "name", {
	value,
	configurable: true
});
var POPOVER_NAME = "Popover";
var [createPopoverContext, createPopoverScope] = /* @__PURE__ */ createContextScope(POPOVER_NAME, [createPopperScope]);
var usePopperScope$1 = createPopperScope();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover$1 = /* @__PURE__ */ __name$2((props) => {
	const { __scopePopover, children, open: openProp, defaultOpen, onOpenChange, modal = false } = props;
	const popperScope = usePopperScope$1(__scopePopover);
	const triggerRef = import_react.useRef(null);
	const [hasCustomAnchor, setHasCustomAnchor] = import_react.useState(false);
	const [titleCount, setTitleCount] = import_react.useState(0);
	const [descriptionCount, setDescriptionCount] = import_react.useState(0);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: POPOVER_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popper, {
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverProvider, {
			scope: __scopePopover,
			contentId: useId(),
			titleId: useId(),
			descriptionId: useId(),
			titlePresent: titleCount > 0,
			descriptionPresent: descriptionCount > 0,
			setTitleCount,
			setDescriptionCount,
			triggerRef,
			open,
			onOpenChange: setOpen,
			onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
			hasCustomAnchor,
			onCustomAnchorAdd: import_react.useCallback(() => setHasCustomAnchor(true), []),
			onCustomAnchorRemove: import_react.useCallback(() => setHasCustomAnchor(false), []),
			modal,
			children
		})
	});
}, "Popover");
var ANCHOR_NAME = "PopoverAnchor";
var PopoverAnchor$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function PopoverAnchor2(props, forwardedRef) {
	const { __scopePopover, ...anchorProps } = props;
	const context = usePopoverContext(ANCHOR_NAME, __scopePopover);
	const popperScope = usePopperScope$1(__scopePopover);
	const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
	import_react.useEffect(() => {
		onCustomAnchorAdd();
		return () => onCustomAnchorRemove();
	}, [onCustomAnchorAdd, onCustomAnchorRemove]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperAnchor, {
		...popperScope,
		...anchorProps,
		ref: forwardedRef
	});
}, "PopoverAnchor"));
var TRIGGER_NAME$1 = "PopoverTrigger";
var PopoverTrigger$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function PopoverTrigger2(props, forwardedRef) {
	const { __scopePopover, ...triggerProps } = props;
	const context = usePopoverContext(TRIGGER_NAME$1, __scopePopover);
	const popperScope = usePopperScope$1(__scopePopover);
	const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
	const trigger = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": context.open,
		"aria-controls": context.open ? context.contentId : void 0,
		"data-state": getState(context.open),
		...triggerProps,
		ref: composedTriggerRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
	return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperAnchor, {
		asChild: true,
		...popperScope,
		children: trigger
	});
}, "PopoverTrigger"));
var PORTAL_NAME$1 = "PopoverPortal";
var [PortalProvider$1, usePortalContext$1] = createPopoverContext(PORTAL_NAME$1, { forceMount: void 0 });
var PopoverPortal = /* @__PURE__ */ __name$2((props) => {
	const { __scopePopover, forceMount, children, container } = props;
	const context = usePopoverContext(PORTAL_NAME$1, __scopePopover);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider$1, {
		scope: __scopePopover,
		forceMount,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children
			})
		})
	});
}, "PopoverPortal");
var CONTENT_NAME$1 = "PopoverContent";
var PopoverContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function PopoverContent2(props, forwardedRef) {
	const portalContext = usePortalContext$1(CONTENT_NAME$1, props.__scopePopover);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = usePopoverContext(CONTENT_NAME$1, props.__scopePopover);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentModal, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentNonModal, {
			...contentProps,
			ref: forwardedRef
		})
	});
}, "PopoverContent"));
var Slot = /* @__PURE__ */ createSlot("PopoverContent.RemoveScroll");
var PopoverContentModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function PopoverContentModal2(props, forwardedRef) {
	const context = usePopoverContext(CONTENT_NAME$1, props.__scopePopover);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, contentRef);
	const isRightClickOutsideRef = import_react.useRef(false);
	const { nodes: branchNodes, registry: branchRegistry } = useFocusScopeBranchRegistry();
	import_react.useEffect(() => {
		const content = contentRef.current;
		if (content) return hideOthers(content);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactRemoveScroll, {
		as: Slot,
		allowPinchZoom: true,
		shards: import_react.useMemo(() => [contentRef, ...branchNodes.map((node) => ({ current: node }))], [contentRef, branchNodes]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentImpl, {
			...props,
			ref: composedRefs,
			branchNodes,
			branchRegistry,
			trapFocus: context.open,
			disableOutsidePointerEvents: true,
			onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
				event.preventDefault();
				if (!isRightClickOutsideRef.current) context.triggerRef.current?.focus();
			}),
			onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
				const originalEvent = event.detail.originalEvent;
				const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
				const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
				isRightClickOutsideRef.current = isRightClick;
			}, { checkForDefaultPrevented: false }),
			onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault(), { checkForDefaultPrevented: false })
		})
	});
}, "PopoverContentModal"));
var PopoverContentNonModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function PopoverContentNonModal2(props, forwardedRef) {
	const context = usePopoverContext(CONTENT_NAME$1, props.__scopePopover);
	const hasInteractedOutsideRef = import_react.useRef(false);
	const hasPointerDownOutsideRef = import_react.useRef(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentImpl, {
		...props,
		ref: forwardedRef,
		trapFocus: false,
		disableOutsidePointerEvents: false,
		onCloseAutoFocus: (event) => {
			props.onCloseAutoFocus?.(event);
			if (!event.defaultPrevented) {
				if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
				event.preventDefault();
			}
			hasInteractedOutsideRef.current = false;
			hasPointerDownOutsideRef.current = false;
		},
		onInteractOutside: (event) => {
			props.onInteractOutside?.(event);
			if (!event.defaultPrevented) {
				hasInteractedOutsideRef.current = true;
				if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
			}
			const target = event.target;
			if (context.triggerRef.current?.contains(target)) event.preventDefault();
			if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
		}
	});
}, "PopoverContentNonModal"));
var PopoverContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function PopoverContentImpl2(props, forwardedRef) {
	const { __scopePopover, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, "aria-describedby": ariaDescribedby, branchNodes, branchRegistry, ...contentProps } = props;
	const context = usePopoverContext(CONTENT_NAME$1, __scopePopover);
	const popperScope = usePopperScope$1(__scopePopover);
	const [contentNode, setContentNode] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, setContentNode);
	useFocusScopeBranch(contentNode);
	useFocusGuards();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScopeBranchProvider, {
		registry: branchRegistry,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
			asChild: true,
			loop: true,
			trapped: trapFocus,
			branches: branchNodes,
			onMountAutoFocus: onOpenAutoFocus,
			onUnmountAutoFocus: onCloseAutoFocus,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
				asChild: true,
				disableOutsidePointerEvents,
				onInteractOutside,
				onEscapeKeyDown,
				onPointerDownOutside,
				onFocusOutside,
				onDismiss: () => context.onOpenChange(false),
				deferPointerDownOutside: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperContent, {
					"data-state": getState(context.open),
					role: "dialog",
					id: context.contentId,
					"aria-labelledby": context.titlePresent ? context.titleId : void 0,
					"aria-describedby": context.descriptionPresent ? concatAriaDescribedby(ariaDescribedby, context.descriptionId) : ariaDescribedby,
					...popperScope,
					...contentProps,
					ref: composedRefs,
					style: {
						...contentProps.style,
						"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
						"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
						"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
						"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
						"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
					}
				})
			})
		})
	});
}, "PopoverContentImpl"));
function getState(open) {
	return open ? "open" : "closed";
}
__name$2(getState, "getState");
function concatAriaDescribedby(...values) {
	const ids = /* @__PURE__ */ new Set();
	for (const value of values) {
		if (typeof value !== "string") continue;
		for (const id of String(value).trim().split(/\s+/)) if (id) ids.add(id);
	}
	return ids.size > 0 ? Array.from(ids).join(" ") : void 0;
}
__name$2(concatAriaDescribedby, "concatAriaDescribedby");
var sideOffsetClass = {
	top: "origin-bottom",
	right: "origin-left",
	bottom: "origin-top",
	left: "origin-right"
};
function Popover(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover$1, {
		"data-slot": "popover",
		...props
	});
}
var PopoverTrigger = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger$1, {
	ref,
	"data-slot": "popover-trigger",
	...props
}));
PopoverTrigger.displayName = "PopoverTrigger";
var PopoverAnchor = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverAnchor$1, {
	ref,
	"data-slot": "popover-anchor",
	...props
}));
PopoverAnchor.displayName = "PopoverAnchor";
var PopoverContent = import_react.forwardRef(({ className, side = "bottom", align = "center", sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent$1, {
	ref,
	"data-slot": "popover-content",
	side,
	align,
	sideOffset,
	collisionPadding: 8,
	className: cn$1("z-50 w-72 rounded-lg border border-border bg-card p-4 text-foreground shadow-raised outline-none animate-[vert-pop-in_140ms_ease-out]", sideOffsetClass[side], className),
	...props
}) }));
PopoverContent.displayName = "PopoverContent";
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", {
	value,
	configurable: true
});
var PROVIDER_NAME = "ToastProvider";
var [Collection, useCollection, createCollectionScope] = /* @__PURE__ */ createCollection("Toast");
var SwipeDirection = {
	Up: "up",
	Down: "down",
	Left: "left",
	Right: "right"
};
var ToastType = {
	Foreground: "foreground",
	Background: "background"
};
var [createToastContext, createToastScope] = /* @__PURE__ */ createContextScope("Toast", [createCollectionScope]);
var [ToastProviderProvider, useToastProviderContext] = createToastContext(PROVIDER_NAME);
var ToastProvider$1 = /* @__PURE__ */ __name$1((props) => {
	const { __scopeToast, label = "Notification", duration = 5e3, swipeDirection = SwipeDirection.Right, swipeThreshold = 50, announcerContainer, children } = props;
	const [viewport, setViewport] = import_react.useState(null);
	const [toastCount, setToastCount] = import_react.useState(0);
	const isClosePausedRef = import_react.useRef(false);
	if (!label.trim()) console.error(`Invalid prop \`label\` supplied to \`${PROVIDER_NAME}\`. Expected non-empty \`string\`.`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
		scope: __scopeToast,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastProviderProvider, {
			scope: __scopeToast,
			label,
			duration,
			swipeDirection,
			swipeThreshold,
			toastCount,
			viewport,
			onViewportChange: setViewport,
			onToastAdd: import_react.useCallback(() => setToastCount((prevCount) => prevCount + 1), []),
			onToastRemove: import_react.useCallback(() => setToastCount((prevCount) => prevCount - 1), []),
			isClosePausedRef,
			announcerContainer,
			children
		})
	});
}, "ToastProvider");
var VIEWPORT_NAME = "ToastViewport";
var VIEWPORT_DEFAULT_HOTKEY = ["F8"];
var VIEWPORT_PAUSE = "toast.viewportPause";
var VIEWPORT_RESUME = "toast.viewportResume";
var ToastViewport$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function ToastViewport2(props, forwardedRef) {
	const { __scopeToast, hotkey = VIEWPORT_DEFAULT_HOTKEY, label = "Notifications ({hotkey})", ...viewportProps } = props;
	const context = useToastProviderContext(VIEWPORT_NAME, __scopeToast);
	const getItems = useCollection(__scopeToast);
	const wrapperRef = import_react.useRef(null);
	const headFocusProxyRef = import_react.useRef(null);
	const tailFocusProxyRef = import_react.useRef(null);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
	const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
	const hasToasts = context.toastCount > 0;
	import_react.useEffect(() => {
		const handleKeyDown = /* @__PURE__ */ __name$1((event) => {
			if (hotkey.length !== 0 && hotkey.every((key) => event[key] || event.code === key)) ref.current?.focus();
		}, "handleKeyDown");
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [hotkey]);
	import_react.useEffect(() => {
		const wrapper = wrapperRef.current;
		const viewport = ref.current;
		if (hasToasts && wrapper && viewport) {
			const handlePause = /* @__PURE__ */ __name$1(() => {
				if (!context.isClosePausedRef.current) {
					const pauseEvent = new CustomEvent(VIEWPORT_PAUSE);
					viewport.dispatchEvent(pauseEvent);
					context.isClosePausedRef.current = true;
				}
			}, "handlePause");
			const handleResume = /* @__PURE__ */ __name$1(() => {
				if (context.isClosePausedRef.current) {
					const resumeEvent = new CustomEvent(VIEWPORT_RESUME);
					viewport.dispatchEvent(resumeEvent);
					context.isClosePausedRef.current = false;
				}
			}, "handleResume");
			const handleFocusOutResume = /* @__PURE__ */ __name$1((event) => {
				if (!wrapper.contains(event.relatedTarget)) handleResume();
			}, "handleFocusOutResume");
			const handlePointerLeaveResume = /* @__PURE__ */ __name$1(() => {
				if (!wrapper.contains(document.activeElement)) handleResume();
			}, "handlePointerLeaveResume");
			wrapper.addEventListener("focusin", handlePause);
			wrapper.addEventListener("focusout", handleFocusOutResume);
			wrapper.addEventListener("pointermove", handlePause);
			wrapper.addEventListener("pointerleave", handlePointerLeaveResume);
			window.addEventListener("blur", handlePause);
			window.addEventListener("focus", handleResume);
			return () => {
				wrapper.removeEventListener("focusin", handlePause);
				wrapper.removeEventListener("focusout", handleFocusOutResume);
				wrapper.removeEventListener("pointermove", handlePause);
				wrapper.removeEventListener("pointerleave", handlePointerLeaveResume);
				window.removeEventListener("blur", handlePause);
				window.removeEventListener("focus", handleResume);
			};
		}
	}, [hasToasts, context.isClosePausedRef]);
	const getSortedTabbableCandidates = import_react.useCallback(({ tabbingDirection }) => {
		const tabbableCandidates = getItems().map((toastItem) => {
			const toastNode = toastItem.ref.current;
			const toastTabbableCandidates = [toastNode, ...getTabbableCandidates(toastNode)];
			return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
		});
		return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
	}, [getItems]);
	import_react.useEffect(() => {
		const viewport = ref.current;
		if (viewport) {
			const handleKeyDown = /* @__PURE__ */ __name$1((event) => {
				const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
				if (event.key === "Tab" && !isMetaKey) {
					const focusedElement = document.activeElement;
					const isTabbingBackwards = event.shiftKey;
					if (event.target === viewport && isTabbingBackwards) {
						headFocusProxyRef.current?.focus();
						return;
					}
					const sortedCandidates = getSortedTabbableCandidates({ tabbingDirection: isTabbingBackwards ? "backwards" : "forwards" });
					const index = sortedCandidates.findIndex((candidate) => candidate === focusedElement);
					if (focusFirst(sortedCandidates.slice(index + 1))) event.preventDefault();
					else isTabbingBackwards ? headFocusProxyRef.current?.focus() : tailFocusProxyRef.current?.focus();
				}
			}, "handleKeyDown");
			viewport.addEventListener("keydown", handleKeyDown);
			return () => viewport.removeEventListener("keydown", handleKeyDown);
		}
	}, [getItems, getSortedTabbableCandidates]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DismissableLayerBranch, {
		ref: wrapperRef,
		role: "region",
		"aria-label": label.replace("{hotkey}", hotkeyLabel),
		tabIndex: -1,
		style: { pointerEvents: hasToasts ? void 0 : "none" },
		children: [
			hasToasts && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusProxy, {
				ref: headFocusProxyRef,
				onFocusFromOutsideViewport: () => {
					focusFirst(getSortedTabbableCandidates({ tabbingDirection: "forwards" }));
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
				scope: __scopeToast,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.ol, {
					tabIndex: -1,
					...viewportProps,
					ref: composedRefs
				})
			}),
			hasToasts && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusProxy, {
				ref: tailFocusProxyRef,
				onFocusFromOutsideViewport: () => {
					focusFirst(getSortedTabbableCandidates({ tabbingDirection: "backwards" }));
				}
			})
		]
	});
}, "ToastViewport"));
var FOCUS_PROXY_NAME = "ToastFocusProxy";
var FocusProxy = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function ToastFocusProxy(props, forwardedRef) {
	const { __scopeToast, onFocusFromOutsideViewport, ...proxyProps } = props;
	const context = useToastProviderContext(FOCUS_PROXY_NAME, __scopeToast);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisuallyHidden, {
		tabIndex: 0,
		...proxyProps,
		ref: forwardedRef,
		style: { position: "fixed" },
		onFocus: (event) => {
			const prevFocusedElement = event.relatedTarget;
			if (!context.viewport?.contains(prevFocusedElement)) onFocusFromOutsideViewport();
		}
	});
}, "ToastFocusProxy"));
var TOAST_NAME = "Toast";
var TOAST_SWIPE_START = "toast.swipeStart";
var TOAST_SWIPE_MOVE = "toast.swipeMove";
var TOAST_SWIPE_CANCEL = "toast.swipeCancel";
var TOAST_SWIPE_END = "toast.swipeEnd";
var Toast$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function Toast2(props, forwardedRef) {
	const { forceMount, open: openProp, defaultOpen, onOpenChange, ...toastProps } = props;
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? true,
		onChange: onOpenChange,
		caller: TOAST_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastImpl, {
			open,
			...toastProps,
			ref: forwardedRef,
			onClose: () => setOpen(false),
			onPause: useCallbackRef$1(props.onPause),
			onResume: useCallbackRef$1(props.onResume),
			onSwipeStart: composeEventHandlers(props.onSwipeStart, (event) => {
				event.currentTarget.setAttribute("data-swipe", "start");
			}),
			onSwipeMove: composeEventHandlers(props.onSwipeMove, (event) => {
				const { x, y } = event.detail.delta;
				event.currentTarget.setAttribute("data-swipe", "move");
				event.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${x}px`);
				event.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${y}px`);
			}),
			onSwipeCancel: composeEventHandlers(props.onSwipeCancel, (event) => {
				event.currentTarget.setAttribute("data-swipe", "cancel");
				event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
				event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
				event.currentTarget.style.removeProperty("--radix-toast-swipe-end-x");
				event.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
			}),
			onSwipeEnd: composeEventHandlers(props.onSwipeEnd, (event) => {
				const { x, y } = event.detail.delta;
				event.currentTarget.setAttribute("data-swipe", "end");
				event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
				event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
				event.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${x}px`);
				event.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${y}px`);
				setOpen(false);
			})
		})
	});
}, "Toast"));
var [ToastInteractiveProvider, useToastInteractiveContext] = createToastContext(TOAST_NAME, { onClose() {} });
var ToastImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function ToastImpl2(props, forwardedRef) {
	const { __scopeToast, type = ToastType.Foreground, duration: durationProp, open, onClose, onEscapeKeyDown, onPause, onResume, onSwipeStart, onSwipeMove, onSwipeCancel, onSwipeEnd, ...toastProps } = props;
	const context = useToastProviderContext(TOAST_NAME, __scopeToast);
	const getItems = useCollection(__scopeToast);
	const [node, setNode] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, setNode);
	const pointerStartRef = import_react.useRef(null);
	const swipeDeltaRef = import_react.useRef(null);
	const duration = durationProp || context.duration;
	const closeTimerStartTimeRef = import_react.useRef(0);
	const closeTimerRemainingTimeRef = import_react.useRef(duration);
	const closeTimerRef = import_react.useRef(0);
	const { onToastAdd, onToastRemove } = context;
	const handleClose = useCallbackRef$1(() => {
		if (node?.contains(document.activeElement)) context.viewport?.focus();
		onClose();
	});
	const startTimer = import_react.useCallback((duration2) => {
		if (!duration2 || duration2 === Infinity) return;
		window.clearTimeout(closeTimerRef.current);
		closeTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime();
		closeTimerRef.current = window.setTimeout(handleClose, duration2);
	}, [handleClose]);
	import_react.useEffect(() => {
		const viewport = context.viewport;
		if (viewport) {
			const handleResume = /* @__PURE__ */ __name$1(() => {
				startTimer(closeTimerRemainingTimeRef.current);
				onResume?.();
			}, "handleResume");
			const handlePause = /* @__PURE__ */ __name$1(() => {
				const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef.current;
				closeTimerRemainingTimeRef.current = closeTimerRemainingTimeRef.current - elapsedTime;
				window.clearTimeout(closeTimerRef.current);
				onPause?.();
			}, "handlePause");
			viewport.addEventListener(VIEWPORT_PAUSE, handlePause);
			viewport.addEventListener(VIEWPORT_RESUME, handleResume);
			return () => {
				viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
				viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
			};
		}
	}, [
		context.viewport,
		duration,
		onPause,
		onResume,
		startTimer
	]);
	import_react.useEffect(() => {
		closeTimerRemainingTimeRef.current = duration;
		if (open && !context.isClosePausedRef.current) startTimer(duration);
	}, [
		open,
		duration,
		context.isClosePausedRef,
		startTimer
	]);
	import_react.useEffect(() => {
		return () => {
			window.clearTimeout(closeTimerRef.current);
		};
	}, []);
	import_react.useEffect(() => {
		onToastAdd();
		return () => onToastRemove();
	}, [onToastAdd, onToastRemove]);
	const announceTextContent = import_react.useMemo(() => {
		return node ? getAnnounceTextContent(node) : null;
	}, [node]);
	if (!context.viewport) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [announceTextContent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastAnnounce, {
		__scopeToast,
		role: "status",
		"aria-live": type === ToastType.Foreground ? "assertive" : "polite",
		children: announceTextContent
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastInteractiveProvider, {
		scope: __scopeToast,
		onClose: handleClose,
		children: import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
			scope: __scopeToast,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
				asChild: true,
				onEscapeKeyDown: composeEventHandlers(onEscapeKeyDown, (event) => {
					if (!getItems().some((item) => item.ref.current?.contains(event.target))) handleClose();
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.li, {
					tabIndex: 0,
					"data-state": open ? "open" : "closed",
					"data-swipe-direction": context.swipeDirection,
					...toastProps,
					ref: composedRefs,
					style: {
						userSelect: "none",
						touchAction: "none",
						...props.style
					},
					onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
						if (event.key !== "Escape") return;
						onEscapeKeyDown?.(event.nativeEvent);
						if (!event.nativeEvent.defaultPrevented) handleClose();
					}),
					onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
						if (event.button !== 0) return;
						pointerStartRef.current = {
							x: event.clientX,
							y: event.clientY
						};
					}),
					onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
						if (!pointerStartRef.current) return;
						const x = event.clientX - pointerStartRef.current.x;
						const y = event.clientY - pointerStartRef.current.y;
						const hasSwipeMoveStarted = Boolean(swipeDeltaRef.current);
						const isHorizontalSwipe = ["left", "right"].includes(context.swipeDirection);
						const clamp = ["left", "up"].includes(context.swipeDirection) ? Math.min : Math.max;
						const clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
						const clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
						const moveStartBuffer = event.pointerType === "touch" ? 10 : 2;
						const delta = {
							x: clampedX,
							y: clampedY
						};
						const eventDetail = {
							originalEvent: event,
							delta
						};
						if (hasSwipeMoveStarted) {
							swipeDeltaRef.current = delta;
							handleAndDispatchCustomEvent(TOAST_SWIPE_MOVE, onSwipeMove, eventDetail, { discrete: false });
						} else if (isDeltaInDirection(delta, context.swipeDirection, moveStartBuffer)) {
							swipeDeltaRef.current = delta;
							handleAndDispatchCustomEvent(TOAST_SWIPE_START, onSwipeStart, eventDetail, { discrete: false });
							event.target.setPointerCapture(event.pointerId);
						} else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) pointerStartRef.current = null;
					}),
					onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
						const delta = swipeDeltaRef.current;
						const target = event.target;
						if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
						swipeDeltaRef.current = null;
						pointerStartRef.current = null;
						if (delta) {
							const toast = event.currentTarget;
							const eventDetail = {
								originalEvent: event,
								delta
							};
							if (isDeltaInDirection(delta, context.swipeDirection, context.swipeThreshold)) handleAndDispatchCustomEvent(TOAST_SWIPE_END, onSwipeEnd, eventDetail, { discrete: true });
							else handleAndDispatchCustomEvent(TOAST_SWIPE_CANCEL, onSwipeCancel, eventDetail, { discrete: true });
							toast.addEventListener("click", (event2) => event2.preventDefault(), { once: true });
						}
					})
				})
			})
		}), context.viewport)
	})] });
}, "ToastImpl"));
var ToastAnnounce = /* @__PURE__ */ __name$1((props) => {
	const { __scopeToast, children, ...announceProps } = props;
	const context = useToastProviderContext(TOAST_NAME, __scopeToast);
	const [renderAnnounceText, setRenderAnnounceText] = import_react.useState(false);
	const [isAnnounced, setIsAnnounced] = import_react.useState(false);
	useNextFrame(() => setRenderAnnounceText(true));
	import_react.useEffect(() => {
		const timer = window.setTimeout(() => setIsAnnounced(true), 1e3);
		return () => window.clearTimeout(timer);
	}, []);
	return isAnnounced ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
		asChild: true,
		container: context.announcerContainer || void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisuallyHidden, {
			...announceProps,
			children: renderAnnounceText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				context.label,
				" ",
				children
			] })
		})
	});
}, "ToastAnnounce");
var ToastTitle$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function ToastTitle2(props, forwardedRef) {
	const { __scopeToast, ...titleProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...titleProps,
		ref: forwardedRef
	});
}, "ToastTitle"));
var ToastDescription$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function ToastDescription2(props, forwardedRef) {
	const { __scopeToast, ...descriptionProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...descriptionProps,
		ref: forwardedRef
	});
}, "ToastDescription"));
var ACTION_NAME = "ToastAction";
var ToastAction$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function ToastAction2(props, forwardedRef) {
	const { altText, ...actionProps } = props;
	if (!altText.trim()) {
		console.error(`Invalid prop \`altText\` supplied to \`${ACTION_NAME}\`. Expected non-empty \`string\`.`);
		return null;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastAnnounceExclude, {
		altText,
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastClose$1, {
			...actionProps,
			ref: forwardedRef
		})
	});
}, "ToastAction"));
var CLOSE_NAME = "ToastClose";
var ToastClose$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function ToastClose2(props, forwardedRef) {
	const { __scopeToast, ...closeProps } = props;
	const interactiveContext = useToastInteractiveContext(CLOSE_NAME, __scopeToast);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastAnnounceExclude, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			...closeProps,
			ref: forwardedRef,
			onClick: composeEventHandlers(props.onClick, interactiveContext.onClose)
		})
	});
}, "ToastClose"));
var ToastAnnounceExclude = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function ToastAnnounceExclude2(props, forwardedRef) {
	const { __scopeToast, altText, ...announceExcludeProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-radix-toast-announce-exclude": "",
		"data-radix-toast-announce-alt": altText || void 0,
		...announceExcludeProps,
		ref: forwardedRef
	});
}, "ToastAnnounceExclude"));
function getAnnounceTextContent(container) {
	const textContent = [];
	Array.from(container.childNodes).forEach((node) => {
		if (node.nodeType === node.TEXT_NODE && node.textContent) textContent.push(node.textContent);
		if (isHTMLElement(node)) {
			const isHidden = node.ariaHidden || node.hidden || node.style.display === "none";
			const isExcluded = node.dataset.radixToastAnnounceExclude === "";
			if (!isHidden) {
				if (isExcluded) {
					const altText = node.dataset.radixToastAnnounceAlt;
					if (altText) textContent.push(altText);
				} else textContent.push(...getAnnounceTextContent(node));
			}
		}
	});
	return textContent;
}
__name$1(getAnnounceTextContent, "getAnnounceTextContent");
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
	const currentTarget = detail.originalEvent.currentTarget;
	const event = new CustomEvent(name, {
		bubbles: true,
		cancelable: true,
		detail
	});
	if (handler) currentTarget.addEventListener(name, handler, { once: true });
	if (discrete) dispatchDiscreteCustomEvent(currentTarget, event);
	else currentTarget.dispatchEvent(event);
}
__name$1(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
var isDeltaInDirection = /* @__PURE__ */ __name$1((delta, direction, threshold = 0) => {
	const deltaX = Math.abs(delta.x);
	const deltaY = Math.abs(delta.y);
	const isDeltaX = deltaX > deltaY;
	if (direction === SwipeDirection.Left || direction === SwipeDirection.Right) return isDeltaX && deltaX > threshold;
	else return !isDeltaX && deltaY > threshold;
}, "isDeltaInDirection");
function useNextFrame(callback = () => {}) {
	const fn = useCallbackRef$1(callback);
	useLayoutEffect2(() => {
		let raf1 = 0;
		let raf2 = 0;
		raf1 = window.requestAnimationFrame(() => raf2 = window.requestAnimationFrame(fn));
		return () => {
			window.cancelAnimationFrame(raf1);
			window.cancelAnimationFrame(raf2);
		};
	}, [fn]);
}
__name$1(useNextFrame, "useNextFrame");
function isHTMLElement(node) {
	return node.nodeType === node.ELEMENT_NODE;
}
__name$1(isHTMLElement, "isHTMLElement");
function getTabbableCandidates(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ __name$1((node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
__name$1(getTabbableCandidates, "getTabbableCandidates");
function focusFirst(candidates) {
	const previouslyFocusedElement = document.activeElement;
	return candidates.some((candidate) => {
		if (candidate === previouslyFocusedElement) return true;
		candidate.focus();
		return document.activeElement !== previouslyFocusedElement;
	});
}
__name$1(focusFirst, "focusFirst");
function ToastProvider({ duration = 5e3, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastProvider$1, {
		duration,
		swipeDirection: "right",
		...props
	});
}
var toastVariants = cva("group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-lg border p-4 pr-10 text-sm shadow-raised outline-none transition-colors", {
	variants: { variant: {
		default: "border-border bg-card text-foreground",
		brand: "border-brand/40 bg-brand/10 text-brand",
		success: "border-success/40 bg-success/10 text-success",
		warning: "border-warning/40 bg-warning/10 text-warning",
		destructive: "border-destructive/40 bg-destructive/10 text-destructive [&>button]:text-destructive"
	} },
	defaultVariants: { variant: "default" }
});
var Toast = import_react.forwardRef(({ className, variant, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast$1, {
	ref,
	type: type || (variant === "destructive" ? "foreground" : void 0),
	"data-slot": "toast",
	"data-variant": variant || "default",
	className: cn$1(toastVariants({ variant }), "data-[state=open]:animate-[vert-fade-in_140ms_ease-out] data-[state=closed]:animate-[vert-fade-out_140ms_ease-out] data-[swipe=end]:animate-[vert-swipe-out_140ms_ease-out]", className),
	...props
}));
Toast.displayName = "Toast";
var ToastTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastTitle$1, {
	ref,
	"data-slot": "toast-title",
	className: cn$1("text-sm font-semibold", className),
	...props
}));
ToastTitle.displayName = "ToastTitle";
var ToastDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastDescription$1, {
	ref,
	"data-slot": "toast-description",
	className: cn$1("text-sm opacity-90", className),
	...props
}));
ToastDescription.displayName = "ToastDescription";
var ToastAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastAction$1, {
	ref,
	"data-slot": "toast-action",
	className: cn$1("inline-flex h-7 shrink-0 items-center justify-center rounded-md border border-border bg-background px-2.5 text-xs font-medium text-foreground outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring", className),
	...props
}));
ToastAction.displayName = "ToastAction";
var ToastClose = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastClose$1, {
	ref,
	"data-slot": "toast-close",
	"aria-label": "Dismiss",
	className: cn$1("absolute right-2 top-2 rounded-md p-1 text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		"aria-hidden": "true",
		className: "size-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6 6 18M6 6l12 12" })
	})
}));
ToastClose.displayName = "ToastClose";
var ToastViewport = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastViewport$1, {
	ref,
	"data-slot": "toast-viewport",
	className: cn$1("fixed inset-x-0 bottom-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 outline-none sm:inset-x-auto sm:right-4 sm:w-[calc(100%-2rem)] sm:max-w-sm", className),
	...props
}));
ToastViewport.displayName = "ToastViewport";
var U = 1;
var Y$1 = .9;
var H = .8;
var J = .17;
var p = .1;
var u = .999;
var $ = .9999;
var k$1 = .99;
var m = /[\\\/_+.#"@\[\(\{&]/;
var B$1 = /[\\\/_+.#"@\[\(\{&]/g;
var K$1 = /[\s-]/;
var X = /[\s-]/g;
function G(_, C, h, P, A, f, O) {
	if (f === C.length) return A === _.length ? U : k$1;
	var T = `${A},${f}`;
	if (O[T] !== void 0) return O[T];
	for (var L = P.charAt(f), c = h.indexOf(L, A), S = 0, E, N, R, M; c >= 0;) E = G(_, C, h, P, c + 1, f + 1, O), E > S && (c === A ? E *= U : m.test(_.charAt(c - 1)) ? (E *= H, R = _.slice(A, c - 1).match(B$1), R && A > 0 && (E *= Math.pow(u, R.length))) : K$1.test(_.charAt(c - 1)) ? (E *= Y$1, M = _.slice(A, c - 1).match(X), M && A > 0 && (E *= Math.pow(u, M.length))) : (E *= J, A > 0 && (E *= Math.pow(u, c - A))), _.charAt(c) !== C.charAt(f) && (E *= $)), (E < p && h.charAt(c - 1) === P.charAt(f + 1) || P.charAt(f + 1) === P.charAt(f) && h.charAt(c - 1) !== P.charAt(f)) && (N = G(_, C, h, P, c + 1, f + 2, O), N * p > E && (E = N * p)), E > S && (S = E), c = h.indexOf(L, c + 1);
	return O[T] = S, S;
}
function D(_) {
	return _.toLowerCase().replace(X, " ");
}
function W(_, C, h) {
	return _ = h && h.length > 0 ? `${_ + " " + h.join(" ")}` : _, G(_, C, D(_), D(C), 0, 0, {});
}
var N = "[cmdk-group=\"\"]";
var Y = "[cmdk-group-items=\"\"]";
var be = "[cmdk-group-heading=\"\"]";
var le = "[cmdk-item=\"\"]";
var ce = `${le}:not([aria-disabled="true"])`;
var Z = "cmdk-item-select";
var T = "data-value";
var Re = (r, o, n) => W(r, o, n);
var ue = import_react.createContext(void 0);
var K = () => import_react.useContext(ue);
var de = import_react.createContext(void 0);
var ee = () => import_react.useContext(de);
var fe = import_react.createContext(void 0);
var me = import_react.forwardRef((r, o) => {
	let n = L(() => {
		var e, a;
		return {
			search: "",
			value: (a = (e = r.value) != null ? e : r.defaultValue) != null ? a : "",
			selectedItemId: void 0,
			filtered: {
				count: 0,
				items: /* @__PURE__ */ new Map(),
				groups: /* @__PURE__ */ new Set()
			}
		};
	}), u = L(() => /* @__PURE__ */ new Set()), c = L(() => /* @__PURE__ */ new Map()), d = L(() => /* @__PURE__ */ new Map()), f = L(() => /* @__PURE__ */ new Set()), p = pe(r), { label: b, children: m, value: R, onValueChange: x, filter: C, shouldFilter: S, loop: A, disablePointerSelection: ge = !1, vimBindings: j = !0, ...O } = r, $ = useId(), q = useId(), _ = useId(), I = import_react.useRef(null), v = ke();
	k(() => {
		if (R !== void 0) {
			let e = R.trim();
			n.current.value = e, E.emit();
		}
	}, [R]), k(() => {
		v(6, ne);
	}, []);
	let E = import_react.useMemo(() => ({
		subscribe: (e) => (f.current.add(e), () => f.current.delete(e)),
		snapshot: () => n.current,
		setState: (e, a, s) => {
			var i, l, g, y;
			if (!Object.is(n.current[e], a)) {
				if (n.current[e] = a, e === "search") J(), z(), v(1, W);
				else if (e === "value") {
					if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
						let h = document.getElementById(_);
						h ? h.focus() : (i = document.getElementById($)) == null || i.focus();
					}
					if (v(7, () => {
						var h;
						n.current.selectedItemId = (h = M()) == null ? void 0 : h.id, E.emit();
					}), s || v(5, ne), ((l = p.current) == null ? void 0 : l.value) !== void 0) {
						let h = a != null ? a : "";
						(y = (g = p.current).onValueChange) == null || y.call(g, h);
						return;
					}
				}
				E.emit();
			}
		},
		emit: () => {
			f.current.forEach((e) => e());
		}
	}), []), U = import_react.useMemo(() => ({
		value: (e, a, s) => {
			var i;
			a !== ((i = d.current.get(e)) == null ? void 0 : i.value) && (d.current.set(e, {
				value: a,
				keywords: s
			}), n.current.filtered.items.set(e, te(a, s)), v(2, () => {
				z(), E.emit();
			}));
		},
		item: (e, a) => (u.current.add(e), a && (c.current.has(a) ? c.current.get(a).add(e) : c.current.set(a, /* @__PURE__ */ new Set([e]))), v(3, () => {
			J(), z(), n.current.value || W(), E.emit();
		}), () => {
			d.current.delete(e), u.current.delete(e), n.current.filtered.items.delete(e);
			let s = M();
			v(4, () => {
				J(), (s == null ? void 0 : s.getAttribute("id")) === e && W(), E.emit();
			});
		}),
		group: (e) => (c.current.has(e) || c.current.set(e, /* @__PURE__ */ new Set()), () => {
			d.current.delete(e), c.current.delete(e);
		}),
		filter: () => p.current.shouldFilter,
		label: b || r["aria-label"],
		getDisablePointerSelection: () => p.current.disablePointerSelection,
		listId: $,
		inputId: _,
		labelId: q,
		listInnerRef: I
	}), []);
	function te(e, a) {
		var i, l;
		let s = (l = (i = p.current) == null ? void 0 : i.filter) != null ? l : Re;
		return e ? s(e, n.current.search, a) : 0;
	}
	function z() {
		if (!n.current.search || p.current.shouldFilter === !1) return;
		let e = n.current.filtered.items, a = [];
		n.current.filtered.groups.forEach((i) => {
			let l = c.current.get(i), g = 0;
			l.forEach((y) => {
				let h = e.get(y);
				g = Math.max(h, g);
			}), a.push([i, g]);
		});
		let s = I.current;
		V().sort((i, l) => {
			var h, F;
			let g = i.getAttribute("id"), y = l.getAttribute("id");
			return ((h = e.get(y)) != null ? h : 0) - ((F = e.get(g)) != null ? F : 0);
		}).forEach((i) => {
			let l = i.closest(Y);
			l ? l.appendChild(i.parentElement === l ? i : i.closest(`${Y} > *`)) : s.appendChild(i.parentElement === s ? i : i.closest(`${Y} > *`));
		}), a.sort((i, l) => l[1] - i[1]).forEach((i) => {
			var g;
			let l = (g = I.current) == null ? void 0 : g.querySelector(`${N}[${T}="${encodeURIComponent(i[0])}"]`);
			l?.parentElement.appendChild(l);
		});
	}
	function W() {
		let e = V().find((s) => s.getAttribute("aria-disabled") !== "true"), a = e == null ? void 0 : e.getAttribute(T);
		E.setState("value", a || void 0);
	}
	function J() {
		var a, s, i, l;
		if (!n.current.search || p.current.shouldFilter === !1) {
			n.current.filtered.count = u.current.size;
			return;
		}
		n.current.filtered.groups = /* @__PURE__ */ new Set();
		let e = 0;
		for (let g of u.current) {
			let F = te((s = (a = d.current.get(g)) == null ? void 0 : a.value) != null ? s : "", (l = (i = d.current.get(g)) == null ? void 0 : i.keywords) != null ? l : []);
			n.current.filtered.items.set(g, F), F > 0 && e++;
		}
		for (let [g, y] of c.current) for (let h of y) if (n.current.filtered.items.get(h) > 0) {
			n.current.filtered.groups.add(g);
			break;
		}
		n.current.filtered.count = e;
	}
	function ne() {
		var a, s, i;
		let e = M();
		e && (((a = e.parentElement) == null ? void 0 : a.firstChild) === e && ((i = (s = e.closest(N)) == null ? void 0 : s.querySelector(be)) == null || i.scrollIntoView({ block: "nearest" })), e.scrollIntoView({ block: "nearest" }));
	}
	function M() {
		var e;
		return (e = I.current) == null ? void 0 : e.querySelector(`${le}[aria-selected="true"]`);
	}
	function V() {
		var e;
		return Array.from(((e = I.current) == null ? void 0 : e.querySelectorAll(ce)) || []);
	}
	function X(e) {
		let s = V()[e];
		s && E.setState("value", s.getAttribute(T));
	}
	function Q(e) {
		var g;
		let a = M(), s = V(), i = s.findIndex((y) => y === a), l = s[i + e];
		(g = p.current) != null && g.loop && (l = i + e < 0 ? s[s.length - 1] : i + e === s.length ? s[0] : s[i + e]), l && E.setState("value", l.getAttribute(T));
	}
	function re(e) {
		let a = M(), s = a == null ? void 0 : a.closest(N), i;
		for (; s && !i;) s = e > 0 ? we(s, N) : De(s, N), i = s == null ? void 0 : s.querySelector(ce);
		i ? E.setState("value", i.getAttribute(T)) : Q(e);
	}
	let oe = () => X(V().length - 1), ie = (e) => {
		e.preventDefault(), e.metaKey ? oe() : e.altKey ? re(1) : Q(1);
	}, se = (e) => {
		e.preventDefault(), e.metaKey ? X(0) : e.altKey ? re(-1) : Q(-1);
	};
	return import_react.createElement(Primitive.div, {
		ref: o,
		tabIndex: -1,
		...O,
		"cmdk-root": "",
		onKeyDown: (e) => {
			var s;
			(s = O.onKeyDown) == null || s.call(O, e);
			let a = e.nativeEvent.isComposing || e.keyCode === 229;
			if (!(e.defaultPrevented || a)) switch (e.key) {
				case "n":
				case "j":
					j && e.ctrlKey && ie(e);
					break;
				case "ArrowDown":
					ie(e);
					break;
				case "p":
				case "k":
					j && e.ctrlKey && se(e);
					break;
				case "ArrowUp":
					se(e);
					break;
				case "Home":
					e.preventDefault(), X(0);
					break;
				case "End":
					e.preventDefault(), oe();
					break;
				case "Enter": {
					e.preventDefault();
					let i = M();
					if (i) {
						let l = new Event(Z);
						i.dispatchEvent(l);
					}
				}
			}
		}
	}, import_react.createElement("label", {
		"cmdk-label": "",
		htmlFor: U.inputId,
		id: U.labelId,
		style: Te
	}, b), B(r, (e) => import_react.createElement(de.Provider, { value: E }, import_react.createElement(ue.Provider, { value: U }, e))));
});
var he = import_react.forwardRef((r, o) => {
	var _, I;
	let n = useId(), u = import_react.useRef(null), c = import_react.useContext(fe), d = K(), f = pe(r), p = (I = (_ = f.current) == null ? void 0 : _.forceMount) != null ? I : c == null ? void 0 : c.forceMount;
	k(() => {
		if (!p) return d.item(n, c == null ? void 0 : c.id);
	}, [p]);
	let b = ve(n, u, [
		r.value,
		r.children,
		u
	], r.keywords), m = ee(), R = P((v) => v.value && v.value === b.current), x = P((v) => p || d.filter() === !1 ? !0 : v.search ? v.filtered.items.get(n) > 0 : !0);
	import_react.useEffect(() => {
		let v = u.current;
		if (!(!v || r.disabled)) return v.addEventListener(Z, C), () => v.removeEventListener(Z, C);
	}, [
		x,
		r.onSelect,
		r.disabled
	]);
	function C() {
		var v, E;
		S(), (E = (v = f.current).onSelect) == null || E.call(v, b.current);
	}
	function S() {
		m.setState("value", b.current, !0);
	}
	if (!x) return null;
	let { disabled: A, value: ge, onSelect: j, forceMount: O, keywords: $, ...q } = r;
	return import_react.createElement(Primitive.div, {
		ref: composeRefs(u, o),
		...q,
		id: n,
		"cmdk-item": "",
		role: "option",
		"aria-disabled": !!A,
		"aria-selected": !!R,
		"data-disabled": !!A,
		"data-selected": !!R,
		onPointerMove: A || d.getDisablePointerSelection() ? void 0 : S,
		onClick: A ? void 0 : C
	}, r.children);
});
var Ee = import_react.forwardRef((r, o) => {
	let { heading: n, children: u, forceMount: c, ...d } = r, f = useId(), p = import_react.useRef(null), b = import_react.useRef(null), m = useId(), R = K(), x = P((S) => c || R.filter() === !1 ? !0 : S.search ? S.filtered.groups.has(f) : !0);
	k(() => R.group(f), []), ve(f, p, [
		r.value,
		r.heading,
		b
	]);
	let C = import_react.useMemo(() => ({
		id: f,
		forceMount: c
	}), [c]);
	return import_react.createElement(Primitive.div, {
		ref: composeRefs(p, o),
		...d,
		"cmdk-group": "",
		role: "presentation",
		hidden: x ? void 0 : !0
	}, n && import_react.createElement("div", {
		ref: b,
		"cmdk-group-heading": "",
		"aria-hidden": !0,
		id: m
	}, n), B(r, (S) => import_react.createElement("div", {
		"cmdk-group-items": "",
		role: "group",
		"aria-labelledby": n ? m : void 0
	}, import_react.createElement(fe.Provider, { value: C }, S))));
});
var ye = import_react.forwardRef((r, o) => {
	let { alwaysRender: n, ...u } = r, c = import_react.useRef(null), d = P((f) => !f.search);
	return !n && !d ? null : import_react.createElement(Primitive.div, {
		ref: composeRefs(c, o),
		...u,
		"cmdk-separator": "",
		role: "separator"
	});
});
var Se = import_react.forwardRef((r, o) => {
	let { onValueChange: n, ...u } = r, c = r.value != null, d = ee(), f = P((m) => m.search), p = P((m) => m.selectedItemId), b = K();
	return import_react.useEffect(() => {
		r.value != null && d.setState("search", r.value);
	}, [r.value]), import_react.createElement(Primitive.input, {
		ref: o,
		...u,
		"cmdk-input": "",
		autoComplete: "off",
		autoCorrect: "off",
		spellCheck: !1,
		"aria-autocomplete": "list",
		role: "combobox",
		"aria-expanded": !0,
		"aria-controls": b.listId,
		"aria-labelledby": b.labelId,
		"aria-activedescendant": p,
		id: b.inputId,
		type: "text",
		value: c ? r.value : f,
		onChange: (m) => {
			c || d.setState("search", m.target.value), n?.(m.target.value);
		}
	});
});
var Ce = import_react.forwardRef((r, o) => {
	let { children: n, label: u = "Suggestions", ...c } = r, d = import_react.useRef(null), f = import_react.useRef(null), p = P((m) => m.selectedItemId), b = K();
	return import_react.useEffect(() => {
		if (f.current && d.current) {
			let m = f.current, R = d.current, x, C = new ResizeObserver(() => {
				x = requestAnimationFrame(() => {
					let S = m.offsetHeight;
					R.style.setProperty("--cmdk-list-height", S.toFixed(1) + "px");
				});
			});
			return C.observe(m), () => {
				cancelAnimationFrame(x), C.unobserve(m);
			};
		}
	}, []), import_react.createElement(Primitive.div, {
		ref: composeRefs(d, o),
		...c,
		"cmdk-list": "",
		role: "listbox",
		tabIndex: -1,
		"aria-activedescendant": p,
		"aria-label": u,
		id: b.listId
	}, B(r, (m) => import_react.createElement("div", {
		ref: composeRefs(f, b.listInnerRef),
		"cmdk-list-sizer": ""
	}, m)));
});
var xe = import_react.forwardRef((r, o) => {
	let { open: n, onOpenChange: u, overlayClassName: c, contentClassName: d, container: f, ...p } = r;
	return import_react.createElement(Dialog$1, {
		open: n,
		onOpenChange: u
	}, import_react.createElement(DialogPortal$1, { container: f }, import_react.createElement(DialogOverlay$1, {
		"cmdk-overlay": "",
		className: c
	}), import_react.createElement(DialogContent$1, {
		"aria-label": r.label,
		"cmdk-dialog": "",
		className: d
	}, import_react.createElement(me, {
		ref: o,
		...p
	}))));
});
var Ie = import_react.forwardRef((r, o) => P((u) => u.filtered.count === 0) ? import_react.createElement(Primitive.div, {
	ref: o,
	...r,
	"cmdk-empty": "",
	role: "presentation"
}) : null);
var Pe = import_react.forwardRef((r, o) => {
	let { progress: n, children: u, label: c = "Loading...", ...d } = r;
	return import_react.createElement(Primitive.div, {
		ref: o,
		...d,
		"cmdk-loading": "",
		role: "progressbar",
		"aria-valuenow": n,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-label": c
	}, B(r, (f) => import_react.createElement("div", { "aria-hidden": !0 }, f)));
});
var _e = Object.assign(me, {
	List: Ce,
	Item: he,
	Input: Se,
	Group: Ee,
	Separator: ye,
	Dialog: xe,
	Empty: Ie,
	Loading: Pe
});
function we(r, o) {
	let n = r.nextElementSibling;
	for (; n;) {
		if (n.matches(o)) return n;
		n = n.nextElementSibling;
	}
}
function De(r, o) {
	let n = r.previousElementSibling;
	for (; n;) {
		if (n.matches(o)) return n;
		n = n.previousElementSibling;
	}
}
function pe(r) {
	let o = import_react.useRef(r);
	return k(() => {
		o.current = r;
	}), o;
}
var k = typeof window == "undefined" ? import_react.useEffect : import_react.useLayoutEffect;
function L(r) {
	let o = import_react.useRef();
	return o.current === void 0 && (o.current = r()), o;
}
function P(r) {
	let o = ee(), n = () => r(o.snapshot());
	return import_react.useSyncExternalStore(o.subscribe, n, n);
}
function ve(r, o, n, u = []) {
	let c = import_react.useRef(), d = K();
	return k(() => {
		var b;
		let f = (() => {
			var m;
			for (let R of n) {
				if (typeof R == "string") return R.trim();
				if (typeof R == "object" && "current" in R) return R.current ? (m = R.current.textContent) == null ? void 0 : m.trim() : c.current;
			}
		})(), p = u.map((m) => m.trim());
		d.value(r, f, p), (b = o.current) == null || b.setAttribute(T, f), c.current = f;
	}), c;
}
var ke = () => {
	let [r, o] = import_react.useState(), n = L(() => /* @__PURE__ */ new Map());
	return k(() => {
		n.current.forEach((u) => u()), n.current = /* @__PURE__ */ new Map();
	}, [r]), (u, c) => {
		n.current.set(u, c), o({});
	};
};
function Me(r) {
	let o = r.type;
	return typeof o == "function" ? o(r.props) : "render" in o ? o.render(r.props) : r;
}
function B({ asChild: r, children: o }, n) {
	return r && import_react.isValidElement(o) ? import_react.cloneElement(Me(o), { ref: o.ref }, n(o.props.children)) : n(o);
}
var Te = {
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: "0",
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	borderWidth: "0"
};
var Command = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e, {
	ref,
	"data-slot": "command",
	className: cn$1("flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm", className),
	...props
}));
Command.displayName = "Command";
var CommandInput = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	"data-slot": "command-input-wrapper",
	className: "flex items-center gap-2 border-b border-border px-3",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		"data-slot": "command-input-icon",
		"aria-hidden": "true",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: "size-4 shrink-0 text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "11",
			cy: "11",
			r: "8"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m21 21-4.3-4.3" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
		ref,
		"data-slot": "command-input",
		className: cn$1("flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	})]
}));
CommandInput.displayName = "CommandInput";
var CommandList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.List, {
	ref,
	"data-slot": "command-list",
	className: cn$1("max-h-[320px] overflow-y-auto overflow-x-hidden scroll-py-2 p-2", className),
	...props
}));
CommandList.displayName = "CommandList";
var CommandEmpty = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
	ref,
	"data-slot": "command-empty",
	className: "py-6 text-center text-sm text-muted-foreground",
	...props
}));
CommandEmpty.displayName = "CommandEmpty";
var CommandGroup = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
	ref,
	"data-slot": "command-group",
	className: cn$1("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
	...props
}));
CommandGroup.displayName = "CommandGroup";
var CommandSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Separator, {
	ref,
	"data-slot": "command-separator",
	className: cn$1("-mx-1 my-1 h-px bg-border", className),
	...props
}));
CommandSeparator.displayName = "CommandSeparator";
var CommandItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
	ref,
	"data-slot": "command-item",
	className: cn$1("relative flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-brand-soft data-[selected=true]:text-brand-soft-foreground data-[disabled=true]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground", className),
	...props
}));
CommandItem.displayName = "CommandItem";
var CommandShortcut = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	ref,
	"data-slot": "command-shortcut",
	className: cn$1("ml-auto text-xs tracking-widest text-muted-foreground", className),
	...props
}));
CommandShortcut.displayName = "CommandShortcut";
/**
* CommandDialog — full-screen command palette shell.
*
* Wraps Dialog + Command. The dialog title is visually hidden so the palette
* is announced; pass `title` a short label ("Command menu").
*/
function CommandDialog({ children, title = "Command menu", className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			hideClose: true,
			className: cn$1("overflow-hidden p-0 gap-0", className),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "sr-only",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command, {
				className: "[&_[data-slot='command-input-wrapper']]:h-12",
				children
			})]
		})
	});
}
CommandDialog.displayName = "CommandDialog";
function isObject$1(subject) {
	return Object.prototype.toString.call(subject) === "[object Object]";
}
function isRecord(subject) {
	return isObject$1(subject) || Array.isArray(subject);
}
function canUseDOM() {
	return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function areOptionsEqual(optionsA, optionsB) {
	const optionsAKeys = Object.keys(optionsA);
	const optionsBKeys = Object.keys(optionsB);
	if (optionsAKeys.length !== optionsBKeys.length) return false;
	if (JSON.stringify(Object.keys(optionsA.breakpoints || {})) !== JSON.stringify(Object.keys(optionsB.breakpoints || {}))) return false;
	return optionsAKeys.every((key) => {
		const valueA = optionsA[key];
		const valueB = optionsB[key];
		if (typeof valueA === "function") return `${valueA}` === `${valueB}`;
		if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
		return areOptionsEqual(valueA, valueB);
	});
}
function sortAndMapPluginToOptions(plugins) {
	return plugins.concat().sort((a, b) => a.name > b.name ? 1 : -1).map((plugin) => plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
	if (pluginsA.length !== pluginsB.length) return false;
	const optionsA = sortAndMapPluginToOptions(pluginsA);
	const optionsB = sortAndMapPluginToOptions(pluginsB);
	return optionsA.every((optionA, index) => {
		const optionB = optionsB[index];
		return areOptionsEqual(optionA, optionB);
	});
}
function isNumber(subject) {
	return typeof subject === "number";
}
function isString(subject) {
	return typeof subject === "string";
}
function isBoolean(subject) {
	return typeof subject === "boolean";
}
function isObject(subject) {
	return Object.prototype.toString.call(subject) === "[object Object]";
}
function mathAbs(n) {
	return Math.abs(n);
}
function mathSign(n) {
	return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
	return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
	if (valueB === 0 || valueA === 0) return 0;
	if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
	return mathAbs(deltaAbs(mathAbs(valueB), mathAbs(valueA)) / valueB);
}
function roundToTwoDecimals(num) {
	return Math.round(num * 100) / 100;
}
function arrayKeys(array) {
	return objectKeys(array).map(Number);
}
function arrayLast(array) {
	return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
	return Math.max(0, array.length - 1);
}
function arrayIsLastIndex(array, index) {
	return index === arrayLastIndex(array);
}
function arrayFromNumber(n, startAt = 0) {
	return Array.from(Array(n), (_, i) => startAt + i);
}
function objectKeys(object) {
	return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
	return [objectA, objectB].reduce((mergedObjects, currentObject) => {
		objectKeys(currentObject).forEach((key) => {
			const valueA = mergedObjects[key];
			const valueB = currentObject[key];
			mergedObjects[key] = isObject(valueA) && isObject(valueB) ? objectsMergeDeep(valueA, valueB) : valueB;
		});
		return mergedObjects;
	}, {});
}
function isMouseEvent(evt, ownerWindow) {
	return typeof ownerWindow.MouseEvent !== "undefined" && evt instanceof ownerWindow.MouseEvent;
}
function Alignment(align, viewSize) {
	const predefined = {
		start,
		center,
		end
	};
	function start() {
		return 0;
	}
	function center(n) {
		return end(n) / 2;
	}
	function end(n) {
		return viewSize - n;
	}
	function measure(n, index) {
		if (isString(align)) return predefined[align](n);
		return align(viewSize, n, index);
	}
	return { measure };
}
function EventStore() {
	let listeners = [];
	function add(node, type, handler, options = { passive: true }) {
		let removeListener;
		if ("addEventListener" in node) {
			node.addEventListener(type, handler, options);
			removeListener = () => node.removeEventListener(type, handler, options);
		} else {
			const legacyMediaQueryList = node;
			legacyMediaQueryList.addListener(handler);
			removeListener = () => legacyMediaQueryList.removeListener(handler);
		}
		listeners.push(removeListener);
		return self;
	}
	function clear() {
		listeners = listeners.filter((remove) => remove());
	}
	const self = {
		add,
		clear
	};
	return self;
}
function Animations(ownerDocument, ownerWindow, update, render) {
	const documentVisibleHandler = EventStore();
	const fixedTimeStep = 1e3 / 60;
	let lastTimeStamp = null;
	let accumulatedTime = 0;
	let animationId = 0;
	function init() {
		documentVisibleHandler.add(ownerDocument, "visibilitychange", () => {
			if (ownerDocument.hidden) reset();
		});
	}
	function destroy() {
		stop();
		documentVisibleHandler.clear();
	}
	function animate(timeStamp) {
		if (!animationId) return;
		if (!lastTimeStamp) {
			lastTimeStamp = timeStamp;
			update();
			update();
		}
		const timeElapsed = timeStamp - lastTimeStamp;
		lastTimeStamp = timeStamp;
		accumulatedTime += timeElapsed;
		while (accumulatedTime >= fixedTimeStep) {
			update();
			accumulatedTime -= fixedTimeStep;
		}
		render(accumulatedTime / fixedTimeStep);
		if (animationId) animationId = ownerWindow.requestAnimationFrame(animate);
	}
	function start() {
		if (animationId) return;
		animationId = ownerWindow.requestAnimationFrame(animate);
	}
	function stop() {
		ownerWindow.cancelAnimationFrame(animationId);
		lastTimeStamp = null;
		accumulatedTime = 0;
		animationId = 0;
	}
	function reset() {
		lastTimeStamp = null;
		accumulatedTime = 0;
	}
	return {
		init,
		destroy,
		start,
		stop,
		update,
		render
	};
}
function Axis(axis, contentDirection) {
	const isRightToLeft = contentDirection === "rtl";
	const isVertical = axis === "y";
	const scroll = isVertical ? "y" : "x";
	const cross = isVertical ? "x" : "y";
	const sign = !isVertical && isRightToLeft ? -1 : 1;
	const startEdge = getStartEdge();
	const endEdge = getEndEdge();
	function measureSize(nodeRect) {
		const { height, width } = nodeRect;
		return isVertical ? height : width;
	}
	function getStartEdge() {
		if (isVertical) return "top";
		return isRightToLeft ? "right" : "left";
	}
	function getEndEdge() {
		if (isVertical) return "bottom";
		return isRightToLeft ? "left" : "right";
	}
	function direction(n) {
		return n * sign;
	}
	return {
		scroll,
		cross,
		startEdge,
		endEdge,
		measureSize,
		direction
	};
}
function Limit(min = 0, max = 0) {
	const length = mathAbs(min - max);
	function reachedMin(n) {
		return n < min;
	}
	function reachedMax(n) {
		return n > max;
	}
	function reachedAny(n) {
		return reachedMin(n) || reachedMax(n);
	}
	function constrain(n) {
		if (!reachedAny(n)) return n;
		return reachedMin(n) ? min : max;
	}
	function removeOffset(n) {
		if (!length) return n;
		return n - length * Math.ceil((n - max) / length);
	}
	return {
		length,
		max,
		min,
		constrain,
		reachedAny,
		reachedMax,
		reachedMin,
		removeOffset
	};
}
function Counter(max, start, loop) {
	const { constrain } = Limit(0, max);
	const loopEnd = max + 1;
	let counter = withinLimit(start);
	function withinLimit(n) {
		return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
	}
	function get() {
		return counter;
	}
	function set(n) {
		counter = withinLimit(n);
		return self;
	}
	function add(n) {
		return clone().set(get() + n);
	}
	function clone() {
		return Counter(max, get(), loop);
	}
	const self = {
		get,
		set,
		add,
		clone
	};
	return self;
}
function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
	const { cross: crossAxis, direction } = axis;
	const focusNodes = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	];
	const nonPassiveEvent = { passive: false };
	const initEvents = EventStore();
	const dragEvents = EventStore();
	const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
	const snapForceBoost = {
		mouse: 300,
		touch: 400
	};
	const freeForceBoost = {
		mouse: 500,
		touch: 600
	};
	const baseSpeed = dragFree ? 43 : 25;
	let isMoving = false;
	let startScroll = 0;
	let startCross = 0;
	let pointerIsDown = false;
	let preventScroll = false;
	let preventClick = false;
	let isMouse = false;
	function init(emblaApi) {
		if (!watchDrag) return;
		function downIfAllowed(evt) {
			if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
		}
		const node = rootNode;
		initEvents.add(node, "dragstart", (evt) => evt.preventDefault(), nonPassiveEvent).add(node, "touchmove", () => void 0, nonPassiveEvent).add(node, "touchend", () => void 0).add(node, "touchstart", downIfAllowed).add(node, "mousedown", downIfAllowed).add(node, "touchcancel", up).add(node, "contextmenu", up).add(node, "click", click, true);
	}
	function destroy() {
		initEvents.clear();
		dragEvents.clear();
	}
	function addDragEvents() {
		const node = isMouse ? ownerDocument : rootNode;
		dragEvents.add(node, "touchmove", move, nonPassiveEvent).add(node, "touchend", up).add(node, "mousemove", move, nonPassiveEvent).add(node, "mouseup", up);
	}
	function isFocusNode(node) {
		const nodeName = node.nodeName || "";
		return focusNodes.includes(nodeName);
	}
	function forceBoost() {
		return (dragFree ? freeForceBoost : snapForceBoost)[isMouse ? "mouse" : "touch"];
	}
	function allowedForce(force, targetChanged) {
		const next = index.add(mathSign(force) * -1);
		const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
		if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
		if (skipSnaps && targetChanged) return baseForce * .5;
		return scrollTarget.byIndex(next.get(), 0).distance;
	}
	function down(evt) {
		const isMouseEvt = isMouseEvent(evt, ownerWindow);
		isMouse = isMouseEvt;
		preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
		isMoving = deltaAbs(target.get(), location.get()) >= 2;
		if (isMouseEvt && evt.button !== 0) return;
		if (isFocusNode(evt.target)) return;
		pointerIsDown = true;
		dragTracker.pointerDown(evt);
		scrollBody.useFriction(0).useDuration(0);
		target.set(location);
		addDragEvents();
		startScroll = dragTracker.readPoint(evt);
		startCross = dragTracker.readPoint(evt, crossAxis);
		eventHandler.emit("pointerDown");
	}
	function move(evt) {
		if (!isMouseEvent(evt, ownerWindow) && evt.touches.length >= 2) return up(evt);
		const lastScroll = dragTracker.readPoint(evt);
		const lastCross = dragTracker.readPoint(evt, crossAxis);
		const diffScroll = deltaAbs(lastScroll, startScroll);
		const diffCross = deltaAbs(lastCross, startCross);
		if (!preventScroll && !isMouse) {
			if (!evt.cancelable) return up(evt);
			preventScroll = diffScroll > diffCross;
			if (!preventScroll) return up(evt);
		}
		const diff = dragTracker.pointerMove(evt);
		if (diffScroll > dragThreshold) preventClick = true;
		scrollBody.useFriction(.3).useDuration(.75);
		animation.start();
		target.add(direction(diff));
		evt.preventDefault();
	}
	function up(evt) {
		const targetChanged = scrollTarget.byDistance(0, false).index !== index.get();
		const rawForce = dragTracker.pointerUp(evt) * forceBoost();
		const force = allowedForce(direction(rawForce), targetChanged);
		const forceFactor = factorAbs(rawForce, force);
		const speed = baseSpeed - 10 * forceFactor;
		const friction = baseFriction + forceFactor / 50;
		preventScroll = false;
		pointerIsDown = false;
		dragEvents.clear();
		scrollBody.useDuration(speed).useFriction(friction);
		scrollTo.distance(force, !dragFree);
		isMouse = false;
		eventHandler.emit("pointerUp");
	}
	function click(evt) {
		if (preventClick) {
			evt.stopPropagation();
			evt.preventDefault();
			preventClick = false;
		}
	}
	function pointerDown() {
		return pointerIsDown;
	}
	return {
		init,
		destroy,
		pointerDown
	};
}
function DragTracker(axis, ownerWindow) {
	const logInterval = 170;
	let startEvent;
	let lastEvent;
	function readTime(evt) {
		return evt.timeStamp;
	}
	function readPoint(evt, evtAxis) {
		const coord = `client${(evtAxis || axis.scroll) === "x" ? "X" : "Y"}`;
		return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
	}
	function pointerDown(evt) {
		startEvent = evt;
		lastEvent = evt;
		return readPoint(evt);
	}
	function pointerMove(evt) {
		const diff = readPoint(evt) - readPoint(lastEvent);
		const expired = readTime(evt) - readTime(startEvent) > logInterval;
		lastEvent = evt;
		if (expired) startEvent = evt;
		return diff;
	}
	function pointerUp(evt) {
		if (!startEvent || !lastEvent) return 0;
		const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
		const diffTime = readTime(evt) - readTime(startEvent);
		const expired = readTime(evt) - readTime(lastEvent) > logInterval;
		const force = diffDrag / diffTime;
		return diffTime && !expired && mathAbs(force) > .1 ? force : 0;
	}
	return {
		pointerDown,
		pointerMove,
		pointerUp,
		readPoint
	};
}
function NodeRects() {
	function measure(node) {
		const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = node;
		return {
			top: offsetTop,
			right: offsetLeft + offsetWidth,
			bottom: offsetTop + offsetHeight,
			left: offsetLeft,
			width: offsetWidth,
			height: offsetHeight
		};
	}
	return { measure };
}
function PercentOfView(viewSize) {
	function measure(n) {
		return viewSize * (n / 100);
	}
	return { measure };
}
function ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
	const observeNodes = [container].concat(slides);
	let resizeObserver;
	let containerSize;
	let slideSizes = [];
	let destroyed = false;
	function readSize(node) {
		return axis.measureSize(nodeRects.measure(node));
	}
	function init(emblaApi) {
		if (!watchResize) return;
		containerSize = readSize(container);
		slideSizes = slides.map(readSize);
		function defaultCallback(entries) {
			for (const entry of entries) {
				if (destroyed) return;
				const isContainer = entry.target === container;
				const slideIndex = slides.indexOf(entry.target);
				const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
				if (mathAbs(readSize(isContainer ? container : slides[slideIndex]) - lastSize) >= .5) {
					emblaApi.reInit();
					eventHandler.emit("resize");
					break;
				}
			}
		}
		resizeObserver = new ResizeObserver((entries) => {
			if (isBoolean(watchResize) || watchResize(emblaApi, entries)) defaultCallback(entries);
		});
		ownerWindow.requestAnimationFrame(() => {
			observeNodes.forEach((node) => resizeObserver.observe(node));
		});
	}
	function destroy() {
		destroyed = true;
		if (resizeObserver) resizeObserver.disconnect();
	}
	return {
		init,
		destroy
	};
}
function ScrollBody(location, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
	let scrollVelocity = 0;
	let scrollDirection = 0;
	let scrollDuration = baseDuration;
	let scrollFriction = baseFriction;
	let rawLocation = location.get();
	let rawLocationPrevious = 0;
	function seek() {
		const displacement = target.get() - location.get();
		const isInstant = !scrollDuration;
		let scrollDistance = 0;
		if (isInstant) {
			scrollVelocity = 0;
			previousLocation.set(target);
			location.set(target);
			scrollDistance = displacement;
		} else {
			previousLocation.set(location);
			scrollVelocity += displacement / scrollDuration;
			scrollVelocity *= scrollFriction;
			rawLocation += scrollVelocity;
			location.add(scrollVelocity);
			scrollDistance = rawLocation - rawLocationPrevious;
		}
		scrollDirection = mathSign(scrollDistance);
		rawLocationPrevious = rawLocation;
		return self;
	}
	function settled() {
		return mathAbs(target.get() - offsetLocation.get()) < .001;
	}
	function duration() {
		return scrollDuration;
	}
	function direction() {
		return scrollDirection;
	}
	function velocity() {
		return scrollVelocity;
	}
	function useBaseDuration() {
		return useDuration(baseDuration);
	}
	function useBaseFriction() {
		return useFriction(baseFriction);
	}
	function useDuration(n) {
		scrollDuration = n;
		return self;
	}
	function useFriction(n) {
		scrollFriction = n;
		return self;
	}
	const self = {
		direction,
		duration,
		velocity,
		seek,
		settled,
		useBaseFriction,
		useBaseDuration,
		useFriction,
		useDuration
	};
	return self;
}
function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
	const pullBackThreshold = percentOfView.measure(10);
	const edgeOffsetTolerance = percentOfView.measure(50);
	const frictionLimit = Limit(.1, .99);
	let disabled = false;
	function shouldConstrain() {
		if (disabled) return false;
		if (!limit.reachedAny(target.get())) return false;
		if (!limit.reachedAny(location.get())) return false;
		return true;
	}
	function constrain(pointerDown) {
		if (!shouldConstrain()) return;
		const diffToEdge = mathAbs(limit[limit.reachedMin(location.get()) ? "min" : "max"] - location.get());
		const diffToTarget = target.get() - location.get();
		const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
		target.subtract(diffToTarget * friction);
		if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
			target.set(limit.constrain(target.get()));
			scrollBody.useDuration(25).useBaseFriction();
		}
	}
	function toggleActive(active) {
		disabled = !active;
	}
	return {
		shouldConstrain,
		constrain,
		toggleActive
	};
}
function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
	const scrollBounds = Limit(-contentSize + viewSize, 0);
	const snapsBounded = measureBounded();
	const scrollContainLimit = findScrollContainLimit();
	const snapsContained = measureContained();
	function usePixelTolerance(bound, snap) {
		return deltaAbs(bound, snap) <= 1;
	}
	function findScrollContainLimit() {
		const startSnap = snapsBounded[0];
		const endSnap = arrayLast(snapsBounded);
		return Limit(snapsBounded.lastIndexOf(startSnap), snapsBounded.indexOf(endSnap) + 1);
	}
	function measureBounded() {
		return snapsAligned.map((snapAligned, index) => {
			const { min, max } = scrollBounds;
			const snap = scrollBounds.constrain(snapAligned);
			const isFirst = !index;
			const isLast = arrayIsLastIndex(snapsAligned, index);
			if (isFirst) return max;
			if (isLast) return min;
			if (usePixelTolerance(min, snap)) return min;
			if (usePixelTolerance(max, snap)) return max;
			return snap;
		}).map((scrollBound) => parseFloat(scrollBound.toFixed(3)));
	}
	function measureContained() {
		if (contentSize <= viewSize + pixelTolerance) return [scrollBounds.max];
		if (containScroll === "keepSnaps") return snapsBounded;
		const { min, max } = scrollContainLimit;
		return snapsBounded.slice(min, max);
	}
	return {
		snapsContained,
		scrollContainLimit
	};
}
function ScrollLimit(contentSize, scrollSnaps, loop) {
	const max = scrollSnaps[0];
	return { limit: Limit(loop ? max - contentSize : arrayLast(scrollSnaps), max) };
}
function ScrollLooper(contentSize, limit, location, vectors) {
	const jointSafety = .1;
	const { reachedMin, reachedMax } = Limit(limit.min + jointSafety, limit.max + jointSafety);
	function shouldLoop(direction) {
		if (direction === 1) return reachedMax(location.get());
		if (direction === -1) return reachedMin(location.get());
		return false;
	}
	function loop(direction) {
		if (!shouldLoop(direction)) return;
		const loopDistance = contentSize * (direction * -1);
		vectors.forEach((v) => v.add(loopDistance));
	}
	return { loop };
}
function ScrollProgress(limit) {
	const { max, length } = limit;
	function get(n) {
		const currentLocation = n - max;
		return length ? currentLocation / -length : 0;
	}
	return { get };
}
function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
	const { startEdge, endEdge } = axis;
	const { groupSlides } = slidesToScroll;
	const alignments = measureSizes().map(alignment.measure);
	const snaps = measureUnaligned();
	const snapsAligned = measureAligned();
	function measureSizes() {
		return groupSlides(slideRects).map((rects) => arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
	}
	function measureUnaligned() {
		return slideRects.map((rect) => containerRect[startEdge] - rect[startEdge]).map((snap) => -mathAbs(snap));
	}
	function measureAligned() {
		return groupSlides(snaps).map((g) => g[0]).map((snap, index) => snap + alignments[index]);
	}
	return {
		snaps,
		snapsAligned
	};
}
function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
	const { groupSlides } = slidesToScroll;
	const { min, max } = scrollContainLimit;
	const slideRegistry = createSlideRegistry();
	function createSlideRegistry() {
		const groupedSlideIndexes = groupSlides(slideIndexes);
		const doNotContain = !containSnaps || containScroll === "keepSnaps";
		if (scrollSnaps.length === 1) return [slideIndexes];
		if (doNotContain) return groupedSlideIndexes;
		return groupedSlideIndexes.slice(min, max).map((group, index, groups) => {
			const isFirst = !index;
			const isLast = arrayIsLastIndex(groups, index);
			if (isFirst) return arrayFromNumber(arrayLast(groups[0]) + 1);
			if (isLast) return arrayFromNumber(arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1, arrayLast(groups)[0]);
			return group;
		});
	}
	return { slideRegistry };
}
function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
	const { reachedAny, removeOffset, constrain } = limit;
	function minDistance(distances) {
		return distances.concat().sort((a, b) => mathAbs(a) - mathAbs(b))[0];
	}
	function findTargetSnap(target) {
		const distance = loop ? removeOffset(target) : constrain(target);
		const { index } = scrollSnaps.map((snap, index) => ({
			diff: shortcut(snap - distance, 0),
			index
		})).sort((d1, d2) => mathAbs(d1.diff) - mathAbs(d2.diff))[0];
		return {
			index,
			distance
		};
	}
	function shortcut(target, direction) {
		const targets = [
			target,
			target + contentSize,
			target - contentSize
		];
		if (!loop) return target;
		if (!direction) return minDistance(targets);
		const matchingTargets = targets.filter((t) => mathSign(t) === direction);
		if (matchingTargets.length) return minDistance(matchingTargets);
		return arrayLast(targets) - contentSize;
	}
	function byIndex(index, direction) {
		return {
			index,
			distance: shortcut(scrollSnaps[index] - targetVector.get(), direction)
		};
	}
	function byDistance(distance, snap) {
		const target = targetVector.get() + distance;
		const { index, distance: targetSnapDistance } = findTargetSnap(target);
		const reachedBound = !loop && reachedAny(target);
		if (!snap || reachedBound) return {
			index,
			distance
		};
		return {
			index,
			distance: distance + shortcut(scrollSnaps[index] - targetSnapDistance, 0)
		};
	}
	return {
		byDistance,
		byIndex,
		shortcut
	};
}
function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
	function scrollTo(target) {
		const distanceDiff = target.distance;
		const indexDiff = target.index !== indexCurrent.get();
		targetVector.add(distanceDiff);
		if (distanceDiff) {
			if (scrollBody.duration()) animation.start();
			else {
				animation.update();
				animation.render(1);
				animation.update();
			}
		}
		if (indexDiff) {
			indexPrevious.set(indexCurrent.get());
			indexCurrent.set(target.index);
			eventHandler.emit("select");
		}
	}
	function distance(n, snap) {
		scrollTo(scrollTarget.byDistance(n, snap));
	}
	function index(n, direction) {
		const targetIndex = indexCurrent.clone().set(n);
		scrollTo(scrollTarget.byIndex(targetIndex.get(), direction));
	}
	return {
		distance,
		index
	};
}
function SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
	const focusListenerOptions = {
		passive: true,
		capture: true
	};
	let lastTabPressTime = 0;
	function init(emblaApi) {
		if (!watchFocus) return;
		function defaultCallback(index) {
			if ((/* @__PURE__ */ new Date()).getTime() - lastTabPressTime > 10) return;
			eventHandler.emit("slideFocusStart");
			root.scrollLeft = 0;
			const group = slideRegistry.findIndex((group) => group.includes(index));
			if (!isNumber(group)) return;
			scrollBody.useDuration(0);
			scrollTo.index(group, 0);
			eventHandler.emit("slideFocus");
		}
		eventStore.add(document, "keydown", registerTabPress, false);
		slides.forEach((slide, slideIndex) => {
			eventStore.add(slide, "focus", (evt) => {
				if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) defaultCallback(slideIndex);
			}, focusListenerOptions);
		});
	}
	function registerTabPress(event) {
		if (event.code === "Tab") lastTabPressTime = (/* @__PURE__ */ new Date()).getTime();
	}
	return { init };
}
function Vector1D(initialValue) {
	let value = initialValue;
	function get() {
		return value;
	}
	function set(n) {
		value = normalizeInput(n);
	}
	function add(n) {
		value += normalizeInput(n);
	}
	function subtract(n) {
		value -= normalizeInput(n);
	}
	function normalizeInput(n) {
		return isNumber(n) ? n : n.get();
	}
	return {
		get,
		set,
		add,
		subtract
	};
}
function Translate(axis, container) {
	const translate = axis.scroll === "x" ? x : y;
	const containerStyle = container.style;
	let previousTarget = null;
	let disabled = false;
	function x(n) {
		return `translate3d(${n}px,0px,0px)`;
	}
	function y(n) {
		return `translate3d(0px,${n}px,0px)`;
	}
	function to(target) {
		if (disabled) return;
		const newTarget = roundToTwoDecimals(axis.direction(target));
		if (newTarget === previousTarget) return;
		containerStyle.transform = translate(newTarget);
		previousTarget = newTarget;
	}
	function toggleActive(active) {
		disabled = !active;
	}
	function clear() {
		if (disabled) return;
		containerStyle.transform = "";
		if (!container.getAttribute("style")) container.removeAttribute("style");
	}
	return {
		clear,
		to,
		toggleActive
	};
}
function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location, slides) {
	const roundingSafety = .5;
	const ascItems = arrayKeys(slideSizesWithGaps);
	const descItems = arrayKeys(slideSizesWithGaps).reverse();
	const loopPoints = startPoints().concat(endPoints());
	function removeSlideSizes(indexes, from) {
		return indexes.reduce((a, i) => {
			return a - slideSizesWithGaps[i];
		}, from);
	}
	function slidesInGap(indexes, gap) {
		return indexes.reduce((a, i) => {
			return removeSlideSizes(a, gap) > 0 ? a.concat([i]) : a;
		}, []);
	}
	function findSlideBounds(offset) {
		return snaps.map((snap, index) => ({
			start: snap - slideSizes[index] + roundingSafety + offset,
			end: snap + viewSize - roundingSafety + offset
		}));
	}
	function findLoopPoints(indexes, offset, isEndEdge) {
		const slideBounds = findSlideBounds(offset);
		return indexes.map((index) => {
			const initial = isEndEdge ? 0 : -contentSize;
			const altered = isEndEdge ? contentSize : 0;
			const boundEdge = isEndEdge ? "end" : "start";
			const loopPoint = slideBounds[index][boundEdge];
			return {
				index,
				loopPoint,
				slideLocation: Vector1D(-1),
				translate: Translate(axis, slides[index]),
				target: () => location.get() > loopPoint ? initial : altered
			};
		});
	}
	function startPoints() {
		const gap = scrollSnaps[0];
		return findLoopPoints(slidesInGap(descItems, gap), contentSize, false);
	}
	function endPoints() {
		const gap = viewSize - scrollSnaps[0] - 1;
		return findLoopPoints(slidesInGap(ascItems, gap), -contentSize, true);
	}
	function canLoop() {
		return loopPoints.every(({ index }) => {
			return removeSlideSizes(ascItems.filter((i) => i !== index), viewSize) <= .1;
		});
	}
	function loop() {
		loopPoints.forEach((loopPoint) => {
			const { target, translate, slideLocation } = loopPoint;
			const shiftLocation = target();
			if (shiftLocation === slideLocation.get()) return;
			translate.to(shiftLocation);
			slideLocation.set(shiftLocation);
		});
	}
	function clear() {
		loopPoints.forEach((loopPoint) => loopPoint.translate.clear());
	}
	return {
		canLoop,
		clear,
		loop,
		loopPoints
	};
}
function SlidesHandler(container, eventHandler, watchSlides) {
	let mutationObserver;
	let destroyed = false;
	function init(emblaApi) {
		if (!watchSlides) return;
		function defaultCallback(mutations) {
			for (const mutation of mutations) if (mutation.type === "childList") {
				emblaApi.reInit();
				eventHandler.emit("slidesChanged");
				break;
			}
		}
		mutationObserver = new MutationObserver((mutations) => {
			if (destroyed) return;
			if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) defaultCallback(mutations);
		});
		mutationObserver.observe(container, { childList: true });
	}
	function destroy() {
		if (mutationObserver) mutationObserver.disconnect();
		destroyed = true;
	}
	return {
		init,
		destroy
	};
}
function SlidesInView(container, slides, eventHandler, threshold) {
	const intersectionEntryMap = {};
	let inViewCache = null;
	let notInViewCache = null;
	let intersectionObserver;
	let destroyed = false;
	function init() {
		intersectionObserver = new IntersectionObserver((entries) => {
			if (destroyed) return;
			entries.forEach((entry) => {
				const index = slides.indexOf(entry.target);
				intersectionEntryMap[index] = entry;
			});
			inViewCache = null;
			notInViewCache = null;
			eventHandler.emit("slidesInView");
		}, {
			root: container.parentElement,
			threshold
		});
		slides.forEach((slide) => intersectionObserver.observe(slide));
	}
	function destroy() {
		if (intersectionObserver) intersectionObserver.disconnect();
		destroyed = true;
	}
	function createInViewList(inView) {
		return objectKeys(intersectionEntryMap).reduce((list, slideIndex) => {
			const index = parseInt(slideIndex);
			const { isIntersecting } = intersectionEntryMap[index];
			if (inView && isIntersecting || !inView && !isIntersecting) list.push(index);
			return list;
		}, []);
	}
	function get(inView = true) {
		if (inView && inViewCache) return inViewCache;
		if (!inView && notInViewCache) return notInViewCache;
		const slideIndexes = createInViewList(inView);
		if (inView) inViewCache = slideIndexes;
		if (!inView) notInViewCache = slideIndexes;
		return slideIndexes;
	}
	return {
		init,
		destroy,
		get
	};
}
function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
	const { measureSize, startEdge, endEdge } = axis;
	const withEdgeGap = slideRects[0] && readEdgeGap;
	const startGap = measureStartGap();
	const endGap = measureEndGap();
	const slideSizes = slideRects.map(measureSize);
	const slideSizesWithGaps = measureWithGaps();
	function measureStartGap() {
		if (!withEdgeGap) return 0;
		const slideRect = slideRects[0];
		return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
	}
	function measureEndGap() {
		if (!withEdgeGap) return 0;
		const style = ownerWindow.getComputedStyle(arrayLast(slides));
		return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
	}
	function measureWithGaps() {
		return slideRects.map((rect, index, rects) => {
			const isFirst = !index;
			const isLast = arrayIsLastIndex(rects, index);
			if (isFirst) return slideSizes[index] + startGap;
			if (isLast) return slideSizes[index] + endGap;
			return rects[index + 1][startEdge] - rect[startEdge];
		}).map(mathAbs);
	}
	return {
		slideSizes,
		slideSizesWithGaps,
		startGap,
		endGap
	};
}
function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
	const { startEdge, endEdge, direction } = axis;
	const groupByNumber = isNumber(slidesToScroll);
	function byNumber(array, groupSize) {
		return arrayKeys(array).filter((i) => i % groupSize === 0).map((i) => array.slice(i, i + groupSize));
	}
	function bySize(array) {
		if (!array.length) return [];
		return arrayKeys(array).reduce((groups, rectB, index) => {
			const rectA = arrayLast(groups) || 0;
			const isFirst = rectA === 0;
			const isLast = rectB === arrayLastIndex(array);
			const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
			const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
			const gapA = !loop && isFirst ? direction(startGap) : 0;
			const chunkSize = mathAbs(edgeB - (!loop && isLast ? direction(endGap) : 0) - (edgeA + gapA));
			if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
			if (isLast) groups.push(array.length);
			return groups;
		}, []).map((currentSize, index, groups) => {
			const previousSize = Math.max(groups[index - 1] || 0);
			return array.slice(previousSize, currentSize);
		});
	}
	function groupSlides(array) {
		return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
	}
	return { groupSlides };
}
function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler) {
	const { align, axis: scrollAxis, direction, startIndex, loop, duration, dragFree, dragThreshold, inViewThreshold, slidesToScroll: groupSlides, skipSnaps, containScroll, watchResize, watchSlides, watchDrag, watchFocus } = options;
	const pixelTolerance = 2;
	const nodeRects = NodeRects();
	const containerRect = nodeRects.measure(container);
	const slideRects = slides.map(nodeRects.measure);
	const axis = Axis(scrollAxis, direction);
	const viewSize = axis.measureSize(containerRect);
	const percentOfView = PercentOfView(viewSize);
	const alignment = Alignment(align, viewSize);
	const containSnaps = !loop && !!containScroll;
	const { slideSizes, slideSizesWithGaps, startGap, endGap } = SlideSizes(axis, containerRect, slideRects, slides, loop || !!containScroll, ownerWindow);
	const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
	const { snaps, snapsAligned } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
	const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
	const { snapsContained, scrollContainLimit } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
	const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
	const { limit } = ScrollLimit(contentSize, scrollSnaps, loop);
	const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
	const indexPrevious = index.clone();
	const slideIndexes = arrayKeys(slides);
	const update = ({ dragHandler, scrollBody, scrollBounds, options: { loop } }) => {
		if (!loop) scrollBounds.constrain(dragHandler.pointerDown());
		scrollBody.seek();
	};
	const render = ({ scrollBody, translate, location, offsetLocation, previousLocation, scrollLooper, slideLooper, dragHandler, animation, eventHandler, scrollBounds, options: { loop } }, alpha) => {
		const shouldSettle = scrollBody.settled();
		const withinBounds = !scrollBounds.shouldConstrain();
		const hasSettled = loop ? shouldSettle : shouldSettle && withinBounds;
		const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
		if (hasSettledAndIdle) animation.stop();
		const interpolatedLocation = location.get() * alpha + previousLocation.get() * (1 - alpha);
		offsetLocation.set(interpolatedLocation);
		if (loop) {
			scrollLooper.loop(scrollBody.direction());
			slideLooper.loop();
		}
		translate.to(offsetLocation.get());
		if (hasSettledAndIdle) eventHandler.emit("settle");
		if (!hasSettled) eventHandler.emit("scroll");
	};
	const animation = Animations(ownerDocument, ownerWindow, () => update(engine), (alpha) => render(engine, alpha));
	const friction = .68;
	const startLocation = scrollSnaps[index.get()];
	const location = Vector1D(startLocation);
	const previousLocation = Vector1D(startLocation);
	const offsetLocation = Vector1D(startLocation);
	const target = Vector1D(startLocation);
	const scrollBody = ScrollBody(location, offsetLocation, previousLocation, target, duration, friction);
	const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
	const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
	const scrollProgress = ScrollProgress(limit);
	const eventStore = EventStore();
	const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
	const { slideRegistry } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
	const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
	const engine = {
		ownerDocument,
		ownerWindow,
		eventHandler,
		containerRect,
		slideRects,
		animation,
		axis,
		dragHandler: DragHandler(axis, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
		eventStore,
		percentOfView,
		index,
		indexPrevious,
		limit,
		location,
		offsetLocation,
		previousLocation,
		options,
		resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
		scrollBody,
		scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
		scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [
			location,
			offsetLocation,
			previousLocation,
			target
		]),
		scrollProgress,
		scrollSnapList: scrollSnaps.map(scrollProgress.get),
		scrollSnaps,
		scrollTarget,
		scrollTo,
		slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
		slideFocus,
		slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
		slidesInView,
		slideIndexes,
		slideRegistry,
		slidesToScroll,
		target,
		translate: Translate(axis, container)
	};
	return engine;
}
function EventHandler() {
	let listeners = {};
	let api;
	function init(emblaApi) {
		api = emblaApi;
	}
	function getListeners(evt) {
		return listeners[evt] || [];
	}
	function emit(evt) {
		getListeners(evt).forEach((e) => e(api, evt));
		return self;
	}
	function on(evt, cb) {
		listeners[evt] = getListeners(evt).concat([cb]);
		return self;
	}
	function off(evt, cb) {
		listeners[evt] = getListeners(evt).filter((e) => e !== cb);
		return self;
	}
	function clear() {
		listeners = {};
	}
	const self = {
		init,
		emit,
		off,
		on,
		clear
	};
	return self;
}
var defaultOptions = {
	align: "center",
	axis: "x",
	container: null,
	slides: null,
	containScroll: "trimSnaps",
	direction: "ltr",
	slidesToScroll: 1,
	inViewThreshold: 0,
	breakpoints: {},
	dragFree: false,
	dragThreshold: 10,
	loop: false,
	skipSnaps: false,
	duration: 25,
	startIndex: 0,
	active: true,
	watchDrag: true,
	watchResize: true,
	watchSlides: true,
	watchFocus: true
};
function OptionsHandler(ownerWindow) {
	function mergeOptions(optionsA, optionsB) {
		return objectsMergeDeep(optionsA, optionsB || {});
	}
	function optionsAtMedia(options) {
		const optionsAtMedia = options.breakpoints || {};
		return mergeOptions(options, objectKeys(optionsAtMedia).filter((media) => ownerWindow.matchMedia(media).matches).map((media) => optionsAtMedia[media]).reduce((a, mediaOption) => mergeOptions(a, mediaOption), {}));
	}
	function optionsMediaQueries(optionsList) {
		return optionsList.map((options) => objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries) => acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
	}
	return {
		mergeOptions,
		optionsAtMedia,
		optionsMediaQueries
	};
}
function PluginsHandler(optionsHandler) {
	let activePlugins = [];
	function init(emblaApi, plugins) {
		activePlugins = plugins.filter(({ options }) => optionsHandler.optionsAtMedia(options).active !== false);
		activePlugins.forEach((plugin) => plugin.init(emblaApi, optionsHandler));
		return plugins.reduce((map, plugin) => Object.assign(map, { [plugin.name]: plugin }), {});
	}
	function destroy() {
		activePlugins = activePlugins.filter((plugin) => plugin.destroy());
	}
	return {
		init,
		destroy
	};
}
function EmblaCarousel(root, userOptions, userPlugins) {
	const ownerDocument = root.ownerDocument;
	const ownerWindow = ownerDocument.defaultView;
	const optionsHandler = OptionsHandler(ownerWindow);
	const pluginsHandler = PluginsHandler(optionsHandler);
	const mediaHandlers = EventStore();
	const eventHandler = EventHandler();
	const { mergeOptions, optionsAtMedia, optionsMediaQueries } = optionsHandler;
	const { on, off, emit } = eventHandler;
	const reInit = reActivate;
	let destroyed = false;
	let engine;
	let optionsBase = mergeOptions(defaultOptions, EmblaCarousel.globalOptions);
	let options = mergeOptions(optionsBase);
	let pluginList = [];
	let pluginApis;
	let container;
	let slides;
	function storeElements() {
		const { container: userContainer, slides: userSlides } = options;
		container = (isString(userContainer) ? root.querySelector(userContainer) : userContainer) || root.children[0];
		const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
		slides = [].slice.call(customSlides || container.children);
	}
	function createEngine(options) {
		const engine = Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler);
		if (options.loop && !engine.slideLooper.canLoop()) return createEngine(Object.assign({}, options, { loop: false }));
		return engine;
	}
	function activate(withOptions, withPlugins) {
		if (destroyed) return;
		optionsBase = mergeOptions(optionsBase, withOptions);
		options = optionsAtMedia(optionsBase);
		pluginList = withPlugins || pluginList;
		storeElements();
		engine = createEngine(options);
		optionsMediaQueries([optionsBase, ...pluginList.map(({ options }) => options)]).forEach((query) => mediaHandlers.add(query, "change", reActivate));
		if (!options.active) return;
		engine.translate.to(engine.location.get());
		engine.animation.init();
		engine.slidesInView.init();
		engine.slideFocus.init(self);
		engine.eventHandler.init(self);
		engine.resizeHandler.init(self);
		engine.slidesHandler.init(self);
		if (engine.options.loop) engine.slideLooper.loop();
		if (container.offsetParent && slides.length) engine.dragHandler.init(self);
		pluginApis = pluginsHandler.init(self, pluginList);
	}
	function reActivate(withOptions, withPlugins) {
		const startIndex = selectedScrollSnap();
		deActivate();
		activate(mergeOptions({ startIndex }, withOptions), withPlugins);
		eventHandler.emit("reInit");
	}
	function deActivate() {
		engine.dragHandler.destroy();
		engine.eventStore.clear();
		engine.translate.clear();
		engine.slideLooper.clear();
		engine.resizeHandler.destroy();
		engine.slidesHandler.destroy();
		engine.slidesInView.destroy();
		engine.animation.destroy();
		pluginsHandler.destroy();
		mediaHandlers.clear();
	}
	function destroy() {
		if (destroyed) return;
		destroyed = true;
		mediaHandlers.clear();
		deActivate();
		eventHandler.emit("destroy");
		eventHandler.clear();
	}
	function scrollTo(index, jump, direction) {
		if (!options.active || destroyed) return;
		engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
		engine.scrollTo.index(index, direction || 0);
	}
	function scrollNext(jump) {
		scrollTo(engine.index.add(1).get(), jump, -1);
	}
	function scrollPrev(jump) {
		scrollTo(engine.index.add(-1).get(), jump, 1);
	}
	function canScrollNext() {
		return engine.index.add(1).get() !== selectedScrollSnap();
	}
	function canScrollPrev() {
		return engine.index.add(-1).get() !== selectedScrollSnap();
	}
	function scrollSnapList() {
		return engine.scrollSnapList;
	}
	function scrollProgress() {
		return engine.scrollProgress.get(engine.offsetLocation.get());
	}
	function selectedScrollSnap() {
		return engine.index.get();
	}
	function previousScrollSnap() {
		return engine.indexPrevious.get();
	}
	function slidesInView() {
		return engine.slidesInView.get();
	}
	function slidesNotInView() {
		return engine.slidesInView.get(false);
	}
	function plugins() {
		return pluginApis;
	}
	function internalEngine() {
		return engine;
	}
	function rootNode() {
		return root;
	}
	function containerNode() {
		return container;
	}
	function slideNodes() {
		return slides;
	}
	const self = {
		canScrollNext,
		canScrollPrev,
		containerNode,
		internalEngine,
		destroy,
		off,
		on,
		emit,
		plugins,
		previousScrollSnap,
		reInit,
		rootNode,
		scrollNext,
		scrollPrev,
		scrollProgress,
		scrollSnapList,
		scrollTo,
		selectedScrollSnap,
		slideNodes,
		slidesInView,
		slidesNotInView
	};
	activate(userOptions, userPlugins);
	setTimeout(() => eventHandler.emit("init"), 0);
	return self;
}
EmblaCarousel.globalOptions = void 0;
function useEmblaCarousel(options = {}, plugins = []) {
	const storedOptions = (0, import_react.useRef)(options);
	const storedPlugins = (0, import_react.useRef)(plugins);
	const [emblaApi, setEmblaApi] = (0, import_react.useState)();
	const [viewport, setViewport] = (0, import_react.useState)();
	const reInit = (0, import_react.useCallback)(() => {
		if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);
	}, [emblaApi]);
	(0, import_react.useEffect)(() => {
		if (areOptionsEqual(storedOptions.current, options)) return;
		storedOptions.current = options;
		reInit();
	}, [options, reInit]);
	(0, import_react.useEffect)(() => {
		if (arePluginsEqual(storedPlugins.current, plugins)) return;
		storedPlugins.current = plugins;
		reInit();
	}, [plugins, reInit]);
	(0, import_react.useEffect)(() => {
		if (canUseDOM() && viewport) {
			EmblaCarousel.globalOptions = useEmblaCarousel.globalOptions;
			const newEmblaApi = EmblaCarousel(viewport, storedOptions.current, storedPlugins.current);
			setEmblaApi(newEmblaApi);
			return () => newEmblaApi.destroy();
		} else setEmblaApi(void 0);
	}, [viewport, setEmblaApi]);
	return [setViewport, emblaApi];
}
useEmblaCarousel.globalOptions = void 0;
/**
* Carousel — scroll-snap slider built on embla-carousel.
*
* State lives in the `Carousel` root; buttons, dots and any custom part read
* it through context. Slides are whatever children you pass — wrap each in a
* `min-w-0 flex-[0_0_100%]` (horizontal) or `h-full` (vertical) element.
*
* The root is an accessible region (`role="region"`,
* `aria-roledescription="carousel"`) — give it an `aria-label`. When there is
* more than one slide the viewport is focusable and supports arrow keys plus
* Home/End, and a polite status region announces each change.
*/
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const ctx = import_react.useContext(CarouselContext);
	if (!ctx) throw new Error("useCarousel must be used inside <Carousel>");
	return ctx;
}
function usePrefersReducedMotion() {
	return import_react.useSyncExternalStore((onChange) => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		mediaQuery.addEventListener("change", onChange);
		return () => mediaQuery.removeEventListener("change", onChange);
	}, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => false);
}
function isEditableTarget(target) {
	if (!(target instanceof HTMLElement)) return false;
	return Boolean(target.closest("input, textarea, select, [contenteditable=\"true\"]"));
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", loop = false, slidesToScroll = 1, defaultSlide = 0, onSlideChange, dragFree = false, hideButtons = false, footer, className, children, ...props }, ref) => {
	const prefersReducedMotion = usePrefersReducedMotion();
	const [emblaRef, emblaApi] = useEmblaCarousel(import_react.useMemo(() => ({
		axis: orientation === "horizontal" ? "x" : "y",
		loop,
		align: "start",
		startIndex: defaultSlide,
		slidesToScroll,
		dragFree,
		...prefersReducedMotion ? { duration: 0 } : null
	}), [
		orientation,
		loop,
		defaultSlide,
		slidesToScroll,
		dragFree,
		prefersReducedMotion
	]));
	const [canPrev, setCanPrev] = import_react.useState(false);
	const [canNext, setCanNext] = import_react.useState(true);
	const [index, setIndex] = import_react.useState(defaultSlide);
	const childCount = import_react.Children.count(children);
	const [slideCount, setSlideCount] = import_react.useState(childCount);
	const onSelect = import_react.useCallback(() => {
		if (!emblaApi) return;
		const selected = emblaApi.selectedScrollSnap();
		setCanPrev(emblaApi.canScrollPrev());
		setCanNext(emblaApi.canScrollNext());
		setIndex(selected);
		onSlideChange?.(selected);
	}, [emblaApi, onSlideChange]);
	import_react.useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);
		return () => {
			emblaApi.off("select", onSelect);
			emblaApi.off("reInit", onSelect);
		};
	}, [emblaApi, onSelect]);
	import_react.useEffect(() => {
		if (!emblaApi) return;
		const syncCount = () => setSlideCount(emblaApi.slideNodes().length || childCount);
		syncCount();
		emblaApi.on("reInit", syncCount);
		return () => {
			emblaApi.off("reInit", syncCount);
		};
	}, [emblaApi, childCount]);
	const scrollPrev = import_react.useCallback(() => {
		emblaApi?.scrollPrev();
	}, [emblaApi]);
	const scrollNext = import_react.useCallback(() => {
		emblaApi?.scrollNext();
	}, [emblaApi]);
	const scrollTo = import_react.useCallback((nextIndex, jump) => {
		emblaApi?.scrollTo(nextIndex, jump);
	}, [emblaApi]);
	const ctx = import_react.useMemo(() => ({
		api: emblaApi,
		orientation,
		index,
		count: slideCount,
		canPrev,
		canNext,
		scrollPrev,
		scrollNext,
		scrollTo
	}), [
		emblaApi,
		orientation,
		index,
		slideCount,
		canPrev,
		canNext,
		scrollPrev,
		scrollNext,
		scrollTo
	]);
	const isHorizontal = orientation === "horizontal";
	const onKeyDown = import_react.useCallback((event) => {
		if (event.metaKey || event.ctrlKey || event.altKey) return;
		if (isEditableTarget(event.target)) return;
		const forwardKey = isHorizontal ? "ArrowRight" : "ArrowDown";
		const backwardKey = isHorizontal ? "ArrowLeft" : "ArrowUp";
		if (event.key === forwardKey) {
			event.preventDefault();
			scrollNext();
		} else if (event.key === backwardKey) {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "Home") {
			event.preventDefault();
			scrollTo(0, true);
		} else if (event.key === "End") {
			event.preventDefault();
			scrollTo(slideCount - 1, true);
		}
	}, [
		isHorizontal,
		scrollNext,
		scrollPrev,
		scrollTo,
		slideCount
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: ctx,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			role: "region",
			"aria-roledescription": "carousel",
			"data-slot": "carousel",
			"data-orientation": orientation,
			className: cn$1("relative", className),
			...props,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: emblaRef,
					"data-slot": "carousel-viewport",
					tabIndex: slideCount > 1 ? 0 : void 0,
					onKeyDown,
					className: cn$1("overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", isHorizontal ? "w-full" : "h-full w-full"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-slot": "carousel-container",
						className: cn$1("flex touch-pan-y touch-pinch-zoom", isHorizontal ? "-ml-4" : "-mt-4 h-full flex-col"),
						children
					})
				}),
				hideButtons ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, {})] }),
				footer,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "carousel-status",
					role: "status",
					"aria-live": "polite",
					className: "sr-only",
					children: `Slide ${index + 1} of ${slideCount}`
				})
			]
		})
	});
});
Carousel.displayName = "Carousel";
var slideClassName = "min-w-0 flex-[0_0_100%] pl-4 pt-4";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	role: "group",
	"aria-roledescription": "slide",
	"data-slot": "carousel-item",
	className: cn$1(slideClassName, className),
	...props
}));
CarouselItem.displayName = "CarouselItem";
var buttonClassName = "absolute flex size-10 items-center justify-center rounded-full border border-border/70 bg-card/85 text-foreground shadow-soft backdrop-blur-md transition duration-[140ms] hover:border-border hover:bg-accent hover:text-accent-foreground hover:shadow-raised focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-40";
function carouselIcon(className) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: cn$1("size-4", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15 18-6-6 6-6" })
	});
}
var CarouselPrevious = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation, canPrev, scrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		type: "button",
		"data-slot": "carousel-previous",
		"aria-label": "Previous slide",
		disabled: !canPrev,
		onClick: scrollPrev,
		className: cn$1(buttonClassName, orientation === "horizontal" ? "left-3 top-1/2 -translate-y-1/2" : "left-1/2 top-3 -translate-x-1/2", className),
		...props,
		children: carouselIcon()
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation, canNext, scrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		type: "button",
		"data-slot": "carousel-next",
		"aria-label": "Next slide",
		disabled: !canNext,
		onClick: scrollNext,
		className: cn$1(buttonClassName, orientation === "horizontal" ? "right-3 top-1/2 -translate-y-1/2" : "bottom-3 left-1/2 -translate-x-1/2", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			"aria-hidden": "true",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			className: "size-4 rotate-180",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15 18-6-6 6-6" })
		})
	});
});
CarouselNext.displayName = "CarouselNext";
/** One button per slide — labelled for assistive tech, aria-current on the active dot. */
function CarouselDots({ className, ...props }) {
	const { count, index, scrollTo } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "carousel-dots",
		className: cn$1("flex items-center justify-center gap-1", className),
		...props,
		children: Array.from({ length: count }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"data-slot": "carousel-dot",
			"data-active": i === index ? "true" : void 0,
			"aria-label": `Go to slide ${i + 1}`,
			"aria-current": i === index ? "true" : void 0,
			onClick: () => scrollTo(i),
			className: "flex size-6 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: cn$1("size-2 rounded-full bg-border transition-colors", i === index && "bg-primary")
			})
		}, i))
	});
}
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var originalBodyUserSelect;
var HOVERCARD_NAME = "HoverCard";
var [createHoverCardContext, createHoverCardScope] = /* @__PURE__ */ createContextScope(HOVERCARD_NAME, [createPopperScope]);
var usePopperScope = createPopperScope();
var [HoverCardProvider, useHoverCardContext] = createHoverCardContext(HOVERCARD_NAME);
var HoverCard$1 = /* @__PURE__ */ __name((props) => {
	const { __scopeHoverCard, children, open: openProp, defaultOpen, onOpenChange, openDelay = 700, closeDelay = 300 } = props;
	const popperScope = usePopperScope(__scopeHoverCard);
	const openTimerRef = import_react.useRef(0);
	const closeTimerRef = import_react.useRef(0);
	const hasSelectionRef = import_react.useRef(false);
	const isPointerDownOnContentRef = import_react.useRef(false);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: HOVERCARD_NAME
	});
	const handleOpen = import_react.useCallback(() => {
		clearTimeout(closeTimerRef.current);
		openTimerRef.current = window.setTimeout(() => setOpen(true), openDelay);
	}, [openDelay, setOpen]);
	const handleClose = import_react.useCallback(() => {
		clearTimeout(openTimerRef.current);
		if (!hasSelectionRef.current && !isPointerDownOnContentRef.current) closeTimerRef.current = window.setTimeout(() => setOpen(false), closeDelay);
	}, [closeDelay, setOpen]);
	const handleDismiss = import_react.useCallback(() => setOpen(false), [setOpen]);
	import_react.useEffect(() => {
		return () => {
			clearTimeout(openTimerRef.current);
			clearTimeout(closeTimerRef.current);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardProvider, {
		scope: __scopeHoverCard,
		open,
		onOpenChange: setOpen,
		onOpen: handleOpen,
		onClose: handleClose,
		onDismiss: handleDismiss,
		hasSelectionRef,
		isPointerDownOnContentRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popper, {
			...popperScope,
			children
		})
	});
}, "HoverCard");
var TRIGGER_NAME = "HoverCardTrigger";
var HoverCardTrigger$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function HoverCardTrigger2(props, forwardedRef) {
	const { __scopeHoverCard, ...triggerProps } = props;
	const context = useHoverCardContext(TRIGGER_NAME, __scopeHoverCard);
	const popperScope = usePopperScope(__scopeHoverCard);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperAnchor, {
		asChild: true,
		...popperScope,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.a, {
			"data-state": context.open ? "open" : "closed",
			...triggerProps,
			ref: forwardedRef,
			onPointerEnter: composeEventHandlers(props.onPointerEnter, excludeTouch(context.onOpen)),
			onPointerLeave: composeEventHandlers(props.onPointerLeave, excludeTouch(context.onClose)),
			onFocus: composeEventHandlers(props.onFocus, context.onOpen),
			onBlur: composeEventHandlers(props.onBlur, context.onClose),
			onTouchStart: composeEventHandlers(props.onTouchStart, (event) => event.preventDefault())
		})
	});
}, "HoverCardTrigger"));
var PORTAL_NAME = "HoverCardPortal";
var [PortalProvider, usePortalContext] = createHoverCardContext(PORTAL_NAME, { forceMount: void 0 });
var HoverCardPortal = /* @__PURE__ */ __name((props) => {
	const { __scopeHoverCard, forceMount, children, container } = props;
	const context = useHoverCardContext(PORTAL_NAME, __scopeHoverCard);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: __scopeHoverCard,
		forceMount,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children
			})
		})
	});
}, "HoverCardPortal");
var CONTENT_NAME = "HoverCardContent";
var HoverCardContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function HoverCardContent2(props, forwardedRef) {
	const portalContext = usePortalContext(CONTENT_NAME, props.__scopeHoverCard);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useHoverCardContext(CONTENT_NAME, props.__scopeHoverCard);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardContentImpl, {
			"data-state": context.open ? "open" : "closed",
			...contentProps,
			onPointerEnter: composeEventHandlers(props.onPointerEnter, excludeTouch(context.onOpen)),
			onPointerLeave: composeEventHandlers(props.onPointerLeave, excludeTouch(context.onClose)),
			ref: forwardedRef
		})
	});
}, "HoverCardContent"));
var HoverCardContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function HoverCardContentImpl2(props, forwardedRef) {
	const { __scopeHoverCard, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
	const context = useHoverCardContext(CONTENT_NAME, __scopeHoverCard);
	const popperScope = usePopperScope(__scopeHoverCard);
	const ref = import_react.useRef(null);
	const [branchNode, setBranchNode] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, ref, setBranchNode);
	useFocusScopeBranch(branchNode);
	const [containSelection, setContainSelection] = import_react.useState(false);
	import_react.useEffect(() => {
		if (containSelection) {
			const body = document.body;
			originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
			body.style.userSelect = "none";
			body.style.webkitUserSelect = "none";
			return () => {
				body.style.userSelect = originalBodyUserSelect;
				body.style.webkitUserSelect = originalBodyUserSelect;
			};
		}
	}, [containSelection]);
	import_react.useEffect(() => {
		if (ref.current) {
			const handlePointerUp = /* @__PURE__ */ __name(() => {
				setContainSelection(false);
				context.isPointerDownOnContentRef.current = false;
				setTimeout(() => {
					if (document.getSelection()?.toString() !== "") context.hasSelectionRef.current = true;
				});
			}, "handlePointerUp");
			document.addEventListener("pointerup", handlePointerUp);
			return () => {
				document.removeEventListener("pointerup", handlePointerUp);
				context.hasSelectionRef.current = false;
				context.isPointerDownOnContentRef.current = false;
			};
		}
	}, [context.isPointerDownOnContentRef, context.hasSelectionRef]);
	import_react.useEffect(() => {
		if (ref.current) getTabbableNodes(ref.current).forEach((tabbable) => tabbable.setAttribute("tabindex", "-1"));
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
		asChild: true,
		disableOutsidePointerEvents: false,
		onInteractOutside,
		onEscapeKeyDown,
		onPointerDownOutside,
		onFocusOutside: composeEventHandlers(onFocusOutside, (event) => {
			event.preventDefault();
		}),
		onDismiss: context.onDismiss,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperContent, {
			...popperScope,
			...contentProps,
			onPointerDown: composeEventHandlers(contentProps.onPointerDown, (event) => {
				if (event.currentTarget.contains(event.target)) setContainSelection(true);
				context.hasSelectionRef.current = false;
				context.isPointerDownOnContentRef.current = true;
			}),
			ref: composedRefs,
			style: {
				...contentProps.style,
				userSelect: containSelection ? "text" : void 0,
				WebkitUserSelect: containSelection ? "text" : void 0,
				"--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
				"--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
				"--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
			}
		})
	});
}, "HoverCardContentImpl"));
function excludeTouch(eventHandler) {
	return (event) => event.pointerType === "touch" ? void 0 : eventHandler();
}
__name(excludeTouch, "excludeTouch");
function getTabbableNodes(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ __name((node) => {
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
__name(getTabbableNodes, "getTabbableNodes");
var HoverCard = HoverCard$1;
var HoverCardTrigger = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardTrigger$1, {
	ref,
	"data-slot": "hover-card-trigger",
	...props
}));
HoverCardTrigger.displayName = "HoverCardTrigger";
var HoverCardContent = import_react.forwardRef(({ className, side = "bottom", align = "center", sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardContent$1, {
	ref,
	side,
	align,
	sideOffset,
	"data-slot": "hover-card-content",
	className: cn$1("z-50 w-72 rounded-xl border border-border bg-card p-4 text-card-foreground shadow-raised outline-none animate-[vert-pop-in_140ms_ease-out]", className),
	...props
}) }));
HoverCardContent.displayName = "HoverCardContent";
var themes = [
	{
		value: "vert",
		label: "Vert (default)"
	},
	{
		value: "slate",
		label: "Slate"
	},
	{
		value: "sand",
		label: "Sand"
	},
	{
		value: "midnight",
		label: "Midnight"
	},
	{
		value: "rose",
		label: "Rose"
	},
	{
		value: "ocean",
		label: "Ocean"
	}
];
var THEME_KEY = "vert-ui-theme";
var TONE_KEY = "vert-ui-tone";
function apply(theme, tone) {
	const root = document.documentElement;
	root.setAttribute("data-theme", theme);
	root.classList.toggle("dark", tone === "dark");
	root.setAttribute("data-tone", tone);
	try {
		localStorage.setItem(THEME_KEY, theme);
		localStorage.setItem(TONE_KEY, tone);
	} catch {}
}
function readStored() {
	try {
		const theme = localStorage.getItem(THEME_KEY);
		const tone = localStorage.getItem(TONE_KEY);
		if (!theme && !tone) return null;
		return {
			theme: theme ?? "vert",
			tone: tone === "dark" ? "dark" : "light"
		};
	} catch {
		return null;
	}
}
function ThemeSwitcher() {
	const [theme, setTheme] = (0, import_react.useState)("vert");
	const [tone, setTone] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const stored = readStored();
		if (stored) {
			setTheme(stored.theme);
			setTone(stored.tone);
			apply(stored.theme, stored.tone);
			return;
		}
		const root = document.documentElement;
		const currentTheme = root.getAttribute("data-theme") ?? "vert";
		const prefersDark = typeof window.matchMedia === "function" && window.matchMedia("(prefers-color-scheme: dark)").matches;
		setTheme(currentTheme);
		setTone(root.classList.contains("dark") || prefersDark ? "dark" : "light");
	}, []);
	const onTheme = (value) => {
		setTheme(value);
		apply(value, tone);
	};
	const onTone = (value) => {
		const next = value === "dark" ? "dark" : "light";
		setTone(next);
		apply(theme, next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Change theme",
			className: "flex size-8 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": "true",
				className: "size-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" })
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "w-56",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Theme" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuRadioGroup, {
				value: theme,
				onValueChange: onTheme,
				children: themes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuRadioItem, {
					value: t.value,
					children: t.label
				}, t.value))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Tone" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuRadioGroup, {
				value: tone,
				onValueChange: onTone,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuRadioItem, {
					value: "light",
					children: "Light"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuRadioItem, {
					value: "dark",
					children: "Dark"
				})]
			})
		]
	})] });
}
var nav = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "Guide",
		to: "/guide"
	},
	{
		label: "Components",
		to: "/components"
	}
];
function SiteHeader() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-14 max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 sm:flex-nowrap sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "group flex items-center gap-2.5 outline-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-7 items-center justify-center rounded-md bg-brand shadow-soft transition-transform duration-[140ms] group-hover:-translate-y-0.5 group-focus-visible:ring-2 group-focus-visible:ring-ring",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2.2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							"aria-hidden": "true",
							className: "size-4 text-brand-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21v-8" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 13c0-3 2.5-6 7-7 0 5-3 8-7 8Z" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 13C12 10 9.5 7 5 6c0 5 3 8 7 8Z" })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold tracking-tight",
						children: "vert-ui"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "beta" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-auto flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Site",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex items-center gap-1",
						children: nav.map((item) => {
							const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								"aria-current": active ? "page" : void 0,
								className: ["rounded-md px-3 py-1.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring", active ? "bg-accent font-medium text-accent-foreground" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"].join(" "),
								children: item.label
							}) }, item.to);
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeSwitcher, {})]
			})]
		})
	});
}
function Badge({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "hidden rounded-full border border-brand/30 bg-brand-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-soft-foreground sm:inline",
		children
	});
}
var Route$35 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "vert-ui — components that grow with precision" },
			{
				name: "description",
				content: "Original React + TypeScript components with WCAG AA contrast, keyboard support and soft motion. Copy-paste ready via the shadcn registry."
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}],
		scripts: [{ children: `(function(){try{var t=localStorage.getItem('vert-ui-theme');var o=localStorage.getItem('vert-ui-tone');var r=document.documentElement;if(t)r.setAttribute('data-theme',t);if(o==='dark'){r.classList.add('dark');r.setAttribute('data-tone','dark')}else if(o==='light'){r.setAttribute('data-tone','light')}}catch(e){}})()` }]
	}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-screen bg-background text-foreground antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_50%_-10rem,oklch(0.93_0.05_140/0.7),transparent_70%)]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var HeroScene = (0, import_react.lazy)(() => import("./hero-scene-CSD_DTFt.mjs"));
var scrim = "radial-gradient(65% 55% at 50% 35%, color-mix(in srgb, var(--color-background) 88%, transparent) 0%, transparent 100%)";
function HeroCanvas({ innerRef }) {
	const hostRef = (0, import_react.useRef)(null);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [inView, setInView] = (0, import_react.useState)(true);
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		const query = window.matchMedia("(prefers-reduced-motion: reduce)");
		const sync = () => setReduced(query.matches);
		sync();
		query.addEventListener("change", sync);
		const host = hostRef.current;
		let observer;
		if (host && "IntersectionObserver" in window) {
			observer = new IntersectionObserver((entries) => setInView(entries[0]?.isIntersecting ?? true), { rootMargin: "120px" });
			observer.observe(host);
		}
		return () => {
			query.removeEventListener("change", sync);
			observer?.disconnect();
		};
	}, []);
	const setRefs = (element) => {
		hostRef.current = element;
		if (typeof innerRef === "function") innerRef(element);
		else if (innerRef) innerRef.current = element;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: setRefs,
		"aria-hidden": "true",
		className: "hero-scene pointer-events-none absolute inset-x-0 -top-[18%] -bottom-[6%] z-0 overflow-hidden",
		children: [mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroScene, { animate: !reduced && inView })
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0",
			style: { background: scrim }
		})]
	});
}
var EASE = [
	.22,
	1,
	.36,
	1
];
var rise = {
	hidden: {
		opacity: 0,
		y: 24
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .65,
			ease: EASE
		}
	}
};
var riseLate = {
	hidden: {
		opacity: 0,
		y: 40
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .75,
			delay: .5,
			ease: EASE
		}
	}
};
var cardRise = {
	hidden: {
		opacity: 0,
		y: 18
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .5,
			delay: .85,
			ease: EASE
		}
	}
};
var heroContainer = {
	hidden: {},
	visible: { transition: {
		delayChildren: .12,
		staggerChildren: .09
	} }
};
var wordContainer = {
	hidden: {},
	visible: { transition: {
		delayChildren: .05,
		staggerChildren: .07
	} }
};
var word = {
	hidden: {
		opacity: 0,
		y: "0.35em"
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .55,
			ease: EASE
		}
	}
};
var chipVariants = (index) => ({
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		y: [
			0,
			-10,
			0
		],
		rotate: [
			0,
			1.4,
			0
		],
		transition: {
			opacity: {
				duration: .6,
				delay: 1 + index * .15
			},
			y: {
				duration: 7.5,
				repeat: Infinity,
				ease: "easeInOut",
				delay: index * .8
			},
			rotate: {
				duration: 7.5,
				repeat: Infinity,
				ease: "easeInOut",
				delay: index * .8
			}
		}
	}
});
var headlineWords = [
	"Grow",
	"with",
	"precision."
];
function Hero() {
	const sectionRef = (0, import_react.useRef)(null);
	const sceneRef = (0, import_react.useRef)(null);
	const tiltRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		let dispose;
		(async () => {
			const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("../_libs/gsap.mjs").then((n) => n.t), import("../_libs/gsap.mjs").then((n) => n.n)]);
			if (cancelled) return;
			gsap.registerPlugin(ScrollTrigger);
			const media = gsap.matchMedia();
			media.add("(prefers-reduced-motion: no-preference)", () => {
				const scene = sceneRef.current;
				const section = sectionRef.current;
				const tilt = tiltRef.current;
				if (scene && section) gsap.to(scene, {
					yPercent: 12,
					ease: "none",
					scrollTrigger: {
						trigger: section,
						start: "top top",
						end: "bottom top",
						scrub: .6
					}
				});
				if (tilt && section && window.matchMedia("(pointer: fine)").matches) {
					gsap.set(tilt, {
						transformPerspective: 1400,
						transformOrigin: "50% 50%"
					});
					const rotateY = gsap.quickTo(tilt, "rotationY", {
						duration: .7,
						ease: "power3.out"
					});
					const rotateX = gsap.quickTo(tilt, "rotationX", {
						duration: .7,
						ease: "power3.out"
					});
					const onMove = (event) => {
						const rect = section.getBoundingClientRect();
						const nx = (event.clientX - rect.left) / Math.max(1, rect.width) * 2 - 1;
						const ny = (event.clientY - rect.top) / Math.max(1, rect.height) * 2 - 1;
						rotateY(nx * 5);
						rotateX(ny * -4);
					};
					const onLeave = () => {
						rotateY(0);
						rotateX(0);
					};
					section.addEventListener("pointermove", onMove);
					section.addEventListener("pointerleave", onLeave);
					return () => {
						section.removeEventListener("pointermove", onMove);
						section.removeEventListener("pointerleave", onLeave);
					};
				}
			});
			dispose = () => media.revert();
		})();
		return () => {
			cancelled = true;
			dispose?.();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionConfig, {
		reducedMotion: "user",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: sectionRef,
			className: "relative mx-auto max-w-5xl overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCanvas, { innerRef: sceneRef }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"aria-hidden": "true",
					className: "pointer-events-none absolute inset-0 z-10 hidden xl:block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: "hidden",
							animate: "visible",
							custom: 0,
							variants: chipVariants(0),
							className: "absolute left-[1.5%] top-[14%]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, { children: "copy-paste ready" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: "hidden",
							animate: "visible",
							custom: 1,
							variants: chipVariants(1),
							className: "absolute left-[2%] top-[30%]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-border/70 bg-card/80 p-2.5 shadow-soft backdrop-blur-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
									className: "size-9",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "VT" })
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: "hidden",
							animate: "visible",
							custom: 2,
							variants: chipVariants(2),
							className: "absolute right-[1.5%] top-[15%]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-36 rounded-2xl border border-border/70 bg-card/80 p-3 shadow-soft backdrop-blur-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Registry sync"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-brand",
										children: "72%"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
									value: 72,
									size: "sm",
									className: "mt-2",
									"aria-label": "Registry sync"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: "hidden",
							animate: "visible",
							custom: 3,
							variants: chipVariants(3),
							className: "absolute right-[2%] top-[31%] flex flex-col items-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
								variant: "secondary",
								children: "React 19"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
								variant: "outline",
								children: "WCAG AA"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: heroContainer,
					initial: "hidden",
					animate: "visible",
					className: "relative z-10 mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: rise,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, { children: "shadcn-compatible · React 19 · TypeScript" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							variants: wordContainer,
							className: "mt-6 bg-linear-to-br from-vert-600 via-brand to-vert-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl",
							children: headlineWords.map((wordText, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								variants: word,
								className: "inline-block",
								children: wordText
							}), index < headlineWords.length - 1 ? " " : null] }, wordText))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: rise,
							className: "mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg",
							children: "vert-ui is an original UI library of calm, green-accented components with soft motion — copy-paste into React 19, style with Tailwind, own forever."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: rise,
							className: "mt-8 flex flex-wrap items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/components",
									children: "Browse components"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "outline",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/guide",
									children: "Get started"
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: "hidden",
					animate: "visible",
					variants: riseLate,
					className: "relative z-10 mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: tiltRef,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grain luminous-border rounded-2xl border border-border/60 bg-card/90 p-2 shadow-raised backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 px-3 py-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-2.5 rounded-full bg-warning/70",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-2.5 rounded-full bg-warning/50",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-2.5 rounded-full bg-success/60",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "ml-3 hidden rounded-md bg-muted px-3 py-0.5 text-xs text-muted-foreground sm:inline-block",
										children: "app.vert.dev/settings"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 rounded-xl bg-background/70 p-5 sm:grid-cols-2 sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: "hidden",
									animate: "visible",
									variants: cardRise,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
										className: "flex-row items-center gap-3 space-y-0 p-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
											variant: "brand",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "VS" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
												className: "truncate",
												children: "Precision workspace"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
												className: "truncate",
												children: "12 members · synced"
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
										className: "flex flex-col gap-4 p-5 pt-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm text-muted-foreground",
												children: "Auto-sync"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												defaultChecked: true,
												"aria-label": "Auto-sync"
											})]
										})
									})] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: "hidden",
									animate: "visible",
									variants: cardRise,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
											className: "flex-row items-center justify-between space-y-0 p-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Storage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm text-muted-foreground",
												children: "64%"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
											className: "flex flex-col gap-4 p-5 pt-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
												value: 64,
												"aria-label": "Storage used"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, { children: "on track" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
														variant: "secondary",
														children: "weekly"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
														variant: "outline",
														children: "v0.1"
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
											className: "gap-2 p-5 pt-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												className: "flex-1",
												children: "Save"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												className: "flex-1",
												children: "Cancel"
											})]
										})
									] })
								})]
							})]
						})
					})
				})
			]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Route$34 = createFileRoute("/")({ component: Home });
var stats = [
	{
		value: "28",
		label: "Components"
	},
	{
		value: "163",
		label: "Tests passing"
	},
	{
		value: "756",
		label: "Contrast pairs"
	},
	{
		value: "30",
		label: "Registry items"
	}
];
var features = [
	{
		title: "Original by design",
		body: "Every component is written from scratch. Patterns are studied, code and visuals never copied.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			"aria-hidden": "true",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			className: "size-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21v-8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 13c0-3 2.5-6 7-7 0 5-3 8-7 8Z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 13C12 10 9.5 7 5 6c0 5 3 8 7 8Z" })
			]
		})
	},
	{
		title: "Accessible first",
		body: "WCAG AA contrast, keyboard support and screen-reader semantics are acceptance criteria, not polish.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			"aria-hidden": "true",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			className: "size-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3 4 6v6c0 4.5 3.2 7.8 8 9 4.8-1.2 8-4.5 8-9V6l-8-3Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9 12 2 2 4-4" })]
		})
	},
	{
		title: "Copy-paste ready",
		body: "shadcn-compatible registry items install straight into your codebase. Own the code, no runtime dependency.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			"aria-hidden": "true",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			className: "size-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "9",
				y: "9",
				width: "11",
				height: "11",
				rx: "2"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 15V5a2 2 0 0 1 2-2h10" })]
		})
	}
];
var swatches = [
	"bg-vert-100",
	"bg-vert-200",
	"bg-vert-300",
	"bg-vert-400",
	"bg-vert-500",
	"bg-vert-600",
	"bg-vert-700",
	"bg-vert-800",
	"bg-vert-900"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Project statistics",
				className: "mx-auto max-w-5xl px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "grid grid-cols-2 md:grid-cols-4",
						children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-border/70 p-6 text-center [&:nth-child(2n)]:border-l [&:nth-child(n+3)]:border-t md:[&:not(:first-child)]:border-l md:[&:nth-child(n+3)]:border-t-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm text-muted-foreground",
								children: stat.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-3xl font-bold tracking-tight text-foreground",
								children: stat.value
							})]
						}, stat.label))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "principles",
				className: "mx-auto flex max-w-5xl flex-col gap-6 px-4 pt-16 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-brand",
						children: "Principles"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "principles",
						className: "text-2xl font-bold tracking-tight sm:text-3xl",
						children: "Built like a product, shipped as copy-paste"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand-soft-foreground",
							children: feature.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: feature.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: feature.body })
					] }) }, feature.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-labelledby": "signature",
				className: "mx-auto max-w-5xl px-4 pt-16 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "grid items-center gap-8 p-8 md:grid-cols-2 md:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "space-y-0 gap-3 p-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-widest text-brand",
								children: "Signature"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								id: "signature",
								children: "Soft grain, luminous edge, generous radius"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Every surface pairs a fine grain gradient with a thin emerald border and a soft elevation shadow — calm enough for all-day tools, distinct enough to remember." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2 pt-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, { children: "minimal" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
										variant: "secondary",
										children: "airy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
										variant: "outline",
										children: "natural"
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "flex flex-col gap-3 p-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grain flex h-24 overflow-hidden rounded-xl border border-border/60 shadow-soft",
							children: swatches.map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-full flex-1", color) }, color))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-4 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-lg border border-border bg-muted px-3 py-1.5 shadow-xs",
									children: "radius"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-2xl border border-border bg-muted px-3 py-1.5 shadow-soft",
									children: "shadow-soft"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-2xl border border-border bg-background px-3 py-1.5 shadow-raised",
									children: "shadow-raised"
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Get started",
				className: "mx-auto max-w-5xl px-4 py-16 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grain rounded-2xl bg-brand p-8 text-center shadow-raised md:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold tracking-tight text-brand-foreground sm:text-3xl",
							children: "Start growing your interface with precision"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-xl text-sm text-brand-foreground",
							children: "Twenty-eight components, thirty registry items, zero lock-in. Open the catalog and copy the first one in."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "secondary",
							className: "mt-6",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/components",
								children: "Open the catalog"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-brand-foreground",
							children: [
								"New here?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/guide/installation",
									className: "font-medium underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-brand-foreground",
									children: "Read the installation guide"
								}),
								"."
							]
						})
					]
				})
			})
		]
	});
}
var $$splitComponentImporter$33 = () => import("./route-BeaO83TF.mjs");
var Route$33 = createFileRoute("/components")({ component: lazyRouteComponent($$splitComponentImporter$33, "component") });
var $$splitComponentImporter$32 = () => import("./route-BYGjC3ll.mjs");
var Route$32 = createFileRoute("/guide")({ component: lazyRouteComponent($$splitComponentImporter$32, "component") });
var $$splitComponentImporter$31 = () => import("./components-Wjo3rldQ.mjs");
var Route$31 = createFileRoute("/components/")({ component: lazyRouteComponent($$splitComponentImporter$31, "component") });
var $$splitComponentImporter$30 = () => import("./accordion-DkQMV5gH.mjs");
var Route$30 = createFileRoute("/components/accordion")({ component: lazyRouteComponent($$splitComponentImporter$30, "component") });
var $$splitComponentImporter$29 = () => import("./alert-2xWseKSb.mjs");
var Route$29 = createFileRoute("/components/alert")({ component: lazyRouteComponent($$splitComponentImporter$29, "component") });
var $$splitComponentImporter$28 = () => import("./avatar-CpMlJe3e.mjs");
var Route$28 = createFileRoute("/components/avatar")({ component: lazyRouteComponent($$splitComponentImporter$28, "component") });
var $$splitComponentImporter$27 = () => import("./badge-rrN4b4ax.mjs");
var Route$27 = createFileRoute("/components/badge")({ component: lazyRouteComponent($$splitComponentImporter$27, "component") });
var $$splitComponentImporter$26 = () => import("./button-Bq16cRjD.mjs");
var Route$26 = createFileRoute("/components/button")({ component: lazyRouteComponent($$splitComponentImporter$26, "component") });
var $$splitComponentImporter$25 = () => import("./card-B3oyL9Sq.mjs");
var Route$25 = createFileRoute("/components/card")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./carousel-CRZ1PmdZ.mjs");
var Route$24 = createFileRoute("/components/carousel")({ component: lazyRouteComponent($$splitComponentImporter$24, "component") });
var $$splitComponentImporter$23 = () => import("./checkbox-DrU598NH.mjs");
var Route$23 = createFileRoute("/components/checkbox")({ component: lazyRouteComponent($$splitComponentImporter$23, "component") });
var $$splitComponentImporter$22 = () => import("./collapsible-CpUrIOGb.mjs");
var Route$22 = createFileRoute("/components/collapsible")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("./command-HbfclmTL.mjs");
var Route$21 = createFileRoute("/components/command")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./dialog-BXm1X5ag.mjs");
var Route$20 = createFileRoute("/components/dialog")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./dropdown-menu-_mcX8IrQ.mjs");
var Route$19 = createFileRoute("/components/dropdown-menu")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./field-CUGIrqW2.mjs");
var Route$18 = createFileRoute("/components/field")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./hover-card-AVOEfSju.mjs");
var Route$17 = createFileRoute("/components/hover-card")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./input-RKNpqPAu.mjs");
var Route$16 = createFileRoute("/components/input")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./label-DnYf6rOV.mjs");
var Route$15 = createFileRoute("/components/label")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./popover-D_PDHjlC.mjs");
var Route$14 = createFileRoute("/components/popover")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./progress-CuZyo2cI.mjs");
var Route$13 = createFileRoute("/components/progress")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./radio-group-DHT4BZbw.mjs");
var Route$12 = createFileRoute("/components/radio-group")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./select-DFhRiU0W.mjs");
var Route$11 = createFileRoute("/components/select")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./separator-C33ouE04.mjs");
var Route$10 = createFileRoute("/components/separator")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./skeleton-CpAgqxMd.mjs");
var Route$9 = createFileRoute("/components/skeleton")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./switch-BlijO0pQ.mjs");
var Route$8 = createFileRoute("/components/switch")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./table-hemWVUXc.mjs");
var Route$7 = createFileRoute("/components/table")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./tabs-D3EG6fnn.mjs");
var Route$6 = createFileRoute("/components/tabs")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./textarea-XiCrSivd.mjs");
var Route$5 = createFileRoute("/components/textarea")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./toast-R30eorvB.mjs");
var Route$4 = createFileRoute("/components/toast")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./tooltip-DQh1me8t.mjs");
var Route$3 = createFileRoute("/components/tooltip")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./guide-DbwIcb9Z.mjs");
var Route$2 = createFileRoute("/guide/")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./getting-started-CDLSHPiR.mjs");
var Route$1 = createFileRoute("/guide/getting-started")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./installation-Be6-gYsg.mjs");
var Route = createFileRoute("/guide/installation")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$34.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$35
});
var ComponentsRouteRoute = Route$33.update({
	id: "/components",
	path: "/components",
	getParentRoute: () => Route$35
});
var GuideRouteRoute = Route$32.update({
	id: "/guide",
	path: "/guide",
	getParentRoute: () => Route$35
});
var ComponentsIndexRoute = Route$31.update({
	id: "/",
	path: "/",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsAccordionRoute = Route$30.update({
	id: "/accordion",
	path: "/accordion",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsAlertRoute = Route$29.update({
	id: "/alert",
	path: "/alert",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsAvatarRoute = Route$28.update({
	id: "/avatar",
	path: "/avatar",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsBadgeRoute = Route$27.update({
	id: "/badge",
	path: "/badge",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsButtonRoute = Route$26.update({
	id: "/button",
	path: "/button",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsCardRoute = Route$25.update({
	id: "/card",
	path: "/card",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsCarouselRoute = Route$24.update({
	id: "/carousel",
	path: "/carousel",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsCheckboxRoute = Route$23.update({
	id: "/checkbox",
	path: "/checkbox",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsCollapsibleRoute = Route$22.update({
	id: "/collapsible",
	path: "/collapsible",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsCommandRoute = Route$21.update({
	id: "/command",
	path: "/command",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsDialogRoute = Route$20.update({
	id: "/dialog",
	path: "/dialog",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsDropdownMenuRoute = Route$19.update({
	id: "/dropdown-menu",
	path: "/dropdown-menu",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsFieldRoute = Route$18.update({
	id: "/field",
	path: "/field",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsHoverCardRoute = Route$17.update({
	id: "/hover-card",
	path: "/hover-card",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsInputRoute = Route$16.update({
	id: "/input",
	path: "/input",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsLabelRoute = Route$15.update({
	id: "/label",
	path: "/label",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsPopoverRoute = Route$14.update({
	id: "/popover",
	path: "/popover",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsProgressRoute = Route$13.update({
	id: "/progress",
	path: "/progress",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsRadioGroupRoute = Route$12.update({
	id: "/radio-group",
	path: "/radio-group",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsSelectRoute = Route$11.update({
	id: "/select",
	path: "/select",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsSeparatorRoute = Route$10.update({
	id: "/separator",
	path: "/separator",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsSkeletonRoute = Route$9.update({
	id: "/skeleton",
	path: "/skeleton",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsSwitchRoute = Route$8.update({
	id: "/switch",
	path: "/switch",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsTableRoute = Route$7.update({
	id: "/table",
	path: "/table",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsTabsRoute = Route$6.update({
	id: "/tabs",
	path: "/tabs",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsTextareaRoute = Route$5.update({
	id: "/textarea",
	path: "/textarea",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsToastRoute = Route$4.update({
	id: "/toast",
	path: "/toast",
	getParentRoute: () => ComponentsRouteRoute
});
var ComponentsTooltipRoute = Route$3.update({
	id: "/tooltip",
	path: "/tooltip",
	getParentRoute: () => ComponentsRouteRoute
});
var GuideIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => GuideRouteRoute
});
var GuideGettingStartedRoute = Route$1.update({
	id: "/getting-started",
	path: "/getting-started",
	getParentRoute: () => GuideRouteRoute
});
var GuideInstallationRoute = Route.update({
	id: "/installation",
	path: "/installation",
	getParentRoute: () => GuideRouteRoute
});
var ComponentsRouteRouteChildren = {
	ComponentsAccordionRoute,
	ComponentsAlertRoute,
	ComponentsAvatarRoute,
	ComponentsBadgeRoute,
	ComponentsButtonRoute,
	ComponentsCardRoute,
	ComponentsCarouselRoute,
	ComponentsCheckboxRoute,
	ComponentsCollapsibleRoute,
	ComponentsCommandRoute,
	ComponentsDialogRoute,
	ComponentsDropdownMenuRoute,
	ComponentsFieldRoute,
	ComponentsHoverCardRoute,
	ComponentsInputRoute,
	ComponentsLabelRoute,
	ComponentsPopoverRoute,
	ComponentsProgressRoute,
	ComponentsRadioGroupRoute,
	ComponentsSelectRoute,
	ComponentsSeparatorRoute,
	ComponentsSkeletonRoute,
	ComponentsSwitchRoute,
	ComponentsTableRoute,
	ComponentsTabsRoute,
	ComponentsTextareaRoute,
	ComponentsToastRoute,
	ComponentsTooltipRoute,
	ComponentsIndexRoute
};
var ComponentsRouteRouteWithChildren = ComponentsRouteRoute._addFileChildren(ComponentsRouteRouteChildren);
var GuideRouteRouteChildren = {
	GuideGettingStartedRoute,
	GuideInstallationRoute,
	GuideIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	ComponentsRouteRoute: ComponentsRouteRouteWithChildren,
	GuideRouteRoute: GuideRouteRoute._addFileChildren(GuideRouteRouteChildren)
};
var routeTree = Route$35._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
}
//#endregion
export { AvatarGroup as $, Accordion as A, Switch as At, FieldGroup as B, CardDescription as Bt, ToastDescription as C, DropdownMenuSeparator as Ct, Popover as D, TabsContent as Dt, ToastViewport as E, Tabs as Et, CollapsibleContent as F, AlertTitle as Ft, TableCell as G, Input as Gt, Table as H, CardHeader as Ht, CollapsibleTrigger as I, Checkbox as It, TableHeader as J, TableFooter as K, Button as Kt, RadioGroup as L, Badge$1 as Lt, AccordionItem as M, Separator as Mt, AccordionTrigger as N, Alert as Nt, PopoverContent as O, TabsList as Ot, Collapsible as P, AlertDescription as Pt, AvatarFallback as Q, RadioGroupItem as R, Card as Rt, ToastClose as S, DropdownMenuRadioItem as St, ToastTitle as T, Tooltip as Tt, TableBody as U, CardTitle as Ut, Label as V, CardFooter as Vt, TableCaption as W, Textarea as Wt, Skeleton as X, TableRow as Y, Avatar as Z, CommandList as _, DropdownMenuCheckboxItem as _t, Carousel as a, DialogHeader as at, Toast as b, DropdownMenuLabel as bt, CarouselNext as c, Select as ct, Command as d, SelectItem as dt, AvatarImage as et, CommandDialog as f, SelectLabel as ft, CommandItem as g, DropdownMenu as gt, CommandInput as h, SelectValue as ht, HoverCardTrigger as i, DialogFooter as it, AccordionContent as j, Progress as jt, PopoverTrigger as k, TabsTrigger as kt, CarouselPrevious as l, SelectContent as lt, CommandGroup as m, SelectTrigger as mt, HoverCard as n, DialogContent as nt, CarouselDots as o, DialogTitle as ot, CommandEmpty as p, SelectSeparator as pt, TableHead as q, HoverCardContent as r, DialogDescription as rt, CarouselItem as s, DialogTrigger as st, router_exports as t, Dialog as tt, useCarousel as u, SelectGroup as ut, CommandSeparator as v, DropdownMenuContent as vt, ToastProvider as w, DropdownMenuTrigger as wt, ToastAction as x, DropdownMenuRadioGroup as xt, CommandShortcut as y, DropdownMenuItem as yt, Field as z, CardContent as zt };
