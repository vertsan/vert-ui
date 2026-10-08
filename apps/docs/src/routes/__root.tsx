import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import { SiteHeader } from '../components/site-header'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'vert-ui — components that grow with precision',
      },
      {
        name: 'description',
        content:
          'Original React + TypeScript components with WCAG AA contrast, keyboard support and soft motion. Copy-paste ready via the shadcn registry.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
    scripts: [
      {
        children: `(function(){try{var t=localStorage.getItem('vert-ui-theme');var o=localStorage.getItem('vert-ui-tone');var r=document.documentElement;if(t)r.setAttribute('data-theme',t);if(o==='dark'){r.classList.add('dark');r.setAttribute('data-tone','dark')}else if(o==='light'){r.setAttribute('data-tone','light')}}catch(e){}})()`,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_50%_-10rem,oklch(0.93_0.05_140/0.7),transparent_70%)]"
        />
        <SiteHeader />
        <main>{children}</main>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
