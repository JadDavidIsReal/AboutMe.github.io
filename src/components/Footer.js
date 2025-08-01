import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6">
      <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-300">
        <p>&copy; {new Date().getFullYear()} John Angelo P. David. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
