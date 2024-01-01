import React from 'react'
import NavbarLog from '../Components/NavbarLog'
import Hero from '../Components/Hero'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Messages from '../Components/Messages'

const HomeLog: React.FC = () => {
  return (
    <>
      <NavbarLog/>
      <Hero/>
      <Card/>
      <Messages/>
      <Footer/>
    </>
  )
}

export default HomeLog
