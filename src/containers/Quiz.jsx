import {connect} from 'react-redux'
import { getRandomNumbers, incrementAttemptCounter, incrementCorrectCounter } from '../actions'
import Quiz from '../components/Quiz'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    numbers: state.numbers
  }
}

const isCorrect = (nums, answer) => nums.reduce((prev = 0, curr) => prev + curr) === answer
const submitQuiz = (answer, ownProps) => {
  return (dispatch, getState) => {
    let state = getState();
    console.log("this is state:  before dispatches", state)
    if (isCorrect(state.numbers, answer)){
      dispatch(incrementCorrectCounter())
    }else {

    }
    dispatch(incrementAttemptCounter())
    dispatch(getRandomNumbers(2, ownProps.size))
  }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmitQuiz: (answer) => {
    console.log(answer, "this is submitting quiz")
    dispatch(submitQuiz(answer, ownProps))
  }
})

const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

export default QuizContainer
