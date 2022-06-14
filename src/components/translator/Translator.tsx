import React, {useState} from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import axios from 'axios'
import { saveInput, saveTranslation  } from '../../store/slices/phrasepairSlice'

function Translator() {
  const dispatch = useAppDispatch();
  
  const [url_lang_to, setUrlLang] = useState('tr')
  const [translation, setTranslation] = useState('');
  const [inputValue, setInputValue] = useState('');

  const url_prefix = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=';
  const url_lang_from = 'en';
  const url_lang_connector = '&tl=';
  const url_lang_to_phrase_connecor = '&dt=t&q='
  const url = url_prefix + url_lang_from + url_lang_connector + url_lang_to + url_lang_to_phrase_connecor + inputValue;


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

  const handleSave = () => {
    console.log('Saving...')
    dispatch(saveInput(inputValue))
    dispatch(saveTranslation(translation))
  }

  const handleClean = () => {
    setInputValue('');
    setTranslation('');
  }

  
  return (
    <div>
      <h3>In {url_lang_to} that would be: </h3>
      <h2>{translation}</h2>
      <label>Enter phrase in English</label>
      <br/>
      <input
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