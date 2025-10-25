import './HeroSection.scss'

import Button from '../../components/Button/Button'

const HeroSection = () => {
    return (
        <section className='hero-section'>
            <div className='hero-wrap container'>
                <div className='hero-content'>
                    <h1 className='hero-content__title'>
                        Maksym is a <span>front-end developer</span>
                    </h1>
                    <p className='hero-content__description'>
                        He crafts responsive websites where technologies meet creativity
                    </p>
                    <Button gray={false}>Contact me!!</Button>
                </div>
                <div className='hero-avatar'>
                    <div className='hero-avatar__photo'>
                        <img src='/icons/site-efect-icon/Dots.svg' alt='' />
                        <img src='/icons/site-efect-icon/Logo.svg' alt='' />
                    </div>
                    <div className='hero-avatar__status-bar'>
                        <span className='hero-avatar__status-bar__box'></span>

                        <p className='hero-avatar__status-bar__text'>
                            Currently working on <span>Portfolio</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
