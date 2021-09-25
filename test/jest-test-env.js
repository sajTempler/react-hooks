const Environment = require("jest-environment-jsdom");

/**
 * A custom environment to set the TextEncoder that is required _digest method
 */
module.exports = class CustomTestEnvironment extends Environment {
  async setup() {
    await super.setup();
    if (typeof this.global.TextEncoder === "undefined") {
      const { TextEncoder } = require("util");
      this.global.TextEncoder = TextEncoder;
    }

    if (typeof this.global.crypto === "undefined") {
      const { webcrypto } = require("crypto");
      this.global.crypto = webcrypto;
    }
  }
};
