import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import NewPost from './NewPost';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Router>
      <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Blog" component={Blog} />
            <Route path="/NewPost" component={NewPost} />
        </Switch>
    </Router>
  );
};

export default App;