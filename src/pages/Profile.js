import React, { useState, useEffect } from 'react';

const Profile = () => {
  
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem('userProfile');
    return savedProfile 
      ? JSON.parse(savedProfile) 
      : {
          name: 'John Doe',
          email: 'johndoe@example.com',
          age: 30,
          weight: 180,
          height: 70,
          fitnessGoal: 'Build Muscle',
        };
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
  }, [profile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    
    console.log('Profile Updated', profile);
  };

  // reset to default profile
  const handleReset = () => {
    const defaultProfile = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 30,
      weight: 180,
      height: 70,
      fitnessGoal: 'Build Muscle',
    };
    setProfile(defaultProfile);
    localStorage.setItem('userProfile', JSON.stringify(defaultProfile));
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">User Profile</h1>
          <div className="space-x-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
            {!isEditing && (
              <button
                onClick={handleReset}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={profile.age}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                    min="0"
                    max="120"
                  />
                </div>
                <div>
                  <label className="block mb-2">Weight (lbs)</label>
                  <input
                    type="number"
                    name="weight"
                    value={profile.weight}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                    min="0"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2">Height (inches)</label>
                <input
                  type="number"
                  name="height"
                  value={profile.height}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                  min="0"
                />
              </div>
              <div>
                <label className="block mb-2">Fitness Goal</label>
                <select
                  name="fitnessGoal"
                  value={profile.fitnessGoal}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="Build Muscle">Build Muscle</option>
                  <option value="Lose Weight">Lose Weight</option>
                  <option value="Improve Endurance">Improve Endurance</option>
                  <option value="Maintain Fitness">Maintain Fitness</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div>
              <strong>Name:</strong> {profile.name}
            </div>
            <div>
              <strong>Email:</strong> {profile.email}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <strong>Age:</strong> {profile.age}
              </div>
              <div>
                <strong>Weight:</strong> {profile.weight} lbs
              </div>
            </div>
            <div>
              <strong>Height:</strong> {profile.height} inches
            </div>
            <div>
              <strong>Fitness Goal:</strong> {profile.fitnessGoal}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;