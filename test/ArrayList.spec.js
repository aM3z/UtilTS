/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />
"use strict";
var ArrayList_1 = require('../src/ArrayList');
var chai_1 = require('chai');
describe('ArrayList', function () {
    var a;
    beforeEach(function () { return a = new ArrayList_1.ArrayList(); });
    afterEach(function () { return a = null; });
    it('constructor()', function () {
        chai_1.expect(typeof a).to.equal("object");
        chai_1.expect(a instanceof ArrayList_1.ArrayList).to.equal(true);
    });
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
