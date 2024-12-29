import { create } from "zustand";

type useTermsProps = {
    isOpen : boolean;
    onOpen : ()=>void;
    onClose : ()=>void;
}

export const useTerms = create<useTermsProps>((set)=>({
    isOpen : false,
    onOpen : ()=>{set({isOpen : true})},
    onClose : ()=>{set({isOpen : false})},
}))