# UtilTS
UtilTS is a module containing  data structures implemented in TypeScript. 

## Collection Framework Hierarchy
A collection represents a group of objects, known as its elements. The Collection interface has the following operations:

* Basic Operations
	+ add(element: E, index?: number) : boolean
	+ contains(element: E): boolean
	+ isEmpty(): boolean
	+ remove(element: E): boolean
	+ size(): number
* Bulk Operations
	+ clear(): void
* Array Operations
	+ toArray(): E[]


### List 
The List interface, which extends the Collection interface, is for ordered collections of elements. It has the following operations:

* Positional Access
	+ get(index: number): E
	+ set(index: number, element: E): E
	+ add(element: E, index: number): boolean
	+ remove(index: number): boolean
	+ addAll(index: number, c: Collection<E>): boolean
* Search
	+ indexOf(element: E): number;
	+ lastIndexOf(element: E): number;
* Range-view
	+ subList(from: number, to: number): List<E>

###	Set 
The Set interface extends the Collection interface and is used for unique collections of elements. It has the following operations:

* Set Operations
	+ intersection(other: Set<E>): Set<E>
	+ subtract(other: Set<E>): Set<E>
	+ union(other: Set<E>): Set<E>

![UML Diagram](https://github.com/aM3z/utiljs/blob/master/uml.png)
