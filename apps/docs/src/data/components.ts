export interface ComponentDocMeta {
  name: string
  href: string
  description: string
}

export const componentDocs: ComponentDocMeta[] = [
  {
    name: "Accordion",
    href: "/components/accordion",
    description: "Stacked disclosure panels with chevron triggers.",
  },
  {
    name: "Alert",
    href: "/components/alert",
    description: "Inline status blocks with semantic variants.",
  },
  {
    name: "Avatar",
    href: "/components/avatar",
    description: "Image with initials fallback, no layout shift.",
  },
  {
    name: "Checkbox",
    href: "/components/checkbox",
    description: "Multi-select choice with indeterminate state.",
  },
  {
    name: "Collapsible",
    href: "/components/collapsible",
    description: "Single disclosure region with aria-expanded.",
  },
  {
    name: "Dialog",
    href: "/components/dialog",
    description: "Modal surface with focus trap and scroll lock.",
  },
  {
    name: "Dropdown Menu",
    href: "/components/dropdown-menu",
    description: "Action menu with checkbox and radio items.",
  },
  {
    name: "Field",
    href: "/components/field",
    description: "Wires label, description and error to any control.",
  },
  {
    name: "Input",
    href: "/components/input",
    description: "Single-line text field with validation state.",
  },
  {
    name: "Label",
    href: "/components/label",
    description: "Form label wired to its control with htmlFor.",
  },
  {
    name: "Popover",
    href: "/components/popover",
    description: "Click-open anchored panel for secondary content.",
  },
  {
    name: "Progress",
    href: "/components/progress",
    description: "Determinate and indeterminate progress bars.",
  },
  {
    name: "Radio Group",
    href: "/components/radio-group",
    description: "Single-choice group with arrow-key navigation.",
  },
  {
    name: "Select",
    href: "/components/select",
    description: "Single-value listbox trigger with typeahead.",
  },
  {
    name: "Separator",
    href: "/components/separator",
    description: "Horizontal and vertical dividers.",
  },
  {
    name: "Skeleton",
    href: "/components/skeleton",
    description: "Decorative loading placeholder.",
  },
  {
    name: "Switch",
    href: "/components/switch",
    description: "Immediate on/off setting control.",
  },
  {
    name: "Table",
    href: "/components/table",
    description: "Semantic data table with a scroll container.",
  },
  {
    name: "Tabs",
    href: "/components/tabs",
    description: "Tabbed panels with arrow-key navigation.",
  },
  {
    name: "Textarea",
    href: "/components/textarea",
    description: "Multi-line text field with resize control.",
  },
  {
    name: "Toast",
    href: "/components/toast",
    description: "Ephemeral notification stack with swipe-out.",
  },
  {
    name: "Tooltip",
    href: "/components/tooltip",
    description: "Hover and focus bubble linked with aria-describedby.",
  },
]

export const comingSoon = ["Button", "Card", "Badge"]
