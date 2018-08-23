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
      <img src='./img/git.png' alt='git' className='icon'/>
      </a>
      <a href='https://www.linkedin.com/in/azuno/' target='_blank'>
      <img src='./img/link.png' alt='linkedin' className='icon'/>
      </a>

      <img src='./img/skyline.png' alt='vancity' id='skyline' className='responsive-img'/>
      </div>
      </div>
    )
  }
}

export default Contact;
