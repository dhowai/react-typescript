
// Primatives

let age: number;

age = 12;

let userName: string;

userName = 'D'

let isInstructor : boolean

isInstructor = true

// More complex

let hobbies: string[]

hobbies = ['sport', 'cooking']

type Person = {
    name: string,
    age: number
};

let person: Person

person = {
    name: 'D',
    age: 28
}

// person = {
//     isEmployee: true
// }

let people: Person[]

// Type inference

let course: string | number = 'React'

course = 1234

// Functions and types

function add(a: number, b: number) {
    return a + b;
}

function printOpt(value: any) {
    console.log(value)
}