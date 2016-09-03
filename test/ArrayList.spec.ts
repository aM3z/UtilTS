/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />

import {ArrayList} from '../src/ArrayList';
import {expect} from 'chai';
import {assert} from 'chai';

describe('ArrayList', () => {

    let a: ArrayList<string>;

    beforeEach(() => a = new ArrayList<string>());
    afterEach(() => a = null);

    it('constructor()', () => {
        expect(typeof a).to.equal("object");
        expect(a instanceof ArrayList).to.equal(true);        
    });

    it('add(element: E)', () => {
        
        a.add("isabela");
        expect(a.contains("isabela")).to.equal(true);
        a.add("mimi");
        expect(a.contains(2)).to.equal(false);
        expect(a.contains("mimi")).to.equal(true);
        expect(a.add("puget")).to.equal(true);
    });

    it('add(element: E, index: number)', () => {

        a.add("isabela");
        a.add("mimi");
        a.add("chuy");
        // add to beginning 
        a.add("orca", 0);
        expect("orca").to.equal(a.get(0));
        // add to middle
        a.add("rainier", 2);
        expect("rainier").to.equal(a.get(2));
        // add to end
        a.add("puget", a.size());
        expect("puget").to.equal(a.get(a.size() - 1));
    });

    it('clear()', () => {
        // empty list
        a.clear();
        expect(a.size()).to.equal(0);
        // list with one element
        a.add("pancho villa");
        a.clear();
        expect(a.size()).to.equal(0);
        // list with several elements
        let words: string[] = ["welcome", "to", "mount", "rainier", "madame", "secretary"];

        words.forEach(element => a.add(element));

        a.clear();        
        expect(a.size()).to.equal(0);
    });

    it('contains(o: Object)', () => {
        a.add("hello");
        expect(a.contains("hello")).to.equal(true);
        expect(a.contains("helo")).to.equal(false);
    });

    it('containsAll(c: Collection<any>)', () => {
        a.add("Mount");
        a.add("Rainier");

        let b: ArrayList<string> = new ArrayList<string>();

        b.add("Mount");
        b.add("Rainier");

        expect(a.containsAll(b)).to.equal(true);

        b.add("Washington");
        
        expect(a.containsAll(b)).to.equal(false);

        a.add("Washington");
        a.add("USA");

        expect(a.containsAll(b)).to.equal(true);
    });

    it('equals(o: Object)', () => {
        // compare two empty arraylists 
        let b: ArrayList<string> = new ArrayList<string>();
        expect(a.equals(b)).to.equal(true);
        // compare small arraylist to empty arraylist
        b.add("hello");
        expect(a.equals(b)).to.equal(false);
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

        expect(a.equals(b)).to.equal(true);

        // compare two arraylists with same elements in different order        
        let c: ArrayList<string> = new ArrayList<string>();

        c.add("hello");
        c.add("this");
        c.add("is");
        c.add("typescript");
        c.add("world");

        expect(a.equals(c)).to.equal(true);        
        
        // compare two arraylists of different type
        let d: ArrayList<number> = new ArrayList<number>();
  
        d.add(13);

        expect(a.equals(d)).to.equal(false);        
    });

    it('get(index: number)', () => {
        a.add("we");
        a.add("the");
        a.add("people");
        a.add("of");
        a.add("the");
        a.add("united");
        a.add("states");

        expect(a.get(0)).to.equal("we");
        expect(a.get(3)).to.equal("of");
        expect(a.get(6)).to.equal("states");

        assert.throw(function() {
          a.get(7);
        }, RangeError);

        assert.throw(function() {
          a.get(-3);
        }, RangeError);
    
    });

    it('indexOf(o: Object)', () => {
        expect(a.indexOf("rainier")).to.equal(-1);

        let words: string[] = ["welcome", "to", "mount", "rainier", "madame", "secretary"];

        words.forEach(element => a.add(element));

        // first
        expect(a.indexOf(words[0])).to.equal(0);
        // middle
        expect(a.indexOf(words[3])).to.equal(3);
        // last
        expect(a.indexOf(words[5])).to.equal(5);
    });

    it('isEmpty()', () => {
        // empty arraylist
        expect(a.isEmpty()).to.equal(true);
        // non-empty arraylist
        a.add("mimi");
        expect(a.isEmpty()).to.equal(false);
    });

    it('lastIndexOf(o: Object)', () => {
        expect(a.lastIndexOf("rainier")).to.equal(-1);

        let words: string[] = ["welcome", "to", "mount", "rainier", "madame", "secretary", "mount"];

        words.forEach(element => a.add(element));

        // first
        expect(a.lastIndexOf(words[0])).to.equal(0);
        // middle
        expect(a.lastIndexOf(words[3])).to.equal(3);
        // last
        expect(a.lastIndexOf(words[6])).to.equal(6);
    });

    it('remove(element: number | Object)', () => {
        let words: string[]; words= ["welcome", "to", "mountain", "rainier", "madame", "secretary", "mount"];

        // test `element: number`
        assert.throw(function() {
          a.remove(-3);
        }, RangeError);

        assert.throw(function() {
          a.remove(0);
        }, RangeError);

        words.forEach(element => a.add(element));

        // first    
        expect(a.remove(0)).to.equal(words[0]);
        expect(a.contains(words[0])).to.equal(false);
        expect(a.size()).to.equal(words.length - 1);
        // middle
        expect(a.remove(2)).to.equal(words[3]);
        expect(a.contains(words[3])).to.equal(false);
        expect(a.size()).to.equal(words.length - 2);
        // last
        expect(a.remove(4)).to.equal(words[6]);
        expect(a.contains(words[6])).to.equal(false);
        expect(a.size()).to.equal(words.length - 3);

        // test `element: any`

        a.clear();
        // test empty list
        expect(a.remove("washington")).to.equal(false);
        
        words.forEach(element => a.add(element));
        // remove first element
        expect(a.remove("welcome")).to.equal(true);
        // remove middle element
        expect(a.remove("rainier")).to.equal(true);
        // remove last element
        expect(a.remove("mount")).to.equal(true);

        // try to remove an array
        expect(a.remove([])).to.equal(false);
        // try to find a boolean
        expect(a.remove(true)).to.equal(false);        
    });

    it('toArray()', () => {
        a.add("welcome");
        a.add("to");
        a.add("Mount");
        a.add("Rainier");

        let arr: Object[] = a.toArray();
        expect(JSON.stringify(a.toArray())).to.equal(JSON.stringify(arr));
        arr.push(", Young and Old");
        expect(JSON.stringify(a.toArray())).to.not.equal(JSON.stringify(arr));
    });

    it('toString()', () => {
        // test empty arraylist  
        expect(a.toString()).to.equal("[]");
        // add three elements
        a.add("veni");
        a.add("vidi");
        a.add("vici");
        // test non-empty arraylist
        expect(a.toString()).to.equal("[veni, vidi, vici]");
    });
});