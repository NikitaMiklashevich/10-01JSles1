function includesElement(array, element) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === element) {
            return true
        }
    }
    return false
};

let result = includesElement([1, 2, 4, 5, 6], 3);

// console.log(result);