import React from 'react';

const Home = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto text-center py-12">
        <h2 className="text-4xl font-bold mb-6 text-green-600">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We are dedicated to HopeSeed Mission. Join us in making a positive impact and helping those in need.
        </p>
        <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-500">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Home;
