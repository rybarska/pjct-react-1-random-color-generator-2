import './App.css';
import { GetColorName } from 'hex-color-to-color-name';
import { randomColor } from 'randomcolor';
import { useState } from 'react';

Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore

@rybarska
@rybarska
rybarska
/
pjct-react-1-random-color-generator
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
0
Settings
More
pjct-react-1-random-color-generator/src/App.js /

agata Add uppercase on first color
Latest commit e66dbaf 15 hours ago
 History
 0 contributors
41 lines (39 sloc)  975 Bytes

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
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
You have unread notifications
