import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";

import Footer from "../Components/Footer";
import Messages from "../Components/Messages";
import Dummy from "../Mocks/blog.json";
import {blog} from '../types/blog'
import NavbarLog from "../Components/NavbarLog";
import Blogs from "../Components/Blogs";


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
      <Blogs/>
      <Messages />
      <Footer />
    </div>
  );
};

export default HomeNotLog;
