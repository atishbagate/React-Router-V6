import React from 'react'
import {  Outlet } from 'react-router-dom'
function Child2() {
  return (
    <div>Child2 Component.
      <Outlet />
    </div>
  )
}

export default Child2