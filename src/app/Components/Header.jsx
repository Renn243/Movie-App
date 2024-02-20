import React from 'react'
import Image from 'next/image'
import logo from '@/assets/Brand.svg'

export default function Header() {
    return (
        <header className='py-2 px-5 shadow-md shadow-gray-600'>
            <nav className='flex container mx-auto items-center justify-between'>
                <Image src={logo} alt="logo" width="75" height="75" />
                <div className='w-4/12'>
                    <input type="text" placeholder='Search Movie' className='rounded-md w-full border-2 border-gray-300 py-2 px-4' />
                </div>
                <div></div>
            </nav>
        </header>
    )
}