import BlockSkills from '../../components/BlocksSkills/BlocksSkills'
import Title from '../../components/Title/Title'
import './SkillsSection.scss'

const SkillsSection = () => {
    return (
        <section className='skills-section'>
            <div className='container'>
                <Title>Skills</Title>
                <div className='skills'>
                    <div className='skills__icons'>
                        <img src='/icons/site-efect-icon/Rectangle 24.svg' alt='box' />
                        <img src='/icons/site-efect-icon/Rectangle 24.svg' alt='box' />
                        <img src='/icons/site-efect-icon/Dots.svg' alt='dots' />
                        <img src='/icons/site-efect-icon/Dots.svg' alt='dots' />
                        <img src='/icons/site-efect-icon/Logo.svg' alt='Logo' />
                    </div>
                    <BlockSkills />
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
