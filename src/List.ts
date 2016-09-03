import {Collection} from './Collection';
import {ListIterator} from './ListIterator';

/**
 * An ordered collection (also known as a sequence). The user of this interface has precise control over where in the list each element is inserted. The user can access elements by their integer index (position in the list), and search for elements in the list.
 * 
 * @export
 * @interface List
 * @extends {Collection<E>}
 * @template E
 */
export interface List<E> extends Collection<E> {
    /**
     * Returns the element at the specified position in this list.
     * 
     * @param {number} index - index of the element to return
     * @returns {E} the element at the specified position in this list
     * @throw {Error}  if the index is out of range (index < 0 || index >= size())
     */
    get(index: number): E;
    /**
     * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
     * 
     * @param {Object} o - element to search for
     * @returns {number} the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element
     */
    indexOf(o: Object): number;
    /**
     * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element. 
     * More formally, returns the highest index i such that (o==null ? get(i)==null : o.equals(get(i))), or -1 if there is no such index.
     * 
     * @param {Object} o - element to search for
     * @returns {number} the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element
     */
    lastIndexOf(o: Object): number;
    /**
     * Returns a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list. The specified index indicates the first element that would be returned by an initial call to `next`. An initial call to `previous` would return the element with the specified index minus one.
     * 
     * @param {number} index - index of the first element to be returned from the list iterator (by a call to next)
     * @returns {ListIterator<E>} a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list
     * @throw {Error} if the index is out of range (index < 0 || index > size())
     */
    listIterator(index: number): ListIterator<E>;
    /**
     * Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
     * 
     * @param {number} fromIndex - low endpoint (inclusive) of the subList
     * @param {number} toIndex - high endpoint (exclusive) of the subList
     * @returns {List<E>} a view of the specified range within this list
     * @throw {Error} for an illegal endpoint index value (fromIndex < 0 || toIndex > size || fromIndex > toIndex)
     */
    subList(fromIndex: number, toIndex: number): List<E>;
}