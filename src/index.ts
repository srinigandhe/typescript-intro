import Fruit from "./Fruit";

let apples: number = 5;
let speed: string = 'fast';
let flag: boolean = true;
let nullVar: null = null;
let undefinedVar: undefined = undefined;

// Arrays
let colors: string[] = ['red', 'blue', 'green'];
let nums: number[] = [1, 2, 3];
let flags: boolean[] = [true, true, false];

let now: Date = new Date();
let car: Fruit = new Fruit('Mango', true, 'Yellow', 150);
let point: { x: number; y: number } = {
    x: 40,
    y: 60
};

let logFunction: (i: number) => void = (i: number) => {
    console.log(i);
};

console.log(apples, speed, flag, nullVar, undefinedVar, colors, nums, flags, now, car, point);

logFunction(10);


let str: string = 'Hello world';
let num: number = 123;
let trueVar: boolean = true;
let arr: number[] = [1, 2, 3];

type MyType = {
    name: string,
    dob: Date,
    lastName: string
}

let myTypeArr: MyType[] = [
    {name: 'Srini', lastName: 'Gandhe', dob: new Date(Date.UTC(1984, 1, 26))}
]

const addFunction: (x: number, y: number) =>  number = (x: number, y: number) => {
    return x + y;
};

type MathFunction = (x: number, y: number) => number;

const subtractFunction: MathFunction = (x: number, y: number) => x + y;

console.log(str, num, trueVar, arr, myTypeArr);

addFunction(10, 20);
subtractFunction(10, 4);
