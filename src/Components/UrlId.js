import React from 'react'
import { useParams, useNavigate, } from 'react-router-dom';
function UrlId() {
  const { urlId } = useParams();
  const usenativage = useNavigate();
  return (
    <>
      <div>URL from Child 1 =: {urlId}</div>
      <button  onClick={()=>{
       usenativage('/Dashboard',{state:urlId})
      }}
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
      >
        UseNavigate
      </button>
    </>
  )
}

export default UrlId;