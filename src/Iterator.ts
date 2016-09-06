/**
 * An iterator that excapsulates both access to single element and incremental movement around a collection. 
 * 
 * @export
 * @interface Iterator
 * @template E
 * 
 * @author Miguel Amezola <amezolma@plu.edu>
 */
export interface Iterator<E> {
	/**
	 * Return true iff the other iterator refers to the same list element as this iterator.
	 * 
	 * @param {Iterator<E>} otherIter - the other iterator
	 * @returns {boolean} true iff the other iterator refers to the same list element as this iterator.
	 */
	equal(otherIter: Iterator<E>): boolean;
	/**
	 * Returns the value of the element that this iterator refers to. 
	 * Undefined if the iterator is past-the-end.
	 * 
	 * @returns {E} the value of the element that this iterator refers to; undefined if the iterator is past-the-end
	 */
	getValue(): E;
	/**
	 * Makes this iterator refer to the next element in the collection. 
	 * Undefined if the iterator is past-the-end.
	 * 
	 */
	next(): void;
	/**
	 * Makes this iterator refer to the previous element in the collection. 
	 * Undefined if the iterator refers to the first element.
	 * 
	 */
	previous(): void;
	/**
	 * Assigns a new value to the element that this iterator refers to. 
	 * Undefined if the iterator is past-the-end.
	 * 
	 * @param {E} newValue - the new value to be assigned to the element that this iterator refers to
	 * @returns {E} the previous value of the element that his iterator refers to; undefined if the iterator is past-the-end
	 */
	setValue(newValue: E): E;
}
