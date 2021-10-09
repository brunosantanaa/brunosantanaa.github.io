import React, {useState, useEffect} from 'react';

import { FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import './btTheme.css';

export default function BtTheme(props) {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", (darkMode) ? "dark" : "light");
  }, [darkMode]);
  return(
    <div className="bt-theme-container" onClick={() => setDarkMode(!darkMode)}>
      {(darkMode) ? <FontAwesomeIcon icon={faLightbulb} /> : <FontAwesomeIcon icon={faMoon} />}
    </div>
  )
}