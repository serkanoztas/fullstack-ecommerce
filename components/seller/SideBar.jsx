import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const SideBar = () => {

    const pathname = usePathname()
    const menuItems = [
        { name: 'Add Product', path: '/seller', icon: assets.add_icon },
        { name: 'Product List', path: '/seller/product-list', icon: assets.product_list_icon },
        { name: 'Orders', path: '/seller/orders', icon: assets.order_icon },
    ];


    return (
        <div className='flex flex-col gap-6 border-r-1 min-h-screen'>
            {
                menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <div key={item.name} className={`flex items-center py-3 px-4 gap-3 ${isActive ? "border-r-4 md:border-r-[6px] bg-orange-600/10 border-orange-500/90"
                            : "hover:bg-gray-100/90 border-white"}`}>
                            <Link href={item.path} >
                                <div>
                                    <Image src={item.icon} alt={`${item.name.toLowerCase()}_icon`} className="w-7 h-7" />
                                </div>
                            </Link>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default SideBar