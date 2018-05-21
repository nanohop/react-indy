

// Basic example

const arr = [1, 2, 3]
const newArr = [...arr]
console.log(newArr)



// Important: NOT the same as the original array

console.log(arr === newArr)




// Spread over other elements to concat into new array

const arr = [1, 2, 3]
const newArray = ["a", "b", ...arr]
console.log(newArray)





// Objects

const obj = {
  a: 1,
  b: 2,
  c: 3
}
const newObj = {...obj}
console.log(newObj)




// Combine Objects

const obj = {
  a: 1,
  b: 2,
  c: 3
}

const secondObject = {
  d: 4,
  e: 5,
  f: 6
}
const newObj = {...obj, ...secondObject}
console.log(newObj)







// React Native example: 
// todos reducer







// Slicing arrays
const items = [0, 1, 2, 3, 4, 5]

const newItems = [
  ...items.slice(0, 2),
  ...items.slice(3)
]

console.log(newItems)






// Spread over any itterable

const str = "hello"

const arr = [...str]

console.log(arr)













