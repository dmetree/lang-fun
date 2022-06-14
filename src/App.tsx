import React, {useEffect, useState} from 'react';
import { Counter } from './components/counter/Counter';
import Translator from './components/translator/Translator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Translator/>
      <Counter />
    </div>
  );
}

export default App;
