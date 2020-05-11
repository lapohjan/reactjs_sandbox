import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';


const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    );
};


const Home = () => {
    return (
        <div>
            <h1>This is a HOME page</h1>
        </div>
    );
};

const About = () => {
    return (
        <div>
        <h1>This is an ABOUT ME page</h1>
    </div>
    );
};

const Blog = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
       <h1>This is a BLOG page</h1>
    <ul>
        <li>
            <Link to={`${url}/Post1`}>Read more...</Link>
        </li>
        <li>
            <Link to={`${url}/Post2`}>Read more...</Link>
        </li>
        <li>
            <Link to={`${url}/Post3`}>Read more...</Link>
        </li>
        <li>
            <button><Link to={`${url}/Post4`}>Read more...</Link></button>
        </li>
    </ul>

        <Switch>
            <Route path={`${path}/about`} component={About} />
            <Route path={`${path}/:PostId`}>
                <Topic />
            </Route>
        </Switch>
    </div>
    );
};

const Topic =() => {
    let {PostId} = useParams();
    return (
        <h1>
            This is a page for {PostId}
        </h1>

    );
};


const Profilepage = () => {
    return (
        <Router>
          <Nav />
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
            </Switch>
        </main>
        </Router>
    );
};

export default Profilepage;
