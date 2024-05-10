import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <div>
      <div className="box">
      <div className="first">
    <p><Link to='/first' >First</Link></p>
    <p><Link to='/second'>Second</Link></p>
    <p><Link to='/'>Third</Link></p>
    <p><Link to='/'>Fourth</Link></p>
    </div>
    <div className="center">
      <p></p>
    </div>
    <div className="second">
    <p><Link to='/'>Create</Link></p>
    <p><Link to='/read'>Read</Link></p>
    <p><Link to='/update'>Update</Link></p>
    <p><Link to='/'>Fourth</Link></p>
    </div>
      </div>
    </div>
  )
}

export default Nav