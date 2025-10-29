import Button from '../Button/Button'
import dataProject from '../../data/projects'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './ProjectList.scss'

const ProjectList = ({ limit }) => {
    const list = typeof limit === 'number' ? dataProject.slice(0, limit + 1) : dataProject

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
        <div className='cards' >
            {list.map(item => {
                if (item.id !== limit) {
                    return (
                        <article className='card' key={item.id} data-aos='fade-up'>
                            <div>
                                <img src={item.image} alt='' className='card__img' />
                                <div className='card__stack'>
                                    <p className='card__stack-text'>{item.techStack}</p>
                                </div>
                            </div>
                            <div className='card__contect'>
                                <h3 className='card__contect-title'>{item.title}</h3>
                                <p className='card__contect-description'>{item.description}</p>
                                <Button>View git</Button>
                            </div>
                        </article>
                    )
                } else {
                    return null
                }
            })}
        </div>
    )
}

export default ProjectList
