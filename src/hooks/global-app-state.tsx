'use client'

import { GlobalAppContext } from '@/context/global-app-context'
import { GlobalAppProviderType } from '@/types/global-app-provider-type'
import { useContext } from 'react'

export default function useGlobalAppState () {
  return useContext<GlobalAppProviderType>(GlobalAppContext)
}
