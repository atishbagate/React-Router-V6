import React from 'react'
import {Link,Outlet } from 'react-router-dom';
function Parent() {
  return (
    <>
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
    <div  className="border-dashed border-2 border-sky-500">This is parent Component.
    <div  className="border-dashed border-2 border-red-500"><Outlet /></div>
    </div>
    <div className="rounded-md shadow">
                  <Link to="child1"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Child Component 1
                  </Link>
    </div>
    <div className="rounded-md shadow">
                  <Link to="child2"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Child Component 2
                  </Link>
    </div>
    </div>
    
    </>
  )
}

export default Parent;