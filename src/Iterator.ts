/**
 * An iterator over a collection. 
 * 
 * @export
 * @interface Iterator
 * @template E
 */
export interface Iterator<E> {
    /**
     * Returns true if the iteration has more elements.
     * 
     * @returns {boolean} true if the iteration has more elements
     */
    hasNext(): boolean;
    /**
     * Returns the next element in the iteration.
     * 
     * @returns {E} the next element in the iteration
     * @throws {Error} if the iteration has no more elements
     */
    next(): E;
}