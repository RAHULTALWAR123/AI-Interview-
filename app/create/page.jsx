// import React from 'react'

import Navbar from "../components/Navbar"
import InterviewForm from "./_components/InterviewForm"

function page() {
  return (
     <div style={{
      fontFamily: '"Lexend", sans-serif',
    //   fontSize: '78px',
      fontWeight: 'bold'
    }}>
        <Navbar/>

        <InterviewForm/>
    </div>
  )
}

export default page
