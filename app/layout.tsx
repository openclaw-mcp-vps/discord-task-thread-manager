import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discord Task Thread Manager',
  description: 'Convert Discord messages into organized task threads automatically. Monitor @mentions and due dates to create structured task threads for your dev team.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9cfbaca9-dfc0-409e-9842-f76e25b63805"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
