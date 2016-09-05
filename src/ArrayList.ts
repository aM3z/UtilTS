/// <reference path="List.ts" />

namespace Collections {
	/**
	 * Resizable-array implementation of the List interface.
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
		 * The array buffer into which the elements of the ArrayList are stored.
		 *
		 * @private
		 * @type {E[]}
		 */
		private _elementData: E[];

		/**
		 * Creates an empty list.
		 *
		 */
		public constructor() {
			this._elementData = [];
		}

		// BASIC OPERATIONS

		/**
		 * Adds an element to this collection.
		 *
		 * @param {E} element - element to be added
		 * @param {number} [index] - index of element to be added
		 * @returns {boolean} true if element is successfully added
		 */
		add(element: E, index?: number): boolean;
		/**
		 * Returns true if a target element is in this collection.
		 *
		 * @param {E} element - target element
		 * @returns {boolean} true if target element is in this collection
		 */
		contains(element: E): boolean;
		/**
		 * Returns true if this collection contains no elements.
		 *
		 * @returns {boolean} true if this collection contains no elements
		 */
		isEmpty(): boolean;
		/**
		 * Removes an element from this collection.
		 *
		 * @param {(E | number)} element - the Object or index of element to be removed
		 * @returns {boolean} true if element is successfully removed
		 */
		remove(element: E | number): boolean;
		/**
		 * Returns the number of elements in this collection.
		 *
		 * @returns {number} the number of elements in this collection
		 */
		size(): number;

		// BULK OPERATIONS

		/**
		 * Removes all elements from this collection.
		 *
		 */
		clear(): void;


		// ARRAY OPERATIONS

		/**
		 * Translates the contents of this collection into an array.
		 *
		 * @returns {E[]} the contents of this collection as an array
		 */
		toArray(): E[];


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
