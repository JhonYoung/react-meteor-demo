import { Menu, Icon, Row, Col} from 'antd';
import React, { Component } from 'react';

const SubMenu = Menu.SubMenu;
class Header extends Component {
  render() {
    return (
        <div className="layout-aside">
          <Menu theme="light" mode="horizontal"
            defaultSelectedKeys={['2']} style={{lineHeight: '48px'}}>
            <Row>
              <Col span={10} offset={1}><h2 key="title">多啦衣梦-仓储管理系统</h2></Col>
              <Col span={4} offset={8}>col-6 col-pull-18</Col>
            </Row>
          </Menu>
        </div>
    );
  }
}
export default Header;
