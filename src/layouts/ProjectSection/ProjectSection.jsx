import Title from '../../components/Title/Title'
import { useI18n } from '../../i18n/context'

import './ProjectSection.scss'


const ProjectSection = () => {
    const { t } = useI18n()
    return (
        <section className='project-section'>
            <div className="project-wrap container">
                <Title>{t('title.text1')}</Title>


            </div>
        </section>
    )
}

export default ProjectSection