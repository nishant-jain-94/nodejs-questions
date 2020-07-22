const { expect } = require('chai');
const generateCombinations = require('./string-combinations');

describe('String Combinations', () => {
    it('Should generate all the combinations of the 3 digit string', () => {
        const expectedCombinations = ['', 'c', 'b', 'bc', 'a', 'ac', 'ab', 'abc'];
        const actualCombinations = generateCombinations('abc');
        expect(expectedCombinations).to.deep.equals(actualCombinations);
    });

    it('Should return empty string when an empty string is passed', () => {
        const expectedCombinations = [''];
        const actualCombinations = generateCombinations('');
        expect(expectedCombinations).to.deep.equals(actualCombinations);
    });
});