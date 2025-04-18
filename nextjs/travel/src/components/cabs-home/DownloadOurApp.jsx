import Image from "next/image";
import Link from "next/link";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Download() {
  return (
    <div className="w-full my-40 px-40">
      <div className="border flex p-14 pr-64 relative bg-gray-100 rounded-xl">
        <div>
          <p className="text-5xl font-bold">
            Download our app and access exclusive features
          </p>
          <div className="flex gap-8 py-8">
            <div className="flex items-center gap-2">
              <BsPatchCheckFill className="text-green-600" />
              <span>24/7 Customer Support</span>
            </div>
            <div className="flex items-center gap-2">
              <BsPatchCheckFill className="text-green-600" />
              <span>Ride Safely</span>
            </div>
            <div className="flex items-center gap-2">
              <BsPatchCheckFill className="text-green-600" />
              <span>Top Rated Driver - Partner</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="">
              <Image src="/google-play.svg" width={150} height={150} />
            </Link>
            <Link href="">
              <Image src="/app-store.svg" width={150} height={150} />
            </Link>
          </div>
        </div>
        <Image
          src="/mobile.png"
          alt="Phone"
          width={200}
          height={200}
          className="-translate-y-32 absolute right-20 top-4"
        />
      </div>
    </div>
  );
}
