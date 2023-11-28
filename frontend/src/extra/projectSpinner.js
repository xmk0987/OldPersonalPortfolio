// Shifts all elements in image array to the left
const handleNextLeft = (array) => {
    let newArray = [];
    let flag = true;
    let count = 0;
    while (flag){
        if (count + 1 >= array.length){
            newArray.push(array[0]);
            flag = false;
        }else{
            newArray.push(array[count + 1]);
            count++;
        }
    }
    return newArray;
}

// Shifts all elements in image array to the right
const handleNextRight = (array) => {
    console.log(array);
    let newArray = [];
    let flag = true;
    let count = 0;
    let index = array.length - 1;
    while (flag){
        if(count === 3){
            flag = false;
        } else{
            if (index > array.length -1){
                index = 0;
            }
            newArray.push(array[index]);
            index++;
            count++;
        }
    }
    console.log(newArray);
    return newArray;
}

export { handleNextLeft, handleNextRight };
