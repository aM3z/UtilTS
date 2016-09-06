/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />
"use strict";
var chai_1 = require('chai');
var Util_1 = require('../Util');
describe('ArrayList', function () {
    var a;
    var testData1 = ["welcome", "to", "mount", "rainier"];
    beforeEach(function () { return a = new Util_1.ArrayList(); });
    afterEach(function () { return a = null; });
    it('constructor()', function () {
        chai_1.expect(typeof a).to.equal("object");
        chai_1.expect(a instanceof Util_1.ArrayList).to.equal(true);
    });
    it('contains(element: E): boolean', function () {
        // test on empty list
        chai_1.expect(a.contains("anything")).to.equal(false);
        // test on list with one element
        a.add("washington", 0);
        chai_1.expect(a.contains("washington")).to.equal(true);
        chai_1.expect(a.contains("anything")).to.equal(false);
        // test on list with many elements
        testData1.forEach(function (item, index) { return a.add(item, index); });
        chai_1.expect(a.contains("rainier")).to.equal(true);
        chai_1.expect(a.contains("welcome")).to.equal(true);
        chai_1.expect(a.contains("to")).to.equal(true);
        chai_1.expect(a.contains("anything")).to.equal(false);
    });
    it('isEmpty(): boolean', function () {
        // test empty list
        chai_1.expect(a.isEmpty()).to.equal(true);
        // test list with one element
        a.add("washington", 0);
        chai_1.expect(a.isEmpty()).to.equal(false);
        // test list with several elements
        testData1.forEach(function (item, index) { return a.add(item, index); });
        chai_1.expect(a.isEmpty()).to.equal(false);
    });
    it('size(): number', function () {
        // test empty list
        chai_1.expect(a.size()).to.equal(0);
        // test list with one element
        a.add("washington", 0);
        chai_1.expect(a.size()).to.equal(1);
        // test list with several elements
        testData1.forEach(function (item, index) { return a.add(item, index); });
        chai_1.expect(a.size()).to.equal(testData1.length + 1);
    });
    it('clear(): void', function () {
        // test empty list
        a.clear();
        chai_1.expect(a.size()).to.equal(0);
        // test list with one element
        a.add("washington", 0);
        a.clear();
        chai_1.expect(a.size()).to.equal(0);
        // test list with several elements
        testData1.forEach(function (item, index) { return a.add(item, index); });
        chai_1.expect(a.size()).to.equal(testData1.length);
        a.clear();
        chai_1.expect(a.size()).to.equal(0);
    });
    it('add(element: E, index: number): boolean', function () {
        // test with index out of range
        chai_1.expect(function () {
            a.add("washington", 4);
        }).to.throw('index is out of range (index < 0 || index > size())');
        // test with one element
        a.add("washington", 0);
        chai_1.expect(a.indexOf("washington")).to.equal(0);
        // test with first index
        a.add("state", 0);
        chai_1.expect(a.indexOf("state")).to.equal(0);
        chai_1.expect(a.indexOf("washington")).to.equal(1);
        // test with middle index
        a.add("of", 1);
        chai_1.expect(a.indexOf("state")).to.equal(0);
        chai_1.expect(a.indexOf("of")).to.equal(1);
        chai_1.expect(a.indexOf("washington")).to.equal(2);
        // test with index equal to size
        a.add("USA", a.size());
        chai_1.expect(a.indexOf("state")).to.equal(0);
        chai_1.expect(a.indexOf("of")).to.equal(1);
        chai_1.expect(a.indexOf("washington")).to.equal(2);
        chai_1.expect(a.indexOf("USA")).to.equal(3);
    });
    it('remove(index: number): boolean', function () {
        // test with index out of range
        chai_1.expect(function () {
            a.remove(4);
        }).to.throw('index is out of range (index < 0 || index > size())');
        // test with one element
        a.add("washington", 0);
        chai_1.expect(a.remove(0)).to.equal(true);
        chai_1.expect(a.size()).to.equal(0);
        // add several element to list
        testData1.forEach(function (item, index) { return a.add(item, index); });
        // test revove first
        chai_1.expect(a.remove(0)).to.equal(true);
        chai_1.expect(a.contains("welcome")).to.equal(false);
        chai_1.expect(a.indexOf("to")).to.equal(0);
        // test remove middle
        chai_1.expect(a.remove(1)).to.equal(true);
        chai_1.expect(a.contains("mount")).to.equal(false);
        chai_1.expect(a.indexOf("to")).to.equal(0);
        chai_1.expect(a.indexOf("rainier")).to.equal(1);
        // test remove last 
        chai_1.expect(a.remove(1)).to.equal(true);
        chai_1.expect(a.contains("rainier")).to.equal(false);
        chai_1.expect(a.indexOf("to")).to.equal(0);
        chai_1.expect(a.size()).to.equal(1);
    });
    // it('indexOf(element: E): number', () => { });
    // it('lastIndexOf(element: E): number' () => { });
    it('toString()', function () {
        // test empty arraylist  
        chai_1.expect(a.toString()).to.equal("[]");
        // add three elements
        //        a.add("veni");
        //        a.add("vidi");
        //        a.add("vici");
        // test non-empty arraylist
        //        expect(a.toString()).to.equal("[veni, vidi, vici]");
    });
});
