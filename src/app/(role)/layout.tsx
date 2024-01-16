import React from 'react'
import Navbar from '../../components/custom/Navbar'

export default function RoleLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-full'>
      <Navbar className='h-[10%]' />
      <div className='h-[90%] px-3'>{children}</div>
    </div>
  )
}
