
const numbers = (state = [], action) => {
  switch (action.type) {
    case "GET_RANDOM_NUMBERS":
    console.log("being hit in get random numbers dispatch")
    console.log(action)
      let numbers = []
      for (let i = 0; i < action.quantity; i++){
        console.log("loop happening");
        numbers.push(Math.floor(Math.random() * action.range))
      }
      return numbers
    default:
      console.log("being hit in default")
      console.log(action)
      return state
  }
}

export default numbers
