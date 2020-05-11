import React from "react";
import { useParams, Link } from 'react-router-dom';
import Button from 'react-boostrap/Button'


import postdata from './postdata';

const Post = () => {
  let { postId } = useParams();
  let post = postdata.find((p) => p.title === postId);
  
  
  return (
  <div>
    <div>
      <img src={post.img} alt={post.title} />
    </div>

    <div>
      <h1>{post.title}</h1>
      <p>{post.desc}</p>
      <Button variant='primary' size='lg'><Link to='/blog'>Back to Blog page</Link></Button>
    </div>
  </div>
  );
};

export default Post;
