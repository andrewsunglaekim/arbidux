import {connect} from 'react-redux'
import { getRandomNumbers } from '../actions'
import Quiz from '../components/Quiz'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    numbers: state.numbers
  }
}

const isCorrect = (nums, answer) => nums.reduce((prev = 0, curr) => prev + curr) === answer
const submitQuiz = (answer) => {
  return (dispatch, getState) => {
    let state = getState();
    if (isCorrect){
      // increment correct counter
    }else {

    }
    // do anytime quiz submitted
      // increment attemp counter
  }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmitQuiz: (answer) => {
    console.log(answer, "this is submitting quiz")
    dispatch(submitQuiz(answer))
  }
})

const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

export default QuizContainer
