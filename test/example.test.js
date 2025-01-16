const { expect } = require('chai');

describe('Math functions', () => {
  it('should add two numbers correctly', () => {
    const sum = 2 + 3;
    expect(sum).to.equal(5);
  });

  it('should subtract two numbers correctly', () => {
    const result = 5 - 2;
    expect(result).to.equal(3);
  });
});
