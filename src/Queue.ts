
/**
 * A collection designed for holding elements prior to processing. Besides basic Collection operations, queues provide additional insertion, extraction, and inspection operations. Each of these methods exists in two forms: one throws an exception if the operation fails, the other returns a special value (either null or false, depending on the operation). The latter form of the insert operation is designed specifically for use with capacity-restricted Queue implementations; in most implementations, insert operations cannot fail.
 * 
 * E - the type of elements held in this collection
 * 
 * @interface Queue
 * @template E
 */
export interface Queue<E> {

    /**
     * Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions, returning true upon success and throwing an IllegalStateException if no space is currently available.
     * 
     * @param {E} e
     * @returns {boolean}
     */
    add(e: E): boolean;

    /**
     * Retrieves, but does not remove, the head of this queue.
     * 
     * @returns {E}
     */
    element(): E;

    /**
     * Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions.
     * 
     * @param {E} e
     * @returns {boolean}
     */
    offer(e: E):boolean;

    /**
     * Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
     * 
     * @returns {E}
     */
    peek(): E;

    /**
     * Retrieves and removes the head of this queue, or returns null if this queue is empty.
     * 
     * @returns {E}
     */
    poll(): E;

    /**
     * Retrieves and removes the head of this queue.
     * 
     * @returns {E}
     */
    remove(): E;
}