import {List} from './List';
import {ListIterator} from './ListIterator';
import {Collection} from './Collection';
import {Iterator} from './Iterator';

export class Vector<E> implements List<E> {

    constructor() {}

    public contains(o: Object): boolean {return false;}
    public containsAll(c: Collection<any>): boolean {return false;}
    public equals(o: Object): boolean {return false;}
    public get(index: number): E {return null;}
    public hashCode(): number {return 0;}
    public indexOf(o: Object): number {return 0;}
    public isEmpty(): boolean {return false;}
    public iterator(): Iterator<E> {return null;}
    public lastIndexOf(o: Object): number { return 0;}
    public listIterator(index: number): ListIterator<E> {return null}
    public size(): number {return 0;}
    public subList(fromIndex: number, toIndex: number): List<E> {return null;}
    public toArray(): Object[] {return null;}

}