var Collections;
(function (Collections) {
    /**
     * The Stack class represents a last-in-first-out (LIFO) stack of objects. It
     * extends class Vector with five operations that allow a vector to be treated
     * as a stack. The usual push and pop operations are provided, as well as a
     * method to peek at the top item on the stack, a method to test for whether the
     * stack is empty, and a method to search the stack for an item and discover how
     * far it is from the top.
     *
     * When a stack is first created, it contains no items
     *
     * @export
     * @class Stack
     * @implements {StackInterface<T>}
     * @template T
     *
     * @author Miguel Amezola <amezolma@plu.edu>
     */
    var Stack = (function () {
        /**
         * Creates an instance of Stack.
         * @constructor
         */
        function Stack() {
            this._elementData = [];
        }
        /**
         * Tests if this stack is empty.
         *
         * @return {boolean} true if and only if this stack contains no items; false
         * otherwise.
         */
        Stack.prototype.empty = function () { return this._elementData.length === 0; };
        /**
         * Looks at the object at the top of this stack without removing it from the
         * stack.
         *
         * @return {T} the object at the top of this stack.
         */
        Stack.prototype.peek = function () {
            // if this stack is empty
            if (this.empty()) {
                throw new Error('this stack is empty');
            }
            return this._elementData[this._elementData.length - 1];
        };
        /**
         * Removes the object at the top of this stack and returns that object as the
         * value of this function.
         *
         * @param {T} The object at the top of this stack.
         */
        Stack.prototype.pop = function () {
            // if this stack is empty
            if (this.empty()) {
                throw new Error('this stack is empty');
            }
            return this._elementData.pop();
        };
        /**
         * Pushes an item onto the top of this stack.
         *
         * @param {T} item - the item to be pushed onto this stack.
         # return {T} the item argument.
         */
        Stack.prototype.push = function (item) {
            this._elementData.push(item);
            return item;
        };
        /**
         * Returns the 1-based position where an object is on this stack. If the
         * object o occurs as an item in this stack, this method returns the distance
         * from the top of the stack of the occurrence nearest the top of the stack;
         * the topmost item on the stack is considered to be at distance 1. The equals
         * method is used to compare o to the items in this stack.
         *
         * @param {Object} o - the desired object.
         * @return {number} the 1-based position from the top of the stack where the
         * object is located; the return value -1 indicates that the object is not on
         * the stack.
         */
        Stack.prototype.search = function (o) {
            // position default to -1
            var position = -1;
            // iterate through stack from top to bottom
            loop: {
                for (var i = this._elementData.length - 1; i >= 0; i--) {
                    // if `o` object is located in stack
                    if (o === this._elementData[i]) {
                        // assign new value to position
                        position = this._elementData.length - i;
                        // break out of this loop
                        break loop;
                    }
                }
            }
            return position;
        };
        return Stack;
    }());
    Collections.Stack = Stack;
})(Collections || (Collections = {}));
