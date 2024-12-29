"use client"
import React from 'react'
import Vto from './Vto'
import { useVto } from '@/hooks/useVto'

export default function VtoSwitch() {
    const isOpen = useVto((state)=>state.isOpen)
    return (
        <>
            {isOpen ? (
                <Vto/>
            ) : (
                <></>
            )}
        </>
    )
}
