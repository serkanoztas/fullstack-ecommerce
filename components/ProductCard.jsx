import { assets } from '@/assets/assets'
import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({ products }) => {

    const { currency, router } = useAppContext()

    return (
        <div onClick={() => router.push("/product/" + products._id)} className='flex flex-col cursor-pointer'>
            <div className='bg-gray-200 rounded-xl w-full h-62 items-center justify-center p-4 relative '>
                <Image className='w-3/4 h-full sm:w-3/4 sm:h-3/4 md:w-full md:h-full object-contain mx-auto hover:scale-125 transition-transform duration-300'
                    src={products.image[0]}
                    alt=''
                    width={800}
                    height={800} />
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                    <Image
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className="h-3 w-3"
                        src={assets.heart_icon}
                        alt="heart_icon"
                    />
                </button>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-md'> {products.name} </h1>
                <p className='text-sm font-stretch-50% text-gray-500'> {products.description.split("").slice(0, 20).join("")}... </p>
            </div>
            <div className='flex flex-row items-center justify-between   '>
                <p className='font-bold text-md'>${products.price} </p>
                <button className='border border-1 px-2 rounded-md cursor-pointer hover:bg-gray-400 hover:text-white transition-colors duration-300'>Buy now</button>
            </div>
        </div>

    )
}

export default ProductCard