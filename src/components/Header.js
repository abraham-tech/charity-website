import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">HopeSeed</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link className="hover:text-gray-200" to="/">Home</Link></li>
            <li><Link className="hover:text-gray-200" to="/about">About</Link></li>
            <li><Link className="hover:text-gray-200" to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
