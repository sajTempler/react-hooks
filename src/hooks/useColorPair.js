import { useEffect, useState } from "react";

import { getColors } from "../utils/digest.js";

/**
 * Generates background color based on SHA-1 hashed string input and
 * corresponding contrast appropriet text color (using sRGB Luma method)
 * @param {string} input
 * @returns {{ color: string, backgroundColor: string }}
 */
export const useColorPair = (input) => {
  const [{ color, backgroundColor }, setColors] = useState({
    color: "initial",
    backgroundColor: "initial",
  });

  useEffect(() => {
    if (!!input) {
      const calculate = async () => {
        const { color, backgroundColor } = await getColors(input);
        setColors({ color, backgroundColor });
      };

      calculate();
    } else {
      setColors({
        color: "initial",
        backgroundColor: "initial",
      });
    }
  }, [input]);

  return {
    color,
    backgroundColor,
  };
};
