export const registry = {
  name: "vert-ui",
  url: "https://registry.vert-ui.dev",
  description: "Calm, fresh, green-accented components with soft motion",
  components: [
    { name: "button", type: "registry:component" },
    { name: "input", type: "registry:component" },
    { name: "textarea", type: "registry:component" },
    { name: "card", type: "registry:component" },
    { name: "badge", type: "registry:component" },
  ],
} as const

export type Registry = typeof registry
