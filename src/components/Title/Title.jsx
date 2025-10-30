import ViewAllProjects from '../../features/ViewAllProjects/ViewAllProjects'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Title.scss'

const Title = ({ children , allBtn = false}) => {
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
        <div className='title'>
            <div className='title__content' data-aos='fade-right'>
                <h2 className='h2'>
                    <span className='h2__span'>#</span>
                    {children}
                </h2>

                <span className='liner'></span>
            </div>

            {allBtn == true && <ViewAllProjects />}
        </div>
    )
}

export default Title
