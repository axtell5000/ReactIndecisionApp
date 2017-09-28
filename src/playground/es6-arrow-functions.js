const square = function (x) {
  return x * x;
};

// var squareArrow = (x) => {
//   return x * x;
// };

// This also works if you just returning something
const squareArrow  = (x) => x * x;

console.log(squareArrow(10));

// const getFirstname = (name) => {
//   return name.split(' ')[0];
// };

const getFirstname = (name) => name.split(' ')[0];

console.log(getFirstname('Stephen Axtell'));// Stephen
