import React, { useState } from 'react'
import { useRegister } from '../../hooks/useRegister'
import { saveUserAuth } from '../../store/slices/authSlice'
import './Registration.scss'


function Registration() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { register, error, isPending } = useRegister()

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    register(email, password, displayName)
    saveUserAuth('got it!') 
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Создать <br/> персональную языковую студию</h2>
      <label className="form-label">
        <span>email:</span>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className="form-label">
        <span>password:</span>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <label className="form-label">
        <span>Имя</span>
        <input 
          type="text" 
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>

      {!isPending && <button>Создать</button>}
      {isPending && <button disabled>Loading...</button>}
      { error && <p>{error}</p>}
    </form>
  )
}

export default Registration