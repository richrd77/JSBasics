// 3 :- 
// 1:- var;let;const
// 2:- name of the object (identifier) -> can be anything
// 3:- value of the object (optional) but mandatory if we give const in 1
// var name = 'Richard';
// var name1; //undefined is the default value

// // console.log(name);
// // console.log(name1);

// let dept = 'IT';
// let dept1;

// // console.log(dept);
// // console.log(dept1);

// // var vs let
// // var is function scope
// console.log(e);
// {
//     var e = 'somevalue';
// }

// // block scope
// {
//     let l = 'somevalue';
//     console.log(l);
// }

// const pi='';

// var employee = { name: 'Richard', age: 30 };



// class Employee {
//     constructor() {
//         this.name='Richard';
//     }
// }


// var emp = new Employee();


// class Employee {
//     constructor(name) {
//         this.name = name;
//     }
// }


// var emp = new Employee('Rich');
// console.log(emp);


// Function Define or defination
// 4:-
// 1:- write "function"
// 2:- wirte function Name (can be anything)
// 3:- () -> parameters; (a); (a,b); (a,b,c) -> number of parameters can be anything
// 4:- {} -> scope of the function; boundry of a function; body of a function

// named function
// function Display() {
//     console.log('Display function called');
// }

// named function
// function add(a, b) {
//     let result = a + b;
//     console.log('result', result);


//     // If we want to return the result to the caller
//     // 2 steps
//     // 1 write "return"
//     // 2 what to return
//     return result;
// }

// Function Call

// minimum 2 steps
// 1:- function Name
// 2:- pass parameters
// Display();


// maximum 4 steps
// 1:- var, let, const
// 2:- identifier -> can be anything
// 3:- function Name
// 4:- parameters

// let addition = add(2,3);


// anonymous function -> nameless
// same 4 steps but no step2
// function () {

// }

// arrow function

// () => {

// }


// var myFunction = function () {

// };

// myFunction();

// var arrowFunction = () => {

// }

// // string object
// let stringObject1 = "Richard @&j12345r";
// let stringObject2 = 'Richard @&j12345r';


// // number object
// let age = 1;
// let salary = 10000;
// let temperature = 24.4;


// // boolean object
// let isTodayHoliday = true;
// isTodayHoliday = false;

// // array -> collection of some objects
// let oddNumbers = [1, 3, 5, 7, 9];
// let employees = [{ name: 'Richard', age: 30 }, { name: 'Pradeep', age: 20 }, { name: 'Lucky', age: 10 }]

// items of an array can be accessed via index
// console.log(employees[2])


// employees.forEach((p1,p2,p3) => {
//     console.log(p1);
//     console.log(p2);
//     // console.log(p3);
// });


// function Display(param1) {
//     console.log(param1.name);
// }

// let namesarray = employees.map(Mapper);
// console.log(employees)
// console.log(namesarray);


// function Mapper(param1) {
//     return param1.name;
// }


// let adultEmployees = employees.filter((p1) => {
//     return p1.age > 18;
// });

// console.log(adultEmployees);

// 1 -> 3 -> 6 -> 10
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.push(10);
// console.log(numbers.pop());
// console.log(numbers.pop());
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();

// let result = numbers.reduce((previousValue, currentValue) => {
//     return previousValue.toString() + ', ' + currentValue.toString();
// });


// console.log(result);


// Loops

// If Else -> in if condition we can use "and (&&)" or "or (||)"

// function Display2(param1) {

//     // simple If
//     if (param1 === 2 || param1 === 4) {
//         console.log(param1);
//     }
// }


// function Display100(param1) {

//     // Simple If Else
//     if (param1 === 100) {
//         console.log(param1);
//     } else {
//         alert(param1);
//     }
// }






// Display2(100);
// Display100(100);


// const booleanValue = false;

// // Else If condition
// if(booleanValue === true) {
//     console.log('Yes');
//     //nested If else
//     // if() {

//     // } else {

//     // }
// } else if(booleanValue === false) {
//     console.log('No');
// } else {
//     console.log(booleanValue);
// }

//For Loop :- when initial point and final point is known
//
// let index = 0;
// for (index = 0; index <= 5; index++) {
//     console.log(index);
// }

//print first 20 Odd Numbers
// let index;
// for (index = 0; index < 20; index++) {
//     if ((index % 2) !== 0) {
//         console.log(index);
//     }
// }

// print odd numbers between 25 & 50
// let index;
// for (index = 25; index <= 50; index++) {
//     if ((index % 2) !== 0) {
//         console.log(index);
//     }
// }

var numberCount = 1;
var PreviousNumber = 0;

while (numberCount <= 10) {
    if ((PreviousNumber % 2) !== 0) {
        console.log(PreviousNumber);
        numberCount++;
    }
    PreviousNumber++;
}