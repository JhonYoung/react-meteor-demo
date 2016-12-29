import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from './layout/App.jsx';
import Login from './layout/Login.jsx';
import Homepage from './layout/Homepage.jsx';
import Test from './layout/test.jsx';

import { Router, Route, hashHistory, IndexRedirect} from 'react-router';

Meteor.startup(() => {
  render(
  	(<Router history={hashHistory}>
  		<Route path="/" component={App}>
  			<IndexRedirect to="/homepage" />
  			<Route path="homepage" component={Homepage}/>
  			<Route path="test" component={Test}/>
  		</Route>
  		<Route path="login" component={Login}/>
	</Router>), document.getElementById('app'));
});