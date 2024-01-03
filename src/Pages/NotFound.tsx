import React from 'react'
import Navbar from '../Components/Navbar'

const NotFound: React.FC = () => {
  return (
    <>
    <Navbar/>
    <h1 className='flex justify-center mt-48 text-white font-bold text-3xl'>Upssss Page Not Found🤣</h1>
    <div className='container bg-white w-72 mt-10'>
       
      <img src="https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/e3e9af5186374745920ac2e6e7fe1c89~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1733761992&x-signature=12wKdpgz0cEIr0v3wz3tDPd4NAM%3D" alt="" className='w-full h-full object-cover' />
    </div>
    </>
  )
}

export default NotFound
