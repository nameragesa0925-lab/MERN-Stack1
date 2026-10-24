const API_BASE = (process.env.REACT_APP_API_BASE || 'https://new-backend1-n9nf.onrender.com').replace(/\/$/, '')

export const apiUrl = (path) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${API_BASE}${normalizedPath}`
}

export default API_BASE
