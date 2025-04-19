"use client";
import React from 'react';
import { FaStar } from "react-icons/fa";
import { useState } from "react";

 


function Review() {
        const [selectedRating, setSelectedRating] = useState(0);
        const [reviewText, setReviewText] = useState('');
        const [isLoggedIn] = useState(false);
        const reviewStats = {
            averageRating: 4.50,
            totalReviews: 42,
            distribution: [
                { stars: 5, percentage: 82 },
                { stars: 4, percentage: 9 },
                { stars: 3, percentage: 6 },
                { stars: 2, percentage: 2 },
                { stars: 1, percentage: 0 },
            ]
        };
       
    
  return (
    <div className="px-10 py-10">
      <h1 className="text-5xl border-b pb-4 font-extrabold mb-6">Customer Review</h1>

      <div className="border border-gray-300 w-[50%] rounded-lg px-4 py-3 bg-gray-100 mb-6">
       
        <div className="p-2 mx-auto sm:max-w-4xl sm:p-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* ---------- Reviews Statistics ---------- */}
                <div className="p-6 ">
                    <div className="flex flex-wrap items-baseline gap-2 mb-6">
                        <span className="text-4xl font-bold">{reviewStats.averageRating.toFixed(1)}</span>
                        <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`w-4 h-4 ${star <= Math.floor(reviewStats.averageRating)
                                        ? 'text-yellow-400 fill-yellow-400'
                                        : 'text-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">
                             Based on 120 Reviews
                        </span>
                    </div>

                    <div className="space-y-2">
                        {reviewStats.distribution.map(({ stars, percentage }) => (
                            <div key={stars} className="flex items-center gap-2">
                                <span className="w-12 text-sm">{stars} Stars</span>
                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full bg-yellow-400`}
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                                <span className="w-12 text-sm text-right">{percentage}%</span>
                            </div>
                        ))}
                    </div>
                </div>

              </div>
              </div>
              </div>

      
      <div className="py-4 px-5 flex gap-4 mb-8">
        <div className="w-[5%]">
          <img className="rounded-full w-12 h-12 object-cover" src="hotel-detail9.jpg" alt="Reviewer" />
        </div>

        <div className="flex flex-col px-4 w-[60%]">
          <h5 className="pb-1 text-xl font-bold">Jacqueline Miller</h5>

          <ul className="flex gap-2 text-gray-500 text-sm mb-2">
            <li>Stayed 13 Nov 2022</li>
            <li>•</li>
            <li>4 Reviews written</li>
          </ul>

          <p className="text-gray-700 mb-3">
            Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.
          </p>

          <div className="flex gap-3">
            <img className="rounded-xl w-20 h-20 object-cover" src="hotel-detail10.jpg" alt="Review img 1" />
            <img className="rounded-xl w-20 h-20 object-cover" src="hotel-detail11.jpg" alt="Review img 2" />
            <img className="rounded-xl w-20 h-20 object-cover" src="hotel-detail12.jpg" alt="Review img 3" />
          </div>
        </div>
      </div>

      {/* Manager Response */}
      <div className="flex border rounded-xl border-gray-300 py-4 px-5 bg-gray-100 w-[50%] mb-8">
        <div className="pr-4">
          <img className="rounded-full w-14 h-14 object-cover" src="hotel-detail13.jpg" alt="Manager" />
        </div>
        <div className="flex flex-col">
          <h5 className="text-xl font-bold">Manager</h5>
          <p className="text-gray-600">But discretion frequently sir she instruments unaffected admiration everything</p>
        </div>
      </div>

      {/* Review 2 */}
      <div className="flex border-t border-b py-6 mb-6">
        <div className="w-[5%]">
          <img className="rounded-full w-12 h-12 object-cover" src="hotel-detail14.jpg" alt="Reviewer" />
        </div>

        <div className="px-4">
          <h5 className="text-xl font-bold">Dennis Barrett</h5>
          <ul className="flex gap-2 text-gray-500 text-sm mb-2">
            <li>Stayed 13 Nov 2022</li>
            <li>•</li>
            <li>4 Reviews written</li>
          </ul>
          <p className="text-gray-600">
            Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.
          </p>
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center py-6">
        <button className="text-xl text-blue-800 bg-blue-200 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200">
          Load more
        </button>
      </div>
    </div>
  );
}

export default Review;
