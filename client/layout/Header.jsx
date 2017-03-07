import React, { Component } from 'react';
import { Menu, Row, Col, Icon, Dropdown, Link} from 'antd';

let Header = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState() {
    let user = DORA.getUser();
    return {
      title: '多啦衣梦-仓储管理系统',
      staffName: (user.staff || {}).name || "暂无",
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

  logout(e) {
    Meteor.logout();
    localStorage.removeItem("users");
    this.context.router.push('/login');
  },

  menu () {
    return (<Menu onClick={this.logout}>
      <Menu.Item key="0">
        <a>登出</a>
      </Menu.Item>
    </Menu>)
  },

  render() {
    return (
      <Row style={{lineHeight: '48px'}} justify="space-around">
        <Col span={1} offset={1}><Icon type={this.state.menu} onClick={this.ToggleMenu}/></Col>
        <Col span={17} offset={1} xs={17} sm={17}><h2 key="title">{this.state.title}</h2></Col>
        <Col span={4} xs={4} sm={4} justify="end">
          <Dropdown overlay={this.menu()} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
              {this.state.staffName}  <Icon type="down" />
            </a>
          </Dropdown>
        </Col>
      </Row>
    );
  }
})
export default Header;
