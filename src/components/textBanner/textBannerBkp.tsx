import React from 'react'
import Title from '../title/Title'
import Text from '../text/Text'

export type TextBannerProps = {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  paragraphs?: React.ReactNode[]
  tail?: React.ReactNode
  sectionClassName?: string
  containerClassName?: string
  contentClassName?: string
}

const TextBanner = ({
  title,
  subtitle,
  paragraphs,
  tail,
  sectionClassName,
  containerClassName,
  contentClassName,
}: TextBannerProps) => {
  return (
    <section className={`py-25 ${sectionClassName ?? ''}`.trim()}>
      <div className={`main-container ${containerClassName ?? ''}`.trim()}>
        <div className={`text-center w-5xl mx-auto ${contentClassName ?? ''}`.trim()}>
          {title ? (
            <Title as='h2' classNameText='text-[120px] text-black leading-none uppercase'>
              {title}
            </Title>
          ) : null}

          {subtitle ? (
            <Title as='h3' classNameText='text-3xl text-primary leading-none font-light my-13'>
              {subtitle}
            </Title>
          ) : null}

          {paragraphs?.map((paragraph, idx) => (
            <Text key={idx} classNameText='mb-6 font-light'>
              {paragraph}
            </Text>
          ))}

          {tail ? <Text classNameText='font-light'>{tail}</Text> : null}
        </div>
      </div>
    </section>
  )
}

{/* <TextBanner
        title={
          <>
            Who’s This <span className='text-primary'>Design Buddy?</span>
          </>
        }
        subtitle='A design studio that feels like a Buddy, not an Agency'
        paragraphs={[
          <>
            <span className='text-primary'>DesignBuddy</span> is your all-in-one creative partner — here to
            make design simple, smart, and seriously good-looking
          </>,
          <>
            We help brands, startups, and businesses build their digital identity through designs that speak
            louder than words. Whether it’s a website that wows, an app that clicks, or branding that sticks,
            we bring strategy, creativity, and clean aesthetics together — with zero fluff.
          </>,
          <>
            Our work spans across UI/UX design, web design, app design, logo design, brand identity,
            stationery design, digital invitations, and video editing. Each project starts with understanding
            your vibe and ends with delivering something that feels authentically you.
          </>,
          <>
            With 10+ years of creative experience across India, the UK, the USA, Canada, Singapore, and
            Dubai, we’ve learned that great design isn’t about trends — it’s about clarity, emotion, and
            connection.
          </>,
        ]}
        tail={
          <>
            At <span className='text-primary'>DesignBuddy</span>, we don’t just deliver files —
          </>
        }
      /> */}

export default TextBanner