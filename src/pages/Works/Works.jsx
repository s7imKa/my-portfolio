import ProjectSection from '../../layouts/ProjectSection/ProjectSection'
import TitlePage from '../../components/TitlePage/TitlePage'


const Works = () => {
    
    return (
        <>
            <TitlePage desc={'List of my projects'}>complete-apps</TitlePage>
            <ProjectSection limitCards={'all'} />
        </>
    )
}

export default Works