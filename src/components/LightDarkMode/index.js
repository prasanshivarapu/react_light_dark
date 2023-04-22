// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: true}

  colormode = () => {
    this.setState(p => ({mode: !p.mode}))
  }

  get = () => {
    const {mode} = this.state
    return mode ? 'lightmode' : 'darkmode'
  }

  render() {
    const click = this.get()
    return (
      <div className="greet1">
        <div className={`greet2 ${click}`}>
          <h1 className="greet3">click to change mode</h1>
          <button type="button" className="greet5" onClick={this.colormode}>
            {click}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
