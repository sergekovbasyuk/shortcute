import React from "react";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Case from '../casePage';
import Layout from '../layout';
import About from "../about";
import Contacts from "../contacts";
import Main from "../main";
import NotFound from '../NotFound';

export default React.createClass({
 render() {
   return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
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
