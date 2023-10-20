import React, { useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import "./index.css";
import ClipPath from "./clipPath";
import Delete from "./delete";

const App = () => {
  const [isThumbnail, setIsThumbnail] = React.useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = () => {
    document.startViewTransition(() => {
      // flushSync(() => {
      setIsThumbnail((prev) => !prev);
      // });
    });
  };
  useEffect(() => {
    if (ref.current) {
      let item = document.createNodeIterator(ref.current);
      let root = item.nextNode(); // 下一层

      while (root) {
        console.log(root);
        if (root.nodeType !== 3) {
          root.setAttribute("data-index", 123); //给每个节点添加一个属性
        }
        root = item.nextNode();
      }
    }
  }, []);
  return (
    // <div>
    //   <div className="top-bar">
    //     <div className="top-bar-content">
    //       <h1>Move Cat</h1>
    //       <button onClick={handleMove}>Move</button>
    //     </div>
    //     { (
    //       <div
    //         onMouseEnter={handleMove}
    //         onMouseLeave={handleMove}
    //         className={`cat-img ${isThumbnail ?'thumbnail':'detailed-img'}`}
    //       />
    //     )}
    //   </div>
    //   {/* {!isThumbnail && (
    //     <div className="cat-details">
    //       <div

    //         className="cat-img detailed-img"
    //       />
    //       <div className="cat-desc">
    //         <h2>Cat Details</h2>
    //       </div>
    //     </div>
    //   )} */}
    // </div>
    <ClipPath/>
    // <Delete/>
    // <div ref={ref}>
    //   <div>1</div>
    //   <div>2</div>
    // </div>
  );
};

export default App;
