// based on https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest

const _digest = async (message) => {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest("SHA-1", msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
};

/**
 * 
 * @param {string} input 
 * @returns {{ color: string, backgroundColor: string }}
 */
export const getColors = async (input) => {
  const [r, g, b] = (await _digest(input))
    .substring(0, 8)
    .split(/(..)/g)
    .filter((s) => s)
    .map((v) => parseInt(v, 16));

  // calculates perceived lightness using the sRGB Luma method
  // Luma = (red * 0.2126 + green * 0.7152 + blue * 0.0722) / 255

  const perceivedLightness = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 255;
  const threshold = 0.5;

  return {
    color: `hsl(0, 0%, calc(${perceivedLightness - threshold} * -10000000%))`,
    backgroundColor: `rgb(${r},${g},${b})`,
  };
};
