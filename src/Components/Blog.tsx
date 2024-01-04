import React from 'react';
import { Link } from 'react-router-dom'
import {blog} from '../types/blog'


const Blog: React.FC<blog> =({id, title, date, content, image, author}) => {



  return (
    <div className='container mb-2 '>
      
      <div
        className="container grid grid-cols-3 gap-4 group   "
        style={{ width: "1140px" }}
      >

        <div className="bg-orange-100 aspect-square rounded-lg cursor-pointer hover:scale-125 transition-all duration-500">
          <div className="bg-orange-100 aspect-square rounded-lg overflow-hidden ">
            <img
              src={image}
              className="w-full h-full bg-cover bg-center"
            ></img>
          </div>
          <div className="flex flex-col mt-5 mb-3">
          <div className="flex-1 flex items-center justify-center">
    <button className="bg-black hover:bg-red-500 text-white font-bold py-2 px-4 rounded mb-3">{date}</button>
  </div>
  <Link to={`/detail/${id}`}>
          <p className=" text font-bold ml-4">{title}</p>
          </Link>
          <p className="font-bold ml-4">{author}</p>
          <p className='hidden'>{content}</p>
          </div>
        </div>

  
      </div>
      
       
      </div>
  )
}

export default Blog
