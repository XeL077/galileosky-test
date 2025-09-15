import React from 'react';

/**
 * Преобразование текста в массив
 * @param textAreaValue - string
 */
export default function MapLegend({items}) {
  return (
    <div className="map-legend">
      <strong>Легенда</strong>
      {items.join(' ')}
    </div>
  );
}
