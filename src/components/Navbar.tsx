import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className='w-full h-[4rem] text-gray-600 flex justify-between items-center px-5'>
        <p>Save 20% on your first contacts order</p>
        <h1 className='font-semibold'>WARBY PARKER</h1>
        <div className='flex flex-row gap-3 items-center'>
            <p>Locations</p>
            <p>Sign In</p>
            <p>|</p>
            <CiSearch className='h-[1.25rem] w-[1.25rem] '/>
            <CiHeart className='h-[1.25rem] w-[1.25rem] '/>
            <CiShoppingCart className='h-[1.25rem] w-[1.25rem] '/>
        </div>
    </nav>
  )
}
