import { SidebarItem } from '@/types/sidebar'

export const studentSidebar: SidebarItem[] = []

export const instructorSidebar: SidebarItem[] = [
  {
    id: 'ins_dashboard',
    label: 'Dashboard',
    href: '/i/dashboard'
  },
  {
    id: 'ins_tests',
    label: 'Your Tests',
    href: '/i/tests'
  },
  {
    id: 'ins_create_test',
    label: 'Create Test',
    href: '/i/create-test'
  }
]
