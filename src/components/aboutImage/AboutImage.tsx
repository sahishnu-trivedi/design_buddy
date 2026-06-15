import IMAGES from '@/assets/Images'
import React from 'react'

const AboutImage = ({ ImageSrc }) => {
  return (
    
        <div className='text-center'>
            <img src={ImageSrc} alt='About Spark Image' className='inline-block'/>
        </div>
    
  )
}

export default AboutImage