import React from 'react'
import Header from './contexts/Header'
import Main from './contexts/Main'
import About from './contexts/About'
import ProblemStatements from './contexts/ProblemStatements'
import Timeline from './contexts/Timeline'
import QandA from './contexts/QandA'
import ContactUs from './contexts/ContactUs'

const App = () => {
  return (
    <div className='bg-[#F8DDB5] w-full overflow-x-hidden min-h-screen flex flex-col justify-start items-center relative'>
      <div className="w-full fixed top-0 z-50">
        <Header/>
      </div>
      <div id="home" className="w-full"><Main/></div>
      <div id="about" className="w-full"><About/></div>
      <div id="problems" className="w-full"><ProblemStatements/></div>
      <div id="timeline" className="w-full"><Timeline/></div>
      <div id="qa" className="w-full"><QandA/></div>
      <div id="team" className="w-full"><ContactUs/></div>
    </div>
  )
}

export default App