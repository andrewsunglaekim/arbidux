const attemptCounter = (state = 0, action) => {
  switch (action.type){
    case "INCREMENT_ATTEMPT_COUNTER":
      console.log("incrementing attempt counter")
      return state + 1
    case "RESET_CORRECT_COUNTER":
      return 0
    default:
      return state
  }
}

export default attemptCounter
