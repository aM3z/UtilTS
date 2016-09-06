"use strict";
/**
 * Resizable-array implementation of the List interface.
 *
 * @export
 * @class ArrayList
 * @implements {List<E>}
 * @template E
 *
 * @author Miguel Amezola <amezolma@plu.edu>
 */
var ArrayList = (function () {
    /**
     * Creates an empty list.
     *
     */
    function ArrayList() {
        this._elementData = [];
    }
    // BASIC OPERATIONS
    /**
     * Returns true if a target element is in this collection.
     *
     * @param {E} element - target element
     * @returns {boolean} true if target element is in this collection
     */
    ArrayList.prototype.contains = function (element) { return; };
    /**
     * Returns true if this collection contains no elements.
     *
     * @returns {boolean} true if this collection contains no elements
     */
    ArrayList.prototype.isEmpty = function () { return; };
    /**
     * Returns the number of elements in this collection.
     *
     * @returns {number} the number of elements in this collection
     */
    ArrayList.prototype.size = function () { return; };
    // BULK OPERATIONS
    /**
     * Removes all elements from this collection.
     *
     */
    ArrayList.prototype.clear = function () { };
    // ARRAY OPERATIONS
    /**
     * Translates the contents of this collection into an array.
     *
     * @returns {E[]} the contents of this collection as an array
     */
    ArrayList.prototype.toArray = function () { return; };
    // POSITIONAL ACCESS
    /**
     * Returns the element at the specified position in this list.
     *
     * @param {number} index - index of the element to return
     * @returns {E}	the element at the specified position in this list
     * @throws {RangeError} if the index is out of range (index < 0 || index >= size())
     */
    ArrayList.prototype.get = function (index) { return; };
    /**
     * Replaces the element at the specified position in this list with the specified element.
     *
     * @param {number} index - index of the element to replace
     * @param {E} element - element to be stored at the specified position
     * @returns {E} the element previously at the specified position
     * @throws {RangeError} if the index is out of range (index < 0 || index >= size())
     */
    ArrayList.prototype.set = function (index, element) { return; };
    /**
     * Inserts the specified element at the specified position in this list.
     * Shifts the element currently at that position (if any) and any subsequent elements to the right (adds one to their indices).
     *
     * @param {E} element - element to be inserted
     * @param {number} index - index at which the specified element is to be inserted
     * @returns {boolean} true if element was successfully added
     * @throw {RangeError} if the index is out of range (index < 0 || index > size())
     */
    ArrayList.prototype.add = function (element, index) { return; };
    /**
     * Removes the element at the specified position in this list.
     * Shifts any subsequent elements to the left (subtracts one from their indices).
     * Returns the element that was removed from the list.
     *
     * @param {number} index - the index of the element to be removed
     * @returns {boolean} true if element was successfully removed
     */
    ArrayList.prototype.remove = function (index) { return; };
    /**
     * Inserts all of the elements in the specified collection into this list at the specified position (optional operation).
     * Shifts the element currently at that position (if any) and any subsequent elements to the right (increases their indices).
     *
     * @param {number} index - index at which to insert the first element from the specified collection
     * @param {Collection<E>} c - collection containing elements to be added to this list
     * @returns {boolean} true if this list changed as a result of the call
     */
    ArrayList.prototype.addAll = function (index, c) { return; };
    // SEARCH
    /**
     * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
     *
     * @param {E} element - element to search for
     * @returns {number} the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element
     */
    ArrayList.prototype.indexOf = function (element) { return; };
    /**
     * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
     *
     * @param {E} element - element to search for
     * @returns {number} the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element
     */
    ArrayList.prototype.lastIndexOf = function (element) { return; };
    // RANGE-VIEW
    /**
     * Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive. (If fromIndex and toIndex are equal, the returned list is empty.)
     * The returned list is backed by this list, so non-structural changes in the returned list are reflected in this list, and vice-versa.
     *
     * @param {number} from - low endpoint (inclusive) of the subList
     * @param {number} to - high endpoint (exclusive) of the subList
     * @returns {List<E>} a view of the specified range within this list
     */
    ArrayList.prototype.subList = function (from, to) { return; };
    /**
     * Returns a string representation of this collection.
     * The string representation consists of a list of the collection's elements in the order they are returned by its iterator, enclosed in square brackets ("[]").
     * Adjacent elements are separated by the characters ", " (comma and space).
     * Elements are manually converted to strings by `Object + ", "`.
     *
     * @returns {string} a string representation of this collection
     */
    ArrayList.prototype.toString = function () {
        // string representation
        var s;
        // begin with a square bracket
        s = "[";
        // add each element to the string
        // seperate element by the characters ", "
        this._elementData.forEach(function (element) {
            s += element + ", ";
        });
        // trim white space from s
        s = s.trim();
        // remove extra comma
        if (s.length > 2) {
            s = s.slice(0, s.length - 1);
        }
        // end with a square bracket
        s += "]";
        // return string representation
        return s;
    };
    return ArrayList;
}());
exports.ArrayList = ArrayList;
