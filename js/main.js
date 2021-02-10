/* TIMESTAMP 08:00  */

// alert("HAHAHAHAHA")

// =======================

/* 09:20 CONSOLE  */

// console.log("HAHAHAHA")
// console.error("ERROR")
// console.warn("WARNING")

// =======================

// VARIABLES

//***var***, let, const

// let age = 30
// age = 31
// console.log(age)

// .......................

// let score
// score = 10
// console.log(score)

// .......................

// PRODUCES ERROR:

// const score
// console.log(score)

// FIXED:

// const score = 12
// console.log(score)

// =======================

// DATA TYPES
// string number boolean null undefined symbol

// const firstName = "JOHN"
// const age = 45
// const rating = 7.8
// const isCool = true
// const x = null
// const y = undefined
// let z

// console.log(typeof firstName) // yields string
// console.log(typeof age) // yields number
// console.log(typeof x) // HEADS UP - This is a JS bug - typeof will result in "object"
// console.log(typeof z)

// etc

// STRING CONCATENTAION

// const firstName = "John"
// const age = 45
// const rating = 7.8
// const isCool = true
// const x = null
// const y = undefined
// let z

// console.log("My name is " + firstName + " and I am " + age + " years old.")

// USING TEMPLATE LITERAL :
// console.log(`My name is ${firstName} and I am ${age} years old.`)

// ASSIGNED TO VARIABLE:
// const hello = `My name is ${firstName} and I am ${age} years old.`
// console.log(hello)

// STRING PROPERTIES AND METHODS:

// PROPERTY: length:
// const s = "Hello World"
// console.log(s.length)

// METHOD: toUpperCase
// const s = "Hello World"
// console.log(s.toUpperCase())

// ----------------------

// substring
// const s = "Hello World"
// console.log(s.substring(0, 5))

// combine methods :
// const s = "Hello World"
// console.log(s.substring(0, 5).toUpperCase())

// (  try toLowerCase  )

// ---------------------------

// split ("splits" string into an array):

// const s = "Hello World"
// console.log(s.split())
// returns ['Hello World']

// -----------------------------------

// const s = "Hello World"
// console.log(s.split(""))
// returns ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

// -------------------

// const s = "Hello World"
// console.log(s.split(" "))
// returns ['Hello', 'World']

// -----------------------------

// const s = "technology, computers, IT, code"
// console.log(s.split(", "))
// returns[("technology", "computers", "IT", "code")]

//  TIMESTAMP 24:30

// ================================

// ARRAYS - variables that hold multiple values

// USING CONSTRUCTOR:

// const numbers = new Array(1, 2, 3, 4, 5)

// SET USING BRACKETS :

const fruits = ["apples", "oranges", "pears"]

// console.log(fruits)

// console.log(fruits[0])

// ADD ITEM TO end of ARRAY :

// fruits[3] = "grapes"

// console.log(fruits)

// ----------

// better way to add item to end of array - push method :

// fruits.push("mangoes")

// console.log(fruits)

// ------------

// add item to beginning of array - unshift method

// fruits.unshift("strawberries")

// console.log(fruits)

// remove item from end of array - pop method

// fruits.pop()

// console.log(fruits)

// remove item from beginning of array - shift method

// fruits.shift()

// console.log(fruits)

// TEST FOR ARRAY:
// console.log(Array.isArray(fruits))

// returns 'true'

// console.log(Array.isArray("hello world"))

// returns 'false'
