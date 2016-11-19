const correctCounter = (state = 0, action) => {
  switch (action.type){
    case "INCREMENT_CORRECT_COUNTER":
      console.log("incrementing correct counter")
      return state + 1
    default:
      return state
  }
}

export default correctCounter
