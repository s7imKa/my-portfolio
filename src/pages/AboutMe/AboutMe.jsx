import BlocksSkills from '../../components/BlocksSkills/BlocksSkills'
import Title from '../../components/Title/Title'
import TitlePage from '../../components/TitlePage/TitlePage'
import AboutMeSection from '../../layouts/AboutMeSection/AboutMeSection'

const AboutMe = () => {
    return (
        <>
            <TitlePage desc={'Who am i?'}>about-me</TitlePage>
            <AboutMeSection />
            <div className='container'>
                <Title>Skills</Title>
                <BlocksSkills style={{ maxWidth: '100%', paddingBottom: '5rem'}} />
            </div>
        </>
    )
}

export default AboutMe
