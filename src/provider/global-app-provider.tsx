'use client'

import { GlobalAppContext } from '@/context/global-app-context'

export default function GlobalAppProvider ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <GlobalAppContext.Provider value={{}}>{children}</GlobalAppContext.Provider>
  )
}
