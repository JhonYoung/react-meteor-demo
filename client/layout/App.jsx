import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './Header.jsx'; 
import Sider from './Sider.jsx'; 

let App = React.createClass({
  etInitialState() {
    return {
      title: '多啦衣梦-仓储管理系统',
      staff: "耿向美"
    };
  },

  render() {
    return (
      <div className="container">
        <Header></Header>
        <Row>
          <Col span={4} xs={24} sm={24} md={4} lg={4}>
            <Sider></Sider>
          </Col>
          <Col span={20}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
});

export default App;