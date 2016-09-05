namespace Collections {
    /**
     * Interface for unique collections of elements.
     * 
     * @export
     * @interface Set
     * @extends {List<E>}
     * @template E
     */
    export interface Set<E> extends List<E> {
        /**
         * Returns true if testElement is contained in the set.
         * 
         * @param {E} testElement - element to be tested
         * @returns {boolean} true if testElement is contained in the Set
         */
        contains(testElement: E): boolean;
        /**
         * Returns the iterator that represents the first element of the set. Runs in O(1) time.
         * 
         * @returns {Iterator<E>} the iterator that represents the first element of the set
         */
        getBegin(): Iterator<E>;
        /**
         * Returns the iterator that represents one element past the last element in the set. Runs in O(1) time.
         * 
         * @returns {Iterator<E>} the iterator that represents one element past the last element in the set
         */
        getEnd(): Iterator<E>;
        /**
         * Returns a set containing all elements in both this and the other set.
         * 
         * @param {Set<E>} other - another set
         * @returns {Set<E>} a set containing all elements in both this and the other set
         */
        intersection(other: Set<E>): Set<E>;
        /**
         * Removes an element from this collection.
         * If `param` is an instance of Iterator, then the element immediately referred to by `param` is removed.
         * If `param` is of type E and the element is in this collection, then the element is removed.
         * 
         * @param {(E | Iterator<E>)} param - an instance of Iterator reffering to the element to be rmeoved or an element of type E
         * @returns {boolean} true if an element is successfully removed
         */
        remove(element: E | Iterator<E>): boolean;
        /**
         * Returns a set containing all elements in this but not the other set.
         * 
         * @param {Set<E>} other - another set
         * @returns {Set<E>} a set containing all elements in this but not the other set
         */
        subtract(other: Set<E>): Set<E>;
        /**
         * Returns a set containing all elements in either this or the other set.
         * 
         * @param {Set<E>} other - another set
         * @returns {Set<E>} a set containing all elements in either this or the other set
         */
        union(other: Set<E>): Set<E>;
    }
}