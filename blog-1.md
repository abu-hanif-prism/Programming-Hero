# Why `any` Is a Type Safety Hole and `unknown` Is Safer

## Introduction

TypeScript helps us write safer JavaScript by checking types before the code runs. But using `any` can break this safety. A better option for uncertain data is `unknown`.

## Why `any` Is Dangerous

The `any` type allows a value to be anything. When we use `any`, TypeScript stops checking that value.

```ts
let value: any = "Hello";

value.toUpperCase();
value.toFixed();
```

Here, `toUpperCase()` is valid for a string, but `toFixed()` is not. TypeScript will not show an error because `value` is `any`. This can cause runtime errors.

That is why `any` is called a **type safety hole**. It disables TypeScript's protection.

## Why `unknown` Is Safer

The `unknown` type also accepts any value, but we cannot use it directly without checking its type.

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

Now TypeScript knows that `value` is a string inside the `if` block.

## Type Narrowing

Type narrowing means checking a value's type before using it.

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

Here, `typeof` narrows the `unknown` value into a specific type like `string` or `number`.

## Conclusion

`any` is risky because it removes type checking. `unknown` is safer because it forces us to check the type before using the value. By using type narrowing with `unknown`, we can handle unpredictable data safely in TypeScript.
