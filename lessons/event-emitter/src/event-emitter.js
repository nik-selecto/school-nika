/**
 * Create event-emitter
 *
 * Create variable | let tester = []; |
 *
 * Add events 'hello' and 'ok'
 *
 * On 'hello' listener should store string 'world' into tester
 *
 * On 'ok' event listener should store string 'google' into tester
 *
 * Export object
 *  with this emitter and tester variables
 *  under the 'emitter' and 'tester' keys respectivly
 */
const { EventEmitter } = require('events');

const emitter = new EventEmitter();
const tester = [];
emitter.on('ok', () => tester.push('google'));
emitter.on('hello', () => tester.push('world'));
module.exports = {
  emitter,
  tester,
};
