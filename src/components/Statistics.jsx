import React from 'react';

export default function Statistics({ countNumbersToken = 0, filteredCount = 0 }) {
  const sumCount = countNumbersToken + filteredCount;
  if(sumCount === 0) return;

  return (
    <div className="statistics text-left">
      <p>Чисел разобрано: {countNumbersToken}</p>
      <p>Значений отсечено: {filteredCount}</p>
      <p>Всего: {sumCount}</p>
    </div>
  );
}


