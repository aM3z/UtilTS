/// <reference path="Collection.ts" />

namespace Collections {
    /**
     * A ordered collection. Lists may include duplicate elements.
	 * In addition to all to the operations inherited from Collection, the List interface includes operations for:
     *
	 * Positional Access: manipulate elements based on their numerical position in the list.
	 * Search: search for a specified object in the list and return its numerical position.
	 * Range-view: perform arbitrary range operations on the list.
	 *
     * @export
     * @interface List
     * @extends {Collection<E>}
     * @template E
     */
    export interface List<E> extends Collection<E> {

    // POSITIONAL ACCESS

		/**
		 * Returns the element at the specified position in this list.
		 *
		 * @param {number} index - index of the element to return
		 * @returns {E}	the element at the specified position in this list
		 * @throws {RangeError} if the index is out of range (index < 0 || index >= size())
		 */
		get(index: number): E;
		/**
		 * Replaces the element at the specified position in this list with the specified element.
		 *
		 * @param {number} index - index of the element to replace
		 * @param {E} element - element to be stored at the specified position
		 * @returns {E} the element previously at the specified position
		 * @throws {RangeError} if the index is out of range (index < 0 || index >= size())
		 */
		set(index: number, element: E): E;
		/**
		 * Inserts the specified element at the specified position in this list.
		 * Shifts the element currently at that position (if any) and any subsequent elements to the right (adds one to their indices).
		 *
		 * @param {E} element - element to be inserted
		 * @param {number} index - index at which the specified element is to be inserted
		 * @returns {boolean} true if element was successfully added
		 * @throw {RangeError} if the index is out of range (index < 0 || index > size())
		 */
		add(element: E, index: number): boolean;
		/**
		 * Removes the element at the specified position in this list.
		 * Shifts any subsequent elements to the left (subtracts one from their indices).
		 * Returns the element that was removed from the list.
		 *
		 * @param {number} index - the index of the element to be removed
		 * @returns {boolean} true if element was successfully removed
		 */
		remove(index: number): boolean;
		/**
		 * Inserts all of the elements in the specified collection into this list at the specified position (optional operation).
		 * Shifts the element currently at that position (if any) and any subsequent elements to the right (increases their indices).
		 *
		 * @param {number} index - index at which to insert the first element from the specified collection
		 * @param {Collection<E>} c - collection containing elements to be added to this list
		 * @returns {boolean} true if this list changed as a result of the call
		 */
		addAll(index: number, c: Collection<E>): boolean;

    // SEARCH

		/**
		 * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
		 *
		 * @param {E} element - element to search for
		 * @returns {number} the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element
		 */
		indexOf(element: E): number;
		/**
		 * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
		 *
		 * @param {E} element - element to search for
		 * @returns {number} the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element
		 */
		lastIndexOf(element: E): number;

    // RANGE-VIEW

		/**
		 * Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive. (If fromIndex and toIndex are equal, the returned list is empty.)
		 * The returned list is backed by this list, so non-structural changes in the returned list are reflected in this list, and vice-versa.
		 *
		 * @param {number} from - low endpoint (inclusive) of the subList
		 * @param {number} to - high endpoint (exclusive) of the subList
		 * @returns {List<E>} a view of the specified range within this list
		 */
		subList(from: number, to: number): List<E>;
    }

}
