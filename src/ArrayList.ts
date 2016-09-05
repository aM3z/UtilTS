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

		/**
		 * Appends the specified element to the end of this list.
		 * If optional parameter index is not undefined, inserts the specified element at the specified position in this list. Shifts the element currently at that position (if any) and any subsequent elements to the right (adds one to their indices). 
		 * 
		 * @param {E} element - element to be inserted
		 * @param {number} [index] - index at which the specified element is to be inserted
		 * @returns {boolean} true if this ArrayList changed as a result of the call
		 * @throws {RangeError} if the index is out of range (index < 0 || index > size())
		 */
		public add(element: E, index: number): boolean {
			// if both `element` and `index` parameters are passed
			if(element && typeof index === "number" ) {
				// throw RangeError if the index is out of range
				if(index < 0 || index > this.size()) {
					throw new RangeError("index is out of range (index < 0 || index > size())");
				}
				// make a copy of the left side of `_elementData` array
				// do not include the element currently at position `index` 
				let left: E[] = this._elementData.slice(0, index);
				// make a copy of the right side of `_elementData` array
				// include the element currently at position `index`
				let right: E[] = this._elementData.slice(index);
				// wrap element in array 
				let wrappedElement: E[] = [element];
				// concatenate left, wrappedElement, and right arrays
				// assign new array to `_elementData`
				this._elementData = left.concat([element], right);
				// true if this ArrayList changed 
				return true;
			// if `element` is the only parameter passed
			} else if(element) {
				// push element 
				this._elementData.push(element);
				// true if this ArrayList changed
				return true;
			}
			// false if this ArrayList did not changed
			return false;
		}
		/**
		 * Removes all of the elements from this list. The list will be empty after this call returns.
		 */
		public clear(): void {
			this._elementData.length = 0;
		}
		/**
		 * Returns true if this collection contains the specified element.
		 * 
		 * @param {Object} o - element whose presence in this collection is to be tested
		 * @returns {boolean} true if this collection contains the specified element
		 */
		public contains(element: E): boolean {
			// true if `o` is in `_elementData`
			if(this._elementData.indexOf(element) >= 0) {
				return true;
			}
			// false if `o` is not in `_elementData`
			return false;
		 }

		/**
		 * Compares the specified object with this collection for equality.
		 * 
		 * @param {Object} o - object to be compared for equality with this collection
		 * @returns {boolean} true if the specified object is equal to this collection
		 */
		/**
		public equals(o: Object): boolean {
			if(this.containsAll(o as ArrayList<E>) && (o as ArrayList<E>).containsAll(this)) {
				return true;
			} 
			return false; 
		}
		*/

		/**
		 * Returns the element at the specified position in this list.
		 * 
		 * @param {number} index - index of the element to return
		 * @returns {E} the element at the specified position in this list
		 * @throws {RangeError} if the index is out of range (index < 0 || index >= size())
		 */
		public get(index: number): E {
			// throw RangeError if the index is out of range
			if(index < 0 || index >= this.size()) {
				throw new RangeError("index is out of range (index < 0 || index >= size())");
			}
			// return the element at the specified position in this list
			return this._elementData[index];
		}

		// not implemented yet
		public hashCode(): number { 
			return 0;        
		}


		/**
		 * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element. More formally, returns the lowest index i such that (o==null ? get(i)==null : o.equals(get(i))), or -1 if there is no such index.
		 * 
		 * @param {Object} o - element to search for
		 * @returns {number} the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element
		 */
		public indexOf(o: Object): number { 
			// default to -1
			let index: number = -1;
			// iterate through `_elementData`
			loop: {
			  for (let i: number = 0; i < this.size(); i++) {
				// if `o` object is located in `_elementData`
				if (o === this._elementData[i]) {
				  // store the index of the first occurrence of the specified element
				  index = i;
				  // break out of this loop
				  break loop;
				}
			  }
			}
		
			return index;
		}
		/**
		 * Returns true if this list contains no elements.
		 * 
		 * @returns {boolean} true if this list contains no elements.
		 */
		public isEmpty(): boolean {
			return this.size() === 0; 
		}
		/**
		 * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element. More formally, returns the highest index i such that (o==null ? get(i)==null : o.equals(get(i))), or -1 if there is no such index.
		 * 
		 * @param {Object} o - element to search for
		 * @returns {number} the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element
		 */
		public lastIndexOf(o: Object): number { 
			// default to -1
			let index: number = -1;
			// iterate through `_elementData`
			loop: {
			  for (let i: number = this.size() - 1; i >= 0; i--) {
				// if `o` object is located in `_elementData`
				if (o === this._elementData[i]) {
				  // store the index of the last occurrence of the specified element
				  index = i;
				  // break out of this loop
				  break loop;
				}
			  }
			}
		
			return index;        
		}

		public remove(element: number | any): E | boolean { 
			// remove the element at the specified position
			if(typeof element === "number") {

				// throw RangeError if the index is out of range
				if(element < 0 || element >= this.size()) {
					throw new RangeError("index is out of range (index < 0 || index >= size())");
				}
				// make a copy of the left side of `_elementData` array
				// do not include the element currently at position `index` 
				let left: E[] = this._elementData.slice(0, element);
				// make a copy of the right side of `_elementData` array
				// do not include the element currently at position `index`
				let right: E[] = this._elementData.slice(element + 1);
				// wrap element in array 
				let removedElement: E = this.get(element);
				// concatenate left, wrappedElement, and right arrays
				// assign new array to `_elementData`
				this._elementData = left.concat(right);
				// return the element that was removed from the list
				return removedElement;

			// remove the first occurrence of the specified element from this list, if it is present
			} else {
				// get index of the first occurrence of the specified element
				let index: number = this.indexOf(element);
				// if element found them remove it and return true
				if(index >= 0) {
					this.remove(index);
					return true;
				}
				
				return false;
			}
		}


		/**
		 * Replaces the element at the specified position in this list with the specified element.
		 * 
		 * @param {number} index - index of the element to replace
		 * @param {E} element - element to be stored at the specified position
		 * @returns {E} the element previously at the specified position
		 */
		public set(index: number, element: E): E {
			// if the index is out of range
			if(index < 0 || index >= this.size()) {
				throw new RangeError("index is out of range (index < 0 || index >= size())");
			}
			// store element previously at the specified position    
			let previousElement: E = this._elementData[index];
			// replace the element at the specified position with the specified element
			this._elementData[index] = element;
			// return the element previously at the specified position        
			return previousElement;
		}
		/**
		 * Returns the number of elements in this collection. 
		 * 
		 * @returns {number} the number of elements in this collection
		 */
		public size(): number {return this._elementData.length;}
		// not implementated yet
		public subList(fromIndex: number, toIndex: number): List<E> { return null; }
		/**
		 * Returns an array containing all of the elements in this collection. If this collection makes any guarantees as to what order its elements are returned by its iterator, this method must return the elements in the same order.
		 * The returned array will be "safe" in that no references to it are maintained by this collection. (In other words, this method must allocate a new array even if this collection is backed by an array). The caller is thus free to modify the returned array.
		 * This method acts as bridge between array-based and collection-based APIs.
		 * 
		 * @returns {Object[]} an array containing all of the elements in this collection
		 */
		public toArray(): Object[] {
			// instantiate new array
			let newArray: E[] = [];
			// push each element in `_elementData` to `newArray` 
			this._elementData.forEach((element) => newArray.push(element) );
			// return new array
			return newArray; 
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
