import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../../../i18n/context'
import './LanguageSwitcher.scss'

export default function LanguageSwitcher() {
    const { lang, setLang, t } = useI18n()
    const [isActive, setIsActive] = useState(false)
    const containerRef = useRef(null)

    const onSwitcher = () => {
        setIsActive(prev => !prev)
    }

    useEffect(() => {
        function handleOutside(e) {
            if (!containerRef.current) return
            if (!containerRef.current.contains(e.target)) {
                setIsActive(false)
            }
        }

        function handleKey(e) {
            if (e.key === 'Escape') setIsActive(false)
        }

        document.addEventListener('mousedown', handleOutside)
        document.addEventListener('touchstart', handleOutside)
        document.addEventListener('keydown', handleKey)
        return () => {
            document.removeEventListener('mousedown', handleOutside)
            document.removeEventListener('touchstart', handleOutside)
            document.removeEventListener('keydown', handleKey)
        }
    }, [])

    const classActive = isActive === true ? 'lang-switcher active' : 'lang-switcher noVisible'

    const pickLang = code => {
        setLang(code)
        setIsActive(false)
    }

    return (
        <div ref={containerRef} className='lang-switcher-block'>
            <button onClick={onSwitcher} className='language-btn' aria-expanded={isActive}>
                {lang == 'uk' ? 'УКР' : 'ENG'}
            </button>

            <div className={classActive} role='group' aria-label={t('common.changeLang')}>
                <button
                    onClick={() => pickLang('uk')}
                    aria-pressed={lang === 'uk'}
                    disabled={lang === 'uk'}
                    title={t('common.lang_uk')}
                >
                    {t('common.lang_uk')}
                </button>
                <button
                    onClick={() => pickLang('en')}
                    aria-pressed={lang === 'en'}
                    disabled={lang === 'en'}
                    title={t('common.lang_en')}
                >
                    {t('common.lang_en')}
                </button>
            </div>
        </div>
    )
}
