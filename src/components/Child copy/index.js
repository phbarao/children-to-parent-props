import React, { useCallback } from "react";

import "./styles.css";

function Child({ changeWord }) {
  const changeTitle = useCallback(() => {
    changeWord("New Title");
  }, [changeWord]);

  return (
    <div className="child">
      <h1>Child</h1>

      <button onClick={changeTitle}>Change Title</button>
    </div>
  );
}

export default Child;
