import React from 'react';
import Head from '../../components/cab-details/Head';
import Details from '../../components/cab-details/Details';
import Driverdetails from '../../components/cab-details/Driverdetails';
import Payment from '../../components/cab-details/Payment';

const Page = () => {
  return (
    <div className="max-w-[1440px] mx-auto space-y-4 px-0">
      <Head />
      <div className="flex flex-col md:flex-row gap-0 px-24 mt-4">
        <div className="flex-[2] px-2 md:px-2 lg:px-4">
          <Details />
          <Driverdetails />
         
        </div>
        <div className="flex-[1] px-2 md:px-1 space-y-4 md:sticky top-6 h-fit">
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default Page;
