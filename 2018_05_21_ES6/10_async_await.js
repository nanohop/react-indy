const ajaxCall = (data) => {
  console.log("calling: ", data)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

const runAjaxCalls = async () => {
  const response = await ajaxCall(1)
  console.log(response)

  const response2 = await ajaxCall(response + 1)
  console.log(response2)

  const response3 = await ajaxCall(response2 + 1)
  console.log(response3)
}


runAjaxCalls()



