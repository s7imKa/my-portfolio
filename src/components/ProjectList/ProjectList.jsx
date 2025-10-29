import Button from '../Button/Button'
import dataProject from '../../data/projects'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { useI18n } from '../../i18n/context'

import './ProjectList.scss'

const ProjectList = ({ limit }) => {
    const { t } = useI18n()
    const list = typeof limit === 'number' ? dataProject.slice(0, limit) : dataProject

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        })
        AOS.refresh()
    }, [])

    // refresh коли список змінюється (потрібно для map)
    useEffect(() => {
        AOS.refresh()
    }, [list.length])

    return (
        <div className='cards'>
            {list.map(item => (
                <article
                    className='card'
                    key={item.id}
                    data-aos='fade-up'
                    data-aos-offset='50'
                >
                    <div>
                        <img
                            src={item.image}
                            alt=''
                            className='card__img'
                            onLoad={() => AOS.refresh()} /* refresh після завантаження зображення */
                        />
                        <div className='card__stack'>
                            <p className='card__stack-text'>{item.techStack}</p>
                        </div>
                    </div>
                    <div className='card__contect'>
                        <h3 className='card__contect-title'>
                            {t(`projects.project${item.id}.title`)}
                        </h3>
                        <p className='card__contect-description'>
                            {t(`projects.project${item.id}.description`)}
                        </p>
                        <Button link={item.link}>View git</Button>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default ProjectList
