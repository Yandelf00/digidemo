"use client"
import React from 'react'
import Vto from './Vto'
import { useVto } from '@/hooks/useVto'

export default function VtoSwitch() {
    const isOpen = useVto((state)=>state.isOpen)
    return (
        <>
            {isOpen ? (
                // <Vto/>
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex flex-col justify-center items-center">
                    <div className='w-[1000px] h-[800px] bg-white flex justify-center items-center '>

                        <iframe src="https://vtotesting.netlify.app/" allow='camera' className='w-full h-full'></iframe>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
