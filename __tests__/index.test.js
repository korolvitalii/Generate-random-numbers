import { filterNumbersByType, generateRandomNumbers, sortByType } from '../src/utils';

const numbers = [7, 88, 15, 23, 12, 25, 33, 25, 29, 64, 29, 35, 41, 98, 62, 68, 72, 76, 90, 3];

describe('funtion filterNumbersByType', () => {
  it('should filter numbers by odd', () => {
    const result = filterNumbersByType('odd', numbers);
    const expectedResult = [7, 15, 23, 25, 33, 25, 29, 29, 35, 41, 3];

    expect(result).toEqual(expectedResult);
  });
  it('should filter numbers by even', () => {
    const result = filterNumbersByType('even', numbers);
    const expectedResult = [88, 12, 64, 98, 62, 68, 72, 76, 90];

    expect(result).toEqual(expectedResult);
  });
});

describe('funtion generateRandomNumbers', () => {
  it('should generate the correct number of numbers', () => {
    const resultWithTenNumbers = generateRandomNumbers(10, 1, 100);
    const resultWithTwentyNumbers = generateRandomNumbers(20, 1, 100);
    const resultWithThirtyNumbers = generateRandomNumbers(30, 1, 100);

    expect(resultWithTenNumbers.length).toBe(10);
    expect(resultWithTwentyNumbers.length).toBe(20);
    expect(resultWithThirtyNumbers.length).toBe(30);
  });
  it('should generate the correct numbers range', () => {
    const numbers = generateRandomNumbers(10, 5, 50);
    const minNumberOfNumbers = Math.min(...numbers);
    const maxNumberOfNumbers = Math.max(...numbers);
    expect(minNumberOfNumbers >= 5).toBeTruthy();
    expect(maxNumberOfNumbers <= 50).toBeTruthy();
  });
});

describe('funtion sortByType', () => {
  it('should correct sort min to max numbers', () => {
    const sortedMinToMax = sortByType('minToMax', numbers);
    expect(sortedMinToMax[0]).toBe(3);
    expect(sortedMinToMax[sortedMinToMax.length - 1]).toBe(98);
  });
  it('should correct sort max to min numbers', () => {
    const sortedMaxToMin = sortByType('maxToMin', numbers);
    expect(sortedMaxToMin[0]).toBe(98);
    expect(sortedMaxToMin[sortedMaxToMin.length - 1]).toBe(3);
  });
});
