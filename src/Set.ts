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
         * Returns a set containing all elements in both this and the other set.
         * 
         * @param {Set<E>} other - another set
         * @returns {Set<E>} a set containing all elements in both this and the other set
         */
        intersection(other: Set<E>): Set<E>;
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
