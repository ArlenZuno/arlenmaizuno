import React, { Component } from 'react'
import './home.css'
import M  from 'materialize-css/dist/js/materialize.min.js';

class Home extends Component {
  componentDidMount(){
      var elems = document.querySelectorAll('.dropdown-button');
      var instances = M.Dropdown.init(elems);
    };
  
  render() {
    return (
      <div className='home white-text'>
        Hello, I am Arlen a freelance web developer from Vancouver, BC. Let's build something...

    <a className='dropdown-trigger dropdown-button btn' data-beloworigin="true" data-target='dropdown1'>MENU</a>

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
