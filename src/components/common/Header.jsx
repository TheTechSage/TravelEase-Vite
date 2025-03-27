import React from 'react'

function Header() {
    return (
        <>
        <div className='flex gap-5'>
            <div>
            <img class="h-15 pl-15 pt-8" src="logo-XeOrDTLq.svg"></img>
            </div> 
            <div class="flex gap-10 pt-8">
             <a href="#listings">Listings</a>  
               <a href="#pages">Pages</a>
                <a href="#account">Accounts</a> 
            </div>
            <div class="flex gap-10 pt-8">
             <a href="#hotel">Hotel</a>  
               <a href="#flight">Flight</a>
                <a href="#tour">Tour</a> 
            </div>
        </div>
        </>
    )
}

export default Header
