import './Header.scss'
import ThemeToggleBtn from './ThemeToggleBtn/ThemeToggleBtn'
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher'
import { useI18n } from '../../i18n/context'

export default function Header() {
    const { t } = useI18n()
     return (
         <header className='header'>
             
             <h1>{t('home.title')}</h1>



            <ThemeToggleBtn />
            <LanguageSwitcher/>
        </header>
    )
}