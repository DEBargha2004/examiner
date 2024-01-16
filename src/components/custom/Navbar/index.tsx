import { cn } from '@/lib/utils'
import Sidebar from './components/Sidebar'

export default function Navbar ({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-between px-3', className)}>
      <Sidebar />
    </div>
  )
}
