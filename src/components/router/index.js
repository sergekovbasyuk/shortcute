import React from "react";
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import Case from '../casePage';
import Layout from '../layout';
import About from "../about";
import Contacts from "../contacts";
import Main from "../main";
import NotFound from '../NotFound';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false});

export default React.createClass({
 render() {
   return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={appHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Main}></IndexRoute>
          <Route path='cases/:id' component={Case}></Route>
          <Route path='aboutus' component={About}></Route>
          <Route path='contacts' component={Contacts}></Route>
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
   );
 },
});