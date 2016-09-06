/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />

import {expect} from 'chai';
import {assert} from 'chai';
import {ArrayList} from '../src/ArrayList';

describe('ArrayList', () => {

    let a: ArrayList<string>;

    beforeEach(() => a = new ArrayList<string>());
    afterEach(() => a = null);

    it('constructor()', () => {
        expect(typeof a).to.equal("object");
        expect(a instanceof ArrayList).to.equal(true);        
    });


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
