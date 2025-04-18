import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

export default function Policies() {
  return (
    <div className="px-10 py-10">
      <h1 className="text-5xl font-extrabold border-b pb-4 mb-6">Hotel Policies</h1>

      <div className="text-gray-600 text-lg mb-8 space-y-3">
        <p>This is a family farmhouse, hence we request you to not indulge.</p>
        <p>Drinking and smoking within controlled limits are permitted at the farmhouse but please do not create a mess or ruckus at the house.</p>
        <p>Drugs and intoxicating illegal products are banned and not to be brought to the house or consumed.</p>
        <p>For any update, the customer shall pay applicable cancellation/modification charges.</p>
      </div>

      <div className="text-xl text-gray-700 mb-10 space-y-4">
        {[
          "Check-in: 1:00 pm - 9:00 pm",
          "Check out: 11:00 am",
          "Self-check-in with building staff",
          "No pets",
          "No parties or events",
          "Smoking is allowed"
        ].map((policy, index) => (
          <div key={index} className="flex items-start gap-3">
            <FaArrowRightLong className="mt-1 text-blue-700" />
            <p>{policy}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        <div className="border w-[50%] px-5 py-4 rounded-xl bg-red-100">
          <p className="text-red-800 font-medium">
            During the COVID-19 pandemic, all hosts and guests must review and follow Booking social distancing and other COVID-19-related guidelines.
          </p>
        </div>
        <div className="border w-[50%] px-5 py-4 rounded-xl bg-red-100">
          <p className="text-red-800 font-medium">
            Smoke alarm not reported — The host hasn't reported a smoke alarm on the property. We suggest bringing a portable detector for your trip.
          </p>
        </div>
      </div>
    </div>
  );
}
