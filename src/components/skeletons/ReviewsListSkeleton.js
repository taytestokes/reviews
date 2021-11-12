import React from 'react'

export const ReviewsListSkeleton = () => {
  return (
    <div className="w-full h-80 bg-white p-8 rounded-md shadow-sm animate-pulse">
      <div className="h-full flex flex-col space-y-4">
        <div className="flex justify-between">
          <div className="h-8 w-1/4 bg-gray-300 rounded-md" />
          <div className="h-8 w-2/4 bg-gray-300 rounded-md" />
        </div>
        <div className="h-8 w-3/4 m6 bg-gray-300  rounded-md " />
        <div className="h-8 w-full m6 bg-gray-300  rounded-md " />
        <div className="h-8 w-1/2 m6 bg-gray-300  rounded-md " />
        <div className="h-8 w-3/4 m6 bg-gray-300  rounded-md " />
        <div className="flex justify-between">
          <div className="h-8 w-1/4 bg-gray-300 rounded-md" />
          <div className="h-8 w-2/4 bg-gray-300 rounded-md" />
        </div>
      </div>
    </div>
  )
}
