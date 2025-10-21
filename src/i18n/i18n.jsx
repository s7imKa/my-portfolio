import { useEffect, useState } from 'react'
import en from '../languages/en'
import uk from '../languages/uk'
import { I18nContext } from './context'

const translations = { uk, en }

function getByPath(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj)
}

function interpolate(str, vars = {}) {
    return String(str).replace(/\{\{\s*(\w+)\s*\}\}/g, (_, k) => vars[k] ?? `{{${k}}}`)
}

export function I18nProvider({ children }) {
    const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'uk')

    useEffect(() => {
        localStorage.setItem('lang', lang)
        document.documentElement.lang = lang
    }, [lang])

    const t = (key, vars) => {
        const val = getByPath(translations[lang], key)
        if (val === undefined) return key
        return typeof val === 'string' ? interpolate(val, vars) : val
    }

    return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
}
