// Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  return evenNumbers;
}

// Problem 2
function reverseString(input: string): string {
  const reversedString = input.split("").reverse().join("");
  return reversedString;
}

// Problem 3
type StringOrNumber = string | number;

function checkType(input: StringOrNumber): "String" | "Number" {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}

// Problem 4
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

// Problem 6
class Person {
  constructor(public name: string, public age: number) {}
}

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7
function getIntersection(firstArray: number[], secondArray: number[]): number[] {
  const commonNumbers = firstArray.filter((number) =>
    secondArray.includes(number)
  );

  return commonNumbers;
}