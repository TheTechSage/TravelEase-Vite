import React from 'react'

const Payment = () => {
  return (
    <>
    <div className="max-w-md mx-auto p-6 mt-10 bg-gray-100   rounded-lg">
  <h2 className="text-base font-semibold text-red-600 mb-4">Hurry! Limited cars left</h2>
  <div className="space-y-3 text-gray-800 text-[18px] ">
    <div className="flex justify-between">
      <span>Base Price</span>
      <span>$260</span>
    </div>
    <div className="flex justify-between">
      <span>State Tax</span>
      <span>$50</span>
    </div>
    <div className="flex justify-between">
      <span>Night Charge</span>
      <span>$100</span>
    </div>
    <div className="flex justify-between">
      <span>Convenience Fee</span>
      <span>$25</span>
    </div>
    <hr className="my-2 border-t border-gray-300" />
    <div className="flex justify-between font-bold text-black text-[18px]">
      <span>Total</span>
      <span>$435</span>
    </div>
  </div>
  <div className="  items-center  mt-5">
    <label className="flex items-center gap-2 text-[18px] font-semibold text-gray-800">
      <input type="radio" name="payment" defaultChecked className="accent-blue-600 w-4 h-4" />
      Pay $220 (Half Payment)
    </label>
    <label className="flex items-center gap-2 mt-2 text-[18px] font-semibold text-gray-800">
      <input type="radio" name="payment" className="accent-blue-600 w-4 h-4" />
      Pay $435 (Full Payment)
    </label>
  </div>
  <button className="mt-6 w-full bg-black text-white py-2 rounded-lg text-[15px] font-semibold hover:opacity-90 transition">
    Pay Now
  </button>
</div>

    </>
  )
}

export default Payment