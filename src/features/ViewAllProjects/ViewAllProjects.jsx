import { useI18n } from '../../i18n/context'
import { useEffect } from 'react'
import { NavLink } from 'react-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './ViewAllProjects.scss'

const ViewAllProjects = () => {
    const { t } = useI18n()

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        })
        AOS.refresh()
    }, [])
    return (
        <NavLink to='/works' href='#' className='link-all-projects' data-aos='fade-left'>
            {t('title.all')} {'~~>'}
        </NavLink>
    )
}

export default ViewAllProjects
