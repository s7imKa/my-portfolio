import Title from '../../components/Title/Title'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './AboutMeSection.scss'
import { Link } from 'react-router'

const AboutMeSection = () => {

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
        <section className='about-me-section'>
            <div className='container'>
                <Title>about-me</Title>
                <div className='about-me'>
                    <div className='about-me__content'>
                        <p data-aos='zoom-in-up'>Hello, i’m Maks!</p>
                        <br />
                        <p data-aos='fade-down-left'>
                            I’m a self-taught front-end developer based in Lviv, Ukraine. I can
                            develop responsive websites from scratch and raise them into modern
                            user-friendly web experiences.
                        </p>
                        <br />
                        <p data-aos='flip-up'>
                            Transforming my creativity and knowledge into a websites has been my
                            passion for over a year. I have been helping various clients to
                            establish their presence online. I always strive to learn about the
                            newest technologies and frameworks.
                        </p>
                        <Link className='about-me__content-btn' to={'about-me'}>
                            {' '}
                            Read more {'->'}
                        </Link>
                    </div>
                    <div className='about-me__img' data-aos='zoom-in-right' data-aos-offset='150'>
                        <img src='/icons/site-efect-icon/Dots.svg' alt='dots' className='dots-1' />
                        <img src='/icons/site-efect-icon/Dots.svg' alt='dots' className='dots-2' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection
