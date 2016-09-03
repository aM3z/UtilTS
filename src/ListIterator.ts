import {Iterator} from './Iterator';

/**
 * An iterator for lists that allows the programmer to traverse the list in either direction, modify the list during iteration, and obtain the iterator's current position in the list.
 * 
 * @export
 * @interface ListIterator
 * @extends {Iterator<E>}
 * @template E
 */
export interface ListIterator<E> extends Iterator<E> {
    /**
     * Returns true if this list iterator has more elements when traversing the list in the reverse direction.
     * 
     * @returns {boolean}
     */
    hasPrevious(): boolean;
    /**
     * Returns the index of the element that would be returned by a subsequent call to `next()`.
     * 
     * @returns {number}
     */
    nextIndex(): number;
    /**
     * Returns the previous element in the list and moves the cursor position backwards.
     * 
     * @returns {E}
     * @throw {Error} if the iteration has no more elements
     */
    previous(): E;
    /**
     * Returns the index of the element that would be returned by a subsequent call to `previous()`.
     * 
     * @returns {number}
     */
    previousIndex(): number;
}