import add from '../math/add';

describe('Adding two numbers', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
