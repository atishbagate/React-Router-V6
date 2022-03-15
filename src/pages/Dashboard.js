import React from 'react'
import { useLocation } from 'react-router-dom';
function Dashboard() {
    const uselocation = useLocation();
  return (
    <div>Dashboard value get  : {uselocation.state}</div>
  )
}

export default Dashboard