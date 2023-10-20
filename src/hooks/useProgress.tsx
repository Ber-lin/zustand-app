import { useEffect, useState } from "react"

function useHandleProgress(arr,setter){
    useEffect(()=>{
      let timer=null
      arr.forEach(item=>{
      const {delay,progress}=item
      timer=setTimeout(()=>{
        setter(progress)
      },delay)
    })
    return ()=>{
      clearTimeout(timer)
    }
    },[])
    
  }
  export function useProgress(arr=[{delay:1000,progress:10},{delay:3000,progress:20},{delay:5000,progress:40}]){
  
    const [a,setA]=useState(0)
    useHandleProgress(arr,setA)
  
    return (
      <>
      <div>{a}</div>
      </>
    )
  }