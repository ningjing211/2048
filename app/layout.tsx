import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Game with friends',
  description: '一個有趣的2048數字方塊遊戲',
  icons: {
    icon: 'https://conflux-tech.com/wp-content/uploads/2025/03/rose.png',
    shortcut: 'https://conflux-tech.com/wp-content/uploads/2025/03/rose.png',
  },
  openGraph: {
    title: 'Game with friends',
    description: '一個有趣的2048數字方塊遊戲',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/03/rose.png',
        width: 800,
        height: 600,
        alt: '2048 Game Preview',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
