/*
 * Conditionals, Functions, Scope, and Loops.
 */

/*
//equals
let equals = 1 === 1;

//Greater than
let greaterThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

//Greater than
let greaterThanEq = 5 >= 5;

//Less Than Equals
let lessThanEq = 4 <=9;

//Not Equals
let notEquals = 5 !== 2;
*/

/*
let storeA = 8;
let storeB = 8;

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

compareStorePrices(10,15);


function squareNum (number){
    return number * number;
}

let squaredNumber = squareNum (10);
console.log(squaredNumber)
*/

/*
let x = 10;

function addNumber (n,m, x) {
    console.log (x);
    let b;
    if (1===1) {
        b = 8;
    }
    console.log (b)
    return n+m;
}

addNumber (2, 3, 10);
console.log();

 */

/*
//              0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrlen = ourArray.length;
for (let i = 0; i<ourArray.length; i++) {
    console.log ("i is equal to:" + i)
    //console.log (ourArray [i]);

    for (let j= 0; j<10; j++) {
        console.log ('j is equal to:' + j)
    }
}

 */

let x = 0;
while (x < 10) {
    console.log ('Ran');
    x = x + 1;

}
