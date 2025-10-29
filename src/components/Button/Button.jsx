import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import './Button.scss'

const Button = ({ children, gray = false, link }) => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        })
        AOS.refresh()
    }, [])


    const grayBorder = gray ? 'base-button border-grey' : 'base-button'
    return (
        <a
            href={link}
            className={grayBorder}
            target='_blank'
            rel='noopener noreferrer'
            data-aos='zoom-in'
            data-aos-offset='10'
        >
            {children}
        </a>
    )
}

export default Button
