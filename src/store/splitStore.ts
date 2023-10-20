import { create } from "zustand";

export const useBoundStore=create((set)=>({
    count:0,
    text:'?',
    inc:()=>set((state)=>({count:state.count+1})),
    setText:(text:string)=>set({text})
}))
export const useSplitStore=create(()=>({
    count:0,
    text:'??'
}))
export const inc=()=>useSplitStore.setState((state)=>({count:state.count+1}))
export const setText=(text:string)=>useSplitStore.setState({text})