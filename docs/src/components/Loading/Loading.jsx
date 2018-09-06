import React, { Component } from 'react';
import Nav from '../Nav/Nav'

class Loading extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className='center'>
          <p className=' white-text'>
            page under construction..currently typing out the code..
          </p>
          <img src='./img/cat-code.gif' width='10%' className='responsive-img container' alt='umm' />
        </div>
      </div>
    )
  }
}

export default Loading;