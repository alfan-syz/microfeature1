import React, { useState } from "react";

const ModalVote: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      console.log(`Selected option: ${selectedOption}`);
      // Lakukan sesuatu dengan pilihan yang dipilih (misalnya, kirim data ke server)
    } else {
      console.log("Please select an option.");
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
  };

  return (
    <>
    <h1 className="font-bold text-gray-300 mt-24 mb-0 flex justify-center text-4xl">MASUKKAN PILIHANMU</h1>
      <div
        className="container flex justify-center grid-cols-3 group relative gap-3 mt-0 p-24"
        style={{ width: "1150px", height: "550px" }}
      >
        
        <div
          style={{width: "920px", height: "390px"}}
          onClick={() => handleOptionClick("Option 1")}
          className={`bg-gray-200 cursor-pointer rounded-xl hover:scale-125 transition-all duration-500 ${selectedOption === 'Option 1' ? 'bg-yellow-400 text-black' : 'bg-yellow-300'}`}

         
          
        >
          
          <img
            src="https://media.istockphoto.com/id/1194817332/id/foto/potret-pria-tampan-serius-dalam-jaket-kancing-jas-abu-abu-dengan-latar-belakang-abu-abu.jpg?s=612x612&w=0&k=20&c=xSIPptSbmxtSSw6sLYdwnYC0CPjzb7GtPCnCNPaq_4g="
            className="p-2 rounded-xl"
            alt=""
          />
            <div className="p-2">
            <p className="font-bold text-2xl">ANAS</p>
            <p className="text-sm">Memindahkan Indonesia ke Isekai</p>
            <h5 className="font-bold text-sm"> Partai Pengusung</h5>
            <li className="text-sm">Partai BlackPanther</li>
            <li className="text-sm">Partai BlackPanther</li>
            <li className="text-sm">Partai BlackPanther</li>
          </div>
        </div>
        <div
          style={{width: "920px", height: "390px"}}
          onClick={() => handleOptionClick("Option 2")}
          className={`bg-gray-200 cursor-pointer rounded-xl hover:scale-125 transition-all duration-500 ${selectedOption === 'Option 2' ? 'bg-yellow-400 text-black' : 'bg-yellow-300'}`}
        >
          
          <img
            src="https://media.istockphoto.com/id/1194817332/id/foto/potret-pria-tampan-serius-dalam-jaket-kancing-jas-abu-abu-dengan-latar-belakang-abu-abu.jpg?s=612x612&w=0&k=20&c=xSIPptSbmxtSSw6sLYdwnYC0CPjzb7GtPCnCNPaq_4g="
            className="p-2 rounded-xl"
            alt=""
          />
            <div className="p-2">
            <p className="font-bold text-2xl">PRABUNDO</p>
            <p className="text-sm">Memindahkan Indonesia ke Isekai</p>
            <h5 className="font-bold text-sm"> Partai Pengusung</h5>
            <li className="text-sm">Partai BlackPanther</li>
            <li className="text-sm">Partai BlackPanther</li>
            <li className="text-sm">Partai BlackPanther</li>
          </div>
        </div>
        <div
          style={{width: "920px", height: "390px"}}
          onClick={() => handleOptionClick("Option 3")}
          className={`bg-gray-200 cursor-pointer rounded-xl hover:scale-125 transition-all duration-500 ${selectedOption === 'Option 3' ? 'bg-yellow-400 text-black' : 'bg-yellow-300'}`}
        >

          <img
            src="https://media.istockphoto.com/id/1194817332/id/foto/potret-pria-tampan-serius-dalam-jaket-kancing-jas-abu-abu-dengan-latar-belakang-abu-abu.jpg?s=612x612&w=0&k=20&c=xSIPptSbmxtSSw6sLYdwnYC0CPjzb7GtPCnCNPaq_4g="
            className="p-2 rounded-xl"
            alt=""
          />
          <div className="p-2">
            <p className="font-bold text-2xl">GANSHIN</p>
            <p className="text-sm">Memindahkan Indonesia ke Isekai</p>
            <h5 className="font-bold text-sm"> Partai Pengusung</h5>
            <li className="text-sm">Partai BlackPanther</li>
            <li className="text-sm">Partai BlackPanther</li>
            <li className="text-sm">Partai BlackPanther</li>
          </div>
        </div>
      </div>
      <div className="container flex justify-center  mt-2 gap-4">
      <div className="bg-red-500 border hover:bg-red-300 w-72 font-bold text-center text-xl rounded-3xl cursor-pointer">
          <button onClick={handleReset}>Reset</button>
        </div>
        <div className="bg-green-300 border hover:bg-green-600 w-72 font-bold text-center text-xl rounded-3xl cursor-pointer">
          <button onClick={handleSubmit}>Submit</button>
        </div>
        
      </div>
    </>
  );
};

export default ModalVote;
