import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import './BlocksSkills.scss'

const BlocksSkills = () => {
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
        <div className='skills-blocks'>
            <div className='block' data-aos='zoom-in-up'>
                <div className='block__title'>Languages</div>
                <div className='block__content'>
                    <p>JavaScript TypeScript Python </p>
                </div>
            </div>
            <div className='block'>
                <div className='block__title'>Databases</div>
                <div className='block__content'>
                    <p>Mongo MySQL MySQLWorkbanch</p>
                </div>
            </div>
            <div className='block' data-aos='zoom-out'>
                <div className='block__title'>Tools</div>
                <div className='block__content'>
                    <p>VSCode JetBrains IDEs GitHub Figma Neovim Font NPM Prettier Render</p>
                </div>
            </div>
            <div className='block'>
                <div className='block__title'>Other</div>
                <div className='block__content'>
                    <p>HTML SCSS EJS REST JSON OOP MVC CI/CD</p>
                </div>
            </div>
            <div className='block' data-aos='fade-left'>
                <div className='block__title'>Frameworks</div>
                <div className='block__content'>
                    <p>React Vite Express.js</p>
                </div>
            </div>
        </div>
    )
}

export default BlocksSkills
