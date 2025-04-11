import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
function Discount() {
  return (
    <div>
      <div className='container px-20'>
                <div className='flex'>
                  <div className='flex-col'>
                    <div className='relative bg-blue-50 py-20 px-5 text-center'>
                      <div className='absolute bottom-0 right-0 '>
                      <img src="island-FmScByKP.svg"></img>
                      </div>
                      <h2>Subscribe & Get Special Discount!</h2>
                      <p className='px-5'>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
                      
                      <form className='bg-white flex px-5'>
                        <input className="border-0" type="email" placeholder='Enter Your Email'></input>
                        <button className='bg-black rounded-full h-10 px-2 py-2 text-white justify-items-end'><FaLongArrowAltRight />
                          </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Discount
