import React, { useState } from "react";
import useAnimation from "./useAnimation";
import ReactDOM from "react-dom";

function RAf() {
  const [time, setTime] = useState(0);
  useAnimation((e) => setTime(e.time));
  return (
    <div>
      Running for:
      <br />
      {time.toFixed(1)}s
    </div>
  );
}

export default RAf;
