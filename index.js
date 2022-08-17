//let, var, const

// let msg = 12234567;
// let msg = false;

// msg = 'This is some value  1234r432&((*&^%$##$%^   1234567';
// msg = 1.2;

// console.log(msg);
//some code

let value1 = 50;
let value2 = 10;

// ==, ===

// console.log(value1 == value2)
// console.log(value1 === value2)

// !=, !==
// console.log(value1 != value2)
// console.log(value1 !== value2)


// Less, Greater Than
// console.log(value1 > 50);
// console.log(value1 < 50);

// Less, Greater Than or equal to
// console.log(value1 >= 50);
// console.log(value1 <= 50);

// NOT operation
// let someBooleanValue = null;

// console.log(!someBooleanValue);


//falsey value :- all default values -> number (0), string(''), boolean(false), undefined(default value provided by js), null(defalut value provided by developers)
//truthy value :- non default values -> number (not 0), string (not ''), boolean (true), object({})

//
// console.log(msg);

//Employee
// let emp = { name: 'Richard', height: 200, weight: 100 };
// let pradeep = { name: 'Pradeep', height: 300 };

// console.log(emp.weight);
// console.log(pradeep.weight);


function MyFirstFunction(parameter1, parameter2) {
    console.log('Inside my Function', parameter1, parameter2);
}


let anonymousFunction = function (parameter1, parameter2) {
    console.log('Inside anonymous Function', parameter1, parameter2);
}


let seconanonymous = function () {
    
}


let arrowFnction = () => {
    
}


// MyFirstFunction(100, 'Second Parameter');
// anonymousFunction();
// arrowFnction();



// let fromLet; // from ES6 (ES2015)
// var fromVar; // from the begining


// //Value is known and should not be changed.
// const fromConst = 3.142;

// console.log(fromIf);

// if(true) {
//     var fromIf = 'value is from IF condition';
//     console.log(fromIf);
// }



// console.log(this);


class Employee {
    constructor() {
        this.name = 'Pradeep';
        this.height = 170;
    }
}

const SomeObj = new Employee();
console.log(SomeObj.height);