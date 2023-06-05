/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import Input from './Input'

export default function Navbar() {
  return (
      <nav>
        <Link to="/"><h1>Game Zone</h1></Link>
        <Input />
      </nav>
  )
}
