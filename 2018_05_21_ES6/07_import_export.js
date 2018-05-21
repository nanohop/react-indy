

// Default export

// obj.js
const obj = {
  a: 1, b: 2, c: 3
}

export default obj



// Notice:
// - no curly braces
// - doesn't have to be named the same
// - don't need .js

import MyObject from './obj'









// Named exports

export const a = 1
export const b = 2
export const c = 3



// Notice:
// - curly braces
// - does have to be named the same
import { a, b, c } from './obj'



// renaming:
import { a: newA, b: newB, c } from './obj'



// import ALL named exports
import * as letters from './obj'

// letters.a === 1




// MUST be at top level

// Doesn't work:
if(true) {
  import obj from './obj'
}

// Does work:
if(true) {
  const obj = require('./obj')
}






// About.js for default export class example





// colors.js for named export example





// TodoList.js for export connect() example












