import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import M from 'materialize-css/dist/js/materialize.min.js';

class Project extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  }
  render() {
    return (
      <div className='white-text'>
        <Nav />
        <img className="materialboxed" width="400" src="./img/debut.jpg"/>
      </div>
    )
  }
}

export default Project;
