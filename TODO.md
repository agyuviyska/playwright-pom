# Списък със задачи

## Структура и конфигурация
- [ ] Добави скриптове в `package.json`:
  - `"test": "playwright test"` — пуска всички тестове
  - `"test:ui": "playwright test --ui"` — UI режим (удобен за учене)
  - `"test:headed": "playwright test --headed"` — с видим браузър
  - `"report": "playwright show-report"` — отваря HTML отчета
- [ ] Направи първия commit
- [ ] Добави `baseURL` в `playwright.config.ts`
- [ ] Премахни `tests/example.spec.ts` (шаблон по подразбиране)
- [ ] Добави Prettier / ESLint за еднакво форматиране

## Page Object Model
- [ ] Преименувай `pages/form-autentication.page.ts` → `pages/form-authentication.page.ts`
- [ ] Реализирай `HomePage` (`pages/home.page.ts`)
- [ ] Реализирай `LoginPage` (`pages/form-authentication.page.ts`)

## Данни
- [ ] Премахни пробния код в края на `data/home-page-links.ts` (`await page.goto(...)` и т.н.) — чупи компилацията, ако файлът бъде импортиран
- [ ] Уеднакви стойностите на `Status` (`'FINished'` vs `'done'`)
- [ ] Попълни `homePageLinks` със страниците и статусите им

## Тестове
- [ ] Пренапиши теста за вход с page обектите
- [ ] Добави отрицателни сценарии (грешна парола, грешно потребителско име, празни полета)
- [ ] Добави тест за logout
