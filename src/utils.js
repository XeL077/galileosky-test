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


export const interpolateColor = (index, total) => {
    if (total <= 1) return 'rgb(0, 255, 0)';
    
    const middleIndex = Math.floor(total / 2);
    const ratio = index / (total - 1);
    
    // red = красный, green = зеленый, blue = синий (всегда 0)
    let red = 0, green = 255, blue = 0;
    
    if (index <= middleIndex) {
      // От зеленого к желтому: увеличиваем красный
      const phaseRatio = index / middleIndex;
      red = Math.round(255 * phaseRatio);
    } else {
      // От желтого к красному: уменьшаем зеленый
      const phaseRatio = (index - middleIndex) / (total - 1 - middleIndex);
      red = 255;
      green = Math.round(255 * (1 - phaseRatio));
    }
    
    return `rgb(${red}, ${green}, ${blue})`;
  };