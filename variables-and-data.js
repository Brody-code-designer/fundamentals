/*
*Variables, Data Types, and Typing
 */

//variables
let wordData = "Word Data";

console.log (wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

console.log (totalWithTax);

//data types
let obj = {
    key1: "value",
    key2: 4,
    boolean: true,
    obj2: {
        obj2Key1: "Internal Object Value",
    }
};

console.log(obj.key1);

//nesting objects
let object = {
    key1: "Value 1",
    key2: 3,
    obj2: {
        obj2Key1 : "value of inner object",
    },
}

console.log (object.obj2.obj2Key1);

//Typing system
let variable = "string";

//JS is a weak language which allows data types to be converted

let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result);

//operators

let add = 1 + 1;
let sub = 2 - 1;
let mult = 2*4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "string 1 " + "string 2";

console.log(string);


