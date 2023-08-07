import React from 'react'

const HeaderLoader = () => {
  return (
    <div className=' flex items-center flex-row  rounded-xl animate-pulse'>             
        <div className='mr-5 text-sm py-1 px-4 bg-gray-300 w-44 rounded-xl' ></div>
        <div className=" p-4 bg-gray-400 rounded-full"></div>
        <div className="bg-gray-400 py-2 w-24 ml-4 rounded-xl"></div> 
    </div>
  )
}

export default HeaderLoader
