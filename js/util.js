const getRandomNumber = function (from, to) {
  if (from < 0 || to < 0) {
    return 'Range can only be positive';
  } else if (to < from || from === to) {
    return '"to" value must be more then "from" value'
  }
  return Math.floor(Math.random() * (to - from + 1)) + from;
}


const getRandomFractionalNumber = function (from, to, decimalPlaces) {
  if (from < 0 || to < 0) {
    return 'Range can only be positive';
  } else if (to < from || from === to) {
    return '"to" value must be more then "from" value'
  }
  return ((Math.random() * (to - from)) + from).toFixed(decimalPlaces);
}

const getRandomArrayElement = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
}

const makeUniqueRandomIntegerGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomNumber(min, max);

    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Iterate over all numbers from the range from ${min} to ${max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElements = (array) => {
  let arrayLength = getRandomNumber(0, array.length - 1);
  const getUniqueRandomArrayId = makeUniqueRandomIntegerGenerator(0, array.length - 1);
  let randomArray = [];
  while (arrayLength > 0) {
    randomArray.push(array[getUniqueRandomArrayId()]);
    arrayLength--;
  }
  return randomArray;
}

export {
  getRandomNumber,
  getRandomArrayElement,
  getRandomArrayElements,
  getRandomFractionalNumber
};
