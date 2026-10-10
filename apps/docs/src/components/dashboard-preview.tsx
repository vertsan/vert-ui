import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Progress,
  Switch,
} from "@vert-ui/ui"
import { cn } from "../lib/utils"

/**
 * "Precision workspace" settings dashboard — the showcase media for the
 * hero. Built entirely from @vert-ui/ui components, SSR-safe, no state.
 */
export function DashboardPreview({ className }: { className?: string }) {
  return (
    <div
      data-slot="dashboard-preview"
      className={cn("flex h-full flex-col", className)}
    >
      <div className="flex shrink-0 items-center gap-2 border-b border-border/70 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-warning/60" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-warning/40" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-success/60" aria-hidden="true" />
        <span className="ml-2 hidden rounded-md bg-muted px-2.5 py-0.5 text-xs text-muted-foreground sm:inline-block">
          app.vert.dev/settings
        </span>
      </div>

      <div className="grid flex-1 content-start gap-4 p-4 sm:p-5 md:grid-cols-2">
        <Card>
          <CardHeader className="flex-row items-center gap-3 space-y-0 p-5">
            <Avatar variant="brand">
              <AvatarFallback>VS</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <CardTitle className="truncate">Precision workspace</CardTitle>
              <CardDescription className="truncate">12 members · synced</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 p-5 pt-0">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-muted-foreground">Auto-sync</span>
              <Switch defaultChecked aria-label="Auto-sync" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0 p-5">
            <CardTitle>Storage</CardTitle>
            <span className="text-xs text-muted-foreground">of 20 GB</span>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 p-5 pt-0">
            <Progress value={64} showPercent aria-label="Storage used" />
            <div className="flex flex-wrap gap-2">
              <Badge>on track</Badge>
              <Badge variant="secondary">weekly</Badge>
              <Badge variant="outline">v0.1</Badge>
            </div>
          </CardContent>
          <CardFooter className="gap-2 p-5 pt-0">
            <Button size="sm" className="flex-1">
              Save
            </Button>
            <Button size="sm" variant="ghost" className="flex-1">
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}