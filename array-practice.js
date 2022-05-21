const findMinimum = (arr) => { // time complexity: O(n)
  let min = arr[0];           // space complexity: O(1)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const runningSum = (arr) => { // time complexity: O(n)
  let sumArr = [];            // space complexity: O(n)
  if (!arr.length) {
    return [];
  }
  arr.reduce((acc, el) => {
    let total = acc + el;
    sumArr.push(total);
    return acc + el;
  }, 0);
  return sumArr;
};

const evenNumOfChars = (arr) => { // time complexity: O(n)
  // Your code here               // space complexity: O(n)
  return arr.filter(el => el.length % 2 === 0).length;
};

const smallerThanCurr = (arr) => { //time complexity: O(n^2)
  // Your code here                 // space complexity: O(n)
  let newArray = [];
  let count;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++
      }
    }
    newArray.push(count);
  }
  return newArray;
};

const twoSum = (arr, target) => {  // time complexity: O(n^2)
  // space complexity: O(1)
  // Your code here
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;

};

const secondLargest = (arr) => { // time complexity: guess is O(n^3) // justifaction... [...arr] is O(n), math.max is O(n) depending on the amt of values, indexOf is O(n)
  // space complexity: guess is O(n)
  // Your code here
  if (!arr.length) {
    return undefined;
  }
  console.log(arr);
  // let largest = arr.indexOf(Math.max(...arr)); // is O(n^3);
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    largest = Math.max(largest, arr[i]);
  }
  largest = arr.indexOf(largest);
  arr.splice(largest, 1);
  if (arr.length < 2) {
    return arr[0];
  }
  else {
    //REFACTORED CODE IS NOW O(N) time complexity
    largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      largest = Math.max(largest, arr[i]);
    }
    //return Math.max(...arr); // time complexity here is O(n^2);
    return largest;
  }
};

const shuffle = (arr) => {
  // Your code here
  return arr.slice().sort(() => Math.random() - 0.5); //slice and sort are being chained, so not within each other meaning O(n) time complexity. Random is constant. Random is O(1) time complexity. Space complexity of the function is O(n).
  //return arr.sort(() => Math.random() - .5);

};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
