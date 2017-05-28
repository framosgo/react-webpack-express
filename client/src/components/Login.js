import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import styles from './login.css'

export default class Login extends Component {

  render() {
    return(
      <div>
        This is my Login -
        <Link to='/'>
          Go to Home
        </Link>
      </div>
    )
  }
}
