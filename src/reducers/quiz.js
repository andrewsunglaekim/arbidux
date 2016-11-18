const numbers = (state, action) => {
  switch (action.type) {
    case "GET_RANDOM_NUMBERS":
      let numbers = []
      for (let i = 0; i < action.quantity.length; i++){
        numbers.push(Math.floor(Math.random() * action.range)) 
      }
      return numbers
    default:
      return state
  }
}

export default numbers
