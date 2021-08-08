import React, { useCallback, useState } from "react";

import Child from "../Child";
import "./styles.css";

function Parent() {
  const [word, setWord] = useState("Parent");

  return (
    <div className="parent">
      <h1>{word}</h1>

      <Child changeWord={(word) => setWord(word)} />
    </div>
  );
}

export default Parent;
