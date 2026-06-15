import React, {useState} from 'react'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import Software from '../components/software/Software'
import About from '../components/aboutHome/About'
import ServiceSlider from '../components/serviceSlider/ServiceSlider'
import DesignSlider from '../components/designSlider/DesignSlider'
import Faq from '../components/faq/Faq'
import TrustedPartner from '@/components/trustedPartner/TrustedPartner'
import Testimonials from '@/components/testimonial/Testimonials'
import IMAGES from '@/assets/Images'

import Title from '@/components/title/Title'
import ShadowBox from '@/components/shadowBox/ShadowBox'
import Checkbx from '@/components/checkbx/Checkbx'
import TextLink from '@/components/textLink/TextLink'
import Footer from '@/components/footer/Footer'
// import Checkbx from '../checkbx/Checkbx'
// import TextLink from '../textLink/TextLink'

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Software />
      <About />
      <ServiceSlider />
      <DesignSlider />
      <Faq />
      <TrustedPartner />
      <Testimonials />
      <section className='py-25'>
        <div className='main-container text-center'>
          <img src={IMAGES.workImg1} alt='Work image' className='inline-block' />
        </div>
      </section>
      <Footer contactForm = {
        <div>
          <Title as='h2' classNameText='text-56 text-white'>Say <span className='text-primary'>Hi</span>!</Title>
          <form className='mt-12'>
              <ShadowBox><input type='text' className='placeholder:text-gray-300 text-lg border border-grey bg-white rounded-lg py-4 px-3 w-full mb-5' placeholder='Hey Buddy, my name is...' /></ShadowBox>
              <ShadowBox><input type='email' className='placeholder:text-gray-300 text-lg border border-grey bg-white rounded-lg py-4 px-3 w-full mb-5' placeholder='You can mail me at...' /></ShadowBox>
              <ShadowBox><input type='email' className='placeholder:text-gray-300 text-lg border border-grey bg-white rounded-lg py-4 px-3 w-full mb-5' placeholder='Here’s my number...' /></ShadowBox>
              <ul className='gap-3'>
                  <li className='inline-block mr-10 py-2'><Checkbx checkBoxClassName='border-3 size-6' labelClassName='text-white text-lg font-light' labelText='Web UI Design' /></li>
                  <li className='inline-block mr-10 py-2'><Checkbx checkBoxClassName='border-3 size-6' labelClassName='text-white text-lg font-light' labelText='App UI Design' /></li>
                  <li className='inline-block mr-10 py-2'><Checkbx checkBoxClassName='border-3 size-6' labelClassName='text-white text-lg font-light' labelText='Logo Design' /></li>
                  <li className='inline-block mr-10 py-2'><Checkbx checkBoxClassName='border-3 size-6' labelClassName='text-white text-lg font-light' labelText='Brand Design' /></li>
                  <li className='inline-block mr-10 py-2'><Checkbx checkBoxClassName='border-3 size-6' labelClassName='text-white text-lg font-light' labelText='Stationary Design' /></li>
                  <li className='inline-block mr-10 py-2'><Checkbx checkBoxClassName='border-3 size-6' labelClassName='text-white text-lg font-light' labelText='Video Editing' /></li>
                  <li className='inline-block mr-10 py-2'><Checkbx checkBoxClassName='border-3 size-6' labelClassName='text-white text-lg font-light' labelText='Digital Invitation' /></li>
              </ul>
              <ShadowBox><input type='email' className='text-lg border border-grey bg-white rounded-lg py-4 px-3 w-full mt-5' placeholder='Any message before call..??' /></ShadowBox>
              <TextLink textForLink='Send' />
          </form>
        </div>
      } />
    </>
  )
}

export default Home