const eventEmitter = require('../src/event-emitter');

describe('event-emitter', () => {
  let tester;
  let emitter;

  beforeEach(() => {
    ({ emitter, tester } = eventEmitter);
    while (tester.length !== 0) tester.pop();
  });

  it('Should store "world" keys on "hello" event', () => {
    emitter.emit('hello');

    expect(tester.pop()).toBe('world');
  });

  it('Should store "google" keys on "ok" event', () => {
    emitter.emit('ok');

    expect(tester.pop()).toBe('google');
  });

  it('Should store "world" 2 times and "google" -3', () => {
    emitter.emit('hello');
    emitter.emit('hello');
    emitter.emit('ok');
    emitter.emit('ok');
    emitter.emit('ok');

    ['world', 'world', 'google', 'google', 'google']
      .forEach((v, i) => expect(v).toBe(tester[i]));
  });

  it('Should store 100 items', () => {
    for (let i = 0; i < 100; ++i) {
      emitter.emit('hello');
    }

    expect(tester.length).toBe(100);
  });
});
