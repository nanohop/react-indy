
function myFunction() {
  
}





const myFunction2 = function() {
  
}





() => {
  
}




const myFunction3 = () => {
  
}







this.myValue = "my value"
console.log(this.myValue)






// Doesn't work, because functions get a new value of "this"

function myFunction() {
  console.log(this.myValue)
}

this.myValue = "my value"

myFunction()








var that = this
function myFunction() {
  console.log(that.myValue)
}

this.myValue = "my value"

myFunction()








function myFunction() {
  console.log(this.myValue)
}

this.myValue = "my value"

var boundFunction = myFunction.bind(this)
boundFunction()









const myFunction = () => {
  console.log(this.myValue)  
}

this.myValue = "my value"

myFunction()








const testing = (arg1) => {
  console.log("testing", arg1)
}
testing(123)




// Can remove parens

const testing = arg1 => {
  console.log("testing", arg1)
}
testing(123)






// Multiple arguments

const testing = (arg1, arg2) => {
  console.log("testing", arg1, arg2)
}
testing(123)




// Default values

const testing = (arg1, arg2 = 456) => {
  console.log("testing", arg1, arg2)
}
testing(123)




// Simple return

const testing = (arg1, arg2 = 456) => {
  return arg1 + arg2
}
console.log(testing(123))




// Implicit return

const testing = (arg1, arg2 = 456) => 
  arg1 + arg2

console.log(testing(123))



// Single line

const testing = (arg1, arg2 = 456) => arg1 + arg2

console.log(testing(123))




// Can't do that with an object

const testing = (arg1, arg2 = 456) => {value: arg1 + arg2}

console.log(testing(123))





// Add parens

const testing = (arg1, arg2 = 456) => ({value: arg1 + arg2})

console.log(testing(123))



