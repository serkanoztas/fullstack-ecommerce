import { assets } from '@/assets/assets'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='flex flex-row mx-auto '>
                <div className='flex flex-col items-left mx-32 mt-6 gap-6 w-[300px] lg:w-[500px]'>
                    <h1 className='mx-auto mt-6 font-semibold text-2xl'>Add Shipping Address</h1>
                    <input className='border-1 border-gray-300 max-w-[500px] py-2 px-2 rounded-sm' type="text" placeholder='John Doe' />
                    <input className='border-1 border-gray-300 max-w-[500px] py-2 px-2 rounded-sm' type="text" placeholder='1234567890' />
                    <input className='border-1 border-gray-300 max-w-[500px]] py-2 px-2 rounded-sm' type="text" placeholder='123456' />
                    <input className='border-1 border-gray-300 max-w-[500px] h-40  py-2 px-2 rounded-sm' type="text" placeholder='123 Main St' />
                    <div className='flex flex-row gap-8 mx-6'>
                        <input className='border-1 border-gray-300 w-[100px] lg:w-[250px] py-2 px-2 rounded-sm' type="text" placeholder='Istanbul' />
                        <input className='border-1 border-gray-300 w-[100px] lg:w-[250px] py-2 px-2 rounded-sm' type="text" placeholder='IT' />
                    </div>
                    <button className='flex items-center text-xl mx-auto mt-6 justify-center bg-black text-white rounded-xl px-4 py-2 w-full  '>SAVE ADDRESS</button>
                </div>
                <div className='mx-auto mt-24'>
                    <Image
                        className="md:mr-16 mt-16 md:mt-0"
                        src={assets.my_location_image}
                        alt="my_location_image"
                    />
                </div>
            </div>
        </>
    )
}

export default page