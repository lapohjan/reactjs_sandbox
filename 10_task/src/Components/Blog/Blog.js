import React, { useState, useEffect } from "react";
//import axios from 'axios';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import postdata from '../../postdata';
import PostCard from "../PostCard/PostCard";
import FullPost from "../FullPost/FullPost";
import './Blog.css';

const Blog = () => {
  let match = useRouteMatch();
  const post = postdata;

  /*
  const Blog = () => {
  const [post, setPost] = useState([]);
  let match = useRouteMatch();
  useEffect(() => {
    axios.get('http://localhost:3001/posts').then(
    (response) => {
      setPost(response.data);
    });
  }, []);    
const removeHandler = (id) => {
  console.log(id);
  axios.delete('http://localhost:3001/posts/' + id)
  .then(() => { 
    return axios.get('http://localhost:3001/posts');
})
.then ((response) => {
  setPost(response.data);
});
};
*/
  const PostList = post.map((p) => {
    return (
      <PostCard
        key={p.id}
        title={p.title}
        desc={p.desc}
        img={p.img}
        link={`${match.url}/${p.id}`}
        //remove={() => removeHandler(p.id)}
      />
    );
  },[]);
  return (
    <>
      <Switch>
        <Route path="/blog/:postId">
          <FullPost />
        </Route>
        <Route path={match.path}>
          <div className="message_board">
            <h1>Message Board</h1>
            <div className="posts-align">
            {PostList}
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
};
export default Blog;