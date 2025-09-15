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
  utils.js               # утилиты парсинга
index.html               # точка входа Vite
vite.config.js           # конфиг Vite
```

## Разделители
Список хранится в `splitterList` (`src/utils.js`): пробел, табуляция, запятая, точка с запятой, перенос строки.

## Утилиты (`src/utils.js`)
- `toSplitAreaValue(textAreaValue: string): string[]` — заменяет все разделители на пробел и делит по пробелам; пустые элементы отфильтрованы.
- `filterTokens(tokens: (string|number)[]) => { numbersToken: number[]; others: (string|number)[] }` — делит токены на числа и прочие; числа валидируются через `Number(...)`, `isNaN` и `isFinite`.

Пример:
```js
import { toSplitAreaValue, filterTokens } from './src/utils';

const tokens = toSplitAreaValue('1 2, 3;abc\n4');
const { numbersToken, others } = filterTokens(tokens);
// numbersToken -> [1,2,3,4]
// others -> ['abc']
```

## Компоненты
- `Statistics` — принимает `countNumbersToken`, `filteredCount`; отображает числа, отсечённые значения и общий итог.
- `MapLegend` — компонент легенды (можно доработать под ваши данные).

## Требования
Node.js 18+
