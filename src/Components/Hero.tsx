import React from "react";

const Hero: React.FC = () => {
  return (
    <div>

<div className="container mt-24 bg-white " style = {{width:"1140px", height:"516px",background: "linear-gradient(to right, #98544c, #5C0303)" }}>
            <div className= "" 
              >
                <div className="flex">
                    <div>
                        <img src = "./public/brandred 1.png" className = " rounded opacity-25" alt = "brand" 
                            style = {{width:"342px", height:"237px", borderRadius:"50px"}}
                        />
                    <div className = "text-white" style = {{width:"592px", height:"126px"}}>
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
     

      <div className="mb-12"></div>
    </div>
  );
};

export default Hero;
