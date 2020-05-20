import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import postdata from '../../postdata';
import "./FullPost.css";
import { Button } from 'react-bootstrap';
//import axios from 'axios';


const FullPost = () => {
  const [loadedPost, setLoadedpost] = useState();
  let { postId } = useParams();

  /*
  useEffect(() => {
    if (!loadedPost) {
    axios.get('http://localhost:3001/posts/' + postId).then(
      (response) => {
        console.log(response.data);
        setLoadedpost(response.data);
      });
    }
  });*/
  
  let postData = undefined;

  if (postId) {
    postData = <h1>Loading post</h1>
  }

  if (loadedPost) {
    postData = (
    <div className="fullPost">
      <h1>{loadedPost.title}</h1>
      <p>{loadedPost.desc}</p>
        <img src={loadedPost.img} alt={loadedPost.title} />
    </div>
    );
  }


  return postData;

/*
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
    );*/
};


/*
const Fullpost = () => {
  let { postId } = useParams();
  let post = postdata.find((p) => postdata.id === postId);
  return (  
    <div>
      <div>
        <img src={postdata.img} alt={postdata.title} />
      </div>
      <div>
        <h2>{postdata.id}</h2>
        <p>{postdata.textcontent}</p>
        <Link to="/blog">Back to Blog Page</Link>
      </div>
    </div>
  );
};
export default Fullpost;
*/

export default FullPost;