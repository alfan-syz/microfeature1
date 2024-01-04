import React from "react";
import data from "../Mocks/blog.json";
import Blog from "./Blog";
import { blog } from "../types/blog";
import { Link } from "react-router-dom";

const Blogs: React.FC = () => {
  const blogs = data;
  return (
    <div className="container mb-28 ">
      <div
        className="container grid grid-cols-3 gap-4 group relative "
        style={{ width: "1140px" }}
      >
        {blogs.map(function (data: blog, index: number) {
          if (index === 0) {
            return (
              <div
              key={index}
                className="  aspect-video rounded-lg overflow-hidden col-span-2 relative cursor-pointer hover:scale-125 transition-all duration-500 bg-red-200 "
                style={{ height: "500px", width: "759px" }}
              >
                <img
                  src={data.image}
                  className=" w-full h-full bg-cover bg-center "
                ></img>
                <div className=" absolute bottom-0 left-0 bg-opacity-50 p-2 text-orange-100 ">
                  <button className=" bg-black hover:bg-red-500 text-white font-bold py-2 px-4 rounded mb-3">
                    {data.date}
                  </button>
                  <Link to={`/detail/${data.id}`}>
                  
                  <p className="bg- text-4xl font-bold">{data.title}</p>
                  </Link>
                  <p className="font-bold">{data.author}</p>
                  <p className="hidden">{data.content}</p>
                </div>
              </div>
            );
          } else {
            return(
                <div key={index}>
            <Blog
            id={data.id}
              title={data.title}
              author={data.author}
              date={data.date}
              content={data.content}
              image={data.image}
            />
          </div>
            )
          }
        })}
      </div>
    </div>
  );
};

export default Blogs;
