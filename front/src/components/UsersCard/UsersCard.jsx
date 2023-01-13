import React from 'react'

const UsersCard = (props) => {
    const link=`./user/${props.name}`
  return (
    
    <a  href={link} className='border border-gray-500 rounded w-32 hover:border-gray-100 ease-in-out duration-100 cursor-pointer'>
    <img src={props.image} alt='' className='w-32 h-36'/>
    <div className='p-2 text-white text-center'>
      <label className='block'>{props.name}</label>
      <span className='text-gray-400 text-sm'>22 - Tunisia</span>
    </div>
  </a>
  )
}

export default UsersCard