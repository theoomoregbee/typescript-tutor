/**
 * Created by SQ04 on 8/3/2016.
 */

/**
 * https://www.typescriptlang.org/docs/handbook/basic-types.html
 *
 */
//For Boolean
let isDone:boolean = false;

//for Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//For String
let color: string = "blue";
color = 'red';

//template strings can span multiple lines and allow expressions ${expr}
let templateString: string = `Boolean: ${isDone}
    Decimal: ${decimal}
    Hex: ${hex}
    Binary: ${binary}
    Octal: ${octal}`;

let fullName: string = `Bob Bobbington`;
let age: number = 37;

let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

//for Array alternative using generic types
let list: Array<number> = [1, 2, 3];

//for tuples
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK

console.log(x[0]+"-"+x[1].toString());

document.body.innerHTML = ""+list;