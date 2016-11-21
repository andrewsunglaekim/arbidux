export const getRandomNumbers = (quantity, range) => ({
  type: 'GET_RANDOM_NUMBERS',
  quantity,
  range
})

export const submitQuiz = (answer) => ({
  type: 'SUBMIT_QUIZ',
  answer
})

export const incrementAttemptCounter = () => ({
  type: 'INCREMENT_ATTEMPT_COUNTER'
})

export const resetAttemptCounter = () => ({
  type: 'RESET_ATTEMPT_COUNTER'
})

export const incrementCorrectCounter = () => ({
  type: 'INCREMENT_CORRECT_COUNTER'
})

export const resetCorrectCounter = () => ({
  type: 'RESET_CORRECT_COUNTER'
})

export const startTimer = (baseTime = 0) => {
  return {
    type: "START_TIMER",
    baseTime: baseTime,
    now: new Date().getTime()
  }
}

export const stopTimer = () => {
  return {
    type: "STOP_TIMER",
    now: new Date().getTime()
  }
}

export const resetTimer = () => {
  return {
    type: "RESET_TIMER",
    now: new Date().getTime()
  }
}
