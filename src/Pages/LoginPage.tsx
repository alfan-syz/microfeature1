import React from 'react'
import Login from '../Components/Login'
import NavbarLog from '../Components/NavbarLog'
import Footer from '../Components/Footer'

const LoginPage: React.FC = () => {
  return (
    <div>
      <NavbarLog/>
      <Login/>
      <Footer/>
    </div>
  )
}

export default LoginPage
