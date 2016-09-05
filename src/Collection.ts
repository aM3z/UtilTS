namespace Collections {
    /**
     * A collection that represents a group of objects, known as its elements.
     * 
     * @export
     * @interface Collection
     * @template E
     */
    export interface Collection<E> {

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

    }
}
	

