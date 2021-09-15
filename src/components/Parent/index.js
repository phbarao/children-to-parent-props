import React, { useState } from "react";

import Child from "../Child";
import "./styles.css";

function Parent() {
  const [title, setTitle] = useState("Parent");

  function newTitle(word) {
    setTitle(word);
  }

  return (
    <div className="parent">
      <h1>{title}</h1>

      <Child changeTitle={newTitle} />
    </div>
  );
}

export default Parent;
