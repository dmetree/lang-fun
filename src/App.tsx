import React, {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import './App.css';
import { Counter } from './components/counter/Counter';
import Translator from './components/translator/Translator';
import Navigation from './components/navigation/Navigation';
import Registration from './pages/register/Registration';
import Login from './pages/login/Login';
import { useAppSelector, useAppDispatch } from '../src/store/hooks';
import PrivateRoute from './components/navigation/PrivateRoute';

{/* <Routes>
 <Route path='/' element={<Home />} />
 <Route path='/profile'
    element={
      <Protected isLoggedIn={isLoggedIn}>
          <Profile />
      </Protected>
    }
 />
 <Route path ='/about' element={<About />} />
</Routes> */}


function App() {
  const navigate = useNavigate(); // navigate(`/select-promo`)
  const user = useAppSelector((state) => state.auth.userObject);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    if(user){
      setisLoggedIn(!isLoggedIn);
    } else if (!user){
      setisLoggedIn(!isLoggedIn);
    }
  }, [user])
  
  
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Translator/>} />

        {/* Protected Route in ReactRouterDom 6.0.1 */}
        <Route path="/counter" 
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Counter />
            </PrivateRoute>
          }
        />
        
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />

      </Routes> 
    </div>
  );
}

export default App;
