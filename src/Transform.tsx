import React, { useState } from 'react';
import  './transform.less'

function Transform() {
  const [isMove,setIsMove]=useState(false)
  return (
    <div className='container'>
      <div className={ `box-item ${isMove?'move':''}`}></div>
      <div className={ `box-item ${isMove?'move':''}`}></div>
      <div className={ `box-item ${isMove?'move':''}`}></div>
      <div className={ `box-item ${isMove?'move':''}`}></div>
      <div className={ `box-item ${isMove?'move':''}`}></div>
      <button onClick={()=>setIsMove(true)}>click to move</button>
      <button onClick={()=>setIsMove(false)}>rest</button>
    </div>
  );
}

export default Transform;
