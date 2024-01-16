import { Dispatch, SetStateAction } from 'react'

export type GlobalAppProviderType = {
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}
