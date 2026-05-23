# How Generics Build Reusable and Strictly Typed Code

## Introduction

Generics are one of the most powerful features of TypeScript. They allow us to write reusable code without losing type safety. Instead of writing separate functions or types for every data type, we can write one generic version that works with many types.

## The Problem Without Generics

Suppose we want to create an array from a value.

```ts
function createStringArray(value: string): string[] {
  return [value];
}

function createNumberArray(value: number): number[] {
  return [value];
}
```

This works, but it creates duplicate code. If we need more types, we need more functions.

## Using Generics

Generics solve this problem.

```ts
function createArray<T>(value: T): T[] {
  return [value];
}
```

Here, `T` is a type variable. It keeps the function flexible but still type-safe.

```ts
const stringArray = createArray("TypeScript");
const numberArray = createArray(100);
const booleanArray = createArray(true);
```

TypeScript understands the return type automatically:

```ts
stringArray;  // string[]
numberArray;  // number[]
booleanArray; // boolean[]
```

## Generics with Objects

Generics also work with objects.

```ts
type ApiResponse<T> = {
  success: boolean;
  data: T;
};

type User = {
  id: number;
  name: string;
};

const userResponse: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "John Doe",
  },
};
```

The response structure stays the same, but the `data` type can change.

## Generics with Constraints

Sometimes we want generics, but with rules.

```ts
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}
```

This function only allows keys that actually exist in the object.

```ts
const user = {
  id: 1,
  name: "John Doe",
};

getProperty(user, "name");
```

This is valid. But this is invalid:

```ts
getProperty(user, "email");
```

Because `email` does not exist in the `user` object.

## Why Generics Are Important

Generics help us:

- avoid duplicate code
- keep type safety
- write reusable functions
- build flexible interfaces and types
- improve maintainability in large projects

## Conclusion

Generics allow us to write flexible code without using unsafe types like `any`. They are especially useful in functions, interfaces, API responses, and reusable components. With generics, TypeScript code becomes both reusable and strongly typed.
