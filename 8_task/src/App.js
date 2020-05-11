import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Blog from './Blog';

const App = () => {
  return (
    <Router>
      <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Blog" component={Blog} />
        </Switch>
    </Router>
  );
};

export default App;