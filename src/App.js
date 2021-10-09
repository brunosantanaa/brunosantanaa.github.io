import Profile from './components/profile';
import BtTheme from './components/btTheme';
import BtCheck from './components/btCheck';
import { description } from './content';

import React, { useState} from 'react';

import './App.css';

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div className="App" >
      <div className="header">
        <BtCheck lang={lang} setLang={setLang} />
        <BtTheme />
      </div>
      <div className="profile" ><Profile /></div>
      <div className="description">{description[lang]}</div>
      
    </div>
  );
}

export default App;
