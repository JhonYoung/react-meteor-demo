import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Header from './layout/Header.jsx'; 
import Sider from './layout/Sider.jsx'; 
import Content from './layout/Content.jsx';

export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
 
  render() {
    return (
      <div className="container">
        <Header></Header>
        <Row>
          <Col span={4}>
            <Sider></Sider>
          </Col>
          <Col span={20}>
            <Content></Content>
          </Col>
        </Row>
      </div>
    );
  }
}