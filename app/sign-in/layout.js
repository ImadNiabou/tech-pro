import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex items-center justify-center h-screen max-w-full'>
        {children}
    </div>
  )
}

export default layout