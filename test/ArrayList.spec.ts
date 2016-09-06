/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />

import {expect} from 'chai';
import {assert} from 'chai';
import {ArrayList} from '../Util';

describe('ArrayList', () => {

    let a: ArrayList<string>;
    let testData1: string[] = ["welcome", "to", "mount", "rainier"];

    beforeEach(() => a = new ArrayList<string>());
    afterEach(() => a = null);

    it('constructor()', () => {
        expect(typeof a).to.equal("object");
        expect(a instanceof ArrayList).to.equal(true);        
    });

    it('contains(element: E): boolean', () => {
        // test on empty list
        expect(a.contains("anything")).to.equal(false);

        // test on list with one element
        a.add("washington", 0);
        expect(a.contains("washington")).to.equal(true);
        expect(a.contains("anything")).to.equal(false);
        
        // test on list with many elements
        testData1.forEach((item, index) => a.add(item, index));
        expect(a.contains("rainier")).to.equal(true);
        expect(a.contains("welcome")).to.equal(true);
        expect(a.contains("to")).to.equal(true);
        expect(a.contains("anything")).to.equal(false);
    });

    it('isEmpty(): boolean', () => {
        // test empty list
        expect(a.isEmpty()).to.equal(true);

        // test list with one element
        a.add("washington", 0);
        expect(a.isEmpty()).to.equal(false);

        // test list with several elements
        testData1.forEach((item, index) => a.add(item, index));
        expect(a.isEmpty()).to.equal(false);
              
    });

    it('size(): number', () => {
        // test empty list
        expect(a.size()).to.equal(0);

        // test list with one element
        a.add("washington", 0);
        expect(a.size()).to.equal(1);

        // test list with several elements
        testData1.forEach((item, index) => a.add(item, index));
        expect(a.size()).to.equal(testData1.length + 1);
        
    });

    it('clear(): void', () => {
        // test empty list
        a.clear();
        expect(a.size()).to.equal(0);

        // test list with one element
        a.add("washington", 0);
        a.clear();
        expect(a.size()).to.equal(0);

        // test list with several elements
        testData1.forEach((item, index) => a.add(item, index));
        expect(a.size()).to.equal(testData1.length);
        a.clear();
        expect(a.size()).to.equal(0);

    });

    it('add(element: E, index: number): boolean', () => {
        // test with index out of range
        expect(function() {
            a.add("washington", 4);
        }).to.throw('index is out of range (index < 0 || index > size())');
        // test with one element
        a.add("washington", 0);
        expect(a.indexOf("washington")).to.equal(0);
        // test with first index
        a.add("state", 0);
        expect(a.indexOf("state")).to.equal(0);
        expect(a.indexOf("washington")).to.equal(1);
        // test with middle index
        a.add("of", 1);
        expect(a.indexOf("state")).to.equal(0);
        expect(a.indexOf("of")).to.equal(1);
        expect(a.indexOf("washington")).to.equal(2);
        // test with index equal to size
        a.add("USA", a.size());         
        expect(a.indexOf("state")).to.equal(0);
        expect(a.indexOf("of")).to.equal(1);
        expect(a.indexOf("washington")).to.equal(2);
        expect(a.indexOf("USA")).to.equal(3);
              
    });

	// it('indexOf(element: E): number', () => { });

	// it('lastIndexOf(element: E): number' () => { });

    it('toString()', () => {
        // test empty arraylist  
        expect(a.toString()).to.equal("[]");
        // add three elements
//        a.add("veni");
//        a.add("vidi");
//        a.add("vici");
        // test non-empty arraylist
//        expect(a.toString()).to.equal("[veni, vidi, vici]");
    });
});
