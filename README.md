# Galileosky — простое React-приложение (JS)

Мини-приложение на React + Vite. Вводите токены в textarea, приложение разбивает их по разделителям и показывает статистику.

## Быстрый старт

- Установка зависимостей:
```bash
npm install
```
- Запуск dev-сервера:
```bash
npm run dev
```
- Сборка:
```bash
npm run build
```
- Предпросмотр сборки:
```bash
npm run preview
```

## Структура
```
src/
  components/
    MapLegend.jsx        # легенда карты (заглушка)
    Statistics.jsx       # статистика по токенам
  App.jsx                # корневой компонент
  main.jsx               # вход приложения
  styles.css             # стили
  utils.js               # утилиты парсинга интерполяции
index.html               # точка входа Vite
vite.config.js           # конфиг Vite
```

## Требования
Node.js 18.0.0+
