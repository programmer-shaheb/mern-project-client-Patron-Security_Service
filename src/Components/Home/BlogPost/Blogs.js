import React from "react";
import Blog from "./Blog";
import "./Blogs.css";

const Blogs = () => {
  const blogData = [
    {
      title: "WE CALL POLICE FORCE FOR RISKY OPERATION",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
      author: "By Unicoder",
      authorImg:
        "https://patron.themedirectors.com/default/wp-content/uploads/2018/01/48.jpg",
      date: "23 April 2020",
    },
    {
      title: "OUR BEST PC SECURITY SYSTEM",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. maiores, esse assumenda porro error natus sit ipsam.        ",
      author: "By Unicoder",
      authorImg:
        "https://patron.themedirectors.com/default/wp-content/uploads/2018/01/32.jpg",
      date: "23 April 2018",
    },
    {
      title: "CCTV CAMERA SECURITY CONTROL BOX",
      description:
        "Lorem ipsum dolor sit Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
      author: "By Unicoder",
      authorImg:
        "https://patron.themedirectors.com/default/wp-content/uploads/2018/01/24.jpg",
      date: "23 April 2019",
    },
  ];
  return (
    <section className="blogs">
      <div className="container">
        <div className="section-header text-center">
          <h5 style={{ color: "#EF904D" }} className=" text-uppercase">
            for more information
          </h5>
          <h1 style={{ color: "#000" }}>OUR LATEST NEWS</h1>
        </div>
        <div className="card-deck mt-5">
          {blogData.map((blog) => (
            <Blog blog={blog} key={blog.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
