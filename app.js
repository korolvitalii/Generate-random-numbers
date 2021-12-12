"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils");

var _view = require("./view");

const app = () => {
  const state = {
    randomNumbers: [],
    oodNumbers: [],
    evenNumbers: []
  };
  const domElements = {
    pushButton: document.querySelector('.pushButton'),
    leftSide: document.querySelector('.leftSide'),
    rightSide: document.querySelector('.rightSide')
  };

  const handler = state => {
    state.randomNumbers = (0, _utils.generateRandomNumbers)(20, 1, 100);
    const evenNumbers = (0, _utils.filterNumbersByType)('even', state.randomNumbers);
    const oodNumbers = (0, _utils.filterNumbersByType)('odd', state.randomNumbers);
    state.evenNumbers = (0, _utils.sortByType)('minToMax', evenNumbers);
    state.oodNumbers = (0, _utils.sortByType)('minToMax', oodNumbers);
  };

  const onClick = e => {
    e.preventDefault();
    handler(state);
    domElements.leftSide.innerHTML = (0, _view.renderNumbers)(state.evenNumbers);
    domElements.rightSide.innerHTML = (0, _view.renderNumbers)(state.oodNumbers);
  };

  domElements.pushButton.addEventListener('click', onClick);
};

var _default = app;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwic3RhdGUiLCJyYW5kb21OdW1iZXJzIiwib29kTnVtYmVycyIsImV2ZW5OdW1iZXJzIiwiZG9tRWxlbWVudHMiLCJwdXNoQnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGVmdFNpZGUiLCJyaWdodFNpZGUiLCJoYW5kbGVyIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsTUFBTTtBQUNoQixRQUFNQyxLQUFLLEdBQUc7QUFDWkMsSUFBQUEsYUFBYSxFQUFFLEVBREg7QUFFWkMsSUFBQUEsVUFBVSxFQUFFLEVBRkE7QUFHWkMsSUFBQUEsV0FBVyxFQUFFO0FBSEQsR0FBZDtBQU1BLFFBQU1DLFdBQVcsR0FBRztBQUNsQkMsSUFBQUEsVUFBVSxFQUFFQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FETTtBQUVsQkMsSUFBQUEsUUFBUSxFQUFFRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FGUTtBQUdsQkUsSUFBQUEsU0FBUyxFQUFFSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkI7QUFITyxHQUFwQjs7QUFNQSxRQUFNRyxPQUFPLEdBQUlWLEtBQUQsSUFBVztBQUN6QkEsSUFBQUEsS0FBSyxDQUFDQyxhQUFOLEdBQXNCLGtDQUFzQixFQUF0QixFQUEwQixDQUExQixFQUE2QixHQUE3QixDQUF0QjtBQUNBLFVBQU1FLFdBQVcsR0FBRyxnQ0FBb0IsTUFBcEIsRUFBNEJILEtBQUssQ0FBQ0MsYUFBbEMsQ0FBcEI7QUFDQSxVQUFNQyxVQUFVLEdBQUcsZ0NBQW9CLEtBQXBCLEVBQTJCRixLQUFLLENBQUNDLGFBQWpDLENBQW5CO0FBQ0FELElBQUFBLEtBQUssQ0FBQ0csV0FBTixHQUFvQix1QkFBVyxVQUFYLEVBQXVCQSxXQUF2QixDQUFwQjtBQUNBSCxJQUFBQSxLQUFLLENBQUNFLFVBQU4sR0FBbUIsdUJBQVcsVUFBWCxFQUF1QkEsVUFBdkIsQ0FBbkI7QUFDRCxHQU5EOztBQVFBLFFBQU1TLE9BQU8sR0FBSUMsQ0FBRCxJQUFPO0FBQ3JCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUgsSUFBQUEsT0FBTyxDQUFDVixLQUFELENBQVA7QUFDQUksSUFBQUEsV0FBVyxDQUFDSSxRQUFaLENBQXFCTSxTQUFyQixHQUFpQyx5QkFBY2QsS0FBSyxDQUFDRyxXQUFwQixDQUFqQztBQUNBQyxJQUFBQSxXQUFXLENBQUNLLFNBQVosQ0FBc0JLLFNBQXRCLEdBQWtDLHlCQUFjZCxLQUFLLENBQUNFLFVBQXBCLENBQWxDO0FBQ0QsR0FMRDs7QUFPQUUsRUFBQUEsV0FBVyxDQUFDQyxVQUFaLENBQXVCVSxnQkFBdkIsQ0FBd0MsT0FBeEMsRUFBaURKLE9BQWpEO0FBQ0QsQ0E3QkQ7O2VBK0JlWixHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21OdW1iZXJzLCBmaWx0ZXJOdW1iZXJzQnlUeXBlLCBzb3J0QnlUeXBlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyByZW5kZXJOdW1iZXJzIH0gZnJvbSAnLi92aWV3JztcblxuY29uc3QgYXBwID0gKCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICByYW5kb21OdW1iZXJzOiBbXSxcbiAgICBvb2ROdW1iZXJzOiBbXSxcbiAgICBldmVuTnVtYmVyczogW10sXG4gIH07XG5cbiAgY29uc3QgZG9tRWxlbWVudHMgPSB7XG4gICAgcHVzaEJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnB1c2hCdXR0b24nKSxcbiAgICBsZWZ0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnRTaWRlJyksXG4gICAgcmlnaHRTaWRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHRTaWRlJyksXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlciA9IChzdGF0ZSkgPT4ge1xuICAgIHN0YXRlLnJhbmRvbU51bWJlcnMgPSBnZW5lcmF0ZVJhbmRvbU51bWJlcnMoMjAsIDEsIDEwMCk7XG4gICAgY29uc3QgZXZlbk51bWJlcnMgPSBmaWx0ZXJOdW1iZXJzQnlUeXBlKCdldmVuJywgc3RhdGUucmFuZG9tTnVtYmVycyk7XG4gICAgY29uc3Qgb29kTnVtYmVycyA9IGZpbHRlck51bWJlcnNCeVR5cGUoJ29kZCcsIHN0YXRlLnJhbmRvbU51bWJlcnMpO1xuICAgIHN0YXRlLmV2ZW5OdW1iZXJzID0gc29ydEJ5VHlwZSgnbWluVG9NYXgnLCBldmVuTnVtYmVycyk7XG4gICAgc3RhdGUub29kTnVtYmVycyA9IHNvcnRCeVR5cGUoJ21pblRvTWF4Jywgb29kTnVtYmVycyk7XG4gIH07XG5cbiAgY29uc3Qgb25DbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhhbmRsZXIoc3RhdGUpO1xuICAgIGRvbUVsZW1lbnRzLmxlZnRTaWRlLmlubmVySFRNTCA9IHJlbmRlck51bWJlcnMoc3RhdGUuZXZlbk51bWJlcnMpO1xuICAgIGRvbUVsZW1lbnRzLnJpZ2h0U2lkZS5pbm5lckhUTUwgPSByZW5kZXJOdW1iZXJzKHN0YXRlLm9vZE51bWJlcnMpO1xuICB9O1xuXG4gIGRvbUVsZW1lbnRzLnB1c2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiJdfQ==