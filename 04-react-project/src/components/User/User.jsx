import React from 'react'
import { useParams } from 'react-router'

function User() {

    const {userId} = useParams()

  return (
    <div className='text-center bg-gray-400 text-white text-3xl p-4 '>User: {userId}</div>
  )
}

export default User