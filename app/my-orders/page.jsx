import { assets } from '@/assets/assets'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col max-w-[1000px] w-full mx-auto mt-12'>
                <h1 className='font-semibold text-2xl my-4'>My Orders</h1>
                <hr className='mb-4'/>
                <div className='flex flex-row w-full justify-between items-center text-sm'>
                    <div className='flex flex-row gap-4'>
                        <div>
                            <Image src={assets.box_icon} alt='' />
                        </div>
                        <div>
                            <h1>Apple Airpods</h1>
                            <p>items: 1</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p>asdas</p>
                        <p>asdasdasd</p>
                        <p>asdasd</p>
                        <p>asdasd</p>
                    </div>
                    <div>
                        <p>$4000</p>
                    </div>
                    <div>
                        <p>Method: </p>
                        <p>Date: </p>
                        <p>Payment: </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page