import React from 'react'

const Detail: React.FC = () => {
  return (
    <>
    <div className=" flex flex-col font-inter items-center justify-start mx-auto w-full">
       
        <div className="bg-neutral-900 flex flex-col items-center justify-start max-w-[1140px] mx-auto p-[27px] md:px-5 w-full text-stone-400">
          <div className="flex flex-col items-start justify-start mb-[100px] w-[98%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-[58%] md:w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-[18%]">
              <i className="fa-solid fa-arrow-left"></i>
                <div
                  className="text-black-900 text-center text-xl"
                  
                >
                  Beranda
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <div
                  className="text-black-900 text-center text-xl"
                  
                >
                  BERITA HARI INI
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[50px] items-center justify-start mt-[54px] w-full">
              <div
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                
              >
                <span className="md:text-[38px] sm:text-4xl text-red-200  font-inter text-[40px] font-bold">
                  KPU DUMBWAYS TETAPKAN 3 MENTOR TERBAIK
                </span>
                <span className="md:text-[34px] sm:text-[32px] text-black-900 font-inter text-4xl font-bold">
                  <>
                    {" "}
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-black-900 font-inter text-2xl font-normal">
                  <>
                    Super Admin
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-black-900 font-inter text-2xl font-normal">
                  <>
                    Senin, 03 Jan 2023
                    <br />
                  </>
                </span>
              </div>
              <img
                className="h-[530px] sm:h-auto object-cover w-full"
                src="../public/news.png"
                alt="1699844237water"
              />
            </div>
            <div
              className="mt-[62px] text-2xl md:text-[22px] text-black-900 text-justify sm:text-xl"
              
            >
              <div>
                Praesent ac tortor vel urna fermentum luctus. Nam posuere justo
                ut efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus
                tellus. Proin fermentum purus id lectus imperdiet, vel feugiat
                enim interdum. Sed non diam vel mi tristique interdum. Integer
                bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu
                dapibus ligula massa vel ligula. Nulla facilisi. Integer sit
                amet congue massa. Suspendisse potenti. Sed interdum, lacus ac
                ultrices facilisis, ligula enim pellentesque elit, vel varius
                nisi odio at purus. Sed suscipit purus quis tortor posuere, in
                varius est euismod. Mauris aliquam urna non elit faucibus, eu
                fermentum turpis mattis. Quisque vel nisl vitae sapien congue
                dapibus. Vivamus auctor, velit ut condimentum bibendum, purus
                lacus scelerisque ligula, nec gravida arcu velit id libero. In
                hac habitasse platea dictumst.
                <br />
                <br />
                Fusce eu ex vel turpis pellentesque iaculis. Praesent sit amet
                mi ut turpis malesuada aliquam a eu orci. Maecenas ut purus eu
                sapien vestibulum vulputate. Fusce tincidunt fringilla arcu, non
                efficitur sapien scelerisque et. Maecenas facilisis eros id enim
                tincidunt, ac vestibulum quam fringilla. Nullam vel malesuada
                mi, vitae convallis libero. In hac habitasse platea dictumst.
                Duis cursus nunc vel metus rhoncus, id cursus justo imperdiet.
                Integer vitae ex ac libero fermentum volutpat ut vitae sapien.
                Aliquam id luctus nisl. Curabitur et augue ut justo tincidunt
                varius vel sit amet nunc. Integer tincidunt risus sit amet odio
                euismod, a finibus ligula blandit. Integer euismod, purus ut
                malesuada varius, lectus orci feugiat massa, ut egestas enim
                massa vel urna.
                <br />
                <br />
                Vivamus id dictum augue. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Nulla
                facilisi. Curabitur aliquet ligula eu nisl bibendum, vel
                tincidunt justo feugiat. Nam dapibus, ligula id dapibus
                fermentum, odio libero luctus nunc, et scelerisque sapien libero
                vel ante. Etiam id odio nec nunc rhoncus lacinia nec eu massa.
                Nullam fermentum, felis ac bibendum malesuada, lectus felis
                fermentum dolor, a fermentum sapien mauris vel dui. Fusce vel
                turpis eu purus fermentum tincidunt a vel elit. Phasellus
                efficitur sapien vel efficitur rhoncus. Integer vel risus ut
                neque elementum gravida. Morbi rhoncus, ligula nec posuere
                tristique, ligula lacus dapibus urna, a lacinia sem metus id
                libero. Suspendisse luctus ligula eu mauris auctor, non semper
                elit feugiat.
                <br />
                <br />
                Praesent ac tortor vel urna fermentum luctus. Nam posuere justo
                ut efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus
                tellus. Proin fermentum purus id lectus imperdiet, vel feugiat
                enim interdum. Sed non diam vel mi tristique interdum. Integer
                bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu
                dapibus ligula massa vel ligula. Nulla facilisi. Integer sit
                amet congue massa. Suspendisse potenti.
              <div/>
            </div>
          </div>
        </div>
      
      </div>
    </div>
    </>
  )
}

export default Detail
