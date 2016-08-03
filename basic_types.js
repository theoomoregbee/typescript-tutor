/**
 * Created by SQ04 on 8/3/2016.
 */
/**
 * https://www.typescriptlang.org/docs/handbook/basic-types.html
 *
 */
//For Boolean
var isDone = false;
//for Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//For String
var color = "blue";
color = 'red';
//template strings can span multiple lines and allow expressions ${expr}
var templateString = "Boolean: " + isDone + "\n    Decimal: " + decimal + "\n    Hex: " + hex + "\n    Binary: " + binary + "\n    Octal: " + octal;
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
//for Array alternative using generic types
var list = [1, 2, 3];
document.body.innerHTML = "" + list;
//# sourceMappingURL=basic_types.js.map