import React, {Component} from 'react'

class AnswerForm extends Component {
  constructor(props){
    super(props)
    this.state ={
      answer: ''
    }
  }
  onChange(e){
    this.setState({
      answer: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault()
    let answer = parseInt(this.state.answer, 10)
    this.props.onSubmitQuiz(answer)
    this.setState({
      answer: ''
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <div className='num-input'>
            <input
              onChange={e => this.onChange(e)}
              type='text'
              value={this.state.answer || ''} />
          </div>
        </form>
      </div>
    )
  }
}

export default AnswerForm
