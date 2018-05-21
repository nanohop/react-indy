const obj = {
  a: "first key",
  b: "second key",
  c: "third key"
}

const {
  a,
  c
} = obj

console.log("a, c", a, c)




// renaming

const a = "First A"

const obj = {
  a: "first key",
  b: "second key",
  c: "third key"
}

const {
  a:second_a,
  c
} = obj

console.log("a, second_a, c", a, second_a, c)







// default values

const obj = {
  a: "first key",
  b: "second key",
  c: "third key"
}

const {
  a,
  c,
  d = 123
} = obj

console.log("d", d)








// default values with renaming

const obj = {
  a: "first key",
  b: "second key",
  c: "third key"
}

const {
  a,
  c,
  d = 123,
  e:newE = 456
} = obj

console.log("newE", newE)









// In React Native
// filteredItems in TodoList.js







// In functions

const myFunction = (items, index, callback) => {
  console.log("items", items)
  console.log("index", index)
  console.log("callback", callback)
}


myFunction(
  [1, 2, 3],
  0,
  item => `item ${item}`
)





// convert to object with destructured params

const myFunction = (obj) => {
  
  const {
    items,
    index,
    callback
  } = obj

  console.log("items", items)
  console.log("index", index)
  console.log("callback", callback)
}


myFunction({
  items: [1, 2, 3],
  index: 0,
  callback: item => `item: ${item}`
})





// Destructure right in param list.  Named params!

const myFunction = ({ items, index, callback }) => {
  console.log("items", items)
  console.log("index", index)
  console.log("callback", callback)
}

myFunction({
  items: [1, 2, 3],
  index: 0,
  callback: item => `item: ${item}`
})





// Optional params with default values

const myFunction = ({ items, index = 0, callback }) => {
  console.log("items", items)
  console.log("index", index)
  console.log("callback", callback)
}

myFunction({
  items: [1, 2, 3],
  callback: item => `item: ${item}`
})






// Very common in React - redux actions for example
// toggleTodo in todos action, called from TodoItem.js







// Destructure any itterable:

const arr = [1, 2, 3]

const [a, b] = arr
console.log(`a: ${a}, b: ${b}`)


// Strings

const str = "hello"

const [a, b] = str
console.log(`a: ${a}, b: ${b}`)




// Deep nesting

const obj = {
  a: {
    b: {
      c: 1
    }
  },
  d: 2
}


const {
  a: { b: { c } },
  d
} = obj

console.log(c, d)





// destructuring from a variable

const obj = {
  a: 1, b: 2, c: 3
}

const want = "b"

const {
  [want]: myVar
} = obj

console.log(myVar)




