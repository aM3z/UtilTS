# utiljs
UtilJS is a module containing  data structures implemented in TypeScript. 

## Collection Framework Hierarchy
A collection represents a group of objects, known as its elements. The Collection interface has the following operations:
+ Basic Operations
..+ size(): number
..+ isEmpty(): boolean
..+ contains(element: E): boolean
..+ add(element: E): boolean
..+ remove(element: E): boolean
+ Bulk Operations
..+ clear(): void
+ Array Opertains
..+ toArray(): E[]


### List 
Interface for ordered collections of elements.


###	Set 
Interface for unique collections of elements.

![UML Diagram](https://github.com/aM3z/utiljs/blob/master/uml.png)
