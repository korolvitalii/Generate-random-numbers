import { generateRandomNumbers, filterNumbersByType, sortByType } from './utils';
import { renderNumbers } from './view';

const app = () => {
  const state = {
    randomNumbers: [],
    oodNumbers: [],
    evenNumbers: [],
  };

  const domElements = {
    pushButton: document.querySelector('.pushButton'),
    leftSide: document.querySelector('.leftSide'),
    rightSide: document.querySelector('.rightSide'),
  };

  const handler = (state) => {
    state.randomNumbers = generateRandomNumbers(20, 1, 100);
    const evenNumbers = filterNumbersByType('even', state.randomNumbers);
    const oodNumbers = filterNumbersByType('odd', state.randomNumbers);
    state.evenNumbers = sortByType('minToMax', evenNumbers);
    state.oodNumbers = sortByType('minToMax', oodNumbers);
  };

  const onClick = (e) => {
    e.preventDefault();
    handler(state);
    domElements.leftSide.innerHTML = renderNumbers(state.evenNumbers);
    domElements.rightSide.innerHTML = renderNumbers(state.oodNumbers);
  };

  domElements.pushButton.addEventListener('click', onClick);
};

export default app;
