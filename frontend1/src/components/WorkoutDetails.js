import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <tr className="workout-details">
      <td className="workout-details__name">{workout.firstName} {workout.lastName}</td>
      <td className="workout-details__age">{workout.age || '-'}</td>
      <td className="workout-details__gender">{workout.gender || '-'}</td>
      <td className="workout-details__nationality">{workout.nationality || '-'}</td>
      <td className="workout-details__address">{workout.address || '-'}</td>
      <td className="workout-details__phone">{workout.phoneNumber}</td>
      <td className="workout-details__course">{workout.course}</td>
      <td className="workout-details__actions">
        <button
          type="button"
          className="workout-details__delete"
          onClick={handleClick}
          aria-label={`Delete ${workout.firstName} ${workout.lastName}`}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </td>
    </tr>
  )
}

export default WorkoutDetails