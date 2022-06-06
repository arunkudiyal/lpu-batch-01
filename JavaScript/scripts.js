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

// ECMA ---> Managing Syntax for PLs --> JavaScript, TypeScript, PyScript, etc.
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
const my_array = new Array(5) // length of the array
my_array[0] = 100
console.log(my_array)

const my_second_array = new Array(1, 10, 6, 5, 11, 20, 17, 18)
console.log(my_second_array)
console.log(my_second_array[3])
console.log(my_second_array[7])
console.log(my_second_array[0])

// II.) Using [ ] Symbol
const numbers = [10, 20, 30, 40, 50, 60]
console.log(numbers)