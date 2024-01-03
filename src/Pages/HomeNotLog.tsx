import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";

import Footer from "../Components/Footer";
import Messages from "../Components/Messages";
import Dummy from "../Mocks/blog.json";
import {blog} from '../types/blog'
import NavbarLog from "../Components/NavbarLog";
import Blog from "../Components/Blog";

const HomeNotLog: React.FC = () => {
  const [blog, setBlog] = useState<blog[]>([]);

  useEffect(() => {
    setBlog(Dummy);
  }, []);
  console.log(blog);

  return (
    <div>
      <NavbarLog />
      <Hero />
      {blog.map((data: blog, index: number) => {
        return (
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
        );
      })}

      <Messages />
      <Footer />
    </div>
  );
};

export default HomeNotLog;
