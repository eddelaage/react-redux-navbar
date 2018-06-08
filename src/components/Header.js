import React from 'react'
import Nav from './Nav'

const Header = ({ menu }) => {
  return (
    <div className="headerBlock">
      <Nav menu={menu} />
    </div>
  )
}

export default Header
