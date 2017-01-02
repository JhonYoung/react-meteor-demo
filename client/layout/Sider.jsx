import React, { Component, PropTypes } from 'react';
import { Menu, Icon, Button} from "antd";
import { Link, Router, Route, hashHistory  } from 'react-router';
import config from "../lib/MenuConfiger";

let Sider = React.createClass ({
	getInitialState() {
	    return {
	      theme: 'dark',
	      current: '1',
	    };
	},
  
  	handleClick(e) {
	    console.log('click ', e);
	    this.setState({
	        current: e.key
	    });
	},

	render() {
		let that = this;
	    return (
	      <div className="layout-aside">
	      	<Menu theme="dark" 
	      	onClick={this.handleClick} 
	      	defaultOpenKeys={['sub1']}
	        selectedKeys={[this.state.current]}
	        mode="inline">
	      		{
	      			config.MenuConfig.map( function (item, index) {
	      				return (<Menu.SubMenu key= {item.roles + index} 
	      					title={<span><Icon type="mail" /><span>{item.name}</span></span>}
	      				>
	      					{
	      						item.children.map( function (subItem, index) {
	      							return (<Menu.Item key={subItem.roles + index}>
	      								<Link to={subItem.roles}>{subItem.name}</Link>
	      							</Menu.Item>)
	      						})
	      					}
	      				</Menu.SubMenu>)
	      				{that.props.children}
	      			})
	      		}
	      	</Menu>
	      </div> 
	    );
	}
})
export default Sider;