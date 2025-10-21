import { useI18n } from '../../i18n/context'

import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher'
import ThemeToggleBtn from './ThemeToggleBtn/ThemeToggleBtn'

import './Header.scss'

export default function Header() {
    const { t } = useI18n()
    return (
        <header className='header'>
            <div className='wrapper container'>
                <div className='header-logo'>
                    <img
                        className='header-logo__img'
                        src='/src/assets/icons/logo2.svg'
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
            </div>
        </header>
    )
}
