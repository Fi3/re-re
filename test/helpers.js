import { uniqueID } from '../helpers.js';
import test from 'tape';
import R from 'ramda';

test(`uniqueID returned value after n call without prefix`, assert => {
  const n = Math.round((Math.random() * 100));
  const generator = uniqueID('');
  const actual = R.compose(
    R.last,
    R.map(x => generator()))(R.repeat('', n));
  const expected = n.toString();

  assert.deepEqual(actual, expected,
    `when I call uniqueID ${n} times without a prefix should return '${n}'`);
  assert.end();
});

test(`uniqueID returned value after n call with prefix`, assert => {
  const n = Math.round((Math.random() * 100));
  const generator = uniqueID('ciao');
  const actual = R.compose(
    R.last,
    R.map(x => generator()))(R.repeat('', n));
  const expected = 'ciao' + n.toString();

  assert.deepEqual(actual, expected,
    `when I call uniqueID ${n} times without a prefix should return prefix + '${n}'`);
  assert.end();
});

