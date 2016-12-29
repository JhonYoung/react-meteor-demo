import React, { Component } from 'react';
import { Menu, Row, Col} from 'antd';

let Header = React.createClass({
    getInitialState() {
      return {
        title: '多啦衣梦-仓储管理系统',
        staff: "耿向美"
      };
    },
    render() {
      return (
        <Row style={{lineHeight: '48px'}}>
          <Col span={15} offset={1}><h2 key="title">{this.state.title}</h2></Col>
          <Col span={3} offset={5}>{this.state.staff}</Col>
        </Row>
      );
    }
})
export default Header;
