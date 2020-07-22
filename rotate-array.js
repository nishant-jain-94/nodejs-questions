const rotateArray = (elements, shift) => {
    const collection = [...elements];
    while(shift > 1) {
        const poppedElement = collection.shift();
        collection.push(poppedElement);
        shift--;
    }
    return collection;
};

module.exports = rotateArray;