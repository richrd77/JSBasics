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

// OOPS 1. class
// OOPS 2. Encapsulation : hiding properties (public properties & private properties)
// OOPS 3. Inheritance : inherting properties & functions
// OOPS 4. Polymorphism
// Getter -> only to perform GET
// Setter -> only to perform SET

class Employee {
    constructor(nme) {
        var name = nme;
        this.height = 170;
        this.showFullName = () => {
            // console.log(this);
            console.log(name);
        }
    }

    get Height() {
        return this.height;
    }

    set Height(p) {
        if (p >= 100 && p <= 200) {
            this.height = p;
        } else {
            throw 'Height is not in range';
        }
        // this.height = 
    }

    ShowHeight() {
        console.log(this.height);
    }
}


class TempEmployee extends Employee {
    constructor(name) {
        super(name);
    }
}

class PermanentEmployee extends Employee {
    constructor(name) {
        super(name);
    }
}

// const SomeObj = new Employee('pradeep');
// const richardObj = new Employee();
// console.log(SomeObj);
// SomeObj.showFullName();
// SomeObj.name = 'Richard'
// console.log(SomeObj);
// console.log(richardObj);

// const richObj = new TempEmployee('richard');
// const pradeep = new PermanentEmployee('pradeep');

// const ric = new Employee('Ric');
// richObj.Height = 150;
// console.log(richObj.Height);
// console.log(pradeep);

// richObj.showFullName();
// richObj.ShowHeight();


let myList = [1, 2, 3, 4, 5, 6, 10, 11, 100, 1000, 10000, 1000000, 33, 34]; // 8 elements - 0 to 7 is the index
let empList = [{ name: 'Rich', age: 400 }, { name: 'some', age: 300 }, { name: 'kid', age: 5 }];
// console.log(myList[10])
// console.log(empList[1].name, empList[1].age)

// console.log(myList);
// myList[2] = 100;
// console.log(myList);

// console.log(myList, empList)

// starting point & end point is known then we use for loop
// for (let index = 0; index < myList.length; index = index + 2) {
//     console.log(myList[index]);
// }


function Display(currentObj) {
    console.log('Displaying', currentObj)
}

// ES6 feature
// empList.forEach((currentObj) => {
//     console.log(currentObj)
// });

let names = empList.map((parameter1) => {
    return parameter1.name;
});

let ages = empList.map((parameter1) => {
    return parameter1.age;
});

let result;

// result = empList.find((parameter1) => {
//     return parameter1.name == 'Rich1234567uijhgfdertyuk,mnbv'
// });

// result = empList.filter((parameter1) => {
//     return parameter1.age < 10;
// });

// console.log(empList);
// empList.push({ name: 'via push', age: 20 })


// console.log(empList);
// empList.pop({ name: 'via push', age: 20 })
// console.log(empList);
// console.log(names, ages);

empList.indexOf({ name: 'Rich', age: 400 })

