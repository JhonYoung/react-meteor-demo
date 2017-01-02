import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './Header.jsx'; 
import Sider from './Sider.jsx'; 

let App = React.createClass({
  getInitialState() {
    return {
      title: '多啦衣梦-仓储管理系统',
      staff: "耿向美",
      showMenu: true
    };
  },
  toggleMenu () {
    this.setState({showMenu: !this.state.showMenu});
  },

  render() {
    return (
      <div className="container">
        <Header callbackParent={this.toggleMenu}></Header>
        <Row>
          {this.state.showMenu ? (<Col span={4} xs={24} sm={24} md={4} lg={4}>
            <Sider></Sider>
          </Col>) : ""}
          <Col span={20} xs={24} sm={24} md={20} lg={20}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
});
export default App;