const correctCounter = (state = 0, action) => {
  switch (action.type){
    case "INCREMENT_CORRECT_COUNTER":
      console.log("incrementing correct counter")
      return state + 1
    case "RESET_CORRECT_COUNTER":
      return 0
    default:
      return state
  }
}

export default correctCounter
