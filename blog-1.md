# Why any Is a Type Safety Hole and unknown Is Safer

## Introduction

TypeScript helps developers create safer code by providing type checking before compilation. However, the usage of any makes the developer's job harder because this type undermines type checking features provided by TypeScript. To make dealing with data of unknown type safe, developers need to use the unknown type.

## Why any Is Dangerous

When a variable has the any type, its value is treated as anything. In other words, TypeScript stops type checking when the any type is applied to some value.

```ts
let value: any = "Hello";

value.toUpperCase();
value.toFixed();
```

For instance, calling .toUpperCase() on value is acceptable here as the value type is defined as any. The call of .toFixed(), however, should lead to the error. Unfortunately, no error occurs because value is any.

That is why any is called the type safety hole.

## Why unknown Is Safer

Like any, unknown accepts any value as well. The only difference is that unknown cannot be used until checked.

```ts
let value: unknown = "Hello";

value.toUpperCase(); // Error
```

To use it safely, we must check the type first.

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  value.toUpperCase();
}
```

Now TypeScript knows that value is a string inside the if block.

## Type Narrowing

Narrowing means identifying the type of the value.

```ts
function checkValue(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 2;
  }

  return "Invalid value";
}
```

In the example provided, typeof is used for type narrowing.

## Conclusion

unknown is preferable to any as it forces developers to identify the type. Using type narrowing technique, we can make unknown type safe.
