import React from 'react'
import Title from '../title/Title'
import Text from '../text/Text'
import TextLink from '../textLink/TextLink'
import ShadowBox from '../shadowBox/ShadowBox'

const About = () => {
  return (
    <section className='main-container'>
      <div className='py-25 grid grid-cols-2 gap-7'>
        <div>
          <Title as='h2' classNameText='text-56'> Why We’re Your <span className='text-primary'>Design BFFs</span> </Title>
          <Text classNameText= 'mt-6 mb-0'>Hey there! We’re Design Buddy — your friendly neighborhood UI deisnger, logo and graphic designers from Gujarat, rocking designs for clients all over India, plus the USA, Canada, UK and world-wide. With 10+ years of experience, we know how to turn your ideas into cool, trendy designs that actually make people say, “Wow, that’s awesome!” </Text>
          <Text classNameText='my-7'>We don’t just create; we get you—your vibe, your style, your brand. Need web design, apps, branding or even video edits? We’ve got your back. </Text>
          <Text>So why choose us? Because we’re seriously creative, super chill, and totally obsessed with making your brand look amazing. Let’s make design fun again—buddy style!</Text>
          <TextLink textForLink="More about DB" />
        </div>
        <div className='grid grid-cols-2 gap-7'>
          <ShadowBox classText='rounded-br-10 p-5'>
            <Title as='h3' classNameText='text-3xl mb-7'>Experience Matters</Title>
            <Text>With over a decade in the industry, we bring proven expertise and in-depth design knowledge to every project, ensuring reliable and professional results.</Text>
          </ShadowBox>
          <ShadowBox classText='rounded-br-10 p-5'>
            <Title as='h3' classNameText='text-3xl mb-7'>We Understand You</Title>
            <Text>We listen closely to your vision, tailoring our creative approach to suit your goals and deliver designs that resonate with your brand’s personality.</Text>
          </ShadowBox>
          <ShadowBox classText='rounded-br-10 p-5'>
            <Title as='h3' classNameText='text-3xl mb-7'>Stick to Trend</Title>
            <Text>Our team stays ahead of the curve, blending current design trends with timeless aesthetics to keep your brand fresh and competitive.</Text>
          </ShadowBox>
          <ShadowBox classText='rounded-br-10 p-5'>
            <Title as='h3' classNameText='text-3xl mb-7'>Creative Mind</Title>
            <Text>Design Buddy thrives on innovative thinking—every project is a new opportunity to generate unique ideas and deliver inspired solutions.</Text>
          </ShadowBox>
          <ShadowBox classText='rounded-br-10 p-5'>
            <Title as='h3' classNameText='text-3xl mb-7'>Global Perspective</Title>
            <Text>Serving clients worldwide, we craft designs that connect across cultures, giving your brand an international edge and broad appeal.</Text>
          </ShadowBox>
          <ShadowBox classText='rounded-br-10 p-5'>
            <Title as='h3' classNameText='text-3xl mb-7'>Personalized Service</Title>
            <Text>Each client enjoys attentive, customized service—fast responses, flexible support, and a strong partnership focused on your business success.</Text>
          </ShadowBox>
        </div>
      </div>
    </section>
  )
}

export default About