"use strict";
var ArrayList = (function () {
    function ArrayList() {
        this._elementData = [];
    }
    /**
     * Appends the specified element to the end of this list.
     * If optional parameter index is not undefined, inserts the specified element at the specified position in this list. Shifts the element currently at that position (if any) and any subsequent elements to the right (adds one to their indices).
     *
     * @param {E} element - element to be inserted
     * @param {number} [index] - index at which the specified element is to be inserted
     * @returns {boolean} true if this ArrayList changed as a result of the call
     * @throws {RangeError} if the index is out of range (index < 0 || index > size())
     */
    ArrayList.prototype.add = function (element, index) {
        // if both `element` and `index` parameters are passed
        if (element && typeof index === "number") {
            // throw RangeError if the index is out of range
            if (index < 0 || index > this.size()) {
                throw new RangeError("index is out of range (index < 0 || index > size())");
            }
            // make a copy of the left side of `_elementData` array
            // do not include the element currently at position `index` 
            var left = this._elementData.slice(0, index);
            // make a copy of the right side of `_elementData` array
            // include the element currently at position `index`
            var right = this._elementData.slice(index);
            // wrap element in array 
            var wrappedElement = [element];
            // concatenate left, wrappedElement, and right arrays
            // assign new array to `_elementData`
            this._elementData = left.concat([element], right);
            // true if this ArrayList changed 
            return true;
        }
        else if (element) {
            // push element 
            this._elementData.push(element);
            // true if this ArrayList changed
            return true;
        }
        // false if this ArrayList did not changed
        return false;
    };
    /**
     * Removes all of the elements from this list. The list will be empty after this call returns.
     */
    ArrayList.prototype.clear = function () {
        this._elementData.length = 0;
    };
    /**
     * Returns true if this collection contains the specified element.
     *
     * @param {Object} o - element whose presence in this collection is to be tested
     * @returns {boolean} true if this collection contains the specified element
     */
    ArrayList.prototype.contains = function (o) {
        // true if `o` is in `_elementData`
        if (this._elementData.indexOf(o) >= 0) {
            return true;
        }
        // false if `o` is not in `_elementData`
        return false;
    };
    /**
     * Returns true if this collection contains all of the elements in the specified collection.
     *
     * @param {Collection<any>} c
     * @returns {boolean}
     */
    ArrayList.prototype.containsAll = function (c) {
        // declare an array for each collection
        var theseElements;
        var thoseElements;
        // assign `toArray()` result for each collection to their respective arrays        
        theseElements = this.toArray();
        thoseElements = c.toArray();
        // default result is true
        var result = true;
        // if there is at least one element in `thoseElements` that is not in `theseElements` then set result to false
        thoseElements.forEach(function (element) {
            if (theseElements.indexOf(element) < 0) {
                result = false;
            }
        });
        return result;
    };
    /**
     * Compares the specified object with this collection for equality.
     *
     * @param {Object} o - object to be compared for equality with this collection
     * @returns {boolean} true if the specified object is equal to this collection
     */
    ArrayList.prototype.equals = function (o) {
        if (this.containsAll(o) && o.containsAll(this)) {
            return true;
        }
        return false;
    };
    /**
     * Returns the element at the specified position in this list.
     *
     * @param {number} index - index of the element to return
     * @returns {E} the element at the specified position in this list
     * @throws {RangeError} if the index is out of range (index < 0 || index >= size())
     */
    ArrayList.prototype.get = function (index) {
        // throw RangeError if the index is out of range
        if (index < 0 || index >= this.size()) {
            throw new RangeError("index is out of range (index < 0 || index >= size())");
        }
        // return the element at the specified position in this list
        return this._elementData[index];
    };
    ArrayList.prototype.hashCode = function () { return 0; };
    /**
     * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element. More formally, returns the lowest index i such that (o==null ? get(i)==null : o.equals(get(i))), or -1 if there is no such index.
     *
     * @param {Object} o - element to search for
     * @returns {number} the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element
     */
    ArrayList.prototype.indexOf = function (o) {
        // default to -1
        var index = -1;
        // iterate through `_elementData`
        loop: {
            for (var i = 0; i < this.size(); i++) {
                // if `o` object is located in `_elementData`
                if (o === this._elementData[i]) {
                    // store the index of the first occurrence of the specified element
                    index = i;
                    // break out of this loop
                    break loop;
                }
            }
        }
        return index;
    };
    /**
     * Returns true if this list contains no elements.
     *
     * @returns {boolean} true if this list contains no elements.
     */
    ArrayList.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    ArrayList.prototype.iterator = function () { return null; };
    /**
     * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element. More formally, returns the highest index i such that (o==null ? get(i)==null : o.equals(get(i))), or -1 if there is no such index.
     *
     * @param {Object} o - element to search for
     * @returns {number} the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element
     */
    ArrayList.prototype.lastIndexOf = function (o) {
        // default to -1
        var index = -1;
        // iterate through `_elementData`
        loop: {
            for (var i = this.size() - 1; i >= 0; i--) {
                // if `o` object is located in `_elementData`
                if (o === this._elementData[i]) {
                    // store the index of the last occurrence of the specified element
                    index = i;
                    // break out of this loop
                    break loop;
                }
            }
        }
        return index;
    };
    ArrayList.prototype.listIterator = function (index) { return null; };
    ArrayList.prototype.remove = function (element) {
        // remove the element at the specified position
        if (typeof element === "number") {
            // throw RangeError if the index is out of range
            if (element < 0 || element >= this.size()) {
                throw new RangeError("index is out of range (index < 0 || index >= size())");
            }
            // make a copy of the left side of `_elementData` array
            // do not include the element currently at position `index` 
            var left = this._elementData.slice(0, element);
            // make a copy of the right side of `_elementData` array
            // do not include the element currently at position `index`
            var right = this._elementData.slice(element + 1);
            // wrap element in array 
            var removedElement = this.get(element);
            // concatenate left, wrappedElement, and right arrays
            // assign new array to `_elementData`
            this._elementData = left.concat(right);
            // return the element that was removed from the list
            return removedElement;
        }
        else {
            // get index of the first occurrence of the specified element
            var index = this.indexOf(element);
            // if element found them remove it and return true
            if (index >= 0) {
                this.remove(index);
                return true;
            }
            return false;
        }
    };
    ArrayList.prototype.set = function (index, element) { return null; };
    /**
     * Returns the number of elements in this collection.
     *
     * @returns {number} the number of elements in this collection
     */
    ArrayList.prototype.size = function () { return this._elementData.length; };
    ArrayList.prototype.subList = function (fromIndex, toIndex) { return null; };
    /**
     * Returns an array containing all of the elements in this collection. If this collection makes any guarantees as to what order its elements are returned by its iterator, this method must return the elements in the same order.
     * The returned array will be "safe" in that no references to it are maintained by this collection. (In other words, this method must allocate a new array even if this collection is backed by an array). The caller is thus free to modify the returned array.
     * This method acts as bridge between array-based and collection-based APIs.
     *
     * @returns {Object[]} an array containing all of the elements in this collection
     */
    ArrayList.prototype.toArray = function () {
        // instantiate new array
        var newArray = [];
        // push each element in `_elementData` to `newArray` 
        this._elementData.forEach(function (element) { return newArray.push(element); });
        // return new array
        return newArray;
    };
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
