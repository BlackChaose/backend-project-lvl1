"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hiFunc = exports.question = exports.whatsName = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hiFunc = (comment = '') => {
  console.log('Welcome to the Brain Games!');

  if (comment !== '') {
    console.log(comment);
  }
};

exports.hiFunc = hiFunc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJoaUZ1bmMiLCJjb21tZW50IiwiY29uc29sZSIsImxvZyIsIndoYXRzTmFtZSIsInVzZXJOYW1lIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iLCJudW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDQyxPQUFPLEdBQUcsRUFBWCxLQUFrQjtBQUMvQkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7O0FBQ0EsTUFBSUYsT0FBTyxLQUFLLEVBQWhCLEVBQW9CO0FBQ2xCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNEO0FBQ0YsQ0FMRDs7OztBQU9BLE1BQU1HLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQU1DLFFBQVEsR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0Isd0JBQXRCLENBQWpCOztBQUNBTCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxVQUFTRSxRQUFTLEdBQS9CO0FBQ0EsU0FBT0EsUUFBUDtBQUNELENBSkQ7Ozs7QUFLQSxNQUFNRSxRQUFRLEdBQUlDLEdBQUQsSUFBUztBQUN4Qk4sRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsWUFBV0ssR0FBSSxFQUE1QjtBQUNBLFNBQU9GLHNCQUFhQyxRQUFiLENBQXNCLGVBQXRCLENBQVA7QUFDRCxDQUhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuY29uc3QgaGlGdW5jID0gKGNvbW1lbnQgPSAnJykgPT4ge1xuICBjb25zb2xlLmxvZygnV2VsY29tZSB0byB0aGUgQnJhaW4gR2FtZXMhJyk7XG4gIGlmIChjb21tZW50ICE9PSAnJykge1xuICAgIGNvbnNvbGUubG9nKGNvbW1lbnQpO1xuICB9XG59O1xuXG5jb25zdCB3aGF0c05hbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG4gIGNvbnNvbGUubG9nKGBIZWxsbywgJHt1c2VyTmFtZX0hYCk7XG4gIHJldHVybiB1c2VyTmFtZTtcbn07XG5jb25zdCBxdWVzdGlvbiA9IChudW0pID0+IHtcbiAgY29uc29sZS5sb2coYFF1ZXN0aW9uICR7bnVtfWApO1xuICByZXR1cm4gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdZb3VyIGFuc3dlcjogJyk7XG59O1xuZXhwb3J0IHsgd2hhdHNOYW1lLCBxdWVzdGlvbiwgaGlGdW5jIH07XG4iXX0=