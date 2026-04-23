"use client"
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react'

const AddProduct = () => {

  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Earphone');
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <div className='flex flex-col mx-24 mt-12 g'>
      <form className='max-w-lg flex flex-col gap-8'>
        <div>
          <p className="text-base font-medium ">Product Image</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">

            {[...Array(4)].map((_, index) => (
              <label key={index} htmlFor={`image${index}`}>
                <input onChange={(e) => {
                  const updatedFiles = [...files];
                  updatedFiles[index] = e.target.files[0];
                  setFiles(updatedFiles);
                }} type="file" id={`image${index}`} hidden />
                <Image
                  key={index}
                  className="max-w-24 cursor-pointer"
                  src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area}
                  alt=""
                  width={100}
                  height={100}
                />
              </label>
            ))}

          </div>
        </div>

        <div>
          <p className="text-base font-medium">Product Name</p>
          <input className='border-gray-500 border-1 rounded-md max-w-lg md:w-full py-2 px-2' onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Type Here' />
        </div>

        <div>
          <p className="text-base font-medium">Product Description</p>
          <input className='border-gray-500 border-1 md:h-30 text-base rounded-md max-w-lg md:w-full px-2' onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder='Type Here' />
        </div>

        <div className='flex flex-row gap-4 items-center'>
          <div>
            <p className="text-base font-medium">Category</p>
            <select className='border-1 border-gray-500 py-2 rounded-lg px-2' defaultValue={category}>
              <option value="Earphone">Earphone</option>
              <option value="Headphone">Headphone</option>
              <option value="Watch">Watch</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Laptop">Laptop</option>
              <option value="Camera">Camera</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <div>
            <p className="text-base font-medium">Product Price</p>
            <input className='border-gray-500 border-1 py-2 rounded-lg px-2 max-w-[100px] md:w-full' onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='0' />
          </div>
          <div>
            <p className="text-base font-medium">Offer Price</p>
            <input className='border-gray-500 border-1 py-2 rounded-lg px-2 max-w-[100px] md:w-full' onChange={(e) => setOfferPrice(e.target.value)} value={offerPrice} type="number" placeholder='0' />
          </div>
        </div>

        <button className='bg-orange-500 px-4 py-2 rounded-sm text-white max-w-[100px] md:w-full cursor-pointer'>ADD</button>
      </form>
    </div>
  )
}

export default AddProduct