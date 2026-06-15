import React from 'react'
import Title from '../title/Title'
import ShadowBox from '../shadowBox/ShadowBox'
import Text from '../text/Text'
import IMAGES from '@/assets/Images'

const Testimonials = () => {
  return (
    <section className='py-25'>
        <div className='main-container'>
            <Title as='h2' classNameText='text-56 leading-tight mb-8 text-center'>Cool <span className='text-primary'>People</span> We Work With</Title>
            <div className='grid grid-cols-2 gap-8'>
                <ShadowBox classText='p-10 rounded-3xl'>
                    {IMAGES.testimonialSvg}
                    <Text classNameText='mt-12 mb-14'>"The team transformed our platform with modern marketing techniques, seamless integration, and better optimization. The UI was impressive, and their in-house designer was highly responsive. Overall, great interaction and excellent outcomes!"</Text>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-allison text-3xl mb-5'>Tony Stark</p>
                            <Title as='h5' classNameText='text-xl text-grey'>Chief Operating Officer (COO) &amp; <br /> CMO</Title>
                        </div>
                        <div>
                            <img src={IMAGES.clientImg1} alt='Client Logo' />
                        </div>
                    </div>
                </ShadowBox>
                <ShadowBox classText='p-10 rounded-3xl'>
                    {IMAGES.testimonialSvg}
                    <Text classNameText='mt-12 mb-14'>"Design Buddy transformed our traditional business into a seamless digital experience with their all-in-one platform. Their UX expertise truly impressed us, making them our go-to agency for every project."</Text>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-allison text-3xl mb-5'>Natasha Romanoff</p>
                            <Title as='h5' classNameText='text-xl text-grey'>Vice President of Product <br /> Development</Title>
                        </div>
                        <div>
                            <img src={IMAGES.clientImg2} alt='Client Logo' />
                        </div>
                    </div>
                </ShadowBox>
                <ShadowBox classText='p-10 rounded-3xl'>
                    {IMAGES.testimonialSvg}
                    <Text classNameText='mt-12 mb-14'>"Design Buddy helped us create a seamless, user-friendly platform for job seekers and employers. With hands-on project management they ensured the project was well-executed and aligned with our goals."</Text>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-allison text-3xl mb-5'>Steve Rogers</p>
                            <Title as='h5' classNameText='text-xl text-grey'>Founder</Title>
                        </div>
                        <div>
                            <img src={IMAGES.clientImg3} alt='Client Logo' />
                        </div>
                    </div>
                </ShadowBox>
                <ShadowBox classText='p-10 rounded-3xl'>
                    {IMAGES.testimonialSvg}
                    <Text classNameText='mt-12 mb-14'>"Design Buddy’s team consistently impressed us with their innovative UI/UX ideas. Every suggestion they presented was well-thought-out and added significant value to our project, making the entire design process smooth and efficient."</Text>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-allison text-3xl mb-5'>Stephen Vincent Strange</p>
                            <Title as='h5' classNameText='text-xl text-grey'>CEO</Title>
                        </div>
                        <div>
                            <img src={IMAGES.clientImg1} alt='Client Logo' />
                        </div>
                    </div>
                </ShadowBox>
            </div>
        </div>
    </section>
  )
}

export default Testimonials