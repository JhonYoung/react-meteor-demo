import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {_} from "lodash";
import { Router, Route, hashHistory, IndexRedirect} from 'react-router';


import config from "./lib/MenuConfiger";
import App from './layout/App.jsx';
import Login from './layout/Login.jsx';

Meteor.subscribe("current_users");

let menuItems = [];
_.map(config.MenuConfig, function (doc) {
	menuItems = menuItems.concat(doc.children);
});

//后期可用来做权限验证，当前未登则跳转到登陆页面
const requireAuth = (nextState, replace) => {
  if (!Meteor.userId()) {
    replace({ pathname: '/login' })
  }
}


Meteor.startup(() => {
  render(
  	(<Router history={hashHistory}>
  		<Route path="/" component={App}>
        <div>fsdf</div>
        {
          menuItems.map( function ({component, roles}) {
            return (<Route path={roles} component={component} onEnter={requireAuth}/>)
          })
        }
        <IndexRedirect to="homepage" />
  		</Route>

  		<Route path="login" component={Login}/>
	</Router>), document.getElementById('app'));
});