


// no difference between single and double quotes

'my string'

"my string"


// using backticks makes it a template literal

`my string`




// Benefit 1: newline

const str = "my
string"

console.log(str)





const str = `my
string`

console.log(str)







// Benefit 2: string interpolation

const str = "hello" + " " + "world"
console.log(str)





const str = `hello ${"world"}`
console.log(str)






// Use a variable

const name = "world"
const str = `hello ${name}`
console.log(str)





// Even a function

const double = (num) => {
  return num * num
}
const str = `double 2 = ${double(2)}`
console.log(str)





// Tagged Templates (Advanced) 
// (some css style libraries)

const parseString = (strings, number) => {
  console.log("strings: ", strings)
  console.log("number: ", number)
}

const str = parseString`2 * 2 = ${4}`





// multiple breaks:

const parseString = (strings, number1, number2) => {
  console.log("strings: ", strings)
  console.log("number1: ", number1)
  console.log("number2: ", number2)
}

const str = parseString`2 * 2 = ${4} and 3 * 3 = ${9}`





// using spread (later)
const parseString = (strings, ...numbers) => {
  console.log("strings: ", strings)
  console.log("numbers: ", numbers)
}

const str = parseString`2 * 2 = ${4} and 3 * 3 = ${9}`



