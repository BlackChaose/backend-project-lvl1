"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.question = exports.whatsName = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const whatsName = () => {
  const userName = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  return userName;
};

exports.whatsName = whatsName;

const question = num => {
  console.log(`Question ${num}`);
  return _readlineSync.default.question('Your answer: ');
};

exports.question = question;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3aGF0c05hbWUiLCJ1c2VyTmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiY29uc29sZSIsImxvZyIsIm51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsUUFBTUMsUUFBUSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBakI7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNKLFFBQVMsR0FBL0I7QUFDQSxTQUFPQSxRQUFQO0FBQ0QsQ0FKRDs7OztBQUtBLE1BQU1FLFFBQVEsR0FBSUcsR0FBRCxJQUFTO0FBQ3hCRixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxZQUFXQyxHQUFJLEVBQTVCO0FBQ0EsU0FBT0osc0JBQWFDLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBUDtBQUNELENBSEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5jb25zdCB3aGF0c05hbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG4gIGNvbnNvbGUubG9nKGBIZWxsbywgJHt1c2VyTmFtZX0hYCk7XG4gIHJldHVybiB1c2VyTmFtZTtcbn07XG5jb25zdCBxdWVzdGlvbiA9IChudW0pID0+IHtcbiAgY29uc29sZS5sb2coYFF1ZXN0aW9uICR7bnVtfWApO1xuICByZXR1cm4gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdZb3VyIGFuc3dlcjogJyk7XG59O1xuZXhwb3J0IHsgd2hhdHNOYW1lLCBxdWVzdGlvbiB9OyJdfQ==