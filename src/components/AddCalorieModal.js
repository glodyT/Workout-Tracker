import React, { useState, useEffect } from 'react';
const AddCalorieModal = ({ onClose, onAdd }) => {
    const [date, setDate] = useState('');
    const [calories, setCalories] = useState('');
    const [meal, setMeal] = useState('');
    const [notes, setNotes] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!date || !calories) return;
  
      const newEntry = {
        date,
        calories: parseInt(calories),
        meal,
        notes
      };
  
      onAdd(newEntry);
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Add Calorie Entry</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Calories</label>
              <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter total calories"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Meal</label>
              <input
                type="text"
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="e.g., Breakfast, Lunch, Dinner"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Additional notes about your meals"
                rows="3"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Entry
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  export default AddCalorieModal;