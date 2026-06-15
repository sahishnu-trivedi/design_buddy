import React, { Component } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Title from '../title/Title'
import IMAGES from '@/assets/Images'

const Faq = () => {
  return (
    <section className='py-25'>
        <div className='main-container'>
            <div className='grid grid-cols-5 gap-4'>
                <div className='col-span-3'>
                    <Title as='h2' classNameText='text-56 mb-6'>Ask Us <span className='text-primary'>Anything</span> (Seriously!)</Title>
                    <Accordion type="single" collapsible defaultValue="shipping">
                        <AccordionItem className='shadow-white not-last:border-b-0 mb-7 px-6 py-4 rounded-2xl' value="outside">
                            <AccordionTrigger className='cursor-pointer text-2xl font-normal hover:no-underline'>Can you work with clients outside India?</AccordionTrigger>
                            <AccordionContent className='text-lg'>Absolutely! DesignBuddy works with brands and businesses from all around the world — including the UK, USA, Canada, Dubai, Singapore, and more. No matter where you’re located, we keep communication smooth, timelines clear, and creativity flowing across every timezone</AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='shadow-white not-last:border-b-0 mb-7 px-6 py-4 rounded-2xl' value="first">
                            <AccordionTrigger className='cursor-pointer text-2xl font-normal hover:no-underline'>What if I don't like the first design concepts?</AccordionTrigger>
                            <AccordionContent className='text-lg'>No worries at all — great design is a collaborative process. We include revisions in our workflow to refine and improve the designs until they truly match your vision and expectations. Your feedback matters to us, and we work closely with you to make sure the final result feels just right</AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='shadow-white not-last:border-b-0 mb-7 px-6 py-4 rounded-2xl' value="communicate">
                            <AccordionTrigger className='cursor-pointer text-2xl font-normal hover:no-underline'>How do we communicate during the project?</AccordionTrigger>
                            <AccordionContent className='text-lg'>We keep communication simple, friendly, and organized. Depending on your preference, we can connect through WhatsApp, Email, Zoom, Google Meet, or other collaboration tools. You’ll receive regular updates, progress previews, and quick responses throughout the project — because nobody likes being left on “seen”</AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='shadow-white not-last:border-b-0 mb-7 px-6 py-4 rounded-2xl' value="support">
                            <AccordionTrigger className='cursor-pointer text-2xl font-normal hover:no-underline'>Do you offer support after the project is finished?</AccordionTrigger>
                            <AccordionContent className='text-lg'>Yes! Our connection doesn’t end after delivery. We provide post-project support for design updates, minor guidance, and assistance whenever needed. Whether it’s a quick tweak or future improvements, Buddy’s still here to help</AccordionContent>
                        </AccordionItem>
                        <AccordionItem className='shadow-white not-last:border-b-0 mb-7 px-6 py-4 rounded-2xl' value="production">
                            <AccordionTrigger className='cursor-pointer text-2xl font-normal hover:no-underline'>Do you handle printing and production?</AccordionTrigger>
                            <AccordionContent className='text-lg'>Yes, we do! Along with digital designs, we can also assist with print-ready files and production guidance for branding materials, stationery, invitations, and more. We make sure your designs look just as amazing in real life as they do on screen</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='col-span-2'>
                    <img src={IMAGES.faqImg} alt='FAQ Image' className='w-full' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq