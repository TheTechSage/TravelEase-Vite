'use client'
import React from 'react'
import  { useState } from 'react';
const options = [
  'All',
  'Hotels',
  'Apartments',
  'Resort',
  'Villa',
  'Lodge',
  'Guest House',
  'Cottage',
  'Beach Hut',
  'Farm House'
];
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
function Home() {
  const [selected, setSelected] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const handleCheckboxChange = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const visibleOptions = showMore ? options : options.slice(0, 3);

  return (

      <div className="w-full max-w-md mx-auto bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-3">Hotel Type</h2>
          <div className="space-y-2">
            {visibleOptions.map((option, index) => (
              <label key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="accent-[#5143d9]"
                />
                <span>{option}</span>
              </label>
            ))}
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-blue-600  flex  items-center hover:underline text-sm mt-2"
            >
              {showMore ? 'Show Less' : 'Show More'}
              {showMore ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        </div>
    
  
    

    
   
    
  )
}

export default Home
