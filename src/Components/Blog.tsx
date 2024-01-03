import React from 'react';
import { Link } from 'react-router-dom'
import {blog} from '../types/blog'


const Blog: React.FC<blog> =({id, title, date, content, image, author}) => {

  return (
    <div className='container mb-28 '>
      <Link to={`/detail/${id}`}>
      <div
        className="container grid grid-cols-3 gap-4 group relative  "
        style={{ width: "1140px" }}
      >
        <div className="  aspect-video rounded-lg overflow-hidden col-span-2 relative cursor-pointer hover:scale-125 transition-all duration-500 bg-red-200 " style={{height: "500px", width: "759px" }}>
        
        <img
            src={image}
            className=" w-full h-full bg-cover bg-center "
          ></img>
          <div className=" absolute bottom-0 left-0 bg-opacity-50 p-2 text-orange-100 ">
            <button className=" bg-black hover:bg-red-500 text-white font-bold py-2 px-4 rounded mb-3">{date}</button>
          <p className="bg- text-4xl font-bold">{title}</p>
          <p className="font-bold">{author}</p>
          <p className='hidden'>{content}</p>
          </div>
        </div>

        <div className="bg-orange-100 aspect-square rounded-lg cursor-pointer hover:scale-125 transition-all duration-500">
          <div className="bg-orange-100 aspect-square rounded-lg overflow-hidden ">
            <img
              src="https://awsimages.detik.net.id/community/media/visual/2023/12/12/swafoto-jadi-penutup-debat-perdana-pilpres-2024-3_169.jpeg?w=600&q=90"
              className="w-full h-full bg-cover bg-center"
            ></img>
          </div>
          <div className="flex flex-col mt-5 mb-3">
          <div className="flex-1 flex items-center justify-center">
    <button className="bg-black hover:bg-red-500 text-white font-bold py-2 px-4 rounded mb-3">Senin, 03 Jan 2024</button>
  </div>
          
          <p className=" text font-bold ml-4">KPU TETAPKAN 3 MENTOR TERBAIK</p>
          <p className="font-bold ml-4">Super Admin</p>
          </div>
        </div>

        <div className="bg-orange-100 aspect-square rounded-lg cursor-pointer hover:scale-125 transition-all duration-500">
          <div className="bg-orange-100 aspect-square rounded-lg overflow-hidden">
            <img
              src="https://awsimages.detik.net.id/community/media/visual/2023/12/12/swafoto-jadi-penutup-debat-perdana-pilpres-2024-3_169.jpeg?w=600&q=90"
              className="w-full h-full bg-cover bg-center"
            ></img>
          </div>
          <div className="flex flex-col mt-5 mb-3">
          <div className="flex-1 flex items-center justify-center">
    <button className="bg-black hover:bg-red-500 text-white font-bold py-2 px-4 rounded mb-3">Senin, 03 Jan 2024</button>
  </div>
          
          <p className=" text font-bold ml-4">KPU TETAPKAN 3 MENTOR TERBAIK</p>
          <p className="font-bold ml-4">Super Admin</p>
          </div>
        </div>
        <div className="bg-orange-100 aspect-square rounded-lg cursor-pointer hover:scale-125 transition-all duration-500">
          <div className="bg-orange-100 aspect-square rounded-lg overflow-hidden">
            <img
              src="https://awsimages.detik.net.id/community/media/visual/2023/12/12/swafoto-jadi-penutup-debat-perdana-pilpres-2024-3_169.jpeg?w=600&q=90"
              className="w-full h-full bg-cover bg-center"
            ></img>
          </div>
          <div className="flex flex-col mt-5 mb-3">
          <div className="flex-1 flex items-center justify-center">
    <button className="bg-black hover:bg-red-500 text-white font-bold py-2 px-4 rounded mb-3">Senin, 03 Jan 2024</button>
  </div>
          
          <p className=" text font-bold ml-4">KPU TETAPKAN 3 MENTOR TERBAIK</p>
          <p className="font-bold ml-4">Super Admin</p>
          </div>
        </div>
        <div className="bg-orange-100 aspect-square rounded-lg cursor-pointer hover:scale-125 transition-all duration-500">
          <div className="bg-orange-100 aspect-square rounded-lg overflow-hidden">
            <img
              src="https://awsimages.detik.net.id/community/media/visual/2023/12/12/swafoto-jadi-penutup-debat-perdana-pilpres-2024-3_169.jpeg?w=600&q=90"
              className="w-full h-full bg-cover bg-center"
            ></img>
          </div>
          <div className="flex flex-col mt-5 mb-3">
          <div className="flex-1 flex items-center justify-center">
    <button className="bg-black hover:bg-red-500 text-white font-bold py-2 px-4 rounded mb-3">Senin, 03 Jan 2024</button>
  </div>
          
          <p className=" text font-bold ml-4">KPU TETAPKAN 3 MENTOR TERBAIK</p>
          <p className="font-bold ml-4">Super Admin</p>
          </div>
        </div>
      </div>
      </Link>
       
      </div>
  )
}

export default Blog
