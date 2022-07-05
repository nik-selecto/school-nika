// const eventEmitter = require('../src/event-emitter');
const Emitter = require('events');

describe('event-emitter', () => {
  let ok; let
    hello;
  let tester = [];

  beforeEach(() => {
    ok = new Emitter();
    hello = new Emitter();
    tester = [];
    hello.on('hello', () => tester.push('world'));
    ok.on('ok', () => tester.push('google'));
  });

  it('Should store "world" keys on "hello" event', () => {
    hello.emit('hello');

    expect(tester.pop()).toBe('world');
  });

  it('Should store "google" keys on "ok" event', () => {
    ok.emit('ok');

    expect(tester.pop()).toBe('google');
  });

  it('Should store "world" 2 times and "google" -3', () => {
    hello.emit('hello');
    hello.emit('hello');
    ok.emit('ok');
    ok.emit('ok');
    ok.emit('ok');

    ['world', 'world', 'google', 'google', 'google'].forEach((v, i) => expect(v).toBe(tester[i]));
  });

  it('Should store 100 items', () => {
    for (let i = 0; i < 100; ++i) {
      hello.emit('hello');
    }

    expect(tester.length).toBe(100);
  });
});
