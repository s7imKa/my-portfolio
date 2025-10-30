import Logo from '../../components/Logo/Logo'
import SocialLinks from '../../components/SocialLinks/SocialLinks'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import './Footer.scss'

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        })
        AOS.refresh()
    }, [])
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__content'>
                    <div className='footer__email' data-aos='fade-right' data-aos-offset='50'>
                        <Logo />
                        <div className='link-email'>
                            <a href='mailto:maksikmaks98@gmail.com'>maksikmaks98@gmail.com</a>
                            <a href='mailto:maksym.kravchyshyn@lnu.edu.ua'>
                                maksym.kravchyshyn@lnu.edu.ua
                            </a>
                        </div>
                    </div>

                    <div className='footer__media' data-aos='fade-left' data-aos-offset='50'>
                        <h4 className='footer__media-title'>Media</h4>
                        <SocialLinks anim={false} />
                    </div>
                </div>
                <div className='footer__description'>
                    <p>© Copyright 2025.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
