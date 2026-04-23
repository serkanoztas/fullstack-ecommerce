"use client"
import Header from '@/components/Header'
import SideBar from '@/components/seller/SideBar'
import Navbar from "@/components/seller/Navbar"
import React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='flex w-full'>
                <SideBar />
                {children}
            </div>
        </div>
    )
}

export default Layout