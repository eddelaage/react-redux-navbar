import React from 'react'
import Nav from './Nav'
import './Header.css'

const Header = ({ menu }) => {
  return (
    <div className="headerBlock">
      <Nav menu={menu} />
    </div>
  )
}

export default Header
