import React, { useState } from 'react';

import './btcheck.css';

export default function BtCheck(props) {
  return(
    <div className="bt-check-container">
      <div className={(props.lang === "en") ? "bt-check-left checked" : "bt-check-left"} onClick={() => props.setLang("en")}>en</div>
      <div className={(props.lang === "fr") ? "bt-check-mid checked" : "bt-check-mid"} onClick={() => props.setLang("fr")}>fr</div>
      <div className={(props.lang === "pt") ? "bt-check-rigth checked" : "bt-check-rigth"} onClick={() => props.setLang("pt")}>pt</div>
    </div>
  )
}