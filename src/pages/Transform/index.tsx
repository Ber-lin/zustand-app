import React, { ReactNode, useRef, useState } from "react";
import "./index.less";
import src from "../../assets/头像2.jpg";
import ReactDOM from "react-dom";
import {throttle} from 'lodash';

function TransformImg() {
  const ref = useRef<HTMLImageElement>(null);
  const handleClickImg = () => {
    const pic = ref.current;
    const mask = document.createElement("div");
    mask.classList.add("mask");
    function distoryMask(dom: Node, { picToLeft, picToTop }){
      // 预览图回到原图位置
      dom.style.left = `${picToLeft}px`;
      dom.style.top = `${picToTop}px`;
      dom.style.transform = "";

      // 显示原图，销毁蒙层以及预览图
      setTimeout(() => {
        pic.style.visibility = "visible";
        this.remove();
      }, 300);
    }
    if (pic) {
      const pic2 = pic.cloneNode();
      // 获取图片1位置作为图片2初始位置
      const { top: picToTop, left: picToLeft } = pic.getBoundingClientRect();

      // 设置图片2的初始位和大小
      const picWidth = pic.width,
        picHeight = pic.height;
      pic2.style.position = "absolute";
      pic2.style.left = `${picToLeft}px`;
      pic2.style.top = `${picToTop}px`;
      //  clone的元素并不会继承原来元素的样式，需要单独设置下大小
      pic2.style.width = `${picWidth}px`;

      // 将元素添加到body中

      mask.appendChild(pic2);
      document.body.appendChild(mask);

      // 将中间态设置到下一轮event loop，以触发transition动画
      setTimeout(() => {
        // 隐藏原图片
        pic.style.visibility = "hidden";

        pic2.style.transition = "all .3s";
        // 让浏览器预知dom即将发生的变化，以提升性能
        pic2.style.willChange = "transform";

        // 居中
        const translateX = Math.floor(picWidth / 1.5 / 2);
        const translateY = Math.floor(picHeight / 1.5 / 2);
        pic2.style.left = "50%";
        pic2.style.top = `50%`;
        pic2.style.transform = `scale(1.5) translate(-${translateX}px,-${translateY}px)`;
      }, 0);

      mask.addEventListener("click", function () {
        distoryMask.call(this,pic2, { picToLeft, picToTop });
      });
      document.addEventListener("scroll", throttle(function () {
        distoryMask.call(mask,pic2, { picToLeft, picToTop });
      },500));

    }
    
  };
  return (
    <div className="container">
      <img
        src={src}
        alt=""
        ref={ref}
        onClick={handleClickImg}
        className="img"
      />
      <p>111111111</p>
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
