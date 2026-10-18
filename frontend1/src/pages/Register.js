import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const Register = () => {
  const { dispatch } = useWorkoutsContext()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    nationality: '',
    address: '',
    phoneNumber: '',
    course: ''
  })
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const workout = { ...formData }

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields || [])
      return
    }

    setEmptyFields([])
    setError(null)
    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      nationality: '',
      address: '',
      phoneNumber: '',
      course: ''
    })
    dispatch({ type: 'CREATE_WORKOUT', payload: json })
  }

  return (
    <div className="student-register-page">
      <div className="student-register-header">
        <span>Name</span>
        <span>Age</span>
        <span>Gender</span>
        <span>Nationality</span>
        <span>Address</span>
        <span>Phone Number</span>
        <span>Course</span>
      </div>

      <form className="student-register-form" onSubmit={handleSubmit}>
        <div className="student-register-row">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={emptyFields.includes('firstName') ? 'error-input' : ''}
            placeholder="Name"
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={emptyFields.includes('age') ? 'error-input' : ''}
            placeholder="Age"
          />
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={emptyFields.includes('gender') ? 'error-input' : ''}
            placeholder="Gender"
          />
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className={emptyFields.includes('nationality') ? 'error-input' : ''}
            placeholder="Nationality"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={emptyFields.includes('address') ? 'error-input' : ''}
            placeholder="Address"
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={emptyFields.includes('phoneNumber') ? 'error-input' : ''}
            placeholder="Phone Number"
          />
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={emptyFields.includes('course') ? 'error-input' : ''}
            placeholder="Course"
          />
        </div>

        {error && <div className="student-register-error">{error}</div>}

        <button type="submit" className="student-register-submit">Register</button>
      </form>
    </div>
  )
}

export default Register

