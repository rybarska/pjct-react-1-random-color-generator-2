import './App.css';
import { GetColorName } from 'hex-color-to-color-name';
import { randomColor } from 'randomcolor';
import { useState } from 'react';

function App() {
  const [hexCode, setHexCode] = useState('#ff0000');
  const [colorName, setColorName] = useState('Red');
  const [colorHue, setColorHue] = useState('random');
  const [colorLuminosity, setColorLuminosity] = useState('random');
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
        Generated color: {colorName} {} {hexCode}
      </div>
      <button
        onClick={() => {
          const newHexCode = randomColor({
            luminosity: 'colorLuminosity',
            hue: 'colorHue',
          });
          setHexCode(newHexCode);
          const newColorName = GetColorName(newHexCode);
          setColorName(newColorName);
        }}
      >
        Generate
      </button>
      <br />
      <br />
      <label>
        hue:
        <br />
        <br />
        <input
          // 2. Use state variable (connect it to the input)
          value={colorHue}
          //value2={colorLuminosity}
          // 3. Update the state variable when the user types something
          onChange={(event) => {
            const newHue = colorHue;
            const tweakedHexCode = randomColor({
              luminosity: 'colorLuminosity',
              hue: newHue,
            });
            setColorHue(event.currentTarget.value);
            setHexCode(tweakedHexCode);
            const tweakedColorName = GetColorName(tweakedHexCode);
            setColorName(tweakedColorName);
          }}
        />
      </label>
    </div>
  );
}

export default App;
