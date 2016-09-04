/**
 * An iterator that excapsulates both access to single element and incremental movement around a collection. 
 * 
 * @export
 * @interface Iterator
 * @template E
 */
export interface Iterator<E> {

    equal(otherIter: Iterator<E>): boolean;
    get(): E;
    next(): void;
    previous(): void;
    set(newItem: E): void;

}