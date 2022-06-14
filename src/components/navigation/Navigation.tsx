import React from 'react'
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <h4>Lang Fun</h4>
      <div>
        <Link to="/">Hello world</Link>
        <Link to="/counter">Счетчик</Link>
        <Link to="/dictionary">Словарь</Link>
        <Link to="/phrases">Фразы</Link>
      </div>
    </div>
  )
}

export default Navigation