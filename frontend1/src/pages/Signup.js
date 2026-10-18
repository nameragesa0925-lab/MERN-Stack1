import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register as registerUser, parseJSONSafe } from '../services/auth'

export default function Signup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      const payload = { firstName, lastName, email, password }
      const res = await registerUser(payload)
      const data = await parseJSONSafe(res)

      if (res.ok) {
        navigate('/login')
      } else {
        setError((data && data.message) || `${res.status} ${res.statusText}`)
      }
    } catch (err) {
      setError(err.message || 'Registration failed')
    }
  }

  return (
    <div className="auth-page">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          First name
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </label>

        <label>
          Last name
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </label>

        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        {error && <div className="error">{error}</div>}

        <button type="submit">Create account</button>
      </form>
    </div>
  )
}
