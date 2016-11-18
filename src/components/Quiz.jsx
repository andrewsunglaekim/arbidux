import React, { Component } from 'react'

class Quiz extends Component{
  constructor(props){
    super(props)
    console.log(props)
  }
  render(){
    return (
      <div onClick={e => {
        e.preventDefault()
        this.props.submitQuiz()
      }}
      >
        This is the quiz{this.props.numbers}
      </div>
    )
  }
}

export default Quiz
