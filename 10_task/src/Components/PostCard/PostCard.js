import React from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";

const PostCard = ({ title, img, desc, link, remove }) => {
  return (
    <div className="postCard">
      <h2>{title}</h2>
      <p>{desc}</p>
      <Link to={link}><button>Read more...</button></Link>
      <div><br/></div>
      <img src={img} alt={title} />
      <div><br/></div>
      <button class="remove" onClick={remove}>Remove this post</button>
    </div>
  );
};

export default PostCard;
