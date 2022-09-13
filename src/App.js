import './App.css';
import { GetColorName } from 'hex-color-to-color-name';
import { randomColor } from 'randomcolor';
import { useState } from 'react';

function App() {
  const [hexCode, setHexCode] = useState('#ff0000');
  const [colorName, setColorName] = useState('Red');
  return (
    <div>
      <h1>Random Color Generator</h1>
      <div
        style={{
          width: 400,
          height: 400,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: hexCode,
        }}
      >
        Generated color: {colorName} {}
        {hexCode}
      </div>
      <button
        onClick={() => {
          const newHexCode = randomColor();
          setHexCode(newHexCode);
          const newColorName = GetColorName(newHexCode);
          setColorName(newColorName);
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
