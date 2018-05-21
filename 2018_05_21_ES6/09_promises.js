// Callbacks:

asyncCall(result1 => {
  asyncCall(result2 => {
    asyncCall(result3 => {

    })
  })
})




// New Promise:

const result = new Promise(function(resolve, reject) {
  console.log("in the promise")
  return "done"
});

console.log("result: ", result)


// result = pending promise





// Resolve instead of return

const promise = new Promise(function(resolve, reject) {
  console.log("in the promise")
  resolve("done")
});

promise.then(result => {
  console.log("result: ", result)
})



// Chaning

new Promise(function(resolve, reject) {
  console.log("in the promise")
  resolve("done")
}).then(result => {
  console.log("result: ", result)
})







// Async

new Promise(function(resolve, reject) {
  console.log("in the promise")
  setTimeout(() => {
    resolve("done")
  }, 1000)
}).then(result => {
  console.log("result: ", result)
})







// Same problem with promises:

const ajaxCall = (data) => {
  console.log("calling: ", data)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

ajaxCall(1).then(result => {
  console.log("done: ", result)

  ajaxCall(2).then(result2 => {
    console.log("done2: ", result2)

    ajaxCall(3).then(result3 => {
      console.log("done3: ", result3)
    })

  })

})




// Fixing the problem:
const ajaxCall = (data) => {
  console.log("calling: ", data)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

ajaxCall(1).then(result => {
  console.log("done: ", result)
  return ajaxCall(2)
}).then(result2 => {
  console.log("done2: ", result2)
  return ajaxCall(3)
}).then(result3 => {
  console.log("done3: ", result3)
})





// Catching Errors (on a chain)

.catch(error => {
  console.log("error", error)
})







// React Native examples (catching errors)
// return fetch in lib/api
// actions todos.js to catch the error


