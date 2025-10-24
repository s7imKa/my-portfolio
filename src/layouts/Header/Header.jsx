import { useI18n } from '../../i18n/context'

import SocialLinks from '../../components/SocialLinks/SocialLinks'
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher'
import ThemeToggleBtn from './ThemeToggleBtn/ThemeToggleBtn'

import Logo from '../../../public/icons/logo2.svg'

import { useState } from 'react'
import './Header.scss'

export default function Header() {
    const { t } = useI18n()
    const [openBurger, setBurger] = useState(false)

    const classOpenBurger = openBurger === true ? 'header-burger active-burger' : 'header-burger'
    return (
        <header className='header'>
            <div className='wrapper container'>
                <div className='header-social'>
                    <span className='header-social__line'></span>
                    <SocialLinks column={true} />
                </div>

                <div className='header-logo'>
                    <img
                        className='header-logo__img'
                        src={Logo}
                        alt='logo'
                    />
                    <p className='header-logo__title'>Maks</p>
                </div>

                <div className='header-content'>
                    <nav className='header-content__navigation'>
                        <ul className='header-content__ul'>
                            <li className='header-content__list'>
                                <a href='#' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.home')}
                                </a>
                            </li>
                            <li className='header-content__list'>
                                <a href='#' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.works')}
                                </a>
                            </li>
                            <li className='header-content__list'>
                                <a href='#' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.about')}
                                </a>
                            </li>
                            <li className='header-content__list'>
                                <a href='#' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.contacts')}
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className='header-content__setup'>
                        <LanguageSwitcher />
                        <ThemeToggleBtn />
                    </div>
                </div>

                <button
                    className='header__burger-btn'
                    onClick={() => setBurger(prev => !prev)}
                    aria-expanded={openBurger}
                >
                    <span></span>
                    <span></span>
                </button>
                <div className={classOpenBurger}>
                    <nav className='header-content__navigation'>
                        <ul className='header-content__ul'>
                            <li className='header-content__list'>
                                <a href='#' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.home')}
                                </a>
                            </li>
                            <li className='header-content__list'>
                                <a href='#' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.works')}
                                </a>
                            </li>
                            <li className='header-content__list'>
                                <a href='#' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.about')}
                                </a>
                            </li>
                            <li className='header-content__list'>
                                <a href='#' className='header-content__link'>
                                    <span>#</span>
                                    {t('header.contacts')}
                                </a>
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
