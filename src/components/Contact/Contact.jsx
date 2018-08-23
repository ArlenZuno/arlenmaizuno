import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './contact.css'

class Contact extends Component {
  render() {
    return (
      <div className='white-text'>
      <Nav/>
      <div id='email' className='center'>
      hi@arlenmaizuno.com
      </div>
      <br /> <br />
      <div className='center'>
      <a href="https://github.com/ArlenZuno" target="_blank">
      <img src='./img/git.png' alt='git'/>
      </a>
      <a href='https://www.linkedin.com/in/azuno/' target='_blank'>
      <img src='./img/link.png' alt='linkedin'/>
      </a>
      </div>
      </div>
    )
  }
}

export default Contact;
