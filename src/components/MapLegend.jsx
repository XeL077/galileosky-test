import React from 'react';
import { interpolateColor } from '../utils'

/**
 * Компонент легенды карты с цветовой градацией
 * @param {Array<number>} items - массив чисел для отображения
 */
export default function MapLegend({ items = [] }) {
if (!items.length) return;

  // Создаем копию и сортируем, чтобы не мутировать исходный массив
  const sortedItems = [...items].sort((a, b) => a - b);

  return (
    <div className="map-legend">
      <strong>Легенда:</strong>
      <div className='map-legend-list'>
        {sortedItems.map((item, index) => {
          const color = interpolateColor(index, sortedItems.length);
          return (
            <div 
              key={item} 
              className='map-legend-item'
              style={{ backgroundColor: color }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
