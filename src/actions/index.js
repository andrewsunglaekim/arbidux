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
