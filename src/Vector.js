"use strict";
var Vector = (function () {
    function Vector() {
    }
    Vector.prototype.contains = function (o) { return false; };
    Vector.prototype.containsAll = function (c) { return false; };
    Vector.prototype.equals = function (o) { return false; };
    Vector.prototype.get = function (index) { return null; };
    Vector.prototype.hashCode = function () { return 0; };
    Vector.prototype.indexOf = function (o) { return 0; };
    Vector.prototype.isEmpty = function () { return false; };
    Vector.prototype.iterator = function () { return null; };
    Vector.prototype.lastIndexOf = function (o) { return 0; };
    Vector.prototype.listIterator = function (index) { return null; };
    Vector.prototype.size = function () { return 0; };
    Vector.prototype.subList = function (fromIndex, toIndex) { return null; };
    Vector.prototype.toArray = function () { return null; };
    return Vector;
}());
exports.Vector = Vector;
