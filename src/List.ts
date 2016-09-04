import {Collection} from './Collection';
import {Iterator} from './Iterator';

/**
 * An ordered collection (also known as a sequence).
 * 
 * @export
 * @interface List
 * @extends {Collection<E>}
 * @template E
 */
export interface List<E> extends Collection<E> {
    /**
     * Returns the nth element in the list, counting from 0. Runs in O(N) time.
     * 
     * @param {number} index - index of the nth element in the list
     * @returns {E} the nth element in the list, counting from 0
     * @throw {RangeError} if the index is out of range (index < 0 || index >= size())
     */
    get(index: number): E;
    /**
     * Returns the iterator that represents the first element of the list. Runs in O(1) time.
     * 
     * @returns {Iterator<E>}
     */
    getBegin(): Iterator<E>;
    /**
     * Returns the iterator that represents one element past the last element in the list. Runs in O(1) time.
     * 
     * @returns {Iterator<E>}
     */
    getEnd(): Iterator<E>;
    /**
     * Adds a new element to this collection. Runs in O(N) time.
     * The new element is added immediately before `iter`.
     * 
     * @param {E} newElement - a new element
     * @param {Iterator<E>} iter - the new element is added immediately before `iter`
     * @returns {boolean} returns true if new element was successfully added
     */
    insert(newElement: E, iter: Iterator<E>): boolean;
    /**
     * Removes the element immediately referred to by `iter`. After this call, `iter` will refer to the next element in the list. Runs in O(N) time.
     * 
     * @param {Iterator<E>} iter - an Iterator immediately referring to the element to be removed
     * @returns {boolean} return true if element was successfully removed
     */    
    remove(iter: Iterator<E>): boolean;
    /**
     * Assigns a new value to the nth element in the list, counting from 0. Runs in O(N) time.
     * 
     * @param {number} index - index of the nth element in the list
     * @param {E} newValue - new value fo the nth element 
     * @returns {E} returns the previous value of the nth element
     * @throws {RangeError} if the index is out of range (index < 0 || index >= size()) 
     */
    set(index: number, newValue: E): E;

}