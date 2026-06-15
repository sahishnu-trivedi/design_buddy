import React from 'react'
import Title from '../title/Title'
import Text from '../text/Text'
import IMAGES from '@/assets/Images'
import { NAV_LINK } from '@/constants/NavItem'
import { NavLink } from 'react-router-dom'

const SubMenu = () => {
    const filteredSubMenu = NAV_LINK.filter((menuItem) => (menuItem.menuLocation === 'subMenu'))
    return (
        <ul className='sub-menu-block bg-black text-white absolute top-0 left-0 columns-3 gap-7 px-90 py-5'>
              {
                filteredSubMenu.map(menuItem => (
                  <li key={menuItem.id} className='mb-10'>
                    {/* <NavLink to={menuItem.path} className={({ isActive }) => (`relative pb-3 ${isActive ? 'link-active' : ''}`)}> */}
                    <NavLink to={menuItem.path}>
                        <span className='flex items-center justify-between'>
                            <Title as='h4' classNameText='text-3xl'>{menuItem.label}</Title>
                            {IMAGES.arrowSvg}
                        </span>
                        <Text classNameText='text-grey'>{menuItem.menuText}</Text>
                    </NavLink>
                  </li>
                ))
              }
            </ul>
    )
}

export default SubMenu