import React from 'react'
import IMAGES from '../../assets/Images'

const Banner = () => {
  return (
    <section>
        <div className='py-45 w-full'>
            <div className='flex justify-center items-center w-full'>
                <div> <img src={IMAGES.bannerImg} alt='Banner Image' /> </div>
                <div className='ml-10'>
                    <p className='text-3xl font-light'>We are <span className='bg-primary-subtle text-primary py-2 px-5 rounded-br-10 inline-block'>UI / UX Designer</span></p>
                    <h2 className='text-primary text-5xl font-medium uppercase my-7'>
                        <span className='block'>Let your brand shine </span> 
                        <span className='block'> with a Best 
                            <span className='text-black'> buddy </span> 
                        </span> 
                        <span className='block'> by your side</span>
                    </h2>
                    <a href='#' className='text-3xl'>
                        Let’s Design!
                        <svg className='ml-4' width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 7.16016C0.671573 7.16016 0 7.83173 0 8.66016C0 9.48858 0.671573 10.1602 1.5 10.1602V8.66016V7.16016ZM33.5 8.66016L18.5 -9.82285e-05V17.3204L33.5 8.66016ZM1.5 8.66016V10.1602H20V8.66016V7.16016H1.5V8.66016Z" fill="#FA6400"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner