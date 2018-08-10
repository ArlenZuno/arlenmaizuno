import React, { Component } from 'react'
import './home.css'

class Home extends Component {
  render() {
    return (
      <div className='home white-text'>
        Hello, I am Arlen a freelance web developer from Vancouver, BC. Let's build something...

  <a className='dropdown-trigger btn' dataActivates='dropdown1'>MENU</a>

  <ul id='dropdown1' className='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
  </ul>

        <p id='title' className='grey-text'>web developer</p>
        <p id='initials' className='white-text'>
          AMZ
        </p>
      </div>
    )
  }
}

export default Home;
