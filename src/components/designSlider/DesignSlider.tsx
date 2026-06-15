import React from 'react'
import Title from '../title/Title'
import Text from '../text/Text'
import IMAGES from '../../assets/Images'
import TextLink from '../textLink/TextLink'

const DesignSlider = () => {
  return (
    <section className='py-25 bg-dark-grey'>
        <div className='main-container mx-auto'>
            <div className='grid grid-cols-4 gap-2 items-center'>
                <div className='col-span-1'>
                    <Title as='h2' classNameText='text-56 leading-tight'>Peek at Our <span className='text-primary'>Design</span> Magic </Title>
                </div>
                <div className='col-span-3'>
                    <Text>Ready to see some design wizardry? Our portfolio is packed with projects where we’ve sprinkled creativity, added a dash of style, and whipped up some seriously cool visuals. From logos that pop to websites that wow, it’s all here. Take a sneak peek and get inspired — who knows, your next project could be our next masterpiece!</Text>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-4 gap-6 mt-7'>
                    <div>
                        <img src={IMAGES.designImg1} alt='Design Image 1' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <img src={IMAGES.designImg2} alt='Design Image 2' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <img src={IMAGES.designImg3} alt='Design Image 3' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <img src={IMAGES.designImg4} alt='Design Image 4' className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-6 mt-7'>
                    <div>
                        <img src={IMAGES.designImg1} alt='Design Image 1' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <img src={IMAGES.designImg2} alt='Design Image 2' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <img src={IMAGES.designImg3} alt='Design Image 3' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <img src={IMAGES.designImg4} alt='Design Image 4' className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='text-center mt-7'><TextLink textForLink="Let’s Dive Deeper"></TextLink></div>
            </div>
        </div>
    </section>
  )
}

export default DesignSlider