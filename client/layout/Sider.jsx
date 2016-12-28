import React, { Component, PropTypes } from 'react';
import { Menu, Icon, Button} from "antd";

let memuData = [
	{
		name: "订单管理",
		roles: "orders",
		sub: [
			{
				name: "当前订单",
				roles: "orders-current"
			},
			{
				name: "历史订单",
				roles: "orders-history"
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
	    debugger;
	    this.setState({
	        current: e.key
	    });
	},

	render() {
	    return (
	      <div>
	      	<Menu theme="dark" 
	      	onClick={this.handleClick} 
	      	defaultOpenKeys={['sub1']}
	        selectedKeys={[this.state.current]}
	        mode="inline"
	      	>
	      		{
	      			memuData.map( function (item) {
	      				return (<Menu.SubMenu key= {item.roles} 
	      					title={<span><Icon type="mail" /><span>{item.name}</span></span>}
	      				>
	      					{
	      						item.sub.map( function (subItem) {
	      							return (<Menu.Item key={subItem.roles}>{subItem.name}</Menu.Item>)
	      						})
	      					}
	      				</Menu.SubMenu>)
	      			})
	      		}
	      	</Menu>
	      </div>
	    );
	}
})

export default Sider