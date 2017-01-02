import React, { Component } from 'react';


class Nav extends Component {
  render() {
    return (
      
      <div>
    
        <ul className="nav nav-pills">
            <li role="presentation"><a href="#">Home</a></li>
            <li role="presentation"><a href="#/about">About</a></li>
            <li role="presentation"><a href="#/contact">Contact</a></li>
        </ul>
          <hr />
        </div>
    );
  }
}

export default Nav;


