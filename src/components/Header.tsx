import { shadow } from '@/app/style/utils'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton';
import { DarkModeToggle } from './DarkModeToggle';

function Header() {
  return (
    <header className='relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8' style={{boxShadow: shadow}}>
        <Link className='flex items-end gap-2' href="/">
        <h1>
        Neurolife
        </h1>
        </Link>
       <div className='flex gap-4'>
       <LogoutButton />
        <DarkModeToggle />
       </div>
    </header>
  )
}

export default Header
