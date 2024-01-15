import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GlobalAppProvider from '@/provider/global-app-provider'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/provider/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Examiner',
  description: ''
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            <GlobalAppProvider>{children}</GlobalAppProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
