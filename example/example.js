import React, { useState } from "react";
import { render } from "react-dom";

import { useColorPair } from "../src/hooks/useColorPair";

const inputStyles = { height: "2rem", width: "50%", fontSize: "2rem", border: "solid 1px" ,borderRadius: ".5rem", padding: "1rem" };

const App = () => {
  const [input, setInput] = useState("");

  /**
   * @type {{ color: string, backgroundColor: string }}
   */
  const { color, backgroundColor } = useColorPair(input);

  return (
    <input
      style={{ ...inputStyles, color, backgroundColor }}
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

render(<App />, document.getElementById("root"));
