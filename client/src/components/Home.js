import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import styles from './home.css'

export default class Home extends Component {

  render() {
    return(
      <div>
      This is my Home -
        <Link to='/login'>
          Go to Login
        </Link>
      </div>
    )
  }
}
