import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login as loginUser, parseJSONSafe } from '../services/auth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await loginUser({ email, password })
      const data = await parseJSONSafe(res)
      if (res.ok) {
        if (data && data.token) localStorage.setItem('token', data.token)
        navigate('/')
      } else {
        setError((data && data.message) || `${res.status} ${res.statusText}`)
      }
    } catch (err) {
      setError(err.message || 'Login failed')
    }
  }

  const handleForgotPassword = () => {
    setError('Password reset is not configured yet. Please contact the admin to reset your account password.')
  }

  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        {error && <div className="error">{error}</div>}

        <div className="auth-form__actions">
          <button type="submit">Sign in</button>
          <button type="button" className="auth-form__link" onClick={handleForgotPassword}>
            Forgot password?
          </button>
        </div>
      </form>
    </div>
  )
}
