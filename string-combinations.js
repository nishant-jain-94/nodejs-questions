const generateBinaryNumbers = (n) => {
    const numbers = [];
    for (i = 0; i < Math.pow(2, n) ; i++) {
        const binaryNumber = i.toString(2);
        numbers.push(binaryNumber);
    }
    return numbers;
};

const generateCombinations = (str) => {
    const numbers = generateBinaryNumbers(str.length);
    const combinations = numbers.map((number) => 
        number
        .padStart(str.length, 0)
        .split('')
        .map((el, i) => el == 1 ? str[i] : '')
        .join('')
    );
    return combinations;
};

module.exports = generateCombinations;