// ProtoType - base/first Type
// class Employee {
//     constructor() {
//         this.name = 'Richard';
//         this.salary = 10000;
//     }

//     DisplayEmployee() {

//     }
// }

// const emp = new Employee();
// console.log(emp);


// class Department {
//     constructor() {
//         this.DepartmentName = 'IT';
//     }
// }

// const ITDept = new Department();
// console.log(ITDept);

// Promise - giving assurance (bharavse), either pass or fail
// async - 

// const apiCall = new Promise((d, g) => {
//     setTimeout(() => {
//         g();
//     }, 5000);
// });

// apiCall.then(() => {
//     console.log('promise completed');
// }).catch(() => {
//   console.log('promise failed, please help for completing the task')  
// })


// const boyPromise = new Promise((success, fail) => {
//     setTimeout(() => {
//         fail('doing timepass');
//     }, 5000);
// });


// boyPromise.then((message) => {
//     console.log('evening completed');
//     console.log(message);
// }).catch((error) => {
//     console.log('promise failed');
//     console.log(error);
// });

// async function Load() {
//     try {
//         const message = await boyPromise;
//         console.log(message);
//     } catch (error) {
//         console.log('failed');
//         console.log(error);
//     }
// }

// Load();

// ajax - async javascript and XML

