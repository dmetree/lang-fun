import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { Counter } from './components/counter/Counter';
import Translator from './components/translator/Translator';
import Navigation from './components/navigation/Navigation';
import Registration from './pages/register/Registration';
import Login from './pages/login/Login';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Translator/>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />

      </Routes> 
    </div>
  );
}

export default App;
