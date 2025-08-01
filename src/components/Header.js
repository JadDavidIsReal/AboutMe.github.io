import React from 'react';

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={toggleTheme} className="text-gray-800 dark:text-white focus:outline-none mr-4">
            {theme === 'light' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )}
          </button>
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            <a href="/">JAD</a>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-800 dark:text-white hover:text-blue-500">About</a>
          <a href="#skills" className="text-gray-800 dark:text-white hover:text-blue-500">Skills</a>
          <a href="#projects" className="text-gray-800 dark:text-white hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-gray-800 dark:text-white hover:text-blue-500">Contact</a>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-800 dark:text-white focus:outline-none">
            {/* Hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
