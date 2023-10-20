import React, { useState } from "react";
import "./person.css";
import { useBoundStore,useSplitStore,inc as increase, setText as updateText } from "./store/splitStore";

export default function Demo() {
  const { count, text, inc, setText } = useBoundStore();
  const {count:num,text:name}=useSplitStore()
  return (
    <>
    <div style={{ border: "1px solid #fff" }}>
      <p>
        count:{count} text:{text}
      </p>
      <button onClick={inc}>+1</button>
      <button onClick={() => setText("Frank")}>set text</button>
    </div>
    <div style={{ border: "1px solid #fff" }}>
      <p>
      num:{num} name:{name}
      </p>
      <button onClick={increase}>+1</button>
      <button onClick={() => updateText("Frank")}>set name</button>
    </div>
  </>
  )
  
}
