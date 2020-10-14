module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return arr.some(i => Array.isArray(i)) ? 1 + this.calculateDepth(arr.flat()) : 1;
  }
};