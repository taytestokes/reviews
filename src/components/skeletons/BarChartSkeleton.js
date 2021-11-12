import React from 'react'

export const BarChartSkeleton = () => {
  return (
    <div className="w-full h-80 lg:px-24 animate-pulse">
      <div className="h-full flex flex-row justify-around items-end">
        <div className="h-16 w-12 md:w-20 lg:w-36 bg-gray-300  rounded-md " />
        <div className="h-48 w-12 md:w-20 lg:w-36 bg-gray-300 rounded-md " />
        <div className="h-64 w-12 md:w-20 lg:w-36 bg-gray-300 rounded-md " />
        <div className="h-36 w-12 md:w-20 lg:w-36 bg-gray-300 rounded-md " />
        <div className="h-32 w-12 md:w-20 lg:w-36 bg-gray-300 rounded-md " />
        <div className="h-36 w-12 md:w-20 lg:w-36 bg-gray-300 rounded-md " />
      </div>
    </div>
  )
}
