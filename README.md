# My Portfolio

Особистий портфоліо-проєкт на React + Vite з підтримкою міжнародалізації (EN/UK), AOS-анімаціями та
кастомним SCSS.

Ключові файли

-   Старт: [src/main.jsx](src/main.jsx) — рендер додатку.
-   Кореневий компонент: [`App`](src/app/App.jsx).
-   Конфіг Vite: [vite.config.js](vite.config.js).
-   Ініціалізація теми: [index.html](index.html) (з попереднім встановленням теми для уникнення
    FOUC).
-   I18n провайдер: [`I18nProvider`](src/i18n/i18n.jsx) та хук [`useI18n`](src/i18n/context.js).
-   Мови: [src/languages/en.js](src/languages/en.js), [src/languages/uk.js](src/languages/uk.js).

Особливості

-   React 19 + Vite.
-   Лінійки компонентів з lazy loading (React.lazy + Suspense) — див. [`App`](src/app/App.jsx).
-   Темна/світла тема збереження в localStorage —
    [src/layouts/Header/ThemeToggleBtn/ThemeToggleBtn.jsx](src/layouts/Header/ThemeToggleBtn/ThemeToggleBtn.jsx).
-   Мультимовність через простий провайдер i18n — [`I18nProvider`](src/i18n/i18n.jsx).
-   Анімації з AOS (використовується в кількох компонентах).
-   Стилі на SCSS з модульною структурою в [src/styles](src/styles).

Швидкий старт

```sh
# встановити залежності
npm install

# запуск у режимі розробки
npm run dev

# збірка для продакшна
npm run build

# перевірка eslint
npm run lint
```
