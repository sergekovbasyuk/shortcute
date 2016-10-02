import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'react-router/node_modules/history';
import Case from '../casePage';
import Layout from '../layout';
import About from '../about';
import Contacts from '../contacts';
import Main from '../main';
import NotFound from '../NotFound';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const AppRouter = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={appHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main} />
      <Route path="cases/:id" component={Case} />
      <Route path="aboutus" component={About} />
      <Route path="contacts" component={Contacts} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default AppRouter;
