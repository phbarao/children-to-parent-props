import React, { useCallback, useState } from "react";

import Child from "../Child";
import "./styles.css";

export default function Parent() {
  const [title, setTitle] = useState("Parent");

  const newTitle = useCallback((word) => setTitle(word), []);

  return (
    <div className="parent">
      <h1>{title}</h1>

      <Child changeTitle={newTitle} />
    </div>
  );
}
