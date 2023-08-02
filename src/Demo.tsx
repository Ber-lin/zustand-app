import React, { useState } from "react";
import "./person.css";

export default function Demo() {
  const [flag, setFlag] = useState(false);
  return <div>
    {flag&&<h2>这是一段text</h2>}
    <button onClick={()=>setFlag(!flag)}>toggle</button>
  </div>;
}
