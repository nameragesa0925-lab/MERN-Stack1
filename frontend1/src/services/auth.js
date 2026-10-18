// Use `REACT_APP_API_BASE` to configure the API base URL (e.g. http://localhost:5000)
const API_BASE = process.env.REACT_APP_API_BASE || ''

export function register(payload) {
  return fetch(`${API_BASE}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
}

export function login(payload) {
  return fetch(`${API_BASE}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
}

export async function parseJSONSafe(res) {
  const ct = res.headers.get('content-type') || ''
  if (ct.includes('application/json')) {
    try {
      return await res.json()
    } catch (e) {
      return null
    }
  }
  return null
}
