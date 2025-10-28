import Button from '../Button/Button'
import dataProject from '../../data/projects'

import './ProjectList.scss'

const ProjectList = ({ limit }) => {
    const list = typeof limit === 'number' ? dataProject.slice(0, limit + 1) : dataProject


    return (
        <div className='cards'>
            {list.map(item => {
                if (item.id !== limit) {
                    return (
                        <article className='card' key={item.id}>
                            <img src={item.image} alt='' className='card__img' />
                            <div className='card__stack'>
                                <p className='card__stack-text'>{item.techStack}</p>
                            </div>
                            <div className='card__contect'>
                                <h3 className='card__contect-title'>{item.title}</h3>
                                <p className='card__content-description'>{item.description}}</p>
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
