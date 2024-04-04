import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from '../ui/separator'
import Navitems from './Navitems'
  

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
        <Sheet>
            <SheetTrigger className='align-middle'>
                <Image 
                     src='/assets/icons/menu.svg' width={24} height={24} className='cursor-pointer' alt='menu'
                />
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
                <Image src='/assets/images/logo.svg' width={125} height={35} alt='menu' />
                <Separator className='border border-gray-50' />
                <Navitems/>
            </SheetContent>
            </Sheet>

    </nav>
  )
}

export default MobileNav