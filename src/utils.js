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
