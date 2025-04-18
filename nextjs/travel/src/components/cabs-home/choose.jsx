import { BsLightningFill } from "react-icons/bs";
import { FaCar, FaLeaf, FaWheelchair, FaWifi } from "react-icons/fa";
import { TbBallFootball } from "react-icons/tb";

export default function ChooseUs() {
  const data = [
    {
      icon: <BsLightningFill className="text-5xl text-blue-700 bg-blue-100 rounded-full p-3"/>,
      title: "Advance Booking",
      para: "Happiness prosperous impression had conviction For every delay in they Extremity now.",
    },
    {
      icon: <FaLeaf className="text-5xl text-green-700 bg-green-100 rounded-full p-3 my-2"/>,
      title: "Economical Trip",
      para: "Extremity now strangers contained breakfast him discourse additions Sincerity.",
    },
    {
      icon: <TbBallFootball className="text-5xl text-yellow-700 bg-yellow-100 rounded-full p-3 my-2"/>,
      title: "Secure and Safer",
      para: "Perpetual extremity now strangers contained breakfast him discourse additions.",
    },
    {
      icon: <FaCar className="text-5xl text-red-700 bg-red-100 rounded-full p-3 my-2"/>,
      title: "Vehicle Options",
      para: "The Prosperous impression had conviction For every delay in they Extremity now",
    },
    {
      icon: <FaWifi className="text-5xl text-orange-700 bg-orange-100 rounded-full p-3 my-2"/>,
      title: "Cab Entertainment",
      para: "Extremity now strangers contained breakfast him discourse additions Sincerity.",
    },
    {
      icon: <FaWheelchair className="text-5xl text-blue-800 bg-blue-100 rounded-full p-3 my-2"/>,
      title: "Polite Driver",
      para: "Perpetual extremity now strangers contained breakfast him discourse additions.",
    },
  ];
  return (
    <div>
      <p className="text-5xl font-bold text-center my-10">Why Choose Us</p>
      <div className="flex justify-between flex-wrap px-40 gap-4 py-2 mb-10">
        {data.map((item, index) => (
          <div key={index} className="w-[32%] shadow-xl p-8 rounded-2xl">
            {item.icon}
            <p className="text-2xl font-bold py-3">{item.title}</p>
            <p className="pr-5 text-gray-500">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
