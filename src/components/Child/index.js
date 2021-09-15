import React, { useState } from "react";

import "./styles.css";

function Child({ changeTitle }) {
  const [inputText, setInputText] = useState("");

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function sendTitle() {
    changeTitle(inputText);
  }

  return (
    <div className="child">
      <h1>Child</h1>

      <input onChange={handleInputChange} type="text" />

      <button onClick={sendTitle}>Change Title</button>
    </div>
  );
}

export default Child;
