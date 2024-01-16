'use client'

import { GlobalAppContext } from '@/context/global-app-context'
import { useState } from 'react'

export default function GlobalAppProvider ({
  children
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <GlobalAppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </GlobalAppContext.Provider>
  )
}
