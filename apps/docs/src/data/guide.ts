export interface GuideDocMeta {
  name: string
  href: string
  description: string
}

export const guideDocs: GuideDocMeta[] = [
  {
    name: "Overview",
    href: "/guide",
    description: "What vert-ui is, how delivery works, and what you need before you start.",
  },
  {
    name: "Installation",
    href: "/guide/installation",
    description: "Register the vert registry, install the theme and add your first component.",
  },
  {
    name: "Getting Started",
    href: "/guide/getting-started",
    description: "Render, theme and customize your first components in five minutes.",
  },
]
