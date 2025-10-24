import './HeroSection.scss'

import Button from '../../components/Button/Button'

const HeroSection = () => {
    return (
        <section className='hero-section'>
            <div className='here-wrap container'>
                <div className='here-content'>
                    <h1 className='here-content__title'>
                        Maksym is a <span>front-end developer</span>
                    </h1>
                    <p className='here-content__description'>
                        He crafts responsive websites where technologies meet creativity
                    </p>
                    <Button gray={false}>Contact me!! {'<~>'}</Button>
                    <Button gray={true}>Contact me!! {'<~>'}</Button>
                </div>
                <div className='here-avatar'>
                    <div className='here-avatar__photo'>
                        <img src='/icons/site-efect-icon/Dots.svg' alt='' />
                        <img src='/icons/site-efect-icon/Logo.svg' alt='' />
                    </div>
                    <div className='here-avatar__status-bar'></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
