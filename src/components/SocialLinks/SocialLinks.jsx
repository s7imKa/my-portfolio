import socialLinks from '../../data/socialLink'
import './SocialLinks.scss'

const SocialLinks = ({ column = false }) => {
    const classSocialIconUl = !column ? 'social-sidebar__ul' : 'social-sidebar__ul--link-column'
    return (
        <aside className='social-sidebar'>
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
