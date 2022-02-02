
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];

  if (matrix == undefined) {
      return [];
  } else {
      for (let i = 0; i < matrix.length; i++) {
          if (i % 2 == 0) {
              let even = matrix[i];

              for (const elem of even) {
                  array.push(elem);
              }
          } else {
              let odd = matrix[i].reverse();

              for (const elem of odd) {
                  array.push(elem);
              }
          }
      }
  }
  return array;
};