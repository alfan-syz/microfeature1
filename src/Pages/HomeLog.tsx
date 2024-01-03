import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";
import Messages from "../Components/Messages";
import Dummy from "../Mocks/blog.json";

import Navbar from "../Components/Navbar";
import NavbarLog from "../Components/NavbarLog";
import { blog } from "../types/blog";

function HomeLog(props: { isLogin: boolean }) {
  const [blog, setBlog] = useState<blog[]>([]);

  useEffect(() => {
    setBlog(Dummy);
  }, []);
  console.log(blog);

  return (
    <div>
      {props.isLogin ? <Navbar /> : <NavbarLog />}
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
}

export default HomeLog;
