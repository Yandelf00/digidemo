"use client"
import React from 'react'
import TermsContent from './TermsContent'
import { useTerms } from '@/hooks/useTerms'

export default function Terms() {
    const terms = useTerms((state)=>state.isOpen)
    return (
        <>
            {terms ? (
                <TermsContent/>
            ) : (
                <></>
            )}
        </>
    )
}
