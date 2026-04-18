import { assets } from '@/assets/assets';
import Image from 'next/image'
import React from 'react'

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            image: assets.girl_with_headphone_image,
            title: "Unparalleled Sound",
            description: "Experience crystal-clear audio with premium headphones.",
        },
        {
            id: 2,
            image: assets.girl_with_earphone_image,
            title: "Stay Connected",
            description: "Compact and stylish earphones for every occasion.",
        },
        {
            id: 3,
            image: assets.boy_with_laptop_image,
            title: "Power in Every Pixel",
            description: "Shop the latest laptops for work, gaming, and more.",
        },
    ];
    return (

        <div>
            <h1 className='flex flex-col mx-auto text-3xl font-semibold mt-12 items-center'>Featured Products</h1>
            <div className='w-28 h-0.5 bg-red-500 mt-2 mx-auto'></div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-2 px-14'>
                {
                    products.map(({ id, image, title, description }) => (
                        <div key={id} className='relative group mx-auto'>
                            <Image src={image} alt='' className='max-w-[300px] h-auto object-cover group-hover:brightness-75 transition-all duration-300' />
                            <div className='group-hover:-translate-y-4 transition-all duration-300 absolute bottom-4 left-4 text-white'>
                                <h1 className='font-semibold text-md my-2'> {title} </h1>
                                <p> {description} </p>
                                <button className='bg-red-500 text-white rounded-sm px-4 py-2 my-2 cursor-pointer'>Buy Now</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default FeaturedProducts