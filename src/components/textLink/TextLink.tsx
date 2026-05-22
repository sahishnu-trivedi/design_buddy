import React from 'react'
import IMAGES from '../../assets/Images'

const TextLink = ({ textForLink }) => {
  return (
    <a href='#' className='text-primary text-3xl mt-6 inline-block'>
        {textForLink}
        {IMAGES.primaryArrowSvg}
    </a>
  )
}

export default TextLink