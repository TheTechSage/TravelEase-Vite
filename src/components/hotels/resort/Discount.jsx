import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
function Discount() {
  return (
    <div>
      <div className='container  bg-blue-50'>
                    <div className='relative py-20 px-5 text-center'>
                      <div className='absolute z-35 bottom-0 right-0 '>
                      <img className='h-50'src="island-FmScByKP.svg"></img>
                      </div>
                      </div>
                      < div className='px-2 py-10 '>
                      <h2 className='text-5xl text-center font-bold'>Subscribe & Get Special Discount!</h2>
                      <p className='py-2 '>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
                    
                      <form className='bg-white rounded-xl'>
                        <input className="border-0 px-20 text-center" type="email" placeholder='Enter Your Email'></input>
                        <button className='bg-black rounded-full h-10 px-2 py-2 text-white justify-items-end'><FaLongArrowAltRight />
                          </button>
                      </form>
                      </div>
                    </div>
                  </div>
                
              
  )
}

export default Discount
