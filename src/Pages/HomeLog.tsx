import { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Messages from "../Components/Messages";
import Dummy from "../Mocks/blog.json";
import Navbar from "../Components/Navbar";
import NavbarLog from "../Components/NavbarLog";
import { blog } from "../types/blog";
import Blogs from "../Components/Blogs";

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
      <Blogs />
      <Messages />
      <Footer />
    </div>
  );
}

export default HomeLog;
