import React from 'react'

const ListPaslon: React.FC = () => {
  return (
    <div>
       <div
        className="container mt-28 h-96 text-gray-300"
        style={{ width: "1140px" }}
      >
        <div className="pt-14">
          <h1 className="text-center font-bold text-2xl mb-10">LIST PASLON</h1>
        </div>

        <div className="container" style={{ width: "970px" }}>
          <table className="border h-64">
            <thead className="border bg-slate-500">
              <tr className="border">
                <th className="border">No Urut</th>
                <th className="border">Image</th>
                <th className="border w-36">Nama</th>
                <th className="border w-72">Visi Misi</th>
                <th className="border w-72">Koalisi</th>
              </tr>
            </thead>
            <tbody className="border">
              <tr className="border">
                <td className="border text-center">1</td>
                <td className="border">
                    <img src="https://media.istockphoto.com/id/1194817332/id/foto/potret-pria-tampan-serius-dalam-jaket-kancing-jas-abu-abu-dengan-latar-belakang-abu-abu.jpg?s=612x612&w=0&k=20&c=xSIPptSbmxtSSw6sLYdwnYC0CPjzb7GtPCnCNPaq_4g=" className='w-32 container p-2' alt="" />
                </td>
                <td className="border">Rebecca Nation</td>
                <td className="border">
                    <li>Memindahkan Indonesia ke isekai</li>
                    <li>Nonton anime 3x sehari</li>
                    <li>Melakukan peresapan pada budaya Jepangg</li>
                </td>
                <td className="border">
                    <li>Partai persatuan Wibu</li>
                    <li>Partai RedBull</li>
                    <li>Partai Black Magic</li>
                </td>
                
              </tr>
              
              
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListPaslon
