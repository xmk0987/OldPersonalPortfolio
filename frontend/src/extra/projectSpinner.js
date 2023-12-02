
// Shift all elements to the left
const handleNextLeft = (array) => {
    const newArray = array.map((_, index) => array[(index + 1) % array.length]);
    return newArray;
}

// Shift all elements to the right
const handleNextRight = (array) => {
    const newArray = array.map((_, index) => array[(index - 1 + array.length) % array.length]);
    return newArray;
}

export { handleNextLeft, handleNextRight };
