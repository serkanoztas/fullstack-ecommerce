import Header from '@/components/Header'
import OrderSummary from '@/components/OrderSummary'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col lg:flex-row px-6 md:px-24 mt-12 gap-32'>


                <div className='flex flex-col w-full lg:max-w-3/5'>
                    <div className='flex flex-row w-full justify-between mb-6'>
                        <h1 className='font-semibold text-2xl text-gray-500'>YOUR <span className='text-red-500'>CART</span></h1>
                        <p className='text-gray-500 text-xl'>0 Items</p>
                    </div>
                    <hr />
                    <div className='mt-6'>
                        <table className='min-w-full table-auto text-gray-500 text-sm md:text-md'>
                            <thead className="text-left">
                                <tr>
                                    <th className="text-nowrap pb-6 md:px-4 px-1 text-gray-600 font-medium" >Product Details</th>
                                    <th className=" pb-6 md:px-4 px-1 text-gray-600 font-medium">Price</th>
                                    <th className=" pb-6 md:px-4 px-1 text-gray-600 font-medium">Quantity</th>
                                    <th className=" pb-6 md:px-4 px-1 text-gray-600 font-medium">Subtotal</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <OrderSummary />
            </div>
        </>
    )
}

export default page