namespace Collections {
    
    export class List<E> extends Collection<E> {
        // POSITIONAL ACCESS
		get(index: number): E;
		set(index: number): E;
		add(index: number, element: E): boolean;
		remove(index: number): boolean;
		addAll(index: int, c: Colletion<E>): boolean;

        // SEARCH
		indexOf(element: E): number;
		lastIndexOf(element: E): number;


        // RANGE-VIEW
		subList(from: number, to: number): List<E>;
    }

}
