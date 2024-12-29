import { create } from "zustand";

type useVtoProps = {
    isOpen : boolean;
    onOpen : ()=>void;
    onClose : ()=>void;
}

export const useVto = create<useVtoProps>((set)=>({
    isOpen : false,
    onOpen : ()=>{set({isOpen : true})},
    onClose : ()=>{set({isOpen : false})},
}))