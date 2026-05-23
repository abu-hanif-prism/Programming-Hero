# How Generics Make TypeScript Code Reusable and Strictly Typed

## Introduction

Generics are one of the most useful features of TypeScript. They allow us to write reusable code without losing type safety. Instead of writing separate functions for strings, numbers, or objects, we can write one flexible function that works with many types.

## What Are Generics?

A generic is like a type variable. It allows us to pass the type later when the function or type is used.

```ts
function createArray<T>(value: T): T[] {
  return [value];
}
```

Here, `T` represents the type of the value. If we pass a string, TypeScript understands that the return type is a string array.

```ts
const result1 = createArray("TypeScript");
// string[]

const result2 = createArray(100);
// number[]
```

## Why Generics Are Better Than `any`

We could write the function using `any`, but that would remove type safety.

```ts
function createArray(value: any): any[] {
  return [value];
}
```

This works, but TypeScript cannot properly track the type. Generics solve this problem because they keep the code flexible and strongly typed.

```ts
function createArray<T>(value: T): T[] {
  return [value];
}
```

Now the function works with different data types while still preserving the correct type.

## Generics with Objects

Generics are also useful when working with objects.

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

The returned object will include both the original student information and the new `course` property.

## Generics with Constraints

Sometimes we want flexibility, but we also need some rules. For that, we can use constraints.

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

Here, `T extends Student` means the input must have at least `id` and `name`. This keeps the function reusable but also safe.

## Conclusion

Generics help us write reusable TypeScript code without using unsafe types like `any`. They allow functions, interfaces, and types to work with different data structures while preserving strict type checking.

By using generics, we can create flexible, clean, and type-safe code for real-world applications.
