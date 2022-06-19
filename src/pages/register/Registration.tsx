import React, { useState } from 'react'
import './Registration.scss'

function Registration() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(email, password, password2)
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
        <span>password once again</span>
        <input 
          type="password" 
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </label>

      <button>Создать</button>

    </form>
  )
}

export default Registration