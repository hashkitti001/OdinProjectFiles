const {capitalize} = require("../code/capitalize");
describe("Capitalize", () => {
    test("Name ", () => {
        expect(capitalize("Rene")).toBe("ener");
    });
    test("Is Undefined", () => {
        expect(reverseString().toBe(""));
    });
    test("Is Null", () => {
        expect(reverseString(null).toBe(""));
    });
});