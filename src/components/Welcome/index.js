import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isClicked: false,
  }

  onButtonClick = () => {
    const {isClicked} = this.state
    this.setState({isClicked: !isClicked})
  }

  render() {
    const {isClicked} = this.state
    const buttonText = isClicked ? 'Subscribed' : 'Subscribe'
    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button type="button" onClick={this.onButtonClick} className="btn">
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
