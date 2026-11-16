
function applyOperation(numbers, operation) {
    let result = [];

    for (let num of numbers) {
        result.push(operation(num));
    }

    return result;
}

// Double operation
const double = num => num * 2;

// Square operation
const square = num => num * num;

let numbers = [1, 2, 3, 4];

console.log("Double:", applyOperation(numbers, double));
console.log("Square:", applyOperation(numbers, square));
