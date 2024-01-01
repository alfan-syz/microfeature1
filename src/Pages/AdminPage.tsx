import React from 'react'
import Navbar from '../Components/Navbar'
import Admin from '../Components/Admin'
import Footer from '../Components/Footer'

const AdminPage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Admin/>
      <Footer/>
    </div>
  )
}

export default AdminPage
