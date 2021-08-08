import React, { useCallback, useState } from "react";

import "./styles.css";

function Child({ changeTitle }) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = useCallback((event) => {
    setInputText(event.target.value);
  }, []);

  const newTitle = useCallback(() => {
    changeTitle(inputText);
  }, [changeTitle, inputText]);

  return (
    <div className="child">
      <h1>Child</h1>

      <input onChange={handleInputChange} type="text" />

      <button onClick={newTitle}>Change Title</button>
    </div>
  );
}

export default Child;
