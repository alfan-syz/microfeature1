import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='h-7 mb-0 '>
      <footer className="mt-28">
                
                <div className=" text-white flex mb-">
                    <div className="container flex mb-10 ">
                        <div>
                        <img src= "./public/logo.png" alt= "logo" width="60px"/>
                        </div>
                        <div className="flex-wrap ms-3">
                        <h5 className="">DUMBWAYS.ID</h5>
                        <p className="card-text">Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className=" text-white text-center mt-3 mb-5">
                Komisi Pemilihan Umum DumbWays.ID | Alfansyuri Ziaulhaq 2023
                </div>
                <br />
                
               
            </footer>
    </div>
  )
}

export default Footer
