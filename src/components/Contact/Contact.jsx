import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './contact.css'

class Contact extends Component {
  render() {
    return (
      <div id='contact' className='white-text'>
        <Nav />
        <br /> <br />
        <div id='email' className='center'>
          hi@arlenmaizuno.com
        </div>
        <br /> <br />
        <div className='center icons'>
          <a href="https://github.com/ArlenZuno" target="_blank">
            <img src='./img/git.png' alt='git' height='50rem'/>
          </a>
          &nbsp; &nbsp;
          <a href='https://www.linkedin.com/in/azuno/' target='_blank'>
            <img src='./img/link.png' alt='linkedin' height='50rem'/>
          </a>
          &nbsp; &nbsp;
          <a href='https://www.instagram.com/vrlenmvi' target='_blank'>
            <img src='./img/instagram.png' alt='instagram' height='50rem'/>
          </a>
        </div>

      <img src='./img/skyline.png' alt='vancity' id='skyline' className='responsive-img' />

      </div>
    )
  }
}

export default Contact;
