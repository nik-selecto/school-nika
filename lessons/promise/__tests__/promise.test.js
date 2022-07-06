const promise = require('../src/promise');

describe('promise', () => {
  it('Should return ordered array', async () => {
    const actual = await promise();

    expect(actual).toEqual([1, 2, 3]);
  });
});
