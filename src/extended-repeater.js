const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  let {
    repTimes = 0,
    separator = '+',
    addition = '',
    additionRepTimes = 0,
    additionSep = '|'
  } = options;
  
  let sep = [];
  let solution = [];

  str = String(str);
  addition = String(addition);

  if (!repTimes) return str + addition;

  for (let i = 0; i < additionRepTimes; i++) {
    sep.push(addition);
  }

  sep = additionRepTimes ? sep.join(additionSep) : addition;

  for (let i = 0; i < repTimes; i++) {
    solution.push(str + sep);
  }

  return solution.join(separator);

};
  