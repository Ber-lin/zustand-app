import React, { ReactNode, useRef, useState } from "react";
import "./index.less";
import src from "../../assets/头像2.jpg";
import ReactDOM from "react-dom";

function TransformImg() {
  const [isPre, setIsPre] = useState(false);
  const currentImg = useRef(null);
  const handle = ({ target }) => {
    // const {target}:{target:HTMLImageElement}=e
    setIsPre(true);
    console.log(target);
    const { top, left } = target.getBoundingClientRect();
    const { width, height } = target;
    currentImg.current = target;
    const pic2 = document.cloneNode(target);
    console.log(pic2);
    pic2.style.position = "absolute";
    pic2.style.left = `${left}px`;
    pic2.style.top = `${top}px`;

    const mask = document.createElement("div");
    mask.classList.add("mask");
    // 5，将元素添加到body中
    mask.appendChild(pic2);
    document.body.appendChild(mask);

    setTimeout(() => {
      // 7，隐藏原图片
      target.style.visibility = "hidden";
      // 8，设置预览图片展示宽度以及位置
      pic2.style.position = "absolute";
      pic2.style.transition = "all .3s ease-in";
      //   pic2.style.willChange = "auto";
      //   pic2.style.width = "80%";
      pic2.style.left = "50%";
      pic2.style.top = `50%`;
      pic2.style.transform = `scale(1.5) translate(-${Math.floor(
        width / 2
      )}px,-${Math.floor(height / 2)}px)`;
    }, 0);
    mask.addEventListener("click", function () {
      // 10，预览图回到原图位置
      //   pic2.style.width = `${picWidth}px`;
      setIsPre(false);
      pic2.style.left = `${left}px`;
      pic2.style.top = `${top}px`;
      pic2.style.transform = "";
      // 12，显示原图
      setTimeout(() => {
        pic.style.visibility = "visible";
        // 13，删除蒙层以及预览图
        // this.remove();
      }, 300);
    });
  };
  return (
    <div className="container">
      <img src={src} className="img" alt="" onClick={handle} />
      <img src={src} className="img" alt="" onClick={handle} />
      <img src={src} className="img" alt="" onClick={handle} />
      <img src={src} className="img" alt="" onClick={handle} />
      <img src={src} className="img" alt="" onClick={handle} />
      {/* {isPre && currentImg.current && <Modal>{}</Modal>} */}
    </div>
  );
}
const Modal = ({ children }: { children: ReactNode }) => {
  return ReactDOM.createPortal(
    <div className="mask">{children}</div>,
    document.documentElement
  );
};
export default TransformImg;
