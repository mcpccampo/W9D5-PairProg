const findMinimum = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const runningSum = (arr) => {
  let sumArr = [];
  if (!arr.length) {
    return [];
  }

  let arrRes = arr.reduce((acc, el) => {
    let total = acc + el;
    sumArr.push(total);
    return acc + el;
  }, 0);
  return sumArr;
};

const evenNumOfChars = (arr) => {
  // Your code here
};

const smallerThanCurr = (arr) => {
  // Your code here
};

const twoSum = (arr, target) => {
  // Your code here
};

const secondLargest = (arr) => {
  // Your code here
};

const shuffle = (arr) => {
  // Your code here
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
