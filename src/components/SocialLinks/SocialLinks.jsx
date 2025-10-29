import socialLinks from '../../data/socialLink'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './SocialLinks.scss'

const SocialLinks = ({ column = false }) => {
    const classSocialIconUl = !column ? 'social-sidebar__ul' : 'social-sidebar__ul--link-column'

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
        <aside className='social-sidebar' data-aos='fade-up'>
            <ul className={classSocialIconUl}>
                {socialLinks.map(link => (
                    <Link
                        id={link.id}
                        key={link.id}
                        name={link.name}
                        href={link.href}
                        icon={link.icon}
                        external={link.external}
                    />
                ))}
            </ul>
        </aside>
    )
}

const Link = ({ id, name, href, icon, external }) => {
    return (
        <li className='social-sidebar__li'>
            <a
                href={href}
                className={`social-sidebar__a a${id}`}
                aria-label={name}
                title={name}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
                <img src={icon} alt={name} loading='lazy' />
            </a>
        </li>
    )
}

export default SocialLinks
