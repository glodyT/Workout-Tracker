import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4" 
    style={{
      backgroundImage: "url('/images/image4.png')",
      backgroundSize: "cover",
      height: '100px', 
      backgroundPosition: "center",
    }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Workout Tracker</h1>
        <button
          className="sm:hidden block"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul
          className={`sm:flex sm:items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2">
            <Link to="/workouts">Workouts</Link>
          </li>
          <li className="p-2">
            <Link to="/progress">Progress</Link>
          </li>
          <li className="p-2">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
