import Image from "next/image";

export default function Vahicals() {
  const data = [
    {
      icon: "/vahicals-icon/seadan.svg",
      title: "Sedan",
      seat: "(6 Sedan)",
    },
    {
      icon: "/vahicals-icon/micro.svg",
      title: "Micro",
      seat: "(8 Micros)",
    },
    {
      icon: "/vahicals-icon/suv.svg",
      title: "SUV",
      seat: "(6 SUV)",
    },
    {
      icon: "/vahicals-icon/cuv.svg",
      title: "CUV",
      seat: "(4 CUVs)",
    },
    {
      icon: "/vahicals-icon/pickup.svg",
      title: "Pick UP",
      seat: "(3 Pick ups)",
    },
    {
      icon: "/vahicals-icon/coupe.svg",
      title: "Coupe",
      seat: "(9 Coupes)",
    },
  ];
  return (
    <div>
      <p className="text-5xl font-bold text-center py-4">
        Our Awesome Vehicles
      </p>
      <div className="flex gap-8 justify-center py-4">
        {data.map((item, index) => (
          <div key={index} className="h-60 w-40 flex flex-col gap-2 items-center shadow-xl text-white p-4 rounded-xl">
            <Image src={item.icon} alt="vahical" width={400} height={400} className="bg-gray-200 rounded-full p-4 h-32"/>
            <p className="text-2xl font-bold">{item.title}</p>
            <p className="text-gray-400">{item.seat}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
