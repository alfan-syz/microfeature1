import React from 'react'
import Navbar from '../Components/Navbar'
import ModalVote from '../Components/ModalVote'
import Footer from '../Components/Footer'

const ModalVotePage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <ModalVote/>
      <Footer/>
    </div>
  )
}

export default ModalVotePage
