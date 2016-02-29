import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './components/app';
import Projects from './components/projects';
import Resume from './components/resume';
import Contact from './components/contact';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Projects} />
    <Route path="about" component={About} />
    <Route path="resume" component={Resume} />
    <Route path="contact" component={Contact} />
  </Route>
);

export default (
  <Router history={browserHistory} routes={routes} />
);