"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderNumbers = void 0;

const renderNumbers = numbers => {
  const html = numbers.reduce((acc, number) => {
    acc += `<div>${number}</div>`;
    return acc;
  }, '');
  return html;
};

exports.renderNumbers = renderNumbers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sIm5hbWVzIjpbInJlbmRlck51bWJlcnMiLCJudW1iZXJzIiwiaHRtbCIsInJlZHVjZSIsImFjYyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLGFBQWEsR0FBSUMsT0FBRCxJQUFhO0FBQ2pDLFFBQU1DLElBQUksR0FBR0QsT0FBTyxDQUFDRSxNQUFSLENBQWUsQ0FBQ0MsR0FBRCxFQUFNQyxNQUFOLEtBQWlCO0FBQzNDRCxJQUFBQSxHQUFHLElBQUssUUFBT0MsTUFBTyxRQUF0QjtBQUNBLFdBQU9ELEdBQVA7QUFDRCxHQUhZLEVBR1YsRUFIVSxDQUFiO0FBSUEsU0FBT0YsSUFBUDtBQUNELENBTkQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZW5kZXJOdW1iZXJzID0gKG51bWJlcnMpID0+IHtcbiAgY29uc3QgaHRtbCA9IG51bWJlcnMucmVkdWNlKChhY2MsIG51bWJlcikgPT4ge1xuICAgIGFjYyArPSBgPGRpdj4ke251bWJlcn08L2Rpdj5gO1xuICAgIHJldHVybiBhY2M7XG4gIH0sICcnKTtcbiAgcmV0dXJuIGh0bWw7XG59O1xuXG5leHBvcnQgeyByZW5kZXJOdW1iZXJzIH07XG4iXX0=