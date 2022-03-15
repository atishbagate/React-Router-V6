import React from 'react'
import {  Outlet } from 'react-router-dom'
function Child1() {
  return (
    <div>Child1 Component
      <Outlet />
    </div>
  )
}

export default Child1