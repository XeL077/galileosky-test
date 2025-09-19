/**
 * Список разделителей: пробел, табуляция, запятая, точка с запятой, перенос строки.
 */
const splitterList = [' ', '\t', ',', ';', '\n'];

/**
 * Преобразование текста в массив
 * @param textAreaValue - string
 * @returns array
 */
export const toSplitAreaValue = (textAreaValue) => {
    if (!textAreaValue) return [];
    let normalized = textAreaValue;
    for (const splitter of splitterList) {
        normalized = normalized.split(splitter).join(' ');
    }

    return normalized
        .trim()
        .split(' ')
        .filter((item) => item !== ""); // убираем пустык стрки из-за переноса
}

/**
 * Разделить массив на числа и прочие значения
 * @param values - массив
 * @returns объект с массивами numbersToken и othersToken
 */
export const filterTokens = (tokens) => {
    const numbersToken = [];
    const others = [];
    for (const token of tokens) {
        const numberToken = Number(token);

        // isFinite проверка от Infinity
        if (!isNaN(numberToken) && isFinite(numberToken)) {
            numbersToken.push(numberToken);
        } else {
            others.push(token);
        }
    }
    return { numbersToken, others };
}

/**
 * Получить список разделителей, используемых для разбивки строки на токены.
 * @returns {string[]} Массив строк-разделителей
 */
export const getSplitterList = () => [...splitterList];

/**
 * Проверяет, является ли переданная строка валидным числом.
 * @param {string} token - Строка для проверки
 * @returns {boolean} true, если строка — валидное число, иначе false
 */
export const isValidNumberToken = (token) => {
    const numberToken = Number(token);
    return !isNaN(numberToken) && isFinite(numberToken);
};

/**
 * Интерполяция значения в цвет
 *
 * @param {number} value - значение
 * @param {number} min   - минимальное значение
 * @param {number} max   - максимальное значение
 * @returns {string} цвет 'rgb(r, g, b)'
 */
export function interpolateColor(value, min, max) {
    if (min === max) {
      return 'rgb(255, 255, 0)'; // все одинаковые → жёлтый
    }
  
    const ratio = (value - min) / (max - min); // нормализация в [0..1]
    const mid = 0.5;
  
    let red, green;
    const blue = 0;
  
    if (ratio <= mid) {
      // от зелёного к жёлтому
      const phase = ratio / mid;
      red = Math.round(255 * phase);
      green = 255;
    } else {
      // от жёлтого к красному
      const phase = (ratio - mid) / (1 - mid);
      red = 255;
      green = Math.round(255 * (1 - phase));
    }
  
    return `rgb(${red}, ${green}, ${blue})`;
}
