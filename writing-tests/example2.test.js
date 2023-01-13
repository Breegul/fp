const {doStuff} = require("./example2");

describe("doStuff", () => {

    test('Returns true when passed a truthy value', () => {
        expect(doStuff(true)).toBe(true);
    })
    
})