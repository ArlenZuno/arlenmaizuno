import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js';

class Nav extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  }

  render() {
    return (
      <div>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to='/work'>WORK</Link></li>
              <li><Link to='/project'>PROJECTS</Link></li>
              <li><Link to='/contact'>CONTACT</Link></li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/work'>WORK</Link></li>
          <li><Link to='/project'>PROJECTS</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
        </ul>
      </div>
    )
  }
}

export default Nav;