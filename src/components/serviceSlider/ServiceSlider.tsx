import React from 'react'
import Title from '../title/Title'
import IMAGES from '../../assets/Images'

function ServiceSlider() {
  return (
    <section className='py-25'>
        <div className='grid grid-cols-4 gap-6'>
            <div className='bg-black'>
                <Title as='h4' classNameText='text-7xl text-grey p-1'>UI/UX <span className='block text-right'>DESIGN</span> </Title>
                <img src={IMAGES.serviceImg1} alt='UI/UX Design' className='w-full' />
            </div>
            <div className='bg-black'>
                <Title as='h4' classNameText='text-7xl text-grey p-1'>LOGO <span className='block text-right'>DESIGN</span> </Title>
                <img src={IMAGES.serviceImg2} alt='LOGO Design' className='w-full' />
            </div>
            <div className='bg-black'>
                <Title as='h4' classNameText='text-7xl text-grey p-1'>BRANDING <span className='block text-right'>DESIGN</span> </Title>
                <img src={IMAGES.serviceImg3} alt='BRANDING Design' className='w-full' />
            </div>
            <div className='bg-black'>
                <Title as='h4' classNameText='text-7xl text-grey p-1'>WEBSITE <span className='block text-right'>DESIGN</span> </Title>
                <img src={IMAGES.serviceImg4} alt='WEBSITE Design' className='w-full' />
            </div>
        </div>
    </section>
  )
}

export default ServiceSlider