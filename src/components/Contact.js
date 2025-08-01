import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Contact Me</h2>
        <div className="md:w-2/3 mx-auto">
          <form>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800" id="grid-first-name" type="text" placeholder="Jane" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800" id="grid-last-name" type="text" placeholder="Doe" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email Address
                </label>
                <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800" id="grid-email" type="email" placeholder="jane.doe@example.com" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-message">
                  Message
                </label>
                <textarea rows="5" className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800" id="grid-message"></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300" type="submit">
                Send Message
              </button>
            </div>
          </form>
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Or reach out on social media:</p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/JadDavidIsReal" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">GitHub</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">LinkedIn</a>
              <a href="mailto:tieryder88@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
