import React from 'react'
import { links } from '../data'
const NavBar = () => {
  return (
    <nav className='bg-emerald-100 '>
      <div className='mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 justify-between'>
        <h2 className='text-3xl font-bold text-black'>
          Web<span className='text-emerald-600'>Portfolio</span>
        </h2>
        <div className='flex gap-x-3'>
          {links.map((item) => {
            return (
              <a
                className='capitalize text-lg tracking-wide hover:text-emerald-600 hover:font-bold '
                href='item.href'
                key={item.id}
              >
                {item.text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
