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
        <div className='container row'>
          <div className='col6'>
            <img className="materialboxed" data-caption="Invites created for cousin's debutant ball" width="300" src="./img/debut.jpg" />
          </div>
          <div className='col6'>
            <img className='materialboxed' data-caption="Invites created for friend's son's birthday" width='400' src='./img/invite.png' />
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
