import { useState, useEffect } from 'react';

const getInitialWorkouts = () => {
  const savedWorkouts = localStorage.getItem('workouts');
  const initialWorkouts = [
    {
      id: 1,
      title: "Morning Strength Training",
      date: "2024-02-15",
      duration: 45,
      exercises: [
        {
          name: "Squats",
          sets: 3,
          reps: 12
        },
        {
          name: "Bench Press",
          sets: 3,
          reps: 10
        },
        {
          name: "Deadlifts",
          sets: 3,
          reps: 8
        }
      ]
    },
    {
      id: 2,
      title: "Cardio and Core",
      date: "2024-02-17",
      duration: 30,
      exercises: [
        {
          name: "Running",
          sets: 1,
          reps: 20
        },
        {
          name: "Planks",
          sets: 3,
          reps: 45
        },
        {
          name: "Crunches",
          sets: 3,
          reps: 15
        }
      ]
    }
  ];

  return savedWorkouts ? JSON.parse(savedWorkouts) : initialWorkouts;
};

export { getInitialWorkouts };