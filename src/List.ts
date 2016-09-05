/// <reference path="Collection.ts" />

namespace Collections {
    export interface List<E> extends Collection<E> {
        // POSITIONAL ACCESS
		get(index: number): E;
		set(index: number): E;
		add(element: E, index: number): boolean;
		remove(index: number): boolean;
		addAll(index: number, c: Collection<E>): boolean;

        // SEARCH
		indexOf(element: E): number;
		lastIndexOf(element: E): number;


        // RANGE-VIEW
		subList(from: number, to: number): List<E>;
    }

}
