import React, { useEffect, useRef, useState } from "react";
import "./index.less";

function TailWind() {
  const arr = [
    {
      id: 1,
      height: Math.ceil(Math.random() * 10) > 5 ? "200" : "180",
      color: Math.ceil(Math.random() * 10) > 5 ? "aqua" : "yellow",
    },
    {
      id: 2,
      height: Math.ceil(Math.random() * 10) > 5 ? "200" : "180",
      color: Math.ceil(Math.random() * 10) > 5 ? "aqua" : "yellow",
    },
    {
      id: 3,
      height: Math.ceil(Math.random() * 10) > 5 ? "200" : "180",
      color: Math.ceil(Math.random() * 10) > 5 ? "aqua" : "yellow",
    },
    {
      id: 4,
      height: Math.ceil(Math.random() * 10) > 5 ? "200" : "180",
      color: Math.ceil(Math.random() * 10) > 5 ? "aqua" : "yellow",
    },
    {
      id: 5,
      height: Math.ceil(Math.random() * 10) > 5 ? "200" : "180",
      color: Math.ceil(Math.random() * 10) > 5 ? "aqua" : "yellow",
    },
    {
      id: 6,
      height: Math.ceil(Math.random() * 10) > 5 ? "200" : "180",
      color: Math.ceil(Math.random() * 10) > 5 ? "aqua" : "yellow",
    },
    {
      id: 7,
      height: Math.ceil(Math.random() * 10) > 5 ? "200" : "180",
      color: Math.ceil(Math.random() * 10) > 5 ? "aqua" : "yellow",
    },
    {
      id: 8,
      height: Math.ceil(Math.random() * 10) > 5 ? "200" : "180",
      color: Math.ceil(Math.random() * 10) > 5 ? "aqua" : "yellow",
    },
  ];
  // 瀑布流，通过设置grid-row-end属性实现
  const cardRefs = useRef<HTMLDivElement>(null);
  const handleSetGridRowEnd = (index: number) => {
    const cardRef = cardRefs.current?.childNodes[index];
    if (!cardRef) return;
    const height = cardRef.offsetHeight;
    // grid-row-end: <line> | <span>;设置元素在网格布局中结束的位置
    cardRef.style.gridRowEnd = `span ${Math.ceil(height)}`;
  };
  const randomItem = () => {
    let styleArr = [0, 0, 0, 0, 1, 1, 2, 3];
    styleArr=styleArr.sort(()=>{
      return Math.random()*10>5?1:-1
    })
    let itemsEl = "";
    for (let i = 0; i < styleArr.length; i++) {
      if (cardRefs.current) {
        const node = document.createElement("div");
        node.classList.add(`grid-box-item-${i}`);
        node.innerText=i+''
        cardRefs.current?.appendChild(node);
      }
    }
  };

  // randomItem();

  useEffect(() => {
    // console.log(cardRefs.current?.childNodes);
    // Array.from(cardRefs.current?.childNodes).map((_,index)=>{
    //   handleSetGridRowEnd(index)
    // })
    randomItem();
    console.log(cardRefs.current?.innerHTML);
  }, []);

  return (
    // <div ref={cardRefs} className="container">
    //   {
    //     arr.map(item=>(<div className="recommendCard" key={item.id} style={{height: `${item.height}px`,backgroundColor:item.color,}}>{item.id}</div>))
    //   }
    // </div>
    <div ref={cardRefs} className="grid-box" id="box"></div>
  );
}

export default TailWind;
