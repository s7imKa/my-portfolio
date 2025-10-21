import { useI18n } from "../../../i18n/context"

export default function LanguageSwitcher() {
    const { lang, setLang, t } = useI18n()

    return (
        <div className='lang-switcher' role='group' aria-label={t('common.changeLang')}>
            <button
                onClick={() => setLang('uk')}
                aria-pressed={lang === 'uk'}
                disabled={lang === 'uk'}
                title={t('common.lang_uk')}
            >
                {t('common.lang_uk')}
            </button>
            <button
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                disabled={lang === 'en'}
                title={t('common.lang_en')}
            >
                {t('common.lang_en')}
            </button>
        </div>
    )
}
