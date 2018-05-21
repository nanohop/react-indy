var myVariable = 123
console.log(myVariable)





var myVariable
myVariable = 123

// ... more code ... //

myVariable = 456
console.log(myVariable)





function myFunction() {
  var result = 1
  
  // ... more code ... //
  // ... more code ... //

  return result
}

console.log(myFunction())






function myFunction() {
  var result = 1
  
  // ... more code ... //

  var result = 2

  // ... more code ... //

  return result
}

console.log(myFunction())








function myFunction() {
  let result = 1
  
  // ... more code ... //

  let result = 2

  // ... more code ... //

  return result
}

console.log(myFunction())








function myFunction() {
  let result = 1
  
  // ... more code ... //

  result = 2

  // ... more code ... //

  return result
}

console.log(myFunction())












// "Function scoped"

function myFunction() {
  let result = 1
  
  // ... more code ... //

  if(true) {
    let result = 2
  }

  // ... more code ... //

  return result
}

console.log(myFunction())







const result = 123
console.log(result)








const result = 123
result = 456
console.log(result)







const result = {}
console.log(result)







const result = {}
result = {mykey: "new value"}

console.log(result)






const result = {}
result.mykey = "new value"

console.log(result)




