import React, { Component } from 'react'
import Number from './Number'
import AnswerForm from './AnswerForm'
import Timer from './Timer'

class Quiz extends Component{
  render(){
    let {numbers, onSubmitQuiz} = this.props
    return (
      <div>
        <Timer timer={0}/>
        <Number numValue={numbers[0]}/>
        <div className="operator">+</div>
        <Number numValue={numbers[1]}/>
        <div className="operator">-</div>
        <AnswerForm onSubmitQuiz={onSubmitQuiz}/>
      </div>
    )
  }
}

export default Quiz
