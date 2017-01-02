import React, { Component } from 'react';
import { Menu, Row, Col, Icon, Dropdown, Link} from 'antd';

let Header = React.createClass({
    getInitialState() {
      return {
        title: '多啦衣梦-仓储管理系统',
        staff: "耿向美",
        menu: "menu-fold"
      };
    },

    ToggleMenu () {
      if (this.state.menu === "menu-fold") {
        this.setState({menu: "menu-unfold"});
        this.props.callbackParent(false);
      } else {
        this.setState({menu: "menu-fold"});
        this.props.callbackParent(true);
      }
    },

    render() {
      return (
        <Row style={{lineHeight: '48px'}}>
          <Col span={1} offset={1}><Icon type={this.state.menu} onClick={this.ToggleMenu}/></Col>
          <Col span={14}><h2 key="title">{this.state.title}</h2></Col>
          <Col span={3} offset={5}>
            登录
          </Col>
        </Row>
      );
    }
})
export default Header;
