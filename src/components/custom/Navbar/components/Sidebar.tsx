'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { instructorSidebar, studentSidebar } from '@/constants/sidebar'
import useGlobalAppState from '@/hooks/global-app-state'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import { useMemo } from 'react'

export default function Sidebar ({ className }: { className?: string }) {
  const pathname = usePathname()
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalAppState()
  const sidebarInfo = useMemo(() => {
    const role = pathname?.split('/')[1]
    if (role === 'i') {
      return instructorSidebar
    }
    if (role === 's') {
      return studentSidebar
    }
    return []
  }, [pathname])

  const currentOptionHref = useMemo(() => {
    const pathArr = pathname.split('/')
    return pathArr[2]
  }, [pathname])

  return (
    <Sheet open={isSidebarOpen} onOpenChange={e => setIsSidebarOpen(e)}>
      <SheetTrigger asChild>
        <div className='p-2 rounded hover:bg-accent transition-all cursor-pointer border-accent border'>
          <Menu className={cn('', className)} />
        </div>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <div className='space-y-2 mt-5'>
          {sidebarInfo.map(item => (
            <SidebarItem
              key={item.id}
              {...item}
              selected={item.href.split('/')[2] === currentOptionHref}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function SidebarItem ({
  label,
  href,
  id,
  selected
}: {
  label: string
  href: string
  id: string
  selected?: boolean
}) {
  const { setIsSidebarOpen } = useGlobalAppState()

  return (
    <Link href={href} className='block'>
      <div
        key={id}
        className={cn(
          'p-2 hover:bg-accent rounded transition-all cursor-pointer',
          selected && 'bg-accent'
        )}
        onClick={() => {
          setIsSidebarOpen(false)
        }}
      >
        {label}
      </div>
    </Link>
  )
}
