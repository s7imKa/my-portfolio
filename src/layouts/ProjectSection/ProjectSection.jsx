import Title from '../../components/Title/Title'
import ProjectList from '../../components/ProjectList/ProjectList'
import { useI18n } from '../../i18n/context'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './ProjectSection.scss'


const ProjectSection = () => {

    useEffect(() => {
            AOS.init({
                duration: 600,
                easing: 'ease-out-cubic',
                once: false,
                mirror: false,
            })
            AOS.refresh()
    }, [])
    

    const { t } = useI18n()
    return (
        <section className='project-section'>
            <div className='project-wrap container'>
                <Title>{t('title.text1')}</Title>
                <ProjectList limit={3} />
                <img
                    className='dots'
                    src='/icons/site-efect-icon/Dots.svg'
                    alt='dots'
                    data-aos='fade-right'
                />
            </div>
        </section>
    )
}

export default ProjectSection