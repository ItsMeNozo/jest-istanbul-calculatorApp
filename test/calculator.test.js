const { sumOperator, subtractOperator, productOperator, divideOperator } = require("../calculator.js");

describe("Operator Tests", () => {
  describe("sumOperator", () => {
    it("should return the sum of two numbers (happy case)", () => {
      expect(sumOperator(3, 5)).toBe(8);
    });

    it("should handle string inputs gracefully (unhappy case)", () => {
      expect(() => sumOperator("a", 5)).toThrow(TypeError);
    });
  });

  describe("subtractOperator", () => {
    it("should return the difference of two numbers (happy case)", () => {
      expect(subtractOperator(10, 5)).toBe(5);
    });

    it("should handle string inputs gracefully (unhappy case)", () => {
      expect(() => subtractOperator("a", 5)).toThrow(TypeError);
    });
  });

  describe("productOperator", () => {
    it("should return the product of two numbers (happy case)", () => {
      expect(productOperator(4, 5)).toBe(20);
    });

    it("should handle string inputs gracefully (unhappy case)", () => {
      expect(() => productOperator("a", 5)).toThrow(TypeError);
    });
  });

  describe("divideOperator", () => {
    it("should return the quotient of two numbers (happy case)", () => {
      expect(divideOperator(10, 2)).toBe(5);
    });

    it("should throw an error when dividing by zero (unhappy case)", () => {
      expect(() => divideOperator(10, 0)).toThrow("Division by zero is not allowed.");
    });

    it("should handle string inputs gracefully (unhappy case)", () => {
      expect(() => divideOperator("a", 2)).toThrow(TypeError);
    });
  });
});
