import { useEffect, useState } from "react";

import { getColors } from "../utils/digest.js";

const _colorPairMap = new Map();

/**
 * Generates background color based on SHA-1 hashed string input and
 * corresponding contrast appropriet text color (using sRGB Luma method)
 * @param {string} input
 * @returns {{ color: string, backgroundColor: string }}
 */
export const useColorPair = (input) => {
  let componentMounted = true;
  const [{ color, backgroundColor }, setColors] = useState({
    color: "initial",
    backgroundColor: "initial",
  });

  useEffect(() => {
    if (!!input) {
      const calculate = async () => {
        if (componentMounted) {
          if (!_colorPairMap.has(input)) {
            const { color, backgroundColor } = await getColors(input ?? "");
            _colorPairMap.set(
              input,
              JSON.stringify({ color, backgroundColor })
            );
          }

          const { color, backgroundColor } = JSON.parse(
            _colorPairMap.get(input)
          );
          setColors({ color, backgroundColor });
        }
      };

      calculate();
    } else {
      if (componentMounted) {
        setColors({
          color: "initial",
          backgroundColor: "initial",
        });
      }
    }
    return () => {
      componentMounted = false;
    };
  }, [input]);

  return {
    color,
    backgroundColor,
  };
};
