import React, { useRef, useState } from 'react';
import { toSplitAreaValue, filterTokens } from './utils';
import MapLegend from './components/MapLegend.jsx';
import Statistics from './components/Statistics.jsx';

export default function App() {
  const [parsedObject, setParsedObject] = useState({numbersToken: [], others: []});
  const textareaRef = useRef(null);

  const handleClickSubmitBtn = () => {
    const textAreaValue = textareaRef.current?.value || '';
    const tokens = toSplitAreaValue(textAreaValue);
    const parsedObject = filterTokens(tokens);

    if (parsedObject.numbersToken.length) {
      setParsedObject(parsedObject);
    }
  }

  const handleClickSetPreset = (event) => {
    const value = event.target.value;
    if (value) {
      textareaRef.current.value = value;
    }
  };

  let hundredNumbers = new Array(100).fill('').map((item, index) => {
    return index
  }).join(' ');

  return (
    <div className="app">
      <div className="input-section">
        <h2>Ввод данных</h2>
        <textarea 
          ref={textareaRef} 
          placeholder="Введите числа, разделенные пробелами, запятыми, точками с запятой или переносами строк..." 
          defaultValue={hundredNumbers} 
        />
        <button type="button" onClick={handleClickSubmitBtn}>
          Обработать данные
        </button>
        
        <div style={{ marginTop: '1rem' }}>
          <span>
            Примеры данных:
          </span>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button 
              type="button" 
              onClick={handleClickSetPreset} 
              value="3 2, 4, 10 40"
              style={{ fontSize: '0.75rem', padding: '0.5rem 0.75rem' }}
            >
              3 2, 4, 10 40
            </button>
            <button 
              type="button" 
              onClick={handleClickSetPreset} 
              value="1, 2 d  40d"
              style={{ fontSize: '0.75rem', padding: '0.5rem 0.75rem' }}
            >
              1, 2 d  40d
            </button>
            <button 
              type="button" 
              onClick={handleClickSetPreset} 
              value={hundredNumbers}
              style={{ fontSize: '0.75rem', padding: '0.5rem 0.75rem' }}
            >
              0-99
            </button>
          </div>
        </div>
      </div>

      <div className="results-section">
        <Statistics 
          countNumbersToken={parsedObject.numbersToken.length} 
          filteredCount={parsedObject.others.length} 
        />
        
        <MapLegend items={parsedObject.numbersToken} />
      </div>
    </div>
  )
}
