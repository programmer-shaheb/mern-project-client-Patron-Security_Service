import React from "react";

const Blog = (props) => {
  const { title, description, author, authorImg, date } = props.blog;
  return (
    <div className="card shadow-sm">
      <div className="card">
        <img className="card-img-top" src={authorImg} alt="img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <small>{author}</small> <small>{date}</small>
          <p className="card-text mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
