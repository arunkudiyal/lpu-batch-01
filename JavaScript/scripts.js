// console.log('hello')

// console.warn('This is a warning')
// console.error('This is a error')
//     // alert('This is an Alert!')

// DATA TYPES | 1. Primitive DT (PDTs) | 2. Non-Primitive DT

// 1. Primitive DT -

// 1. number
// let number = 10
// console.log(number)
// console.log(typeof number)

// // 2. string
// let string_one = 'This is String One'
// let string_two = "This is String Two"
// let string_three = `This is String Three`
// console.log(string_one)
// console.log(string_two)
// console.log(string_three)
// console.log(typeof string_one, typeof string_two, typeof string_three)

// // 3. boolean
// let isCool = false
// console.log(isCool)
// console.log(typeof isCool)

// // 4. null
// let any_variable = null
// console.log(any_variable)
// console.log(typeof any_variable)

// // 5. undefined
// const any_other_variable = undefined
// console.log(any_other_variable)
// console.log(typeof any_other_variable)


// 6. Symbol --> Research Work

// ECMAScript ---> Managing Syntax for PLs --> JavaScript, TypeScript, PyScript, etc.
// ECMA2015 ---> ES6 --> major changes in JS Syntax

// CONDITIONAL STATEMENTS + OPERATORS
// let gender = 'M'
// let age = 10
// if (gender == 'M' && age >= 18) {       // and
//     console.log('You can vote!')
// } else {
//     console.log('you can not vote!')
// }

// Ternary Operator [ ? : ]
// condition ? TRUE : FALSE
// gender === 'M' && age >= 18 ? console.log('You can vote!') : console.log('you can not vote!')


// ES6 JS - var - Public, let - Private & const - Private
// let a = 20
// console.log(20)
// console.log('It works')
// console.log('It does not worK');
// console.log('It works')

// Access Modifier - public, private, protected
// if (true) {
//     // let a
//     // a = 20
//     // console.log(a)
//     // a = 'This is a diff data type'
//     // console.log(a)
//     // const a = 2 + 2
//     // a = 'Some other value'
//     // console.log(a)

//     const b = true
//         // b = false - THIS IS WRONG
//         // const any_variable - THIS IS WRONG
// }

// 2. Non Primtive DTs

// 1. Array --> Collection of similar Data Types

// I.) Array Constructor
// const my_array = new Array(5) // length of the array
// my_array[0] = 100
// console.log(my_array)

// const my_second_array = new Array(1, 10, 6, 5, 11, 20, 17, 18)
// console.log(my_second_array)
// console.log(my_second_array[3])
// console.log(my_second_array[7])
// console.log(my_second_array[0])

// // II.) Using [ ] Symbol
// const numbers = [10, 20, 30, 40, 50, 60]
// console.log(numbers)

// // In JS everything is Objects
// const anArray = [100, 'String', true, null, undefined]
// console.log(anArray)

// // REMINDER --> Arrays are reference types
// const arr1 = [23, 27, 12, 10, 7, 17, 63]
// const arr2 = arr1                            // Containing the value of the mem. address

// arr2.push(100)
// console.log(arr1)

// const arr3 = [100, 200, 300, 400, 500]
// // Spread Operator
// const arr4 = [...arr3]

// arr4.push(100)
// console.log(arr3)
// console.log(arr4)

// Array Methods -
// const fruits = ['Apple', 'Mango', 'Orange', 'Peach', 'Banana']
// fruits[0] = 'New Apple'

// // 1. Add an element - push
// fruits.push('Watermelon')
// fruits.push('Grapes')

// // 2. Remove the elemnt - Last
// fruits.pop()

// // 3. Remove a data at a given position - splice(index, 1)
// fruits.splice(2, 1, 'Guava', 'Pears', 'Strawberry')

// console.log(fruits)

// IMPLICIT TYPECASTING
// console.log(2 + '2')     // 22
// console.log(2 - '2')     // 0
// console.log(2 - '-3')    // -5
// console.log(2 - 'Hello') // NaN (Not a Number)
// console.log(2 * 'Hello') // "
// console.log(2 / 'Hello') // "

// console.log(true + false)    // 1
// console.log('Hello' - 'World')


// 2. Objects --> Dictonaries --> key: value --> '{}'

// I.) Object Constructor
// let employee = new Object()
// employee.emp_id = 'LPU00765'
// employee.emp_name = 'Sample Employee'
// employee.emp_Designation = 'SDE - III'

// II.) Using '{}' Symbol
// const employee = {
//     emp_Designation: "SDE - III",
//     emp_id: "LPU00765",
//     emp_name: "Sample Employee"
// }

// console.log(employee.emp_id)
// console.log(employee)

// const person = {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     age: 27,
//     phone: '+91-1234567890',
//     bGroud: 'A+',
//     isCool: false,
//     email: 'harry_potter@hogwards.com',
//     hobbies: ['Doing Magic', 'Getting in Trouble', 'Playing Sports including Flying'],
//     address: {
//         street_no: 134,
//         lane: 'West Lane',
//         city: 'London',
//         country: 'United Kingdoms'
//     }
// }

// // Access the values
// // i.) My name is Harry Potter
// // console.log(person.firstName + " " + person.lastName)
// // console.log(`${person.firstName} ${person.lastName}`)
// console.log(`My name is ${person.firstName} ${person.lastName}`)

// // I am Harry Potter & I live in 134, London
// console.log(`I am ${person.firstName} ${person.lastName} & I live in ${person.address.street_no}, ${person.address.city}`)

// console.log(person)

// OBJECT ARE ALSO REFERENCE TYPES
// const my_obj_one = {
//     name: 'john Doe',
//     age: 25,
//     isEmp: true
// }

// const my_obj_two = my_obj_one
// console.log(my_obj_two)

// // Make any changes to the second obj <--> The first Object
// my_obj_two.name = 'JOHN DOE'
// my_obj_two.email = 'john_doe@something.com'
// console.log(my_obj_one)

// 2D Arrays / 2D Arrays
// const two_D_array = [
//     ['c00', 'c01', 'c02'],
//     ['c10', 'c11', 'c12'],
//     ['c20', 'c21', 'c22']
// ]
// console.log(two_D_array)

// // Access
// // c21 :-
// console.log(two_D_array[2][1])


// 3. Arrays of Objects
// [ {}, {}, {}, {} ]

// const students = [{
//         student_name: 'Student One',
//         student_age: 20,
//         student_year: '2019-2023',
//         student_bGroup: 'AB-',
//         student_skills: ['C', 'JavaSCript'],
//         student_address: {
//             street: 'Street - 1',
//             city: 'Chandigarh',
//             state: 'Chandigarh'
//         }
//     },
//     {
//         student_name: 'Student Two',
//         student_age: 21,
//         student_year: '2019-2023',
//         student_bGroup: 'A+',
//         student_skills: ['C', 'Python'],
//         student_address: {
//             street: 'Street - 2',
//             city: 'Chandigarh',
//             state: 'Chandigarh'
//         }
//     },
//     {
//         student_name: 'Student Three',
//         student_age: 21,
//         student_year: '2019-2023',
//         student_bGroup: 'B-',
//         student_skills: ['C', 'JavaSCript'],
//         student_address: {
//             street: 'Street - 3',
//             city: 'Chandigarh',
//             state: 'Chandigarh'
//         }
//     },
//     {
//         student_name: 'Student Four',
//         student_age: 22,
//         student_year: '2019-2023',
//         student_bGroup: 'O-',
//         student_skills: ['C', 'Python'],
//         student_address: {
//             street: 'Street - 4',
//             city: 'Chandigarh',
//             state: 'Chandigarh'
//         }
//     }
// ]

// console.log(students)
//     // Accessing
//     // Q.1 - Display 'AB-'
// console.log(students[0].student_bGroup)

// // JavaScript from first object
// console.log(students[0].student_skills[1]);

// // Street - 4
// console.log(students[3].student_address.street)

// // Student One does not know Python
// console.log(`${students[0].student_name} does not know ${students[3].student_skills[1]}`)

// // convert AoO into JSON
// const stringifiedData = JSON.stringify(students)
// console.log(stringifiedData)

// const response = JSON.parse(stringifiedData)
// console.log(response)

// LOOPS & Higher Order Array Methods - forEach, map, reduce, sort, filter...

// Why Loops --> An operation which is done multiple times, we can iterate each step using loops
// 1. Generic Loops --> i) for Loop ii) while Loops
// 2. Higher Order Array Methods --> 5-6 in total

// Print a table of 7 --> 7 x 1 = 7 ...
// for(initialization; condition; inc/dec)

// console.log(students)
// console.log(students[0].student_name)
// console.log(students[1].student_name)
// console.log(students[2].student_name)
// console.log(students[3].student_name)

// for (let someValue = 0; someValue < students.length; someValue = someValue + 1) {
//     console.log(students[someValue].student_name)
// }

// Print the table of 7
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70
// for (let index = 1; index <= 10; index = index + 1) {
//     console.log(`7 x ${index} = ${7 * index}`)
// }

// while
// initialization
// while(condition) {
//      inc / dec
//}

// let value = 7
// while (value <= 70) {
//     // Operations  -> 7 <--> 1; 14 <---> 2
//     console.log(`7 x ${value / 7} = ${value}`)
//     value = value + 7
// }


// FUNCTIONS :-

// function add(val1, val2) {
//     if (typeof val1 == 'number' && typeof val2 == 'number') {
//         return val1 + val2
//     } else {
//         return 'Addition is only permittable in Number types'
//     }
// }

// const sum1 = add(100, 20)
// console.log(sum1)

// const sum2 = add(true, true)
// console.log(sum2)

// ES6 Arrow Functions (=>) | You can assign any function to a variable using '=>'
// const add = (param1, param2) => {
//     if (typeof param1 == 'number' && typeof param2 == 'number') {
//         return param1 + param2
//     } else {
//         return 'Addition is only permittable in Number types'
//     }
// }

const addTwo = (val1, val2) => {
    typeof val1 == 'number' && typeof val2 == 'number' ? val1 + val2 : 'Addition is only permittable in Number types'
}

const sum1 = addTwo(10, 2)
console.log(sum1)

const sum2 = addTwo(true, true)
console.log(sum2)