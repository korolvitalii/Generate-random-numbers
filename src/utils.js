const generateRandomNumbers = (count, min = 1, max = 100) => {
  const randomNumbers = [];
  for (let i = 0; i < count; i += 1) {
    const rand = min + Math.random() * (max + 1 - min);
    randomNumbers.push(Math.floor(rand));
  }
  return randomNumbers;
};

const filterNumbersByType = (filterType, numbers) => {
  let filtered;
  if (filterType === 'even') {
    filtered = numbers.filter((number) => number % 2 === 0);
  }
  if (filterType === 'odd') {
    filtered = numbers.filter((number) => number % 2 !== 0);
  }
  return filtered;
};

const sortByType = (sortType, numbers) => {
  let sorted;
  if (sortType === 'minToMax') {
    sorted = numbers.sort((a, b) => a - b);
  } else if (sortType === 'maxToMin') {
    sorted = numbers.sort((a, b) => b - a);
  }
  return sorted;
};
export { generateRandomNumbers, filterNumbersByType, sortByType };
