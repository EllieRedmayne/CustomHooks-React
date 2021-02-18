import { useState, useEffect } from "react";

function usePersistentState() {
  const [text, setText] = useState(localStorage.getItem("text") || "");

  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  function keepPersistent(e) {
    setText(e.target.value);
  }
  return [text, keepPersistent];
}

export default usePersistentState;
