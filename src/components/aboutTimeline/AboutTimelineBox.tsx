import React from 'react'
import Title from '../title/Title'
import Text from '../text/Text'

const AboutTimelineBox = ({ yearBg, year, titleText, contentText }) => {
  return (
    
        <div className='shadow-white text-center bg-white rounded-2xl'>
            <div className={`${yearBg} text-white inline-block min-w-[220px] text-center text-3xl py-3 rounded-2xl relative -top-7`}>{year}</div>
            <div className='px-20 pb-4'>
                <Title as='h3' classNameText='text-3xl text-primary leading-none font-light mb-[30px]'>{titleText}</Title>
                <Text classNameText='font-light'>{contentText}</Text>
            </div>
        </div>
    
  )
}

export default AboutTimelineBox