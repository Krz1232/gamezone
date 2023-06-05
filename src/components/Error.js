/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div id='page404'>
      <h2>Error 404</h2>
      <p className='p404'>We can not find the page you are looking for</p>
      <p>Get Back <Link className='Link' to="/">Home</Link></p>
    </div>
  )
}
