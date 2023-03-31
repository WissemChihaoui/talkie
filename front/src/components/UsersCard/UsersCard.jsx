import React from 'react'

const UsersCard = (props) => {
    const link=`./user/${props.name}`
  return (
    
    <a  href={`/user/${props.id}`} className='border border-gray-100 rounded w-32 hover:border-gray-500 ease-in-out duration-100 cursor-pointer'>
    <img src={props.image} alt='' className='w-full h-36 rounded-t'/>
    <div className='p-2 text-gray-700 text-center'>
      <label className='block'>{props.name}</label>
      <span className='text-gray-400 text-sm'>22 - Tunisia</span>
    </div>
  </a>
  )
}

export default UsersCard