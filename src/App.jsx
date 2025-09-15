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

  return (
    <div className="app">
      <MapLegend items={parsedObject.numbersToken} />
      <textarea ref={textareaRef} placeholder="Type your message here." defaultValue={"2, 1, 4 5"} />
      <button type="button" onClick={handleClickSubmitBtn}>Показать</button>

      <div>
        <p>
          Значения по-умолчанию
        </p>
        <input type='button' onClick={handleClickSetPreset} value='3 2, 4, 10 40' />
        <input type='button' onClick={handleClickSetPreset} value='1, 2 
        d 40d' />
        
      </div>
      <Statistics 
        countNumbersToken={parsedObject.numbersToken.length} 
        filteredCount={parsedObject.others.length} 
      />
      
    </div>
  )
}


