function indicesSum(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(i, j);
      }
    }
  }
  if (result.length !== 0) {
    return result;
  } else {
    return "No solution found";
  }
}

const numbers = [1, 2, 3, 5, 7, 11, 13, 15];
const targetSum = 9;
const result = indicesSum(numbers, targetSum);
console.log(result);
