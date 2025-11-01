import ProjectSection from '../../layouts/ProjectSection/ProjectSection'
import './Works.scss'

const Works = () => {
    
    return (
        <>
            <div className='title-work container'>
                <h3 className='title-work__h3'>
                    <span>/</span>complete-apps
                </h3>
                <p className='title-work__p'>List of my projects</p>
            </div>
            <ProjectSection limitCards={'all'} />
        </>
    )
}

export default Works