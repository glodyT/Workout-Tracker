import React from 'react';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';
import DoughnutChart from '../components/DoughnutChart';

const Home = () => {
  const carouselItems = [
    { 
      image: "/images/image3.jpg", 
      title: "Track Your Fitness Journey", 
      description: "Monitor your workouts and progress easily" 
    },
    { 
      image: "/images/image2.jpeg", 
      title: "Set and Achieve Goals", 
      description: "Create custom workout routines and track your achievements" 
    },
    { 
      image: "/images/image1.jpg", 
      title: "Stay Motivated", 
      description: "Visualize your progress and stay inspired" 
    }
  ];

  const accordionItems = [
    {
      title: "How to Use Workout Tracker",
      content: "Create an account, log your workouts, and track your progress over time. Set goals and monitor your fitness journey."
    },
    {
      title: "Benefits of Tracking Workouts",
      content: "Tracking workouts helps you stay consistent, identify improvements, and maintain motivation towards your fitness goals."
    },
    {
      title: "Customizing Your Workouts",
      content: "Add custom exercises, set personal records, and create workout routines tailored to your fitness objectives."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Workout Tracker</h1>
      
      <section className="mb-12">
        <Carousel items={carouselItems} />
      </section>
      
      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Workout Tracker</h2>
          <p className="text-gray-700">
            Workout Tracker is your personal fitness companion. 
            Easily log workouts, track progress, and stay motivated 
            on your fitness journey. Whether you're a beginner or 
            an experienced athlete, our app helps you achieve your goals.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <Accordion items={accordionItems} />
        </div>
      </section>

      <section className="mt-12">
        <DoughnutChart />
      </section>
    </div>
  );
};

export default Home;