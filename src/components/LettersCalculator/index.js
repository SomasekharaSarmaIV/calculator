// Write your code here.

import {Component} from 'react'
import './index.css'
class LettersCalculator extends Component {
  state = {count: ''}
  onClickChange = event => {
    const {value} = event.target

    this.setState({count: value})
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <div>
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-pharse-container">
              <label className="label" htmlFor="pharseText">
                Enter the phrase
              </label>
              <input
                className="input"
                type="text"
                id="pharseText"
                placeholder="Enter the phrase"
                onChange={this.onClickChange}
                value={count}
              />
            </div>
            <p className="letters-count">No.of letters: {count.length}</p>
          </div>
          <img
            className="img"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
