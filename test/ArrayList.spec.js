/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />
"use strict";
var ArrayList_1 = require('../src/ArrayList');
var chai_1 = require('chai');
var chai_2 = require('chai');
describe('ArrayList', function () {
    var a;
    beforeEach(function () { return a = new ArrayList_1.ArrayList(); });
    afterEach(function () { return a = null; });
    it('constructor()', function () {
        chai_1.expect(typeof a).to.equal("object");
        chai_1.expect(a instanceof ArrayList_1.ArrayList).to.equal(true);
    });
    it('add(element: E)', function () {
        a.add("isabela");
        chai_1.expect(a.contains("isabela")).to.equal(true);
        a.add("mimi");
        chai_1.expect(a.contains(2)).to.equal(false);
        chai_1.expect(a.contains("mimi")).to.equal(true);
        chai_1.expect(a.add("puget")).to.equal(true);
    });
    it('add(element: E, index: number)', function () {
        a.add("isabela");
        a.add("mimi");
        a.add("chuy");
        // add to beginning 
        a.add("orca", 0);
        chai_1.expect("orca").to.equal(a.get(0));
        // add to middle
        a.add("rainier", 2);
        chai_1.expect("rainier").to.equal(a.get(2));
        // add to end
        a.add("puget", a.size());
        chai_1.expect("puget").to.equal(a.get(a.size() - 1));
    });
    it('clear()', function () {
        // empty list
        a.clear();
        chai_1.expect(a.size()).to.equal(0);
        // list with one element
        a.add("pancho villa");
        a.clear();
        chai_1.expect(a.size()).to.equal(0);
        // list with several elements
        var words = ["welcome", "to", "mount", "rainier", "madame", "secretary"];
        words.forEach(function (element) { return a.add(element); });
        a.clear();
        chai_1.expect(a.size()).to.equal(0);
    });
    it('contains(o: Object)', function () {
        a.add("hello");
        chai_1.expect(a.contains("hello")).to.equal(true);
        chai_1.expect(a.contains("helo")).to.equal(false);
    });
    it('containsAll(c: Collection<any>)', function () {
        a.add("Mount");
        a.add("Rainier");
        var b = new ArrayList_1.ArrayList();
        b.add("Mount");
        b.add("Rainier");
        chai_1.expect(a.containsAll(b)).to.equal(true);
        b.add("Washington");
        chai_1.expect(a.containsAll(b)).to.equal(false);
        a.add("Washington");
        a.add("USA");
        chai_1.expect(a.containsAll(b)).to.equal(true);
    });
    it('equals(o: Object)', function () {
        // compare two empty arraylists 
        var b = new ArrayList_1.ArrayList();
        chai_1.expect(a.equals(b)).to.equal(true);
        // compare small arraylist to empty arraylist
        b.add("hello");
        chai_1.expect(a.equals(b)).to.equal(false);
        // compare two arraylists with same elements 
        b.add("world");
        b.add("this");
        b.add("is");
        b.add("typescript");
        a.add("hello");
        a.add("world");
        a.add("this");
        a.add("is");
        a.add("typescript");
        chai_1.expect(a.equals(b)).to.equal(true);
        // compare two arraylists with same elements in different order        
        var c = new ArrayList_1.ArrayList();
        c.add("hello");
        c.add("this");
        c.add("is");
        c.add("typescript");
        c.add("world");
        chai_1.expect(a.equals(c)).to.equal(true);
        // compare two arraylists of different type
        var d = new ArrayList_1.ArrayList();
        d.add(13);
        chai_1.expect(a.equals(d)).to.equal(false);
    });
    it('get(index: number)', function () {
        a.add("we");
        a.add("the");
        a.add("people");
        a.add("of");
        a.add("the");
        a.add("united");
        a.add("states");
        chai_1.expect(a.get(0)).to.equal("we");
        chai_1.expect(a.get(3)).to.equal("of");
        chai_1.expect(a.get(6)).to.equal("states");
        chai_2.assert.throw(function () {
            a.get(7);
        }, RangeError);
        chai_2.assert.throw(function () {
            a.get(-3);
        }, RangeError);
    });
    it('indexOf(o: Object)', function () {
        chai_1.expect(a.indexOf("rainier")).to.equal(-1);
        var words = ["welcome", "to", "mount", "rainier", "madame", "secretary"];
        words.forEach(function (element) { return a.add(element); });
        // first
        chai_1.expect(a.indexOf(words[0])).to.equal(0);
        // middle
        chai_1.expect(a.indexOf(words[3])).to.equal(3);
        // last
        chai_1.expect(a.indexOf(words[5])).to.equal(5);
    });
    it('isEmpty()', function () {
        // empty arraylist
        chai_1.expect(a.isEmpty()).to.equal(true);
        // non-empty arraylist
        a.add("mimi");
        chai_1.expect(a.isEmpty()).to.equal(false);
    });
    it('lastIndexOf(o: Object)', function () {
        chai_1.expect(a.lastIndexOf("rainier")).to.equal(-1);
        var words = ["welcome", "to", "mount", "rainier", "madame", "secretary", "mount"];
        words.forEach(function (element) { return a.add(element); });
        // first
        chai_1.expect(a.lastIndexOf(words[0])).to.equal(0);
        // middle
        chai_1.expect(a.lastIndexOf(words[3])).to.equal(3);
        // last
        chai_1.expect(a.lastIndexOf(words[6])).to.equal(6);
    });
    it('remove(element: number | Object)', function () {
        var words;
        words = ["welcome", "to", "mountain", "rainier", "madame", "secretary", "mount"];
        // test `element: number`
        chai_2.assert.throw(function () {
            a.remove(-3);
        }, RangeError);
        chai_2.assert.throw(function () {
            a.remove(0);
        }, RangeError);
        words.forEach(function (element) { return a.add(element); });
        // first    
        chai_1.expect(a.remove(0)).to.equal(words[0]);
        chai_1.expect(a.contains(words[0])).to.equal(false);
        chai_1.expect(a.size()).to.equal(words.length - 1);
        // middle
        chai_1.expect(a.remove(2)).to.equal(words[3]);
        chai_1.expect(a.contains(words[3])).to.equal(false);
        chai_1.expect(a.size()).to.equal(words.length - 2);
        // last
        chai_1.expect(a.remove(4)).to.equal(words[6]);
        chai_1.expect(a.contains(words[6])).to.equal(false);
        chai_1.expect(a.size()).to.equal(words.length - 3);
        // test `element: any`
        a.clear();
        // test empty list
        chai_1.expect(a.remove("washington")).to.equal(false);
        words.forEach(function (element) { return a.add(element); });
        // remove first element
        chai_1.expect(a.remove("welcome")).to.equal(true);
        // remove middle element
        chai_1.expect(a.remove("rainier")).to.equal(true);
        // remove last element
        chai_1.expect(a.remove("mount")).to.equal(true);
        // try to remove an array
        chai_1.expect(a.remove([])).to.equal(false);
        // try to find a boolean
        chai_1.expect(a.remove(true)).to.equal(false);
    });
    it('set(index: number, element: E)', function () {
        // test index out of range 
        chai_2.assert.throw(function () {
            a.set(0, "washington");
        }, RangeError);
        a.add("chocolate");
        a.add("labs");
        a.add("love");
        a.add("swimming");
        a.add("in creeks");
        // set first element
        a.set(0, "all");
        chai_1.expect(a.contains("chocolate")).to.equal(false);
        chai_1.expect(a.indexOf("all")).to.equal(0);
        // set middle element
        a.set(2, "enjoy");
        chai_1.expect(a.contains("love")).to.equal(false);
        chai_1.expect(a.indexOf("enjoy")).to.equal(2);
        // set last element
        a.set(4, "in rivers");
        chai_1.expect(a.contains("in creeks")).to.equal(false);
        chai_1.expect(a.indexOf("in rivers")).to.equal(4);
    });
    it('toArray()', function () {
        a.add("welcome");
        a.add("to");
        a.add("Mount");
        a.add("Rainier");
        var arr = a.toArray();
        chai_1.expect(JSON.stringify(a.toArray())).to.equal(JSON.stringify(arr));
        arr.push(", Young and Old");
        chai_1.expect(JSON.stringify(a.toArray())).to.not.equal(JSON.stringify(arr));
    });
    it('toString()', function () {
        // test empty arraylist  
        chai_1.expect(a.toString()).to.equal("[]");
        // add three elements
        a.add("veni");
        a.add("vidi");
        a.add("vici");
        // test non-empty arraylist
        chai_1.expect(a.toString()).to.equal("[veni, vidi, vici]");
    });
});
