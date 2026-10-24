import { apiUrl } from './api'

describe('apiUrl', () => {
  it('builds the backend URL from the configured API base', () => {
    expect(apiUrl('/api/workouts')).toBe('https://new-backend1-n9nf.onrender.com/api/workouts')
  })
})
