import React, { useEffect, useState } from 'react'
import { useId } from "react";

function FreePhrases() {
  
  
  let phList = []
  
  const getPhrases = () => {
    for (let [key, value] of Object.entries(localStorage)) {
      phList.push({
        lang_from: `${key}`,
        lang_to: `${value}`
      });
    }
  }
  getPhrases()  
 
  
  

  const removeItem = (key) => {
    localStorage.removeItem(key);
    window.location.reload();
  }
  
 
  let phrases = phList.map(phrase => (
    <div key={useId}>
      <div>{phrase.lang_from}</div>
      <div>{phrase.lang_to}</div>
      <button onClick={()=> removeItem(phrase.lang_from) }>X</button>
      <hr></hr>
    </div>
  ))
  

  return (
    <div>
      <h2>FreePhrases</h2>
      {phrases}
    </div>
  )
}

export default FreePhrases