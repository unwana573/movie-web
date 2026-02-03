import React from 'react'
import { mobileNavigation } from '../constant/navigation'
import { NavLink } from 'react-router-dom'

function MovieNavigation() {
  return (
    <section className='lg:hidden h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full'>
      <div className='flex items-center justify-center h-full text-neutral-400 '>
          {
            mobileNavigation.map((nav, index) => {
              return (
                <NavLink 
                  key={nav.label+"mobilenavigation"} 
                  to={nav.href}
                  className={({ isActive }) => isActive ? "flex flex-col items-center justify-center px-4 py-2 text-white" : "flex flex-col items-center justify-center px-4 py-2 text-neutral-300 hover:text-white" }
                >
                  <div className='text-2xl'>
                    {nav.icon}
                  </div>
                    {nav.label}
                </NavLink>
              )
            })
          }
      </div>
    </section>
  )
}

export default MovieNavigation