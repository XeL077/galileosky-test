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

  let hundredNumbers = new Array(10).fill('').map((item, index) => {
    return index
  }).join(' ');

  return (
    <div className="app">
      <MapLegend items={parsedObject.numbersToken} />

      <div>
        <textarea ref={textareaRef} placeholder="Type your message here." defaultValue={hundredNumbers} />
        <button type="button" onClick={handleClickSubmitBtn}>Показать</button>
      </div>
      <div>
        <p>
          Значения по-умолчанию
        </p>
        <input type='button' onClick={handleClickSetPreset} value='3 2, 4, 10 40' />
        <input type='button' onClick={handleClickSetPreset} value='1, 2 d\  40d' />
        <input type='button' onClick={handleClickSetPreset} value={hundredNumbers} />
      </div>
      <Statistics 
        countNumbersToken={parsedObject.numbersToken.length} 
        filteredCount={parsedObject.others.length} 
      />
      
    </div>
  )
}


