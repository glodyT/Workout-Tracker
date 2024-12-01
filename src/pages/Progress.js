import React, { useState, useEffect } from 'react';
import AddCalorieModal from '../components/AddCalorieModal';

const getInitialCalorieEntries = () => {
  const savedEntries = localStorage.getItem('calorieEntries');
  const initialEntries = [
    {
      id: 1,
      date: "2024-02-15",
      calories: 2000,
      meal: "Breakfast, Lunch, Dinner",
      notes: "Balanced diet with protein and vegetables"
    },
    {
      id: 2,
      date: "2024-02-16",
      calories: 1800,
      meal: "Breakfast, Lunch, Dinner",
      notes: "Light dinner, more protein at lunch"
    }
  ];

  return savedEntries ? JSON.parse(savedEntries) : initialEntries;
};

const CalorieCard = ({ entry, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{entry.date}</h3>
        <button 
          onClick={onDelete}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <p className="text-gray-600">Calories</p>
          <p className="font-bold text-blue-600">{entry.calories}</p>
        </div>
        <div>
          <p className="text-gray-600">Meal</p>
          <p>{entry.meal || 'Not specified'}</p>
        </div>
      </div>
      {entry.notes && (
        <div className="mt-2">
          <p className="text-gray-600">Notes</p>
          <p className="text-sm">{entry.notes}</p>
        </div>
      )}
    </div>
  );
};

const Progress = () => {
  const [calorieEntries, setCalorieEntries] = useState(getInitialCalorieEntries());
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('calorieEntries', JSON.stringify(calorieEntries));
  }, [calorieEntries]);

  const addCalorieEntry = (entry) => {
    
    const newEntry = {
      ...entry,
      id: calorieEntries.length > 0 ? Math.max(...calorieEntries.map(e => e.id)) + 1 : 1
    };
    
    
    setCalorieEntries([...calorieEntries, newEntry]);
    setIsModalOpen(false);
  };

  const deleteCalorieEntry = (entryToDelete) => {
    setCalorieEntries(calorieEntries.filter(entry => entry.id !== entryToDelete.id));
  };

  // Calculate statistics
  const totalCalories = calorieEntries.reduce((sum, entry) => sum + entry.calories, 0);
  const averageCalories = calorieEntries.length > 0 ? (totalCalories / calorieEntries.length).toFixed(1) : '0';

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Calorie Tracker</h1>
      
      <div className="mb-4 flex justify-between items-center">
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Add Calorie Entry
          </button>
        </div>
        <div className="text-right">
          <p className="text-gray-600">Average Daily Calories</p>
          <p className="text-xl font-bold text-blue-600">{averageCalories}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {calorieEntries.map((entry) => (
          <CalorieCard 
            key={entry.id} 
            entry={entry} 
            onDelete={() => deleteCalorieEntry(entry)}
          />
        ))}
      </div>

      {isModalOpen && (
        <AddCalorieModal
          onClose={() => setIsModalOpen(false)}
          onAdd={addCalorieEntry}
        />
      )}
    </div>
  );
};


export default Progress;