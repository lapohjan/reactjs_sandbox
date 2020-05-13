import React, { useState } from "react";
import "./NewPost.css";
import axios from 'axios'
const NewPost = () => {
  const [newPost, setNewPost] = useState({
    title: '',
    desc: '',
    img: ''
  })
  const changeValueHandler = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    })
  }
  const addPostHandler = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/posts", newPost).then((response) => {
      console.log(response.data)
    })
  }
  return (
    <div className="new_message">
      <h1>Pin a new Message on the Board!</h1>
      <form className="newPost">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title"
            onChange={changeValueHandler} placeholder="Title"/>
        </div>
        <div>
          <label htmlFor="desc">Message</label>
          <textarea type="text" name="desc" id="desc"
            onChange={changeValueHandler} placeholder="Message" />
        </div>
        <div>
          <label htmlFor="img">Image URL</label>
          <input type="text" name="img" id="img"
            onChange={changeValueHandler}   placeholder="URL"/>
            <p className="random">Random happy picture: <br /> https://source.unsplash.com/featured/?happy</p>
        </div>
        <button className="add_new" type="submit" onClick={addPostHandler}>Post your message</button>
      </form>
    </div>
  );
};
export default NewPost;
