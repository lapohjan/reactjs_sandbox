import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainNav from "./Components/MainNav/MainNav";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import NewPost from "./Components/NewPost/NewPost";

const App = () => {
  return (
    <Router>
      <MainNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/newpost" component={NewPost} />
      </Switch>
    </Router>
  );
};

export default App;