import React from 'react'
import Navbar from '../Components/Navbar'
import ListPartai from '../Components/ListPartai'
import Footer from '../Components/Footer'

const ListPartaiPage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <ListPartai/>
      <Footer/>
    </div>
  )
}

export default ListPartaiPage
