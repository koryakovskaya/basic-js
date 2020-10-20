const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) != 'string') {
    return false;
  }
  let parseString = parseFloat(sampleActivity);
  if (isNaN(parseString)) {
    return false;
  }
  if (parseString <= 0 || parseString > MODERN_ACTIVITY) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  let ln = Math.log10(MODERN_ACTIVITY / parseString);
  return Math.floor(ln / k);
};
