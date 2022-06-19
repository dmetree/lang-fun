import React, {useState} from 'react'
import './Login.scss'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Войти</h2>
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

      <button>Войти</button>

    </form>
  )
}

export default Login