import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className="post" onClick={props.click}>
           <h2>{props.title}</h2>
           <p>{props.author}</p>
           <p>{props.desc}</p>
           <img src={props.img} alt={props.title} />
        </div>
    );
};


export default Post;
