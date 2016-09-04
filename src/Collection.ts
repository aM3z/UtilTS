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
     * Returns true if this collection contains no elements.
     * 
     * @returns {boolean} true if this collection contains no elements
     */
    isEmpty(): boolean;
    /**
     * Returns the number of elements in this collection.
     * 
     * @returns {number} the number of elements in this collection
     */
    size(): number;
}