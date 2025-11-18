import React from 'react'

const CharAvatar = ({ fullName }) => {
  return <div className={`${width || 'w-12'} ${height || ""} flex items-center justify-center rounded-full text-gray-900 font-medium bg-gray-100 `}>
    {getInitials(fullName || "")}       
   </div>; 
}

export default CharAvatar