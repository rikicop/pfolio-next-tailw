import Image from 'next/image'
import React from 'react'

const Bet = () => {
  return (
    <div className='px-10 py-20'>
          <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
        {/* product card */} 
        <div
            className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md ">
            <div className="px-3 py-2">
                <h1 className="font-semibold">Product One</h1>
                <p className="text-sm">$69.69</p>
                 <h1 className="font-semibold">Product One</h1>
                <p className="text-sm">$69.69</p>
                 <h1 className="font-semibold">Product One</h1>
                <p className="text-sm">$69.69</p>
            </div>
        </div>
        <div 
            className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
            <div className="px-3 py-2">
                <h1 className="font-semibold">Product Two</h1>
                <p className="text-sm">$69.69</p>
            </div>
        </div>
        <div
            className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
            <div className="px-3 py-2">
                <h1 className="font-semibold">Product Three</h1>
                <p className="text-sm">$69.69</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Bet