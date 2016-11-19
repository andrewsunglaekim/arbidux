import React, { Component } from 'react'
import Number from './Number'
import AnswerForm from './AnswerForm'

class Quiz extends Component{
  render(){
    let {numbers, submitQuiz} = this.props
    return (
      <div>
        <Number numValue={numbers[0]}/>
        <div className="operator">+</div>
        <Number numValue={numbers[1]}/>
        <div className="operator">-</div>
        <AnswerForm onSubmitQuiz={submitQuiz}/>
      </div>
    )
  }
}

export default Quiz
