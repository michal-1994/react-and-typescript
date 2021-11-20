// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = 'Michal';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let names: string[];

names = ['Max', 'Michal'];

type Person = {
    name: string;
    age: number;
}

let person: Person;

person = {
    name: 'Max',
    age: 23
};

let people: Person[];

// Type inference

let course: string | number = 'React - The compilte guide';

course = 12345;

// Functions & typescript

function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

// updatedArray[0].split('');

