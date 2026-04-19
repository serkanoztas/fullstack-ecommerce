import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PiAmazonLogoFill } from "react-icons/pi";

const Header = () => {
    return (
        <div className='flex flex-row items-center justify-around px-4 py-4 border-b w-full'>
            <Link href="/" className='flex flex-row items-center gap-2'>
                <PiAmazonLogoFill size={40} className='cursor-pointer' />
                <p className='font-semibold '>MyEcommerce</p>
            </Link>
            <div className='hidden md:flex flex-row gap-4 items-center justify-between'>
                <p>Home</p>
                <p>Shop</p>
                <p>About Us</p>
                <p>Contact</p>
                <button className='border border-gray-500  py-1 px-2 text-xs rounded-xl'>Seller Dashboard</button>
            </div>
            <div className='flex flex-row gap-4'>
                <Image src={assets.search_icon} alt='' />
                <div className='flex flex-row gap-2'>
                    <Image src={assets.user_icon} alt='' />
                    <p>Account</p>
                </div>
            </div>
        </div>
    )
}

export default Header