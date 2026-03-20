function moveZerosToEnd(arr) {
    let nonZero = [];
    let zeros = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        } else {
            nonZero.push(arr[i]);
        }
    }

    return nonZero.concat(zeros);
    // return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
}

let arr = [10, 0, 5, 20, 0, 12, 0];
console.log(moveZerosToEnd(arr));