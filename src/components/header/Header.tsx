import React from 'react'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../assets/Images'
import { NAV_LINK } from '../../constants/NavItem'

const Header = () => {
  return (
    <header className='fixed left-0 top-0 w-full py-10'>
      <div className='main-container mx-auto'>
        <div className='grid grid-cols-3 gap-4 items-center'>
          <div>
            <img src={IMAGES.logoImg} alt='logo' className='img-fluid' />
          </div>
          <div>
            <ul className='flex justify-center items-center'>
              {
                NAV_LINK.map(menuItem => (
                  <li key={menuItem.id} className='mr-10'>
                    <NavLink to={menuItem.path} className={({ isActive }) => (`relative pb-3 ${isActive ? 'link-active' : ''}`)}>{menuItem.label}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='text-right'>
            <a href='#' className='inline-block bg-primary rounded-br-10 text-white px-4 py-3'>
              <span className='mr-2'>Chat with us</span>
              {IMAGES.arrowSvg}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header