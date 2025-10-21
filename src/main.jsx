import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { I18nProvider } from './i18n/i18n'
import './styles/main.scss'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <I18nProvider>
            <App />
        </I18nProvider>
    </StrictMode>,
)
