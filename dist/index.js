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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3aGF0c05hbWUiLCJ1c2VyTmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiY29uc29sZSIsImxvZyIsIm51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDN0IsUUFBTUMsUUFBUSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBakI7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNKLFFBQVMsR0FBL0I7QUFDQSxTQUFPQSxRQUFQO0FBQ0QsQ0FKTTs7OztBQUtBLE1BQU1FLFFBQVEsR0FBSUcsR0FBRCxJQUFTO0FBQy9CRixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxZQUFXQyxHQUFJLEVBQTVCO0FBQ0EsU0FBT0osc0JBQWFDLFFBQWIsQ0FBc0IsZUFBdEIsQ0FBUDtBQUNELENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5leHBvcnQgY29uc3Qgd2hhdHNOYW1lID0gKCkgPT4ge1xuICBjb25zdCB1c2VyTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICBjb25zb2xlLmxvZyhgSGVsbG8sICR7dXNlck5hbWV9IWApO1xuICByZXR1cm4gdXNlck5hbWU7XG59O1xuZXhwb3J0IGNvbnN0IHF1ZXN0aW9uID0gKG51bSkgPT4ge1xuICBjb25zb2xlLmxvZyhgUXVlc3Rpb24gJHtudW19YCk7XG4gIHJldHVybiByZWFkbGluZVN5bmMucXVlc3Rpb24oJ1lvdXIgYW5zd2VyOiAnKTtcbn07XG4iXX0=