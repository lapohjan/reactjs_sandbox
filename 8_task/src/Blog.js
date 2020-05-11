import React from 'react';
import { useRouteMatch, Route, Switch, Link} from 'react-router-dom';
import postdata from './postdata';
import Post from './Post';

const Blog = () => {
    let match = useRouteMatch();
    const post = postdata;

    const blogList = post.map((post, index) => {
      return (
          <div key={post.id}>
              <img src={post.img} alt={post.title} />
          <div>
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
            <button><Link to={`${match.url}/${post.title}`}>Read more</Link></button>
            </div>
        </div>
      );
    });

    return (
      <div>
         <Switch>
            <Route path="/blog/:postId">
                <Post />
            </Route>
            <Route path={match.path}>{blogList}</Route>
         </Switch>
       </div>
    );
};

export default Blog;