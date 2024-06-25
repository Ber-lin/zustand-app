import React, { useCallback, useEffect, useState } from "react";
import useDeepCompareEffect from "../../hooks/useDeepCompareEffect";
import { debounce } from "lodash";

function UseHook() {
  const [obj, setObj] = useState({ a: 1 });
  const [value, setValue] = useState("");

  const handleFetch = (signal) => {
    fetch("http://localhost:3001/getArticles", {
      method: "GET",
      signal,
    });
  };
  const onInputChange = useCallback((e) => setValue(e.target.value), []);

  useEffect(() => {
    const abortController = new window.AbortController();
    const signal = abortController.signal;
    handleFetch(signal);
    console.log(signal);
    return () => {
      if (signal && abortController.abort) {
        abortController.abort();
      }
    };
  }, [value]);
  useDeepCompareEffect(() => {
    console.log("reload");
  }, [obj]);
  return (
    <div>
      <input type="text" value={value} onChange={onInputChange} />
      {/* <button onClick={() => setObj({ a: 2 })}>click to setObj</button> */}
    </div>
  );
}
function Demo(){
  const onInputChange=(signal)=>{
    fetch("http://localhost:3001/getArticles",{signal})
  }
  return (
    <Input onInputChange={onInputChange}/>
  )
}
function Input({onInputChange}){
  const [input,setInput]=useState('')
  const onChange=useCallback((e)=>setInput(e.target.value),[])

  useEffect(()=>{
    const abortController = new window.AbortController();
    const signal = abortController.signal;
    // request 
    onInputChange(signal)
    return ()=>{
      if (signal && abortController.abort) {
        abortController.abort();
      }
    }
  },[input])
  return <input type='text' value={input} onChange={onChange}/>
}

export default Demo;
