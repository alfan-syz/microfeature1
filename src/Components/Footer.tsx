import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className=' h-56'>
      <footer className="mt-2">
                <div className=" font-bold text-3xl text-center text-white mb-8 " >
                    <h4>PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK</h4>
                    <h4>YANG JELAS PASTIKAN MEREKA TIDAK MEMILIKI VISI</h4>  
                    <h4>MISI UNTUK MELEGALKAN SLOT</h4>
                </div>
                <div className=" text-white flex">
                    <div className="container flex">
                        <div>
                        <img src= "./public/logo.png" alt= "logo" width="60px"/>
                        </div>
                        <div className="flex-wrap ms-3">
                        <h5 className="card-title  ">DUMBWAYS.ID</h5>
                        <p className="card-text">Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                        </div>
                    </div>
                </div>
                <div className=" text-white text-center" style = {{marginTop:"1px"}}>
                Komisi Pemilihan Umum DumbWays.ID | Alfansyuri Ziaulhaq 2023
                </div>
            </footer>
    </div>
  )
}

export default Footer
