import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { PiAmazonLogoFill } from "react-icons/pi";

const Footer = () => {
    return (
        <div>
            <div className='my-10 border-b-1 border-gray-500 py-12'>
                <div className='flex flex-row items-center justify-around px-12'>
                    <div className='flex flex-col'>
                        <PiAmazonLogoFill size={60}/>
                    </div>
                    <div>
                        <h1 className='font-semibold mb-6 text-lg'>Company</h1>
                        <ul className='flex flex-col text-gray-500 cursor-pointer text-sm'>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-semibold mb-6 text-lg'>Get in touch</h1>
                        <ul className='flex flex-col text-gray-500 cursor-pointer text-sm'>
                            <li>+1-234-567-890</li>
                            <li>contact@email.dev</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-center my-12'>
                <p className='text-sm'>Copyright 2025 © TesterCompany All Right Reserved.</p>
            </div>

        </div>
    )
}

export default Footer