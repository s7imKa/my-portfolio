import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import pows from '/icons/quote-pows/pows.svg'

import './Quote.scss'

const Quote = () => {
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
        <figure className='quote' data-aos='fade-up'>
            <blockquote className='quote-text'>
                <p className='quote-text__p'>With great power comes great electricity bill</p>
                <img className='quote-text__img1' src={pows} alt='pows' loading='lazy' />
                <img className='quote-text__img2' src={pows} alt='pows' loading='lazy' />
            </blockquote>
            <figcaption className='quote-avtor'>
                <p className='quote-avtor__name'> - Dr. Who</p>
            </figcaption>
        </figure>
    )
}

export default Quote
