import React, { useState, useEffect } from "react";
import WorkoutCard from "../components/WorkoutCard";
import AddWorkoutModal from "../components/AddWorkoutModal";
import { getInitialWorkouts } from "../data/workoutdata";

const Workouts = () => {
  const [workouts, setWorkouts] = useState(getInitialWorkouts());
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Save workouts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    // Generate a new unique ID
    const newWorkout = {
      ...workout,
      id: workouts.length > 0 ? Math.max(...workouts.map(w => w.id)) + 1 : 1
    };
    
    // Add the new workout
    setWorkouts([...workouts, newWorkout]);
    setIsModalOpen(false);
  };

  const deleteWorkout = (workoutToDelete) => {
    setWorkouts(workouts.filter(workout => workout.id !== workoutToDelete.id));
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Workouts</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Add Workout
      </button>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workouts.map((workout) => (
          <WorkoutCard 
            key={workout.id} 
            workout={workout} 
            onDelete={() => deleteWorkout(workout)}
          />
        ))}
      </div>
      {isModalOpen && (
        <AddWorkoutModal
          onClose={() => setIsModalOpen(false)}
          onAdd={addWorkout}
        />
      )}
    </div>
  );
};

export default Workouts;