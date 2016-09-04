import {Iterator} from './Iterator';
/**
 * A collection that represents a group of objects, known as its elements.
 * 
 * @export
 * @interface Collection
 * @template E
 */
export interface Collection<E> {
    /**
     * Adds a new element to this collection. Runs in O(N) time.
     * If `iter` is specified, then the new element is added immediately before `iter`.
     * Otherwise, add the new element to the end of the collection.
     *
     * @param {E} newElement - a new element
     * @param {Iterator<E>} [iter] the new element is added immediately before this
     * @returns {boolean} returns true if new element was successfully added
     */
    insert(newElement: E, iter?: Iterator<E>): boolean;
    /**
     * Returns true if this collection contains no elements.
     * 
     * @returns {boolean} true if this collection contains no elements
     */
    isEmpty(): boolean;
    /**
     * Removes an element from this collection.
     * If `param` is an instance of Iterator, then the element immediately referred to by `param` is removed.
     * If `param` is an element of type E and the element is in this collection, then the element is removed.
     * 
     * @param {(Iterator<E> | E)} [param] an instance of Iterator reffering to the element to be rmeoved or an element of type E
     * @returns {boolean} true if an element is successfully removed
     */
    remove(param?: Iterator<E> | E): boolean;
    /**
     * Returns the number of elements in this collection.
     * 
     * @returns {number} the number of elements in this collection
     */
    size(): number;
}