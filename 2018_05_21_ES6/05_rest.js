
const obj = {
  a: 1, b: 2, c: 3
}

const {
  a,
  ...rest
} = obj

console.log(a)
console.log(rest)




// helpful with "secrets"

const obj = {
  a: 1,
  b: 2,
  c: 3,
  private_key: "123",
  secret: "abc"
}

const {
  private_key,
  secret,
  ...rest
} = obj

console.warn(rest)







// Or: pop the first element off of an array

const arr = [ 1, 2, 3]
const [ first, ...rest ] = arr

console.log(first)
console.log(rest)




