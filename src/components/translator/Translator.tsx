import React, {useState} from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import axios from 'axios'
import { useId } from "react";
import { saveInput, saveTranslation  } from '../../store/slices/phrasepairSlice'
import './Translator.scss'

function Translator() {
  const dispatch = useAppDispatch();
  
  const [lang_to, setUrlLang] = useState('tr')
  const [lang_from, setLangFrom] = useState('en')
  const [translation, setTranslation] = useState('');
  const [inputValue, setInputValue] = useState('');

  const url_prefix = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=';
  const url_lang_connector = '&tl=';
  const url_lang_to_phrase_connecor = '&dt=t&q='
  const url = url_prefix + lang_from + url_lang_connector + lang_to + url_lang_to_phrase_connecor + inputValue;


  async function getTranslation() {
    try {
      const response = await axios.get(url);
      setTranslation(response.data[0][0][0]);
    } catch (error) {
      console.error("Can't get translation");
    }
  }

  const handleTranslate = () => {
    getTranslation();    
  }

  // Saving to DB
  // const handleSave = () => {
  //   console.log('Saving to FireB...')
  //   dispatch(saveInput(inputValue))
  //   dispatch(saveTranslation(translation))
  // }
  
  // Saving to LocalStorage

  const handleSave = () => {
    console.log('Saving to LocalStorage...')
    localStorage.setItem(inputValue, translation);
  }

  const handleClean = () => {
    setInputValue('');
    setTranslation('');
  }

  
  return (
    <div>
      <h3>In {lang_to} that would be: </h3>
      <div className='lang_output'>{translation}</div>
      <label>Enter phrase in {lang_from}</label>
      <br/>
      <input
        className='lang_input'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br/>
      <button onClick={() => handleTranslate()}>Translate</button>
      <button onClick={() => handleClean()}>Clean</button>
      <button onClick={() => handleSave()}>Save</button>
    </div>
  )
}

export default Translator