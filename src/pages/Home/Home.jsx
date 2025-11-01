import AboutMeSection from '../../layouts/AboutMeSection/AboutMeSection'
import HeroSection from '../../layouts/HeroSection/HeroSection'
import ProjectSection from '../../layouts/ProjectSection/ProjectSection'
import QuoteSection from '../../layouts/QuoteSection/QuoteSection'
import SkillsSection from '../../layouts/SkillsSection/SkillsSection'

const Home = () => {
    return (
        <>
            <HeroSection />
            <QuoteSection />
            <ProjectSection limitCards={3} allBtn={true}/>
            <SkillsSection />
            <AboutMeSection/>
        </>
    )
}

export default Home
