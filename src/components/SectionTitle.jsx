import React from 'react'

const SectionTitle = ({ icon, title, text }) => {
  return (
    <div className='border-b border-gray-200 pb-5'>
      <div className='flex items-center gap-2'>
        {icon && <span>{icon}</span>}
        <h2 className='text-5xl font-semibold tracking-wider capitalize'>
          {title}
        </h2>
      </div>
      {text && <p className='text-gray-600 mt-3 text-lg'>{text}</p>}
    </div>
  )
}

export default SectionTitle
