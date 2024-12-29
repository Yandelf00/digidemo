"use client"
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';
import { useTerms } from '@/hooks/useTerms';
import { useState } from 'react';
import { useVto } from '@/hooks/useVto';



export default function TermsContent() {
    const onOpen = useVto((state)=>state.onOpen)
    const onClose = useTerms((state)=>state.onClose)
    const [firstIsChecked, setFirstIsChecked] = useState<boolean>(false)
    const [secondIsChecked, setSecondIsChecked] = useState<boolean>(false)


    const handleFirstCheckboxChange = (checked: boolean) => {
        console.log(firstIsChecked)
        setFirstIsChecked(checked);
    };
    const handleSecondCheckboxChange = (checked: boolean) => {
        setSecondIsChecked(checked);
    };
    
    function openVto(){
        if(firstIsChecked && secondIsChecked){
            onOpen()
            onClose() 
        }
    }
    return (
        <div className='fixed inset-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center '>
            <div className='h-[80%] w-[80%] bg-white rounded-3xl 
            bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-400 via-purple-200 to-white
            flex flex-col'>
                <div className='w-full flex flex-row px-7 pt-9 justify-between items-center'>
                    <Image src={"/assets/digilogo.png"} alt='logo' height={100} width={100}/>
                    <RxCross2 onClick={onClose} className='h-[1.7rem] cursor-pointer w-[1.7rem] ' />
                </div>
                <div className='w-full h-full flex pt-10 justify-center items-start '>
                    <div className='h-[85%] w-[60%] bg-[#037EF3] rounded-2xl px-20 flex flex-col pt-5 '>
                        <div className='w-full flex justify-center'>
                            <h1 className='text-white text-[2rem] font-bold'>Our <span className='text-[#FF7BDA] '>Privacy Promise</span> to you</h1>
                        </div>
                        <div className='w-full flex justify-center mt-5'>
                            <h1 className='text-white text-[1rem] font-light'>To access this service, you must be at least 18 years old</h1>
                        </div>
                        <div className='w-full flex justify-start mt-5'>
                            <h1 className='text-white text-[1rem] font-light'>
                                L’Oreal USA, Inc. (‘’L’Oreal”, “We”, or “Us”) allows 
                                you virtually try on selected  products through a virtual 
                                try-on feature. If you select to use the live camera or upload a photo, 
                                Your image is processed to provide  
                                you with the virtual try-on feature consistent with this consent.
                            </h1>
                        </div>
                        <div className='w-full flex justify-start mt-5'>
                            <h1 className='text-white text-[1rem] font-bold '>
                                Privacy Note
                            </h1>
                        </div>
                        <div className='w-full flex flex-col justify-start gap-10 mt-10'>
                            <div className='flex flex-row gap-5'>
                                <CheckBox handleCheckBox={handleFirstCheckboxChange} isChecked = {firstIsChecked}/>
                                <p className='text-white'>
                                    I consent to the scanning of my face and the processing of my 
                                    image as  described in the  Virtual Try-On Information Notice 
                                    and agree to all its terms, including as regards use and transfer.
                                </p>
                            </div>
                            <div className='flex flex-row gap-5'>
                                <CheckBox handleCheckBox={handleSecondCheckboxChange} isChecked = {secondIsChecked}/>
                                <p className='text-white'>
                                    I consent to the scanning of my face and the processing of my 
                                    image as  described in the  Virtual Try-On Information Notice 
                                    and agree to all its terms, including as regards use and transfer.
                                </p>
                            </div>  
                        </div>
                        <div className='w-full flex text-white justify-start mt-10'>
                            <button onClick={openVto} className='bg-[#037EF3] w-[10rem] h-[3rem] rounded-full
                            border border-1 border-white hover:bg-white hover:text-[#037EF3]
                            transition ease-in-out duration-200 '>
                                I consent
                            </button>
                        </div>


                    </div>
                </div>
            </div>        
        </div>
    )
}

type checkBoxProps = {
    isChecked : boolean
    handleCheckBox : (isChecked : boolean)=>void
}

function CheckBox(props : checkBoxProps){
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.handleCheckBox(event.target.checked);
    };
    return(
        <div className="inline-flex items-center mb-5">
            <label className="flex items-center cursor-pointer relative">
                <input type="checkbox" onChange={onChange}  checked={props.isChecked} className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-white checked:border-blue-600" id="check1" />
                <span className="absolute text-blue-600 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                </span>
            </label>
        </div>
    )
}