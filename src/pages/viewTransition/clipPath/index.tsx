import React from "react";
import "./index.css";
function ClipPath() {
  const handler = (e) => {
    console.log(e.clientX,e.clientY);
    document.documentElement.style.setProperty('--x', e.clientX + 'px')
    document.documentElement.style.setProperty('--y', e.clientY + 'px')
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        document.documentElement.classList.toggle("dark");
      });
    } else {
      document.documentElement.classList.toggle("dark");
    }
  };
  return (
    <div>
      <h1>view transition</h1>
      <button id="btn" onClick={(e)=>handler(e)}>切换</button>
      <div className="list">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </div>
  );
}

export default ClipPath;
