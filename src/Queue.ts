namespace Collections {
    /**
     * Interface for holding elements prior to processing. 
     * 
     * @interface Queue
     * @template E
     */
    export interface Queue<E> extends List<E> {
        
        /**
         * Removes the element from the front of the queue.
         * 
         * @returns {E} the element that was removed
         */
        dequeue(): E;
        /**
         * Adds an element onto the end of the queue.
         * 
         * @param {E} newElement - element that is to be added
         * @returns {boolean} return true if new element was added successfully
         */
        enqueue(newElement: E): boolean;
        /**
         * Returns the element at the front of the queue.
         * 
         * @returns {E} element at the front of the queue
         */
        front(): E;
        /**
         * Returns true if no more elements can be enqueued.
         * 
         * @returns {boolean} true if no more elements can be enqueued.
         */
        isFull(): boolean;
    
    }
}