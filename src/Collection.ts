import {Iterator} from './Iterator';
/**
 * A collection represents a group of objects, known as its elements. Some collections allow duplicate elements and others do not. Some are ordered and others unordered. 
 * 
 * @export
 * @interface Collection
 * @template E
 */
export interface Collection<E> {
    /**
     * Returns true if this collection contains the specified element.
     * 
     * @param {Object} o - element whose presence in this collection is to be tested
     * @returns {boolean} true if this collection contains the specified element
     */
    contains(o: Object): boolean;
    /**
     * Returns true if this collection contains all of the elements in the specified collection.
     * 
     * @param {Collection<any>} c - collection to be checked for containment in this collection
     * @returns {boolean} true if this collection contains all of the elements in the specified collection
     */
    containsAll(c: Collection<any>): boolean;
    /**
     * Compares the specified object with this collection for equality.
     * 
     * @param {Object} o - object to be compared for equality with this collection
     * @returns {boolean} true if the specified object is equal to this collection
     */
    equals(o: Object): boolean;
    /**
     * Returns the hash code value for this collection.
     * 
     * @returns {number} the hash code value for this collection
     */
    hashCode(): number;
    /**
     * Returns true if this collection contains no elements.
     * 
     * @returns {boolean} true if this collection contains no elements
     */
    isEmpty(): boolean;
    /**
     * Returns an iterator over the elements in this collection.
     * 
     * @returns {Iterator<E>} an Iterator over the elements in this collection
     */
    iterator(): Iterator<E>;
    /**
     * Returns the number of elements in this collection.
     * 
     * @returns {number} the number of elements in this collection
     */
    size(): number;
    /**
     * Returns an array containing all of the elements in this collection.
     * 
     * @returns {Object[]} an array containing all of the elements in this collection
     */
    toArray(): Object[];
}