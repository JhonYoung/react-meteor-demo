import React, { Component, PropTypes } from 'react';
import { Menu, Icon, Button} from "antd";
import { Link, Router, Route, hashHistory  } from 'react-router';


let memuData = [
	{
		name: "订单管理",
		roles: "orders",
		sub: [
			{
				name: "当前订单",
				roles: "homepage"
			},
			{
				name: "历史订单",
				roles: "test"
			}
		]
	},
	{
		name: "订单管理",
		roles: "orders5",
		sub: [
			{
				name: "当前订单",
				roles: "homepage5"
			},
			{
				name: "历史订单",
				roles: "test5"
			}
		]
	},
	{
		name: "订单管理",
		roles: "orders6",
		sub: [
			{
				name: "当前订单",
				roles: "homepage6"
			},
			{
				name: "历史订单",
				roles: "test6"
			}
		]
	},
	{
		name: "订单管理",
		roles: "orders2",
		sub: [
			{
				name: "当前订单",
				roles: "homepage2"
			},
			{
				name: "历史订单",
				roles: "test2"
			}
		]
	},
	{
		name: "订单管理",
		roles: "orders3",
		sub: [
			{
				name: "当前订单",
				roles: "homepage3"
			},
			{
				name: "历史订单",
				roles: "test3"
			}
		]
	},
	{
		name: "库存管理",
		roles: "clothes",
		sub: [
			{
				name: "款式列表",
				roles: "clothes-list"
			},
			{
				name: "条码查询",
				roles: "clothes-barcode"
			}
		]
	}
]

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
	        mode="inline"
	        st
	      	>
	      		{
	      			memuData.map( function (item) {
	      				return (<Menu.SubMenu key= {item.roles} 
	      					title={<span><Icon type="mail" /><span>{item.name}</span></span>}
	      				>
	      					{
	      						item.sub.map( function (subItem) {
	      							return (<Menu.Item key={subItem.roles}>
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