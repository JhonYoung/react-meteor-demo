import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'antd';

export default class Homepage extends Component {
  render() {
    return (
    	<Row>
	      <Col xs={20} sm={16} md={12} lg={8}><h1>welcome to dora wms</h1></Col>
	    </Row>
    );
  }
}