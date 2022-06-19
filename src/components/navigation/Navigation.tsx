import React from 'react'
import { Link } from "react-router-dom";
import './Navigation.scss'

function Navigation() {
  return (
    <div className='nav-bar'>
      <h4>Lang Fun</h4>
      <div className='nav'>
        <Link to="/"><div className='nav-item'>Hello world</div></Link>
        <Link to="/counter"><div className='nav-item'>Счетчик</div></Link>
        {/* <Link to="/dictionary"><div className='nav-item'>Словарь</div></Link> */}
        {/* <Link to="/phrases"><div className='nav-item'>Фразы</div></Link> */}
        <Link to="/login"><div className='nav-item'>Login</div></Link>
        <Link to="/register"><div className='nav-item'>Register</div></Link>
      </div>
    </div>
  )
}

export default Navigation