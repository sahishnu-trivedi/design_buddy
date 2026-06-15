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
                        {IMAGES.primaryArrowSvg}
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner