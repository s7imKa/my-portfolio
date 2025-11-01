import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'


import './HeroSection.scss'

import Button from '../../components/Button/Button'
import { useI18n } from '../../i18n/context'

const HeroSection = () => {
    const { t } = useI18n()

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        })
        AOS.refresh()
    }, [])

    const tt = text => {
        const res = String(text)
        return t(`heroSection.${res}`)
    }
    return (
        <section className='hero-section'>
            <div className='hero-wrap container'>
                <div className='hero-content'>
                    <h1 className='hero-content__title'>
                        {tt('title')} <span>front-end developer</span>
                    </h1>
                    <p className='hero-content__description'>{tt('description')}</p>
                    <Button gray={false}>{tt('textBtn')}</Button>
                </div>
                <div className='hero-avatar'>
                    <div className='hero-avatar__photo'>
                        <DotLottieReact
                            src='https://lottie.host/9f929d8c-07c1-4698-8a5a-a90f2af9a137/owNJIbbNQ6.lottie'
                            loop
                            autoplay
                        />
                        {/* <img
                            src='/icons/site-efect-icon/Dots.svg'
                            alt='dots'
                            data-aos='fade-left'
                        />
                        <img
                            src='/icons/site-efect-icon/Logo.svg'
                            alt='logo'
                            data-aos='fade-right'
                        /> */}
                    </div>
                    <div className='hero-avatar__status-bar'>
                        <span className='hero-avatar__status-bar__box'></span>

                        <p className='hero-avatar__status-bar__text'>
                            {tt('statusBar.text')} <span>{tt('statusBar.span')}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
