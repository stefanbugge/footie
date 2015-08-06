import App from './components/app';
import React from 'react';
import Router from 'react-router';

const { Route } = Router;

const routes = (
  <Router.Route handler={App}/>
);

Router.run(routes, Root => React.render(<Root/>, document.body));
