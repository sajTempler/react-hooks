import { useEffect, useState } from "react";

import { getColors } from "../utils/digest.js";

/**
 * Generates background color based on SHA-1 hashed string input and
 * corresponding contrast appropriet text color (using sRGB Luma method)
 * @param {string} input
 * @returns {{ color: string, backgroundColor: string }}
 */
export const useColorPair = async (input) => {
  const [{ color, backgroundColor }, setColors] = useState({
    color: "",
    backgroundColor: "",
  });

  useEffect(() => {
    const calculate = async () => {
      const { color, backgroundColor } = await getColors(input);
      setColors({ color, backgroundColor });
    };

    calculate();
  }, [input]);

  return {
    color,
    backgroundColor,
  };
};
