"use client"
import React, { useState } from 'react';

const Details = () => {
  const [gender, setGender] = useState('');

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white border border-gray-200 rounded-lg my-10">
      <h2 className="text-4xl font-bold mb-2 text-black">Trip Details</h2>
      <hr className="mb-6 border-gray-300" />

      <form className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-semibold mb-1 text-gray-700">Pickup Address</label>
            <input
              type="text"
              placeholder="Enter exact pickup address"
              className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <p className="text-sm text-gray-500 mt-1">
              This will help our cab driver reach you on time.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-semibold mb-1 text-gray-700">Drop Address</label>
            <input
              type="text"
              placeholder="Enter drop address"
              className="w-full bg-gray-100 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        <h3 className="text-xl font-bold mt-4 text-black">Traveler Information</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-semibold mb-2 text-gray-700">Gender</label>
            <div className="inline-flex rounded-md" role="group">
              {['Male', 'Female'].map((g, index) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGender(g)}
                  className={`px-6 py-2 text-base font-bold border ${
                    index === 0 ? 'rounded-l-md' : 'rounded-r-md'
                  } ${
                    gender === g
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-semibold mb-1 text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full `">
            <label className="block text-sm font-semibold mb-1 text-gray-700">Email ID</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-semibold mb-1 text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-3 border bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Details;
