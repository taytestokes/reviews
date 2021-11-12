import React from 'react'

export const Loader = () => {
  return (
    <div className="h-full flex flex-grow flex-col items-center justify-center">
      <div
        className="animate-spin w-12 h-12 border-4 border-t-4 border-gray-300 rounded-full"
        // Tailwind doesn't expose a utility class to apply
        // color to only the top border, so we apply that here using inline styles
        style={{ borderTopColor: '#71717A' }}
      />
    </div>
  )
}
