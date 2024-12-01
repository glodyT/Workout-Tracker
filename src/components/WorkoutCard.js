import React from 'react';

const WorkoutCard = ({ workout, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border relative">
      <h2 className="text-xl font-semibold mb-2">{workout.title}</h2>
      <div className="text-gray-600">
        <p><strong>Date:</strong> {workout.date}</p>
        <p><strong>Duration:</strong> {workout.duration} minutes</p>
        <div className="mt-2">
          <strong>Exercises:</strong>
          <ul className="list-disc list-inside">
            {workout.exercises.map((exercise, index) => (
              <li key={index}>
                {exercise.name} - {exercise.sets} sets, {exercise.reps} reps
              </li>
            ))}
          </ul>
        </div>
      </div>
      {onDelete && (
        <button
          className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm"
          onClick={onDelete}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default WorkoutCard;