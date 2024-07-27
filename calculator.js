module.exports.sumOperator = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Inputs must be numbers");
  }
  return a + b;
};

module.exports.subtractOperator = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Inputs must be numbers");
  }
  return a - b;
};

module.exports.productOperator = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Inputs must be numbers");
  }
  return a * b;
};

module.exports.divideOperator = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Inputs must be numbers");
  }
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
};
