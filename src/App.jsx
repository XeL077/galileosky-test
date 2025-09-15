import React, { useRef, useState } from 'react';
import { toSplitAreaValue, filterTokens } from './utils';
import MapLegend from './components/MapLegend.jsx';
import Statistics from './components/Statistics.jsx';

export default function App() {
  const [parsedObject, setParsedObject] = useState({numbersToken: [], others: []});
  const textareaRef = useRef(null);

  const handleClick = () => {
    const textAreaValue = textareaRef.current?.value || '';
    const tokens = toSplitAreaValue(textAreaValue);
    const parsedObject = filterTokens(tokens);

    if (parsedObject.numbersToken.length) {
      setParsedObject(parsedObject);
    }
  }

  return (
    <div className="app">

      <textarea ref={textareaRef} placeholder="Type your message here." defaultValue={'1 2, 4, 10 40'} />
      <button type="button" onClick={handleClick}>Показать</button>
      <Statistics 
        countNumbersToken={parsedObject.numbersToken.length} 
        filteredCount={parsedObject.others.length} 
      />
      
    </div>
  )
}


