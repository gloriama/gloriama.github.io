import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Route } from 'react-router';

import App from './components/app';
import Projects from './components/projects';
import About from './components/about';
import Resume from './components/resume';
import Contact from './components/contact';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Projects} />
    <Route path="about" component={About} />
    <Route path="resume" component={Resume} />
    <Route path="contact" component={Contact} />
  </Route>
);