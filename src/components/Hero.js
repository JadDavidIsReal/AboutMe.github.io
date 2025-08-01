import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-white dark:bg-gray-900 text-center py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">John Angelo P. David</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">Remote Web & Tech Specialist</p>
        <div className="mt-8">
          <a href="#contact" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300">Contact Me</a>
          <a href="#" className="ml-4 bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-md hover:bg-gray-300 transition-colors duration-300">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
