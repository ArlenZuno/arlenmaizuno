import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js';
import './home.css'

class Home extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.dropdown-button');
    var instances = M.Dropdown.init(elems);
  };

  render() {
    return (
      <div className='home white-text'>
        <p className='bio'>
          <span id='introBio'>HELLO, MY NAME IS ARLEN. <br/> 
          I AM A WEB DEVELOPER FROM VANCOUVER. <br/><br/></span>
          Would you like to build something together?<br/>
          <Link to='/contact' className='white-text' id='contact'>GET IN TOUCH.</Link>
        </p>

        <a id='menu' className='dropdown-trigger dropdown-button white btn' data-aboveorigin='true' data-target='dropdown1'>MENU</a>

        <ul id='dropdown1' className='dropdown-content'>
          <li><Link to='/work'>WORK</Link></li>
          <li><Link to='/project'>PROJECTS</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
        </ul>

        <p id='title' className='grey-text'>web developer</p>
        <p id='initials' className='white-text'>AMZ</p>
      </div>
    )
  }
}

export default Home;
