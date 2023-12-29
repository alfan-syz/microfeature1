import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      {/* <div className="container mt-24" style={{ width: "1024px" }}>
        <div className="rounded">
          <div className="flex">
            <div className="w-full">
              <img
                className="w-full"
                src="https://perludem.org/wp-content/uploads/2018/07/kotak-suara-kpu-antaranews_ratio-16x9-800-x-450.jpg"
                alt=""
              />

              <div className="text-black container bg-white">
                <div className="">SELAMAT DATANG</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

<div className="container mt-24 ">
            <div className= " mx-auto" 
                 style = {{width:"1140px", height:"516px",background: "linear-gradient(to right, #98544c, #5C0303)" }}>
                <div className="flex">
                    <div>
                        <img src = "./public/brandred 1.png" className = "img-fluid rounded opacity-25" alt = "brand" 
                            style = {{width:"342px", height:"237px", borderRadius:"50px"}}
                        />
                    <div className = "text-white container" style = {{width:"592px", height:"126px"}}>
                    <div className="fw-bold ml-4"style={{marginTop:"100px", fontSize:"64px"}}>SELAMAT DATANG</div>
                    <div className="fw-bold ml-4"style={{fontSize:"24px", marginTop:"-10px"}}>SUPAYA PEMILU NYA BERJALAN MULUS </div>
                    <div className="fw-bold ml-4"style={{fontSize:"24px", marginTop:"-5px"}}>BOLEH DONG PINJEM DULU SERATUS 🤣</div>
                    </div>
                </div>
                <div>
                    <img src="./public/kpu.png" width="286px" height="473" style={{marginLeft:"130px"}}/>
                </div>
                </div>
            </div>
        </div>
      <div
        className="container mt-24 grid grid-cols-3 gap-4 "
        style={{ width: "1140px" }}
      >
        <div className="bg-blue-500 aspect-video rounded-lg overflow-hidden col-span-2 relative cursor-pointer">
        
          <img
            src="https://ichef.bbci.co.uk/news/640/cpsprodpb/3c71/live/655796a0-994b-11ee-b6d2-0bd3aa8efd1a.jpg"
            className="w-full h-full bg-cover bg-center"
          ></img>
         
          <div className=" absolute bottom-0 left-0 bg-opacity-50 p-2 text-white ">
            <button className=" bg-black rounded w-36">Senin, 03 Januari 2024</button>
          <p className="bg- text-4xl font-bold">KPU TETAPKAN 3 MENTOR TERBAIK</p>
          <p className="font-bold">Super Admin</p>
          </div>
        </div>

        <div className="bg-white aspect-square rounded-lg">
          <div className="bg-white aspect-square rounded-lg overflow-hidden">
            <img
              src="https://ichef.bbci.co.uk/news/640/cpsprodpb/3c71/live/655796a0-994b-11ee-b6d2-0bd3aa8efd1a.jpg"
              className="w-full h-full bg-cover bg-center"
            ></img>
          </div>
          <div className="flex flex-col mt-5">
          <div className="flex-1 flex items-center justify-center">
    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3">Senin, 03 Jan 2024</button>
  </div>
          
          <p className=" text font-bold">KPU TETAPKAN 3 MENTOR TERBAIK</p>
          <p className="font-bold">Super Admin</p>
          </div>
        </div>

        <div className="bg-white aspect-square rounded-lg">
          <div className="bg-white aspect-square rounded-lg overflow-hidden">
            <img
              src="https://ichef.bbci.co.uk/news/640/cpsprodpb/3c71/live/655796a0-994b-11ee-b6d2-0bd3aa8efd1a.jpg"
              className="w-full h-full bg-cover bg-center"
            ></img>
          </div>
          <div className="flex flex-col mt-5">
          <div className="flex-1 flex items-center justify-center">
    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3">Senin, 03 Jan 2024</button>
  </div>
          
          <p className=" text font-bold">KPU TETAPKAN 3 MENTOR TERBAIK</p>
          <p className="font-bold">Super Admin</p>
          </div>
        </div>
        <div className="bg-white aspect-square rounded-lg">
          <div className="bg-white aspect-square rounded-lg overflow-hidden">
            <img
              src="https://ichef.bbci.co.uk/news/640/cpsprodpb/3c71/live/655796a0-994b-11ee-b6d2-0bd3aa8efd1a.jpg"
              className="w-full h-full bg-cover bg-center"
            ></img>
          </div>
          <div className="flex flex-col mt-5">
          <div className="flex-1 flex items-center justify-center">
    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3">Senin, 03 Jan 2024</button>
  </div>
          
          <p className=" text font-bold">KPU TETAPKAN 3 MENTOR TERBAIK</p>
          <p className="font-bold">Super Admin</p>
          </div>
        </div>
        <div className="bg-white aspect-square rounded-lg">
          <div className="bg-white aspect-square rounded-lg overflow-hidden">
            <img
              src="https://ichef.bbci.co.uk/news/640/cpsprodpb/3c71/live/655796a0-994b-11ee-b6d2-0bd3aa8efd1a.jpg"
              className="w-full h-full bg-cover bg-center"
            ></img>
          </div>
          <div className="flex flex-col mt-5">
          <div className="flex-1 flex items-center justify-center">
    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3">Senin, 03 Jan 2024</button>
  </div>
          
          <p className=" text font-bold">KPU TETAPKAN 3 MENTOR TERBAIK</p>
          <p className="font-bold">Super Admin</p>
          </div>
        </div>
      </div>

      <div className="mb-96"></div>
    </>
  );
};

export default Hero;
