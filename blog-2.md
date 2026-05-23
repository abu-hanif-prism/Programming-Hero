# Typescript Generics for Reusability and Strict Typing
## Introduction
One of the greatest features offered by Typescript language is generics. Using this tool, we can make our code more flexible and reusable. The alternative to this solution is to write separate functions for each data type.

## Generics Overview
As the name suggests, generic is a variable which type will be defined later. We can use generics for types and function definitions.
```ts
function createArray<T>(value: T): T[] {
  return [value];
}
```
In this example, T stands for the type of value we pass as a parameter. If we pass a string, TypeScript recognizes that the resulting array is string type.
```ts
const result1 = createArray("TypeScript");
// string[]

const result2 = createArray(100);
// number[]
```
## Generics vs any
We might use the same logic for defining createArray function with any:
```ts
function createArray(value: any): any[] {
  return [value];
}
```
This function would do its job, but it doesn't guarantee any type safety. In order to address the problem, we should rely on generics:
```ts
function createArray<T>(value: T): T[] {
  return [value];
}
```
With generics, we get flexible and type-safe functionality for handling arrays of different data types.

### Generics and Objects
Besides basic use cases, we can apply generics for defining objects:
```ts
function addCourse<T>(student: T) {
  return {
    course: "Next Level Web Development",
    ...student,
  };
}
```
Example:
```ts
const student = {
  id: 1,
  name: "Rahim",
};

const result = addCourse(student);
```
The resulting object would consist of original fields plus new one called course.

### Generics and Constraints
However, sometimes we want to combine flexibility with additional limitations. In such case, we can define constraints:
```ts
type Student = {
  id: number;
  name: string;
};

function addStudentToCourse<T extends Student>(student: T) {
  return {
    course: "Next Level Web Development",
    ...student,
  };
}
```
Here, T extends Student means that we must pass an input containing at least id and name fields.

## Conclusion
Thanks to generics, we can use flexible and strictly-typed solutions in our TypeScript code. These concepts give us reusable function, interfaces, and types capable of handling various data structures.