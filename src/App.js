import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    // let authButton

    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn && <button>Login</button>}
        {!isLoggedIn && <button>Logout</button>}
      </div>
    )
  }
}

Welcome.defaultProps = {
  greeting: 'helloo',
  name: 'Kiran',
}
export default App
