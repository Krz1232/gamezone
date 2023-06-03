/* eslint-disable */
import React from 'react'

// importing Compoents


// import outlet
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function RootLayout() {
  return (
    <div id='root-layout'>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

    <footer>
      <Footer />
    </footer>
    </div>
  )
}
