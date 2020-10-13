

module.exports = function countCats(arr) {
    if (arr.length < 1)
    return 0;

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let n = 0; n < arr[i].length; n++) {
        if (arr[i][n] === '^^') ++count;
      }
    }

    return count;
};
