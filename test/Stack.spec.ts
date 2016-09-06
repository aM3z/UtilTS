/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />

import {expect} from 'chai';
import {assert} from 'chai';
import {Stack} from '../src/Collections';

describe('Stack', () => {

  let s: Stack<number> = new Stack<number>();

  // beforeEach(() => s = new Stack<number>());

  // afterEach(() => s = null);

  it('constructor()', () => {
    expect(typeof s).to.equal('object');
  });

  it('empty()', () => {
    expect(s.empty()).to.equal(true);
    s.push(2);
    expect(s.empty()).to.equal(false);
  });

  it('peek()', () => {
    s.push(3);
    expect(s.peek()).to.equal(3);
  });

  it('pop()', () => {
    s.pop();
    expect(s.peek()).to.equal(2);
    s.pop();
  });

  it('push()', () => {
    s.push(0);
    expect(s.peek()).to.equal(0);
    s.push(1);
    s.push(2);
    expect(s.peek()).to.equal(2);
  });

  it('search()', () => {
    s.push(2);
    expect(s.search(2)).to.equal(1);
    s.push(2);
    s.push(2);
    expect(s.search(2)).to.equal(1);
    s.push(3);
    s.push(5);
    s.push(7);
    expect(s.search(2)).to.equal(4);
    expect(s.search(7)).to.equal(1);
    s.pop();
    expect(s.search(7)).to.equal(-1);
  });

});
