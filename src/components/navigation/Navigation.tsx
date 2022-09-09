import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { useLogout } from '../../hooks/useLogout';
import './Navigation.scss'
import { projectAuth } from '../../firebase/config';
import { checkAuth, saveUserAuth } from '../../store/slices/authSlice';

function Navigation() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.userObject);
  const { logout, isPending, error } = useLogout()

  const handleLogout = () => {
    logout()
  }

  // User stays logged-in even AFTER BROWSER REFRESH
  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(checkAuth(true))
        dispatch(saveUserAuth(user))
      } else if (!user) {
        dispatch(checkAuth(false))
      }
      unsub()
    })
  }, [])
  

  return (
    <div className='nav-bar'>
      <h4>Lang Fun</h4>
      <div className='nav'>
        <Link to="/"><div className='nav-item'>Hello world</div></Link>
        {/* <Link to="/counter"><div className='nav-item'>Счетчик</div></Link> */}
        {/* <Link to="/dictionary"><div className='nav-item'>Словарь</div></Link> */}
        <Link to="/phrases"><div className='nav-item'>Фразы</div></Link>
        {! user && <>
          <Link to="/login"><div className='nav-item'>Login</div></Link>
          <Link to="/register"><div className='nav-item'>Register</div></Link>
        </>}
        {user && 
          <>
            <div className='nav-hello'>{user.displayName}</div>
            <Link to="/"><div className='nav-item' onClick={() => handleLogout()}>Log out</div></Link>
          </>
        }
        </div>
    </div>
  )
}

export default Navigation