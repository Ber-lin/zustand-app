import React, { useEffect } from "react";
import "./index.css";

function Delete() {
  const handle = (ev) => {
    if (ev.target.className === "item") {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          ev.target.remove();
        });
      } else {
        ev.target.remove();
      }
    }
  };
  useEffect(() => {
    let arr = document.getElementsByClassName("item");
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.setProperty("--i", "b" + (i + 1));
    }
  }, []);
  return (
    <>
      <div>
        <h2>点击删除</h2>
        <div className="list" id="list" style={{ margin: "" }}>
          {Array(10).fill(0).map((_, index) => (
            <div key={index} className="item" onClick={(e) => handle(e)}>
              {index+1}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Delete;
