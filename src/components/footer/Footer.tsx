import IMAGES from '@/assets/Images'
import FooterLogoText from '../footerLogoText/FooterLogoText'

const HomeFooter = ({ contactForm }) => {
    return (
        <footer className='pt-25 bg-black overflow-hidden'>
            <div className='main-container'>
                <div className={contactForm ? 'grid grid-cols-2 gap-6' : 'grid grid-cols-4'}>
                    { contactForm ?? contactForm }
                    <div className={contactForm ? 'col-span-1' : 'col-span-2 col-end-4 footer-content'}>
                        <div className='footer-logo-block'><img src={IMAGES.footerLogo} alt='Footer Logo' className='inline-block' /></div>
                        <div className='mt-10 pt-10 border-t border-grey'>
                            <div className='max-w-6xl mx-auto'>
                                <div className='grid grid-cols-3 gap-4'>
                                    <div className='bg-primary text-white px-4 py-4 rounded-md flex items-center'>
                                        {IMAGES.instagramSvg}
                                        <p className='ml-2'>instagram</p>
                                    </div>
                                    <div className='bg-primary text-white px-4 py-4 rounded-md flex items-center'>
                                        {IMAGES.pinterestSvg}
                                        <p className='ml-2'>Pinterest</p>
                                    </div>
                                    <div className='bg-primary text-white px-4 py-4 rounded-md flex items-center'>
                                        {IMAGES.youtubeSvg}
                                        <p className='ml-2'>Youtube</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 mt-10 pt-10 border-t border-grey footer-content-block'>
                            <div className='flex items-center gap-4 col-span-1'>
                                <div className='bg-primary w-18 h-18 rounded-full flex items-center justify-center'>{IMAGES.mobileSvg}</div>
                                <div>
                                    <p className='text-white font-light'>Call / Whatsapp</p>
                                    <h6 className='text-white text-3xl'>9409029649</h6>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 col-span-2'>
                                <div className='bg-primary w-18 h-18 rounded-full flex items-center justify-center'>{IMAGES.mailSvg}</div>
                                <div className='shrink'>
                                    <p className='text-white font-light'>Email</p>
                                    <h6 className='text-white text-3xl'>designbuddy@gmail.com</h6>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 mt-10 pt-10 border-t border-grey footer-content-block'>
                            <div className='flex items-center'><img src={IMAGES.footerImg1} alt='Footer Image' /></div>
                            <div className='flex items-center'>
                                <div>
                                    <a href='javascript:void(0)' className='text-white font-light text-2xl block mb-2'>Privacy Policy</a>
                                    <a href='javascript:void(0)' className='text-white font-light text-2xl block mb-2'>Terms &amp; Conditions</a>
                                    <a href='javascript:void(0)' className='text-white font-light text-2xl block mb-2'>Refund Policy</a>
                                    <p className='text-grey text-2xl'>&copy; 2025 Design Buddy. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterLogoText />
        </footer>
    )
}

export default HomeFooter