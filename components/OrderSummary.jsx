import React from 'react'

const OrderSummary = () => {
    return (
        <>
            <div className='flex flex-col xl:w-full w-full lg:max-w-2/5 gap-4 bg-gray-100 p-4 rounded-md'>
                <h1 className='font-bold text-2xl items-center text-left'>Order Summary</h1>
                <hr />
                <div className='flex flex-col gap-4'>
                    <h1 className='font-semibold text-gray-500'>Select Address</h1>
                    <input className='border-1 border-gray-300 max-w-[300px] bg-white  py-2 px-2 rounded-sm' type="text" placeholder='Select Address  ' />
                    <h1 className='font-semibold text-gray-500'> Promo Code</h1>
                    <input className='border-1 bg-white border-gray-300 max-w-[300px] py-2 px-2 rounded-sm' type="text" placeholder='Enter Promo Code' />
                    <button className='bg-red-500 text-white text-center text-xl rounded-md cursor-pointer px-4 py-2 max-w-[100px] hover:bg-red-700'>Apply</button>
                </div>
                <hr />
                <div className="space-y-4">
                    <div className="flex justify-between text-base font-medium">
                        <p className="uppercase text-gray-600">Items</p>
                        <p className="text-gray-800"></p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-600">Shipping Fee</p>
                        <p className="font-medium text-gray-800">Free</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-600">Tax (2%)</p>
                        <p className="font-medium text-gray-800"></p>
                    </div>
                    <div className="flex justify-between text-lg md:text-xl font-medium border-t pt-3">
                        <p>Total</p>
                        <p></p>
                    </div>
                    <button className="w-full bg-red-600 text-white py-3 mt-5 hover:bg-red-700 cursor-pointer">
                        Place Order
                    </button>
                </div>
            </div>


        </>
    )
}

export default OrderSummary