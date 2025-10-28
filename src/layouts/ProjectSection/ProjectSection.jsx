import Title from '../../components/Title/Title'
import ProjectList from '../../components/ProjectList/ProjectList'
import { useI18n } from '../../i18n/context'

import './ProjectSection.scss'


const ProjectSection = () => {
    const { t } = useI18n()
    return (
        <section className='project-section'>
            <div className="project-wrap container">
                <Title>{t('title.text1')}</Title>
                <ProjectList limit={3}/>
                

            </div>
        </section>
    )
}

export default ProjectSection