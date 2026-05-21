import React from 'react'
import IMAGES from '../../assets/Images'

const Software = () => {
  return (
    <div className='bg-primary'>
        <div className='main-container'>
            <ul className='flex justify-around items-center py-6'>
                <li>{IMAGES.figmaSvg}</li>
                <li>{IMAGES.pShopSvg}</li>
                <li>{IMAGES.adobeISvg}</li>
                <li>{IMAGES.corelSvg}</li>
                <li>{IMAGES.premierSvg}</li>
                <li>{IMAGES.inDesignSvg}</li>
            </ul>
        </div>
    </div>
  )
}

export default Software