import React from 'react'
import Title from '../title/Title'
import ShadowBox from '../shadowBox/ShadowBox'
import Text from '../text/Text'

const WhyChooseUs = () => {
  return (
    <div className='bg-[#f4f4f4] py-25 mt-6'>
        <div className='main-container'>
            <Title as='h3' classNameText='text-56 text-black leading-none uppercase text-center' >
                <>Why choose <span className='text-primary'>db</span> for ui/ux?</>
            </Title>
            <div className='grid grid-cols-8 mt-7 items-center'>
                <ShadowBox classText='p-7 bg-white rounded-2xl col-span-4 col-end-7'>
                    <Title as='h3' classNameText='text-3xl text-primary font-light'>We Understand Humans</Title>
                    <Text classNameText='font-light'>Design is all about emotions — and we get that. We dive deep into how your users think, feel, and behave, so we can create experiences that feel natural, personal, and just make sense. No robotic layouts or confusing flows — only human-centered design that clicks.</Text>
                </ShadowBox>
                <ShadowBox classText='p-7 bg-white col-end-8 rounded-2xl mt-7 col-span-4 col-end-7'>
                    <Title as='h3' classNameText='text-3xl text-primary font-light'>We’ve Worked Worldwide</Title>
                    <Text classNameText='font-light'>From India’s creative chaos to the sleek digital standards of the UK, USA, Canada, Dubai, and Singapore — we’ve seen it all. Our global experience helps us blend diverse design perspectives into one universal goal: creating interfaces that connect with users anywhere on the planet.</Text>
                </ShadowBox>
                <ShadowBox classText='p-7 bg-white rounded-2xl mt-7 col-span-4 col-end-7'>
                    <Title as='h3' classNameText='text-3xl text-primary font-light'>We Mix Art with Analytics</Title>
                    <Text classNameText='font-light'>Every pixel we place has a purpose. We combine design psychology, user behavior data, and creative intuition to craft experiences that are not just beautiful, but smart. Our designs don’t just look good — they perform even better.</Text>
                </ShadowBox>
                <ShadowBox classText='p-7 bg-white col-end-8 rounded-2xl mt-7 col-span-4 col-end-7'>
                    <Title as='h3' classNameText='text-3xl text-primary font-light'>We Keep It Simple</Title>
                    <Text classNameText='font-light'>We believe the best designs are effortless. So, we strip away the clutter, keep only what matters, and make your product easy to love. Simplicity is our superpower — and it’s how we turn complex ideas into designs that feel refreshingly clear and user-friendly.</Text>
                </ShadowBox>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs