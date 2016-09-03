/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />
"use strict";
var Stack_1 = require('../src/Stack');
var chai_1 = require('chai');
describe('Stack', function () {
    var s = new Stack_1.Stack();
    it('constructor()', function () {
        chai_1.expect(typeof s).to.equal('object');
    });
    it('empty()', function () {
        chai_1.expect(s.empty()).to.equal(true);
        s.push(2);
        chai_1.expect(s.empty()).to.equal(false);
    });
    it('peek()', function () {
        s.push(3);
        chai_1.expect(s.peek()).to.equal(3);
    });
    it('pop()', function () {
        s.pop();
        chai_1.expect(s.peek()).to.equal(2);
        s.pop();
    });
    it('push()', function () {
        s.push(0);
        chai_1.expect(s.peek()).to.equal(0);
        s.push(1);
        s.push(2);
        chai_1.expect(s.peek()).to.equal(2);
    });
    it('search()', function () {
        s = new Stack_1.Stack();
        s.push(2);
        chai_1.expect(s.search(2)).to.equal(1);
        s.push(2);
        s.push(2);
        chai_1.expect(s.search(2)).to.equal(1);
        s.push(3);
        s.push(5);
        s.push(7);
        chai_1.expect(s.search(2)).to.equal(4);
        chai_1.expect(s.search(7)).to.equal(1);
        s.pop();
        chai_1.expect(s.search(7)).to.equal(-1);
    });
});
