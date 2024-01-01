import React from 'react'

const ListPartai: React.FC = () => {
  return (
    <div>
       <div
        className="container mt-28 h-96 text-gray-300"
        style={{ width: "1140px" }}
      >
        <div className="pt-14">
          <h1 className="text-center font-bold text-2xl mb-10">LIST PARTAI</h1>
        </div>

        <div className="container" style={{ width: "970px" }}>
          <table className="border h-64">
            <thead className="border bg-slate-500">
              <tr className="border">
                <th className="border">No Urut</th>
                <th className="border">Logo</th>
                <th className="border w-36">Ketua Umum</th>
                <th className="border w-72">Visi Misi</th>
                <th className="border w-72">Alamat</th>
              </tr>
            </thead>
            <tbody className="border">
              <tr className="border">
                <td className="border text-center">1</td>
                <td className="border">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWRENuBNxllo8WVdAntEFUHxGqIC98STcNQ&usqp=CAU" className='w-32 container p-2' alt="" />
                </td>
                <td className="border">George Abraham</td>
                <td className="border">
                    <li>Memindahkan Indonesia ke isekai</li>
                    <li>Nonton anime 3x sehari</li>
                    <li>Melakukan peresapan pada budaya Jepangg</li>
                </td>
                <td className="border">Kerajaan Black Panther</td>
                
              </tr>
              
              
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListPartai
