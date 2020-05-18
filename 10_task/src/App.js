import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//import MainNav from "./Components/MainNav/MainNav";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import NewPost from "./Components/NewPost/NewPost";
import Header from './Components/Header';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Router basename="/react_demo">
      <Header />
     
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/newpost" component={NewPost} />
      </Switch>
    </Router>
  );
};

export default App;