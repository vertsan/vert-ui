import { createFileRoute, Outlet } from "@tanstack/react-router"
import { SidebarAside, SidebarMobileNav } from "../../components/site-sidebar"

export const Route = createFileRoute("/guide")({
  component: GuideLayout,
})

function GuideLayout() {
  return (
    <div>
      <SidebarMobileNav />
      <div className="mx-auto flex w-full max-w-6xl px-3 sm:px-6">
        <SidebarAside />
        <div className="min-w-0 flex-1 py-6 sm:py-8 lg:pl-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
