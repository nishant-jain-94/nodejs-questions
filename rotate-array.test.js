const { expect } = require('chai');

const rotateArray = require('./rotate-array');

describe('Array Rotation', () => {
    it ('Should rotate the elements in the collection given a positive number for rotation', () => {
        const elements = [1, 2, 7, 8, 9];
        const expectedRotatedElements = [7, 8, 9, 1, 2];
        const actualRotatedElements = rotateArray(elements, 3);
        expect(expectedRotatedElements).to.deep.equals(actualRotatedElements);
    });
    
    it ('Should not rotate the elements in the collection given a negative number for rotation', () => {
        const elements = [1, 2, 7, 8, 9];
        const expectedRotatedElements = [1, 2, 7, 8, 9];
        const actualRotatedElements = rotateArray(elements, -3);
        expect(expectedRotatedElements).to.deep.equals(actualRotatedElements);
    });

    it ('Should not rotate the elements in the collection given a zero value for rotation', () => {
        const elements = [1, 2, 7, 8, 9];
        const expectedRotatedElements = [1, 2, 7, 8, 9];
        const actualRotatedElements = rotateArray(elements, -3);
        expect(expectedRotatedElements).to.deep.equals(actualRotatedElements);
    });

    it ('Should not rotate the elements in the collection given a value one for rotation', () => {
        const elements = [1, 2, 7, 8, 9];
        const expectedRotatedElements = [1, 2, 7, 8, 9];
        const actualRotatedElements = rotateArray(elements, 1);
        expect(expectedRotatedElements).to.deep.equals(actualRotatedElements);
    });

    it ('Should rotate the elements in the collection given a value 4 for rotation', () => {
        const elements = [1, 2, 7, 8, 9];
        const expectedRotatedElements = [8, 9, 1, 2, 7];
        const actualRotatedElements = rotateArray(elements, 4);
        expect(expectedRotatedElements).to.deep.equals(actualRotatedElements);
    });
});