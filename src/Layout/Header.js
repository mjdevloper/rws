import React, { Component } from 'react';
import logo from '../../images/logo.png';

class Header extends Component {
  render() {
    return (
      
        <div>
            <div className="logo">
                <img alt="Remote Web Solutions" src={logo} />
                <h3>Technology consultants</h3>
            </div>
        </div>
    );
  }
}

export default Header;


