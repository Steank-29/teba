import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* Footer will be added here later */}
    </>
  )
}

export default Layout