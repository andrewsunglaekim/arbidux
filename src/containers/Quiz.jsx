import {connect} from 'react-redux'
import { getRandomNumbers } from '../actions'
import Quiz from '../components/Quiz'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    numbers: state.numbers
  }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
  submitQuiz: () => {
    console.log("hit")
    dispatch(getRandomNumbers(2, ownProps.size))
    console.log("after dispatch")
  }
})

const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

export default QuizContainer
