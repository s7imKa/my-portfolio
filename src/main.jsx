import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router'

import App from './app/App'
import { I18nProvider } from './i18n/i18n'

import './styles/main.scss'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <I18nProvider>
                <App />
            </I18nProvider>
        </Router>
    </StrictMode>,
)
