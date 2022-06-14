import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Counter } from './components/counter/Counter';
import Translator from './components/translator/Translator';
import './App.css';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Translator/>} />
        <Route path="/counter" element={<Counter />} />
      </Routes> 
    </div>
  );
}

export default App;
