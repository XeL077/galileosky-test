import React, { useRef, useState } from 'react';
import { toParseTextAreaValue } from './utils';
import MapLegend from './components/MapLegend.jsx';

export default function App() {
  const [strData, setStrData] = useState([]);
  const textareaRef = useRef(null);

  const handleClick = () => {
    const textAreaValue = textareaRef.current?.value || '';
    const parsedTextAreaValue = toParseTextAreaValue(textAreaValue);
  }

  return (
    <div className="app">

      <textarea ref={textareaRef} placeholder="Type your message here." />
      <button type="button" onClick={handleClick}>Показать</button>
      <MapLegend items={strData} />
      
    </div>
  )
}


