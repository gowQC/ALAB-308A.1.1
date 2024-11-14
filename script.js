// PART 1:
let counter = 0; // = to some arbitrary number

function incrementCounter(x) {
  // if (x >= 150) {
  //   // won't be calling itself 15k+ times, leaving at 150 for demonstrative enough purposes...
  //   throw "Stack overflow!";
  // } else {
  counter++;
  x++;
  // console.log(counter);
  incrementCounter(x);
  // }
}

try {
  incrementCounter(counter);
} catch {
  // always errors because it will catch that the function will cause a stack overflow -> no condition to eventually stop OR too many iterations
  console.log("Error: Stack overflow!");
}

// PART 2:
const my2DArray = [
  [1, 2, 3, 4],
  [5, 6],
  [7],
  [8, 9, 9.1, 9.2],
  [9.3, 9.9],
  [10],
];

// function flatten2DArray(arr) {
//   // for example, with my2DArray, the output should be an array of length = 14
// }
