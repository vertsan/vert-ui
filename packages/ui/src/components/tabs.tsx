import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

type TabsVariant = "line" | "pill"
type TabsSize = "sm" | "md" | "lg"

const tabsListVariants = cva("relative flex items-center gap-1", {
  variants: {
    variant: {
      line: "border-b border-border",
      pill: "rounded-lg bg-muted p-1",
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm",
    },
  },
  defaultVariants: {
    variant: "line",
    size: "md",
  },
})

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground",
  {
    variants: {
      variant: {
        line: "border-b-2 border-transparent px-3 pb-2 -mb-px text-muted-foreground hover:text-foreground data-[state=active]:border-primary",
        pill: "px-3 py-1.5 text-muted-foreground hover:text-foreground data-[state=active]:bg-card data-[state=active]:shadow-soft",
      },
      size: {
        sm: "text-xs px-2.5 pb-1.5",
        md: "text-sm px-3 pb-2",
        lg: "text-sm px-4 pb-2.5",
      },
    },
    defaultVariants: {
      variant: "line",
      size: "md",
    },
  }
)

const tabsContentVariants = cva(
  "mt-3 rounded-lg outline-none transition-[opacity,transform] duration-[140ms] ease-out-quart focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        line: "",
        pill: "mt-2 border border-border bg-card p-4",
      },
    },
    defaultVariants: {
      variant: "line",
    },
  }
)

interface TabsContextValue {
  variant: TabsVariant
  size: TabsSize
}

const TabsContext = React.createContext<TabsContextValue>({
  variant: "line",
  size: "md",
})

export interface TabsProps
  extends React.ComponentPropsWithRef<typeof TabsPrimitive.Root>,
    VariantProps<typeof tabsListVariants> {}

function Tabs({ className, variant = "line", size = "md", ...props }: TabsProps) {
  return (
    <TabsContext.Provider value={{ variant, size }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        data-variant={variant}
        data-size={size}
        className={cn("flex flex-col", className)}
        {...props}
      />
    </TabsContext.Provider>
  )
}
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const { variant, size } = React.useContext(TabsContext)
  return (
    <TabsPrimitive.List
      ref={ref}
      data-slot="tabs-list"
      data-variant={variant}
      data-size={size}
      className={cn(tabsListVariants({ variant, size }), className)}
      {...props}
    />
  )
})
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { variant, size } = React.useContext(TabsContext)
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      data-slot="tabs-trigger"
      data-variant={variant}
      data-size={size}
      className={cn(tabsTriggerVariants({ variant, size }), className)}
      {...props}
    />
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(TabsContext)
  return (
    <TabsPrimitive.Content
      ref={ref}
      data-slot="tabs-content"
      data-variant={variant}
      className={cn(tabsContentVariants({ variant }), className)}
      {...props}
    />
  )
})
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants, tabsTriggerVariants, tabsContentVariants }
export type { TabsSize, TabsVariant }
