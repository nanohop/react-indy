function* gen(value) {
  yield value;
}

const myGenerator = gen("hello");
console.log(myGenerator)

// Returns an object (a special object called a generator)





// Have to call .next to get the value

function* gen(value) {
  yield value + " world";
}

const myGenerator = gen("hello");

const next = myGenerator.next()
console.log(next)





// Call next twice to get completed generator

function* gen(value) {
  yield value + " world";
}

const myGenerator = gen("hello");

const next = myGenerator.next()
console.log(next)

const again = myGenerator.next()
console.log(again)





// Can return as well, for that last .next call

function* gen(value) {
  yield value + " world";
  return "all done!"
}

const myGenerator = gen("hello");

const next = myGenerator.next()
console.log(next)

const again = myGenerator.next()
console.log(again)






// pass values back into generator

function* gen(value) {
  const message = yield value + " world";
  console.log(message)
  return "all done!"
}

const myGenerator = gen("hello");

const next = myGenerator.next("message 1")
console.log(next)

const again = myGenerator.next("message 2")
console.log(again)



// Skips the first one?  Because the generator starts in a paused state







// React Native example:
// TodoList.js  genNumber






// Practical usage in React Native:
// redux-saga




