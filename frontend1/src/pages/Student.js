import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import WorkoutDetails from "../components/WorkoutDetails"


const Student = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts-table-wrapper">
        <table className="workouts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Nationality</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Course</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {workouts && workouts.map(workout => (
              <WorkoutDetails workout={workout} key={workout._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Student;