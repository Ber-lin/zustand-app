import React, { useState } from "react";

function Bibao() {
  const [value, setValue] = useState(1);
  const log = () => {
    setTimeout(() => {
      alert(value);
    }, 1000);
  };
  return (
    <div>
      <p>FunctionComponent</p>
      <div>value: {value}</div>
      <button onClick={() => setValue(value + 1)}>add</button>
      <br />
      <button onClick={log}>alert</button>
    </div>
  );
}

export default Bibao;
