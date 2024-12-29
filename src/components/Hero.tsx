"use client"
import React from 'react'
import Image from 'next/image'
import { CiHeart } from "react-icons/ci";
import { useTerms } from '@/hooks/useTerms';

export default function Hero() {
    const onOpen = useTerms((state)=>state.onOpen)
  return (
    <div className='w-full h-full flex mt-10 justify-center items-start'>
        <div className='h-[80%] w-[90%] flex flex-row justify-between items-center '>
            <div className='h-full w-[50%] bg-[url("/assets/warby.png")] flex pb-5 pr-5 justify-end items-end'>
                <button onClick={onOpen} className='w-[17rem] text-white h-[3rem] bg-[#020014] rounded-full'>
                    Try on virtually
                </button>
            </div>
            <div className='h-full w-[45%] flex items-center'>
                <div className='w-full h-[35rem] bg-white shadow-2xl p-5 rounded-md flex flex-col'>
                    <div className='w-full flex text-gray-600 flex-row justify-between'>
                        <h1 className='text-[3rem]'>Blakeley</h1>
                        <CiHeart className='h-[2rem] w-[2rem] '/>
                    </div>
                    <div className='bg-blue-100 w-[13rem] mt-5 text-center rounded-sm'>
                        <p className='text-blue-400 font-semibold'>Save 15% on two Rx pairs</p>
                    </div>
                    <div className='border border-1 border-b-gray-300
                    border-x-0 border-t-0 mt-6 pb-2'>
                        <p className='text-gray-500 text-[1.2rem]'>Starting at 95 with prescription lenses</p>
                    </div>
                    <div className='mt-5'>
                        <p className='text-gray-500 font-extralight text-[1.2rem]'>Violet Magnolia</p>
                    </div>
                    <div className='flex flex-row mt-3 gap-3'>
                        <div className='w-4 h-4 bg-orange-500 rounded-full'></div>
                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                        <div className='w-4 h-4 bg-violet-500 rounded-full'></div>
                    </div>
                    <div className='mt-7 flex flex-row gap-3 font-bold'>
                        <button className='w-[9rem] h-[3rem] border border-1 border-gray-600
                        rounded-lg'>
                            Medium
                        </button>
                        <button className='w-[9rem] h-[3rem] border border-1 border-gray-600
                        rounded-lg'>
                            Wide
                        </button>
                        <button className='w-[9rem] h-[3rem] border border-1 border-gray-600
                        rounded-lg text-blue-500'>
                           Width guide 
                        </button>
                    </div>
                    <div className='mt-10 flex font-bold flex-row gap-3'>
                        <button className='h-[3rem] w-[17rem] bg-blue-600
                        text-white rounded-full'>
                            Select lenses and buy
                        </button>
                        <button className='h-[3rem] w-[17rem] bg-blue-600
                        text-white rounded-full'>
                            Try at home for free
                        </button>
                    </div>
                    <div className='mt-10'>
                        <p className='text-blue-500 font-bold'>Find a store near</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
