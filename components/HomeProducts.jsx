"use client"
import { useAppContext } from '@/context/AppContext'
import React from 'react'
import ProductCard from './ProductCard';


const HomeProducts = () => {
    const { products, router } = useAppContext();
    const context = useAppContext();
    console.log(context);
    return (
        <div className='flex flex-col gap-3'>
            <p className='font-semibold text-lg mx-auto my-12'>Popular Products</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-12 gap-6'>
                {
                    products.map((products, index) => <ProductCard key={index} products={products} />)
                }
            </div>
            <button className='mx-auto mt-12 border border-1 rounded-md py-4 px-12 max-w-[300px] text-md text-gray-500 cursor-pointer font-semibold hover:bg-gray-100 transition-colors duration-300'>See More</button>
        </div>
    )
}

export default HomeProducts