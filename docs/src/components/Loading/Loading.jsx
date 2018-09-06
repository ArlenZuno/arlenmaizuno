import React, { Component } from 'react';
import Nav from '../Nav/Nav'

class Loading extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className='center'>
          <img src='./img/cat-code.gif' height='10%' className='responsive-img container' alt='umm' />
          <br />
          <p className=' white-text'>
            page under construction..currently typing out the code..
          </p>
        </div>
      </div>
    )
  }
}

export default Loading;