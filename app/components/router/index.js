import React from "react";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Case from '../case';
import Layout from '../layout';
import About from "../about";
import Contacts from "../contacts";
import Main from "../main";

export default React.createClass({
 render() {
   return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Main}></IndexRoute>
          <Route path='cases/:id' component={Case}></Route>
          <Route path='aboutus' component={About}></Route>
          <Route path='contacts' component={Contacts}></Route>
        </Route>
      </Router>
   );
 },
});
