import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="w-48 h-48 mx-auto bg-gray-300 dark:bg-gray-700 rounded-full">
            {/* Placeholder for profile photo */}
          </div>
        </div>
        <div className="md:w-2/3 md:pl-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a 3rd-year BSIT student who specializes in web development, dashboards, and remote tech support. I'm passionate about helping small teams build websites, automate workflows, and visualize data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
