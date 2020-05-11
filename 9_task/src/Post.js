import React from "react";
import { useParams, Link } from 'react-router-dom';
//import './Post.css';

import { Button } from 'react-bootstrap';

import postdata from './postdata';

const Post = () => {
  let { postId } = useParams();
  let post = postdata.find((p) => p.title === postId);
  
  
  return (
  <div>
    <div>
      <img src={post.img} alt={post.title} class="img-fluid" alt="Responsive image"/>
    </div>

    <div>
      <h1>{post.title}</h1>
      <p>{post.desc}</p>
      <Button color='primary' size='lg'><Link to='/blog'style={{color: 'white'}}>Back to Blog page</Link></Button>
    </div>
  </div>
  );
};

export default Post;