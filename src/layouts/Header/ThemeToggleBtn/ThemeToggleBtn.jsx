import { useEffect, useState } from 'react'
import '../../../styles/_global.scss'
import './ThemeToggleBtn.scss'

export default function ThemeToggleBtn() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

    useEffect(() => {
        const root = document.documentElement

        // додаємо атрибут та localstorage з потосною темою
        root.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)

        //додаємо клас для плавності зміни теми
        root.classList.add('theme-transition')

        const timeoutId = window.setTimeout(() => {
            root.classList.remove('theme-transition')
        }, 300)

        //cleanUp
        return () => {
            window.clearTimeout(timeoutId)
        }
    }, [theme])

    const onToggle = () => {
        setTheme(prevTheme => (prevTheme == 'light' ? 'dark' : 'light'))
    }

    return (
        <button className='theme-toggle' aria-label='Змінити тему' onClick={() => onToggle()}>
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    )
}
