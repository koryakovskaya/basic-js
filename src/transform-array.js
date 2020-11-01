const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError('Not implemented');

  let solution = arr.slice();
  let res = [];

  if ((Array.isArray(arr)) {
    if (arr.length === 0) {
      return [];
    } else {
      for (let i = 0; i < solution.length; i++) {
        if (solution[i] === '--discard-next') {
          if (solution[i + 1] || solution[i + 1] === false || solution[i + 1] === 0 || isNaN(solution[i + 1]) ) {
            delete solution[i + 1];
            solution.splice(i, 1);
          } else {
            solution.splice(i, 1);
          }
        } else if (solution[i] === '--discard-prev') {
          if (solution[i - 1] !== undefined) {
            delete solution[i - 1];
            solution.splice(i, 1);
          } else {
            solution.splice(i, 1);
          }

        } else if (solution[i] === '--double-prev') {
            if (solution[i - 1] !== undefined) {
              solution[i] = solution[i - 1];
            } else {
              solution.splice(i, 1);
            }
        }
    }

    for(let k = 0; k < solution.length; k++) {
      if (solution[k] !== undefined) {
          res.push(solution[k]);
      }
  }

  return res;
}
} else {
  
  throw 'Error';
}
};
