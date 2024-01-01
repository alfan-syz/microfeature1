import React from 'react'
import ListPaslon from '../Components/ListPaslon'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const ListPaslonPage: React.FC = () => {
  return (
    <div>
        <Navbar/>
      <ListPaslon/>
      <Footer/>
    </div>
  )
}

export default ListPaslonPage
