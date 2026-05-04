import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Postgres Query Cost Visualizer',
  description: 'Visualize expensive queries with cost heatmaps. Connect to PostgreSQL and see which queries cost most in time and resources.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7666b303-bb3c-41a5-bfac-53982918354b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
