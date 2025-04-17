

import React, { useState } from "react"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaHeart,FaShareAlt } from "react-icons/fa";
const FILTERS = [
  {
    title: 'Hotel Type',
    options: ['All', 'Hotel', 'Apartment', 'Resort', 'Villa', 'Lodge', 'Hostel', 'Guest House','Cottage','Beach Hut','Farm House'],
  },
  {
    title: 'Price range',
    options: ['Up to $500', '$500 - $1000', '$1000 - $1500', '$1500 - $2000', '$2000+'],
  },
  {
    title: 'Popular Type',
    options: ['Free Breakfast Included', 'Pay At Hotel Available', 'Free Cancellation Available'],
  },
  {
   title: 'Customer Rating',
   options: ['1+', '2+', '3+', '4+'],
   isRating: true,
 },
 {
   title: 'Rating Star',
   options: ['1','2', '3', '4', '5'],
   isRating: true,
 },
  {
    title: 'Amenities',
    options: ['All','Air Conditioning', 'Bar', 'Bonfire', 'Business Services', 'Caretaker', 'Dining', 'Free Internet', 'Hair nets','Masks'],
  },
];

const MAX_VISIBLE = 6;


 
function HotelList() {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (title) => {
      setExpandedSections((prev) => ({
        ...prev,
        [title]: !prev[title],
      }));
    };
  return (
    <>
     < div className="flex flex-col lg:flex-row gap-6 py-5 px-15">
  
  <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow space-y-6">
    
     {FILTERS.map(({ title, options, borderColor, isRating }) => {
        const isExpanded = expandedSections[title] || false;
        const displayOptions = isExpanded ? options : options.slice(0, MAX_VISIBLE);
        const showToggle = options.length > MAX_VISIBLE;
        

        return (
            <div
            key={title}
            className={`border-none border-gray-200 rounded-md p-4 ${borderColor}  bg-white`}
          >
            <h4 className="text-lg font-semibold text-gray-700 mb-3">{title}</h4>
            <ul className={`space-y-2 ${isRating ? 'flex gap-3 flex-wrap space-y-0' : ''}`}>
  {displayOptions.map((option, index) => (
    <li key={index}>
      {isRating && title === 'Rating Star' ? (
        <div className="border border-gray-300 rounded px-3 py-1 text-sm text-gray-700 flex items-center gap-1">
          <span>{option}</span>
          <FaStar className="text-black text-sm" />
        </div>
      ) : isRating ? (
        <div className="border border-gray-300 rounded px-3 py-1 text-sm text-gray-700 flex items-center justify-center">
          {option}
        </div>
      ) : (
        <label className="flex items-center gap-2 text-gray-600">
          <input
            type="checkbox"
            className=""
          />
          {option}
        </label>
      )}
    </li>
  ))}
</ul>
{showToggle && (
              <button
                className="mt-3 text-blue-500 text-sm flex items-center gap-1 hover:underline"
                onClick={() => toggleSection(title)}
              >
                {isExpanded ? (
                  <>
                    See Less <FaChevronUp />
                  </>
                ) : (
                  <>
                    See More <FaChevronDown />
                  </>
                )}
              </button>
            )}
          </div>
        );
      })}
    </div>  
      
    <div className=" shadow border-gray-300 rounded-lg p-4">
    <div className="flex-col gap-5 border-b-1"> 
`    <div className="flex">
    <img  className="w-[35%]"src="02-DQEzloor.jpg"/>
    <div className="flex-col p-5 gap-5">
    <div className="flex text-yellow-300">
    <FaStar /><FaStar /><FaStar/><FaStar/><FaRegStarHalfStroke />
    <FaHeart className=""/>
    <FaShareAlt />
  </div>
  <h2 className="font-bold text-lg">Courtyard by Marriott New York</h2>
    <div className="flex gap-5 p-2">
     <p>Air Conditioning</p>
    <p>.</p>
    <p>Wifi </p>
    <p>.</p>
    <p>Kitchen</p>
    <p>.</p>
    <p>Pool</p>
</div>
<p> Free Cancellation till 7 Jan 2022</p>
<p> Free Breakfast</p>
< div className="flex gap-10">
<p>$750
/day</p>
<button className="border bg-black text-white px-4 py-1 cursor-pointer hover:opacity-75 rounded-lg">Select Room</button>
</div>
</div>
</div>
</div>
<div className="flex-col gap-5 border-b-1"> 
`    <div className="flex">
    <img  className="w-[35%]"src="10-fiISs2Co.jpg"/>
    <div className="flex-col p-5 gap-5">
    <div className="flex text-yellow-300">
    <FaStar /><FaStar /><FaStar/><FaStar/><FaRegStarHalfStroke />
    <FaHeart className=""/>
    <FaShareAlt />
  </div>
  <h2 className="font-bold text-lg">Pride moon Village Resort & Spa</h2>
    <div className="flex gap-5 p-2">
     <p>Air Conditioning</p>
    <p>.</p>
    <p>Wifi </p>
    <p>.</p>
    <p>Kitchen</p>
    <p>.</p>
    <p>Pool</p>
</div>
<p> Non Refundable</p>
< div className="flex gap-10">
<p>$980
/day</p>
<button className="border bg-black text-white px-4 py-1 cursor-pointer hover:opacity-75 rounded-lg">Select Room</button>
</div>
</div>
</div>
</div>
<div className="flex-col gap-5 border-b-1"> 
<div className="flex">
    <img  className="w-[35%]"src="10-fiISs2Co.jpg"/>
    <div className="flex-col p-5 gap-5">
    <div className="flex text-yellow-300">
    <FaStar /><FaStar /><FaStar/><FaStar/><FaRegStarHalfStroke />
    <FaHeart className=""/>
    <FaShareAlt />
  </div>
  <h2 className="font-bold text-lg">Royal Beach Resort</h2>
    <div className="flex gap-5 p-2">
     <p>Air Conditioning</p>
    <p>.</p>
    <p>Wifi </p>
    <p>.</p>
    <p>Kitchen</p>
    <p>.</p>
    <p>Pool</p>
</div>
<p> Free Cancellation till 7 Jan 2022</p>

< div className="flex gap-10">
<p>$750
/day</p>
<button className="border bg-black text-white px-4 py-1 cursor-pointer hover:opacity-75 rounded-lg">Select Room</button>
</div>
</div>
</div>
</div>
</div>
</div>





   

   
    </>
  );
}

export default HotelList;
