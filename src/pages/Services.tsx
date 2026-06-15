import IMAGES from '@/assets/Images'
import AboutImage from '@/components/aboutImage/AboutImage'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import WhyChooseUs from '@/components/services/WhyChooseUs'
import TextBanner from '@/components/textBanner/textBanner'
import TextLink from '@/components/textLink/TextLink'
import React from 'react'

function Services() {
  return (
    <>
      <Header />
      <TextBanner
        titleText={
          <>
            UI/UX <span className='text-primary'>Design</span>
          </>
        }
        subTitleText={
          <>We Design Experiences That Users Actually Love!</>
        }
        paraText={[
          <>At <span className='text-primary'>DesignBuddy</span>, we don’t just make things look good — we make them work beautifully.</>,
          <>Our UI/UX design process blends creativity with strategy to craft experiences that keep users scrolling, clicking, and smiling.</>,
          <>Whether it’s a website, mobile app, or a full-fledged digital product, we make sure every interaction feels smooth, smart, and satisfying.</>,
        ]
        }
        linkText={
          <> Let’s Chat</>
        }
        orangeBoxText={
          <> Tell us what you’re building, and we’ll turn it into an experience worth remembering</>
        }
      >
      </TextBanner>
      <AboutImage ImageSrc={IMAGES.ServicesPgImg1} />
      <div className='main-container text-center'>
        <TextLink textForLink='View Portfolio' />
      </div>
      <WhyChooseUs />
      <Footer />
    </>
  )
}

export default Services