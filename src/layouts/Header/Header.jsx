import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router'

import SocialLinks from '../../components/SocialLinks/SocialLinks'
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher'
import ThemeToggleBtn from './ThemeToggleBtn/ThemeToggleBtn'
import { useI18n } from '../../i18n/context'


import Logo from '/icons/logo2.svg'

import './Header.scss'

export default function Header() {
    const { t } = useI18n()
    const [openBurger, setBurger] = useState(false)

    const burgerRef = useRef(null)
    const burgerBtnRef = useRef(null)

    const classOpenBurger = openBurger === true ? 'header-burger active-burger' : 'header-burger'

    useEffect(() => {
        function handleOutside(e) {
            if (!openBurger) return
            const target = e.target
            if (
                burgerRef.current &&
                burgerBtnRef.current &&
                !burgerRef.current.contains(target) &&
                !burgerBtnRef.current.contains(target)
            ) {
                setBurger(false)
            }
        }

        function handleKey(e) {
            if (e.key === 'Escape') setBurger(false)
        }

        document.addEventListener('mousedown', handleOutside)
        document.addEventListener('touchstart', handleOutside)
        document.addEventListener('keydown', handleKey)
        return () => {
            document.removeEventListener('mousedown', handleOutside)
            document.removeEventListener('touchstart', handleOutside)
            document.removeEventListener('keydown', handleKey)
        }
    }, [openBurger])

    return (
        <header className='header'>
            <div className='wrapper container'>
                <div className='header-social'>
                    <span className='header-social__line'></span>
                    <SocialLinks column={true} />
                </div>

                <div className='header-logo'>
                    <img className='header-logo__img' src={Logo} alt='logo' />
                    <p className='header-logo__title'>Maks</p>
                </div>

                <div className='header-content'>
                    <nav className='header-content__navigation'>
                        <ul className='header-content__ul'>
                            <li className='header-content__list'>
                                <NavLink to='/' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.home')}
                                </NavLink>
                            </li>
                            <li className='header-content__list'>
                                <NavLink to='works' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.works')}
                                </NavLink>
                            </li>
                            <li className='header-content__list'>
                                <NavLink to='about-me' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.about')}
                                </NavLink>
                            </li>
                            <li className='header-content__list'>
                                <NavLink to='contacts' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.contacts')}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className='header-content__setup'>
                        <LanguageSwitcher />
                        <ThemeToggleBtn />
                    </div>
                </div>

                <button
                    ref={burgerBtnRef}
                    className='header__burger-btn'
                    onClick={() => setBurger(prev => !prev)}
                    aria-expanded={openBurger}
                >
                    <span></span>
                    <span></span>
                </button>
                <div ref={burgerRef} className={classOpenBurger}>
                    <nav className='header-content__navigation' onClick={() => setBurger(false)}>
                        <ul className='header-content__ul'>
                            <li className='header-content__list'>
                                <NavLink to='/' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.home')}
                                </NavLink>
                            </li>
                            <li className='header-content__list'>
                                <NavLink to='works' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.works')}
                                </NavLink>
                            </li>
                            <li className='header-content__list'>
                                <NavLink to='about-me' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.about')}
                                </NavLink>
                            </li>
                            <li className='header-content__list'>
                                <NavLink to='contacts' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.contacts')}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className='header-content__setup'>
                        <LanguageSwitcher />
                        <ThemeToggleBtn />
                    </div>
                    <div className='header-burger__social-burg'>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </header>
    )
}
