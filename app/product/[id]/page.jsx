"use client"
import Header from '@/components/Header';
import { AppContextProvider, useAppContext } from '@/context/AppContext';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Products = () => {

    const { id } = useParams();
    const { products } = useAppContext();
    const [productData, setProductData] = useState(null);
    const [mainImage, setMainImage] = useState(null);


    useEffect(() => {
        if (products.length > 0) {
            const product = products.find((product) => product._id == id);
            setProductData(product);
            //console.log(product);

            if (product?.image?.length > 0) {
                setMainImage(product.image[0]);
            }
        }
    }, [id, products])

    if (!productData) {
        return <div className="p-10">Loading...</div>
    }

    return (
        <>
            <Header />
            <div className='items-center mx-12 my-12 flex flex-col md:flex-row gap-12'>
                <div className='flex flex-col'>
                    <div className=" rounded-xl p-6 w-[350px] h-[350px] md:ml-12 flex items-center justify-center border-1 border-gray-500">
                        {
                            mainImage && (
                                <Image src={mainImage}
                                    alt={productData.name}
                                    width={300}
                                    height={300}
                                    className="object-contain w-full h-full"
                                />
                            )
                        }
                    </div>
                    <div className='grid grid-cols-2 mt-12 gap-6 mx-12'>
                        {
                            productData.image.map((image, index) => (
                                <>
                                    <div onClick={() => setMainImage(image)} key={index} className=" border-1 border-gray-500 rounded-xl p-6 w-[100px] h-[100px] items-center justify-center cursor-pointer">
                                        <Image src={image}
                                            alt="alt"
                                            className="w-full h-auto object-contain"
                                            width={1280}
                                            height={720}
                                        />
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold text-left'> {productData?.name} </h1>
                    <p className='my-12 text-sm'>{productData?.description}</p>
                    <p className="text-3xl font-medium mt-6">
                        ${productData.offerPrice}
                        <span className="text-base font-normal text-gray-800/60 line-through ml-2">
                            ${productData.price}
                        </span>
                    </p>
                    <hr className="bg-gray-600 my-6" />
                    <table className='table-auto max-w-72 w-full'>
                        <tbody>
                            <tr>
                                <td className="font-semibold">Brand</td>
                                <td className="text-gray-800/50 ">Generic</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Color</td>
                                <td className="text-gray-800/50 ">Multi</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Category</td>
                                <td className="text-gray-800/50">
                                    {productData?.category}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex flex-row gap-12 mt-12 mx-auto'>
                        <button className='text-black font-semibold bg-gray-100 max-w-100 lg:w-full rounded-sm px-4 py-2'>Add to Card</button>
                        <button className='text-white font-semibold bg-orange-500 max-w-100 lg:w-full rounded-sm px-4 py-2'>Buy Now</button>
                    </div>


                </div>
            </div>

        </>
    )
}




export default Products