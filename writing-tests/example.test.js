const each = require('jest-each').default;
const {findLargest} = require("./example");

describe("findLargest", () => {
    it("Exists", () => {
        expect(findLargest).toBeDefined();
    })
    
    it("Is a function", () => {
        expect(findLargest instanceof Function).toBe(true);
    })

    it("Returns a number", () => {
        expect(typeof findLargest()).toBe("number");
    })

    it("Returns -1 if the array has no values", () => {
        expect(findLargest([])).toEqual(-1);
    })

    it("Returns the index of the largest number in the array", () => {
        expect(findLargest([1,3,4,2])).toEqual(2);
    })

    each([
        [0, [78, 1, 5, 65, 12]],
        [0, [-10, -100, -10000, -10000000, -99999999999999]],
        [4, [1, 2, 3, 4, 5, 0]]
    ]).it('Returns %s when passed %s', (expected, arr) => {
        expect(findLargest(arr)).toEqual(expected);
    })
})