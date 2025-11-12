import React from 'react'
import '@fontsource/lexend'
import Landing from './components/Landing'
import ShowCase from './components/ShowCase'
import Navbar from './components/Navbar'

function page() {
  return (
     <div style={{
      fontFamily: '"Lexend", sans-serif',
      fontSize: '78px',
      fontWeight: 'bold'
    }}>
      <Navbar/>
      <Landing/>

      <ShowCase/>
    </div>
  )
}

export default page
