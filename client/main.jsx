import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {_} from "lodash";
import { Router, Route, hashHistory, IndexRedirect} from 'react-router';

import config from "./lib/MenuConfiger";
import App from './layout/App.jsx';
import Login from './layout/Login.jsx';

let menuItems = [];
_.map(config.MenuConfig, function (doc) {
	menuItems = menuItems.concat(doc.children);
});


Meteor.startup(() => {
  render(
  	(<Router history={hashHistory}>
  		<Route path="/" component={App}>
  			<IndexRedirect to="/homepage" />
        {
          menuItems.map( function ({component, roles}) {
            return (<Route path={roles} component={component}/>)
          })
        }
  		</Route>
  		<Route path="login" component={Login}/>
	</Router>), document.getElementById('app'));
});