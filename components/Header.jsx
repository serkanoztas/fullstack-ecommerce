"use client"
import { assets, BagIcon, BoxIcon, CartIcon } from '@/assets/assets'
import { AppContextProvider, useAppContext } from '@/context/AppContext';
import { useClerk, UserButton } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PiAmazonLogoFill } from "react-icons/pi";

const HeaderContent = () => {

    const { openSignIn } = useClerk();
    const { user, router } = useAppContext();

    return (
        <div className='flex flex-row items-center justify-around px-4 py-4 border-b w-full'>
            <Link href="/" className='flex flex-row items-center gap-2'>
                <PiAmazonLogoFill size={40} className='cursor-pointer' />
                <p className='font-semibold '>MyEcommerce</p>
            </Link>
            <div className='hidden md:flex flex-row gap-4 items-center justify-between'>
                <p onClick={() => router.push("/")}>Home</p>
                <p onClick={() => router.push("/all-products")}>Shop</p>
                <p >About Us</p>
                <p >Contact</p>
                <button onClick={() => router.push("/seller")} className='border border-gray-500  py-1 px-2 text-xs rounded-xl'>Seller Dashboard</button>
            </div>
            <div className='flex flex-row gap-4'>
                <Image src={assets.search_icon} alt='' />
                {
                    user ?
                        <>
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Action label='Cart' labelIcon={<CartIcon />} onClick={() => router.push("/cart")} />
                                </UserButton.MenuItems>
                                <UserButton.MenuItems>
                                    <UserButton.Action label='My Orders' labelIcon={<BagIcon />} onClick={() => router.push("/my-orders")} />
                                </UserButton.MenuItems>
                                <UserButton.MenuItems>
                                    <UserButton.Action label='Products' labelIcon={<BoxIcon />} onClick={() => router.push("/all-products")} />
                                </UserButton.MenuItems>
                            </UserButton>
                        </>
                        :
                        <button onClick={openSignIn} className='flex flex-row gap-2'>
                            <Image src={assets.user_icon} alt='' />
                            <p className='cursor-pointer'>Account</p>
                        </button>
                }
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <AppContextProvider>
            <HeaderContent />
        </AppContextProvider>
    )
}

export default Header