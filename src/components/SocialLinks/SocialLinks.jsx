import './SocialLinks.scss'

const SocialLinks = ({ column = false }) => {
    const classSocialIconUl = !column ? 'social-sidebar__ul' : 'social-sidebar__ul--link-column'
    return (
        <aside className='social-sidebar'>
            <ul className={classSocialIconUl}>
                <li className='social-sidebar__li'>
                    <a href='#' className='social-sidebar__a a1'>
                        <img src='../../assets/icons/social-link/github.svg' alt='git hub' />
                    </a>
                </li>
                <li className='social-sidebar__li'>
                    <a href='#' className='social-sidebar__a a2'>
                        <img src='../../assets/icons/social-link/Telegram.svg' alt='telegram' />
                    </a>
                </li>
                <li className='social-sidebar__li'>
                    <a href='#' className='social-sidebar__a a3'>
                        <img src='../../assets/icons/social-link/Email.svg' alt='telegram' />
                    </a>
                </li>
                <li className='social-sidebar__li'>
                    <a href='#' className='social-sidebar__a a4'>
                        <img src='../../assets/icons/social-link/Figma.svg' alt='telegram' />
                    </a>
                </li>
            </ul>
        </aside>
    )
}
export default SocialLinks
