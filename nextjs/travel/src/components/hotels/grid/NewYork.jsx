"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { ImStarFull } from "react-icons/im";
import { MdOutlinePerson } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { FaRegCalendar } from "react-icons/fa";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../ui/pagination";
const groupedCards = [
  [
    {
      id: 1,
      image: "09-NZkssKcO.jpg",
      title: "Hotel Baljees Regency",
      rating: 4.5,
      price: 750,
      features: ["Air Conditioning", "Wifi", "Kitchen", "Pool"],
      originalPrice: 1000,
    },
    {
      id: 2,
      image: "10-fiISs2Co.jpg",
      title: "Courtyard by Marriott New York",
      rating: 4,
      price: 1200,
      features: ["Air Conditioning", "Wifi", "Pool", "Kitchen"],
    },
    {
      id: 3,
      image: "08-GrHLX0U-.jpg",
      title: "Club Quarters Hotel",
      rating: 4.8,
      price: 980,
      features: ["Air Conditioning", "Wifi", "Pool", "Kitchen"],
    },
  ],
  [
    {
      id: 4,
      image: "07-cP0hfe1k.jpg",
      title: "Beverly Hills Marriott",
      rating: 4.8,
      price: 1400,
      features: ["Air Conditioning", "Wifi", "Pool", "Kitchen"],
    },
    {
      id: 5,
      image: "02-DQEzloor.jpg",
      title: "Courtyard by Marriott New York",
      rating: 4,
      price: 680,
      features: ["Air Conditioning", "Wifi", "Pool", "Kitchen"],
    },
    {
      id: 6,
      image: "05-SZCETu7r.jpg",
      title: "Park Plaza Lodge Hotel",
      rating: 4.4,
      price: 680,
      features: ["Air Conditioning", "Wifi", "Pool", "Kitchen"],
    },
  ],
  [
    {
      id: 7,
      image: "04-YZ9GNmrm.jpg",
      title: "Royal Beach Resort",
      rating: 4,
      price: 750,
      features: ["Air Conditioning", "Wifi", "Kitchen", "Pool"],
    },
    {
      id: 8,
      image: "03-vKmVhHE6.jpg",
      title: "Pride moon Village Resort & Spa",
      rating: 3.8,
      price: 896,
      features: ["Air Conditioning", "Wifi", "Kitchen", "Pool"],
    },
    {
      id: 9,
      image: "01-6PVBScu5.jpg",
      title: "Carina Beach Resort",
      rating: 4,
      price: 475,
      features: ["Air Conditioning", "Wifi", "Kitchen", "Pool"],
    },
  ],
];

function NewYork() {
  const [bookmarked, setBookmarked] = useState({});

  const toggleBookmark = (groupIndex, cardIndex) => {
    setBookmarked((prev) => {
      const currentGroup = prev[groupIndex] || [];
      const isAlreadyBookmarked = currentGroup.includes(cardIndex);

      return {
        ...prev,
        [groupIndex]: isAlreadyBookmarked
          ? currentGroup.filter((i) => i !== cardIndex)
          : [...currentGroup, cardIndex],
      };
    });
  };

  return (
    <>
      <div className="w-full py-12 px-8 flex flex-col items-center">
        <div className="relative py-10 ">
          <img className="w-290 h-110 rounded-xl" src="05-4tYh3WRJ.jpg" />
          <div className="absolute top-30 left-30">
            <h1 className="text-6xl text-white text-center font-bold">
              150 Hotels in New York
            </h1>
            <div className="mt-6 bg-white rounded-lg shadow-lg py-10 px-10 flex gap-2">
              <div className="flex text-center gap-2">
                <IoLocationOutline className="text-gray-500 text-4xl" />
                <select className="w-60 border-2 py-2 border-blue-100 rounded-xl ">
                  <option></option>
                  <option>Select location</option>
                  <option>San Jacinto, USA</option>
                  <option>North Dakota, Canada</option>
                  <option>West Virginia, Paris</option>
                </select>
              </div>

              <div className="flex item-center gap-2">
                <FaRegCalendar className=" text-gray-500 text-4xl" />
                <input
                  type="date"
                  placeholder="date"
                  className="w-60 border-2 border-[#5143d9]-100 rounded-xl"
                />
              </div>
              <div className="flex item-center gap-2">
                <MdOutlinePerson className="text-4xl text-gray-500" />
                <input
                  type=""
                  placeholder=""
                  className="w-60 border-2 border-[#5143d9]-100 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-6 space-y-12">
        {groupedCards.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="w-full flex justify-center gap-10 flex-wrap"
          >
            {group.map((card, cardIndex) => {
              const isBookmarked =
                bookmarked[groupIndex]?.includes(cardIndex) ?? false;

              return (
                <div
                  key={card.id}
                  className="flex flex-col justify-center shadow bg-white py-0 px-2 gap-5 rounded-xl border-white border-2 w-80"
                >
                  <img
                    className="w-80  rounded-xl"
                    src={card.image}
                    alt={card.title}
                  />

                  <div className="flex justify-between px-2">
                    <div className="flex gap-2 px-2 bg-black rounded-lg text-white items-center">
                      <ImStarFull className="text-yellow-500 text-xl" />
                      {card.rating}
                    </div>
                    <div
                      onClick={() => toggleBookmark(groupIndex, cardIndex)}
                      className="cursor-pointer text-xl text-red-500"
                    >
                      {isBookmarked ? (
                        <FaBookmark className="text-red-500" />
                      ) : (
                        <FaRegBookmark className="text-gray-400" />
                      )}
                    </div>
                  </div>

                  <h2 className="font-bold text-xl ">{card.title}</h2>

                  <ul className="flex gap-3 flex-wrap  pb-10 text-sm">
                    {card.features.map((feature, i) => (
                      <React.Fragment key={i}>
                        <li className="text-lg opacity-75">{feature}</li>
                        {i !== card.features.length - 1 && (
                          <li className="font-bold">.</li>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>

                  <div className="flex items-center py-2 px-2 flex-wrap">
                    <p className="font-bold text-green-800 text-xl">
                      ${card.price}
                    </p>
                    <span className="text-xl opacity-75">/days</span>
                    {card.originalPrice && (
                      <span className="text-xl opacity-75 line-through">
                        ${card.originalPrice}
                      </span>
                    )}
                    <button className="flex items-center  bg-blue-100 hover:bg-[#5143d9] hover:text-white text-[#5143d9] px-4 py-2  gap-5 rounded-lg ml-auto">
                      View Detail{" "}
                      <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" />
            <IoIosArrowBack />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">6</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" />
            <IoIosArrowForward />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default NewYork;
