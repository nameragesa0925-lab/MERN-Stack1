import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { apiUrl } from '../utils/api'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [nationality, setNationality] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [course, setCourse] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { firstName, lastName, age, gender, nationality, address, phoneNumber, course }
    
    const response = await fetch(apiUrl('/api/workouts'), {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setFirstName('')
      setLastName('')
      setAge('')
      setGender('')
      setNationality('')
      setAddress('')
      setPhoneNumber('')
      setCourse('')
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <table className="create__table">
        <tbody>
          <tr className="create__row">
            <th scope="row"><label htmlFor="firstName">First Name</label></th>
            <td>
              <input
                id="firstName"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className={emptyFields.includes('firstName') ? 'error' : ''}
              />
            </td>
          </tr>

          <tr className="create__row">
            <th scope="row"><label htmlFor="lastName">Last Name</label></th>
            <td>
              <input
                id="lastName"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className={emptyFields.includes('lastName') ? 'error' : ''}
              />
            </td>
          </tr>

 <tr className="create__row">
            <th scope="row"><label htmlFor="age">Age</label></th>
            <td>
              <input
                id="age"
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                className={emptyFields.includes('age') ? 'error' : ''}
              />
            </td>
          </tr>

           <tr className="create__row">
            <th scope="row"><label htmlFor="gender">Gender</label></th>
            <td>
              <input
                id="gender"
                type="text"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                className={emptyFields.includes('gender') ? 'error' : ''}
              />
            </td>
          </tr>
            
           <tr className="create__row">
            <th scope="row"><label htmlFor="nationality">Nationality</label></th>
            <td>
              <input
                id="nationality"
                type="text"
                onChange={(e) => setNationality(e.target.value)}
                value={nationality}
                className={emptyFields.includes('nationality') ? 'error' : ''}
              />
            </td>
          </tr>

           <tr className="create__row">
            <th scope="row"><label htmlFor="address">Address</label></th>
            <td>
              <input
                id="address"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className={emptyFields.includes('address') ? 'error' : ''}
              />
            </td>
          </tr>

          <tr className="create__row">
            <th scope="row"><label htmlFor="phoneNumber">Phone Number</label></th>
            <td>
              <input
                id="phoneNumber"
                type="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                className={emptyFields.includes('phoneNumber') ? 'error' : ''}
              />
            </td>
          </tr>

          <tr className="create__row">
            <th scope="row"><label htmlFor="course">Course</label></th>
            <td>
              <input
                id="course"
                type="text"
                onChange={(e) => setCourse(e.target.value)}
                value={course}
                className={emptyFields.includes('course') ? 'error' : ''}
              />
            </td>
          </tr>

          <tr className="create__action-row">
            <td colSpan="2">
              <button type="submit" className="create__submit">Add Workout</button>
            </td>
          </tr>
        </tbody>
      </table>

      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm