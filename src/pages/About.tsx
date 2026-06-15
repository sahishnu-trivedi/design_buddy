import AboutImage from '@/components/aboutImage/AboutImage'
import AboutTimelineBox from '@/components/aboutTimeline/AboutTimelineBox'
import Header from '@/components/header/Header'
import TextBanner from '@/components/textBanner/textBanner'
import IMAGES from '@/assets/Images'
import React from 'react'
import Footer from '@/components/footer/Footer'

const About = () => {
  return (
    <>
      <Header />
      <TextBanner
        titleText={
          <>
            Who’s This <span className='text-primary'>Design Buddy?</span>
          </>
        }
        subTitleText={
          <>
            A design studio that feels like a Buddy, not an Agency
          </>
        }
        paraText={[
          <>DesignBuddy is your all-in-one creative partner — here to make design simple, smart, and seriously good-looking.</>,
          <>We help brands, startups, and businesses build their digital identity through designs that speak louder than words. Whether it’s a website that wows, an app that clicks, or branding that sticks, we bring strategy, creativity, and clean aesthetics together — with zero fluff.</>,
          <>Our work spans across UI/UX design, web design, app design, logo design, brand identity, stationery design, digital invitations, and video editing. Each project starts with understanding your vibe and ends with delivering something that feels authentically you.</>,
          <>With 10+ years of creative experience across India, the UK, the USA, Canada, Singapore, and Dubai, we’ve learned that great design isn’t about trends — it’s about clarity, emotion, and connection.</>,
          <>At DesignBuddy, we don’t just deliver files —</>,
        ]
        }
        linkText={
          <>
            Check out our amazing work
          </>
        }
        orangeBoxText={
          <>We design experiences that make people stop, scroll, and smile. &#128526;</>
        }
      >
      </TextBanner>
      <div className='about-main py-15'>
        <div className='main-container'>
          <div className='grid grid-cols-5 gap-2 items-center'>
            <div className='col-span-2'>
              <AboutTimelineBox yearBg='bg-black' year='2015' titleText='The Spark' contentText='The journey began with one designer (and one slow laptop). Working with small Indian startups, crafting logos and posters, and learning that “design” means way more than good-looking visuals — it’s communication.' />
            </div>
            <div className='col-span-3'>
              <AboutImage ImageSrc={IMAGES.aboutSparkImg} />
            </div>
          </div>
          <div className='grid grid-cols-5 gap-2 items-center content-end mt-45'>
            <div className='col-span-2 col-end-6'>
              <AboutTimelineBox yearBg='bg-primary' year='2016–2018' titleText='The Freelance Hustle' contentText='Projects started rolling in from locally in India - each one adding a new flavor to the creative mix.  From fonts to software, logo to User Interface, brochures to mobile apps, I was testing every tool, trend, and color palette.' />
            </div>
          </div>
          <div className='grid grid-cols-5 gap-2 items-center content-end mt-45'>
            <div className='col-span-2'>
              <AboutTimelineBox yearBg='bg-black' year='2019–2020' titleText='Going Global' contentText='Word spread. Clients from USA, Dubai, and Singapore joined us. What started as solo freelancing grew into a global network of happy brands and returning clients. Designs got sharper, concepts got bolder, and deadlines… stayed as crazy as ever.' />
            </div>
            <div className='col-span-3'>
              <AboutImage ImageSrc={IMAGES.aboutGlobalImg} />
            </div>
          </div>
          <div className='grid grid-cols-5 gap-2 items-center content-end mt-45'>
            <div className='col-span-3'>
              <AboutImage ImageSrc={IMAGES.aboutBrandImg} />
            </div>
            <div className='col-span-2'>
              <AboutTimelineBox yearBg='bg-primary' year='2021–2022' titleText='The Brand Era' contentText='Time to level up! Bigger projects, branding systems, UX flows, and corporate design strategies. Handled creative work for tech, fashion, education, real estate, and hospitality — all while keeping that Buddy charm alive.' />
            </div>
          </div>
          <div className='grid grid-cols-5 gap-2 items-center content-end mt-45'>
            <div className='col-span-2 col-end-6'>
              <AboutTimelineBox yearBg='bg-black' year='2023-2024' titleText='Enter DesignBuddy' contentText='The idea of “one friendly brand for all design needs” was born. No agencies. No jargon. Just creative humans helping brands look, feel, and grow better. That’s when DesignBuddy officially took shape — with orange energy and big dreams.' />
            </div>
          </div>
          <div className='grid grid-cols-5 gap-2 items-center content-end mt-45 pb-80'>
            <div className='col-span-2'>
              <AboutTimelineBox yearBg='bg-primary' year='And go on..' titleText='The Buddyverse Expands' contentText='DesignBuddy now collaborates with clients across India, UK, USA, Canada, Dubai & Singapore etc., offering UI/UX, branding, app design, and digital magic.  Every project adds new pixels to our story, and we’re just getting started.' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About