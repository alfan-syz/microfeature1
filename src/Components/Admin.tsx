import React from "react";

const Admin: React.FC = () => {
  return (
    <div className="container mt-28  ">
      <h1 className="text-white font-bold text-5xl mb-28 flex justify-center">
        DASHBOARD
      </h1>
      <div
        className="container grid grid-cols-3 gap-4 group relative "
        style={{ width: "1140px" }}
      >
        <div className="bg-yellow-600 aspect-square rounded-lg cursor-pointer hover:scale-125 transition-all duration-500">
          <div className="aspect-square rounded-lg overflow-hidden ">
            <button className="bg-yellow-300 hover:bg-red-500 text-black font-bold py-2 px-4 mx-auto my-3 flex rounded mb-3 border border-slate-950">
              1
            </button>
            <img
              src="https://media.istockphoto.com/id/1151982189/id/foto/pengusaha-yang-ramah-menunjuk-ruang-kosong.jpg?s=612x612&w=is&k=20&c=o3XcP0VanNBxbh-WhEAQ5UOG26Zv-1fER7wq8rXUmLA="
              className="w-full h-full bg-cover bg-center p-4"
            ></img>
          </div>
          <div className="flex flex-col mt-5 mb-3">
            <div className="flex-1 flex items-center justify-center"></div>

            <p className=" text font-bold ml-4 text-2xl">ANAS TAYLOR</p>
            <p className="font-bold ml-4">Akumulasi : 45%</p>
            <p className="font-bold ml-4">Jumlah Vote : 117</p>
          </div>
        </div>

        <div className="bg-blue-300 aspect-square rounded-lg cursor-pointer hover:scale-125 transition-all duration-500">
          <div className=" aspect-square rounded-lg overflow-hidden">
            <button className="bg-blue-300 hover:bg-red-500 text-white font-bold py-2 px-4 mx-auto my-3 flex rounded mb-3 border border-slate-950">
              2
            </button>
            <img
              src="https://media.istockphoto.com/id/1194817332/id/foto/potret-pria-tampan-serius-dalam-jaket-kancing-jas-abu-abu-dengan-latar-belakang-abu-abu.jpg?s=612x612&w=0&k=20&c=xSIPptSbmxtSSw6sLYdwnYC0CPjzb7GtPCnCNPaq_4g="
              className="w-full h-full bg-cover bg-center p-4"
            ></img>
          </div>
          <div className="flex flex-col mt-5 mb-3">
            <div className="flex-1 flex items-center justify-center"></div>

            <p className=" text font-bold ml-4 text-2xl">PRAMUNDO</p>
            <p className="font-bold ml-4">Akumulasi : 75%</p>
            <p className="font-bold ml-4">Jumlah Vote : 300</p>
          </div>
        </div>
        <div className="bg-red-600 aspect-square rounded-lg cursor-pointer hover:scale-125 transition-all duration-500">
          <div className=" aspect-square rounded-lg overflow-hidden">
            <button className="bg-red-600 hover:bg-red-800 text-black font-bold py-2 px-4 mx-auto my-3 flex rounded mb-3 border border-slate-950 border-double">
              3
            </button>
            <img
              src="https://media.istockphoto.com/id/623215670/id/foto/kepercayaan-diri-terlihat-hebat-padanya.jpg?s=612x612&w=0&k=20&c=uOP3Br_CBiC-kvHvNa12vdaCggPDXKXhswMOzA_LCNg="
              className="w-full h-full bg-cover bg-center p-4"
            ></img>
          </div>
          <div className="flex flex-col mt-5 mb-3">
            <div className="flex-1 flex items-center justify-center"></div>

            <p className=" text font-bold ml-4 text-2xl">GANSHIN</p>
            <p className="font-bold ml-4">Akumulasi : 45%</p>
            <p className="font-bold ml-4">Jumlah Vote : 117</p>
          </div>
        </div>
      </div>

      <div
        className="container mt-28 bg-gray-900 h-96 text-gray-300"
        style={{ width: "1140px" }}
      >
        <div className="pt-14">
          <h1 className="text-center font-bold text-2xl mb-10">LIST VOTER</h1>
        </div>

        <div className="container" style={{ width: "620px" }}>
          <table className="border-auto w-full  ">
            <thead className="border">
              <tr className="border">
                <th className="border">No</th>
                <th className="border">NAMA</th>
                <th className="border">ALAMAT</th>
                <th className="border">JENIS KELAMIN</th>
                <th className="border">PASLON</th>
              </tr>
            </thead>
            <tbody className="border">
              <tr className="border">
                <td className="border">1</td>
                <td className="border">Sugeng No Pants</td>
                <td className="border">Cileungsi</td>
                <td className="border">Laki Laki</td>
                <td className="border">Ganshin</td>
              </tr>
              <tr className="border">
                <td className="border">2</td>
                <td className="border">Haris Gams</td>
                <td className="border">Serang</td>
                <td className="border">Perempuan</td>
                <td className="border">Anas Taylor</td>
              </tr>
              <tr className="border">
                <td className="border">3</td>
                <td className="border">Aziz Union</td>
                <td className="border">Bekasi</td>
                <td className="border">Laki Laki</td>
                <td className="border">Pramundo</td>
              </tr>
            </tbody>
          </table>
          <div className="font-bold mb-5 mt-5">
            <p>TOTAL SUARA TERKUMPUL : 1000 VOTERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
