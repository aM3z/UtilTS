/// <reference path="List.ts" />

namespace Collections {
    /**
     * Array-based list implementation.
     * 
     * @export
     * @class ArrayList
     * @implements {List<E>}
     * @template E
     * 
     * @author Miguel Amezola <amezolma@plu.edu>
     */
    export class ArrayList<E> implements List<E> {
    
        /**
         * Array holding list of elements.
         * 
         * @private
         * @type {E[]}
         */
        private _elementData: E[];
        /**
         * Number of elements in this list.
         * 
         * @private
         * @type {number}
         */
        private _size: number;
    
        /**
         * Creates an empty list.
         * 
         */
        public constructor() {
            this._elementData = [];
            this._size = 0;
        }
        /**
         * Removes all elements from this collection.
         * 
         */
        public clear(): void {
            this._elementData = [];
            this._size = 0;
        }
        /**
         * Compares the specified object with this collection for equality.
         * 
         * @param {Object} o - object to be compared for equality with this collection
         * @returns {boolean} true if the specified object is equal to this collection 
         */
        public equals(o: Object): boolean {return false;}
        /**
         * Returns the nth element in the list, counting from 0. Runs in O(N) time.
         * 
         * @param {number} index - index of the nth element in the list
         * @returns {E} the nth element in the list, counting from 0
         * @throw {RangeError} if the index is out of range (index < 0 || index >= size())
         */
        public get(index: number): E {
            // index must be in range
            if(index < 0 || index >= this._size) {
                throw new RangeError("the index is out of range (index < 0 || index >= size())");
            }
            // return nth element in list
            return this._elementData[index];    
        }
        /**
         * Returns the iterator that represents the first element of the list. Runs in O(1) time.
         * 
         * @returns {Iterator<E>}
         */
        public getBegin(): Iterator<E> {return null;}
        /**
         * Returns the iterator that represents one element past the last element in the list. Runs in O(1) time.
         * 
         * @returns {Iterator<E>}
         */
        public getEnd(): Iterator<E> {return null;}
        /**
         * Adds a new element to this collection. Runs in O(N) time.
         * The new element is added immediately before `iter`.
         * 
         * @param {E} newElement - a new element
         * @param {Iterator<E>} iter - the new element is added immediately before `iter`
         * @returns {boolean} returns true if new element was successfully added
         */
        public insert(newElement: E, iter: Iterator<E>): boolean {return null;}
        /**
         * Returns true if this collection contains no elements.
         * 
         * @returns {boolean} true if this collection contains no elements
         */
        public isEmpty(): boolean {
            // if `_size` is 0 then return true
            if(this._size === 0) {
                return true;
            }
            return false;
        }
        /**
         * Removes the element immediately referred to by `iter`. After this call, `iter` will refer to the next element in the list. Runs in O(N) time.
         * 
         * @param {Iterator<E>} iter - an Iterator immediately referring to the element to be removed
         * @returns {boolean} return true if element was successfully removed
         */    
        public remove(iter: Iterator<E>): boolean {return false;}
        /**
         * Assigns a new value to the nth element in the list, counting from 0. Runs in O(N) time.
         * 
         * @param {number} index - index of the nth element in the list
         * @param {E} newValue - new value fo the nth element 
         * @returns {E} returns the previous value of the nth element
         * @throws {RangeError} if the index is out of range (index < 0 || index >= size()) 
         */
        public set(index: number, newValue: E): E {return null;}
        /**
         * Returns the number of elements in this collection.
         * 
         * @returns {number} the number of elements in this collection
         */
        public size(): number {
            // return value of `_size''
            return this._size;
        }
        /**
         * Returns a string representation of this collection. 
         * The string representation consists of a list of the collection's elements in the order they are returned by its iterator, enclosed in square brackets ("[]"). 
         * Adjacent elements are separated by the characters ", " (comma and space). 
         * Elements are manually converted to strings by `Object + ", "`.
         * 
         * @returns {string} a string representation of this collection
         */
        public toString(): string {
            // string representation
            let s: string;
            // begin with a square bracket
            s = "[";
            // add each element to the string
            // seperate element by the characters ", "
            this._elementData.forEach(element => {
                s += element + ", ";
            })
            // trim white space from s
            s = s.trim();
            // remove extra comma
            if(s.length > 2) {
                s = s.slice(0, s.length - 1);
            }
            // end with a square bracket
            s += "]";
            // return string representation
            return s;
        }
    
    }
}    