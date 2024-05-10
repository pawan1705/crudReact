import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <div>
      <div className="box">
      <div className="first">
    <p><Link to='/first' >First</Link></p>
    <p><Link to='/'>Second</Link></p>
    <p><Link to='/'>Third</Link></p>
    <p><Link to='/'>Fourth</Link></p>
    </div>
    <div className="center">
      <p>Pawan Sangare</p>
    </div>
    <div className="second">
    <p><Link to='/'>First</Link></p>
    <p><Link to='/'>Second</Link></p>
    <p><Link to='/'>Third</Link></p>
    <p><Link to='/'>Fourth</Link></p>
    </div>
      </div>
    </div>
  )
}

export default Nav