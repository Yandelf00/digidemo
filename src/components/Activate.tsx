"use client"
import React from 'react'
import { useVto } from '@/hooks/useVto'

export default function Activate() {
    const onOpen = useVto((state)=>state.onOpen)

    return (
        <div className='h-full w-full flex justify-center items-center'>
            <button className='w-[13rem] h-[3rem] bg-black rounded-full text-white ' onClick={onOpen}>Try vto on</button>
        </div>
    )
}
