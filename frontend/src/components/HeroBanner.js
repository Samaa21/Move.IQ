import React from "react";
import { Link } from "react-router-dom";
import frontImage from "../assets/images/front.jpg";
import secondImg from "../assets/images/exerciselist.jpg";
import thirdImg from "../assets/images/ai.jpg";
import fourImg from "../assets/images/nutri.png";

const FitnessWebsite = () => {
  return (
    <div className="font-roboto bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white">
        <img
          alt="A group of people working out in a modern gym"
          className="w-full h-full object-cover opacity-50"
          src={frontImage}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Transform Your Life
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white">
            Join the best fitness platform and achieve your goals
          </p>
          <a
            className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700"
            href="#"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to={"/ai"}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <img
                alt="Icon representing AI training"
                className="mx-auto mb-4"
                src={thirdImg}
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                AI Yoga Zone
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Where advanced AI meets ancient practices. Our platform provides
                real-time posture corrections for various Yoga Poses. Embrace a
                healthier lifestyle, improve your flexibility, with the perfect
                blend of technology and tradition.
              </p>
            </div>
          </Link>
          <Link to={"/ex"}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <img
                alt="Icon representing exercises group classes"
                className="mx-auto mb-4"
                src={secondImg}
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                Exercise Guide
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A large comprehensive list of all the exercises you'll ever need
                to achieve your goals
              </p>
            </div>
          </Link>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <img
              alt="Icon representing nutrition plans"
              className="mx-auto mb-4"
              src={fourImg}
            />
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
              Nutrition Plans
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Receive personalized nutrition plans to complement your fitness
              routine.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8">
            Join Move.IQ today and take the first step towards a healthier,
            happier you.
          </p>
          <a
            className="px-6 py-3 bg-white text-teal-600 rounded-full hover:bg-gray-200"
            href="#"
          >
            Join Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left">
              © 2024 Move.IQ All rights reserved.
            </p>
            <ul className="flex space-x-4 mt-4 md:mt-0">
              <li>
                <a className="hover:text-gray-400" href="#"></a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#"></a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#"></a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FitnessWebsite;
