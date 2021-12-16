import { cleanup, renderHook } from "@testing-library/react-hooks";

import { useColorPair } from "./useColorPair.js";

describe("useColorPair hook", () => {
  afterEach(async () => {
    await cleanup();
  });
  test("should return initial color and backgrondColor", async () => {
    expect.assertions(2);

    // test
    const { result } = renderHook(() => useColorPair());

    // assert
    expect(result.current.color).toEqual("initial");
    expect(result.current.backgroundColor).toEqual("initial");
  });

  test("should return color and backgrondColor", async () => {
    expect.assertions(4);

    // case
    const testInput = "This is SPARTA!";

    // test
    const { result, waitForNextUpdate } = renderHook(() =>
      useColorPair(testInput)
    );

    // assert
    expect(result.current.color).toEqual("initial");
    expect(result.current.backgroundColor).toEqual("initial");

    await waitForNextUpdate();

    // assert
    expect(result.current.color).toEqual(
      "hsl(0, 0%, calc(-0.25070117647058826 * -10000000%))"
    );
    expect(result.current.backgroundColor).toEqual("rgb(51,71,27)");
  });
});
