import React from 'react'
import Title from '../title/Title'
import Text from '../text/Text'
import TextLink from '../textLink/TextLink'
import OrangeTextBox from '../orangeTextBox/OrangeTextBox'

const textBanner = ({ titleText, subTitleText, paraText, linkText, orangeBoxText }) => {
  return (
    <section className='py-25'>
        <div className='main-container'>
            <div className='text-center w-5xl mx-auto'>
                <Title as='h2' classNameText='text-[120px] text-black leading-none uppercase'>{titleText}</Title>
                <Title as='h3' classNameText='text-3xl text-primary leading-none font-light my-13'>{subTitleText}</Title>
                {paraText.map((text, index) => (
                    <Text classNameText='mb-6 font-light' key={index}>{text}</Text>
                ))}
                <OrangeTextBox text={orangeBoxText} />
                <TextLink textForLink={linkText} />
            </div>
        </div>
    </section>
  )
}

export default textBanner