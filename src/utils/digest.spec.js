import { getColors } from "./digest.js";

test("should return the same value for the same input", async () => {
    expect.assertions(1);

    // case
    const testInput = "This is SPARTA!";

    // test
    const result_1 = await getColors(testInput).catch(console.error);
    const result_2 = await getColors(testInput).catch(console.error);

    // assert
    expect(result_1).toEqual(result_2);
});