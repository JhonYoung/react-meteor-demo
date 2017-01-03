import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col, message} from 'antd';
import {LoginMessage} from '../lib/constant';
const FormItem = Form.Item;

let Login = Form.create()(React.createClass ({
  contextTypes: {
    router: React.PropTypes.object
  },
	handleSubmit(e) {
	  e.preventDefault();
	  let that = this;
	  this.props.form.validateFields((err, values) => {
	    if (!err) {
        setTimeout(message.loading("登录中..."), 1000);
        Meteor.loginWithPassword(values.user, values.password, function (err, res) {
          if (err) {
            message.error(LoginMessage[err.reason.replace(/(^\s*)|(\s*$)/g, "")])
          } else {
            let user = Meteor.user() || {};
            if (!user.staff) {
              Meteor.logout();
              localStorage.removeItem("users");
              message.error("您当前不是员工账号！");
              return;
            }
            localStorage.setItem("users", JSON.stringify(_.pick(user, ["staff", "mobile", "store", "roles"])));
            that.context.router.push('/home');
          }
        })
	    }
	  });
	},

	render() {
	  const { getFieldDecorator } = this.props.form;
	  return (
	  	<Row>
  	      <Col xs={16} sm={16} md={8} lg={8}>
  	    	<Form onSubmit={this.handleSubmit} className="login-form">
  	    	  <h2>多啦衣梦-仓储管理系统</h2>
  	    	  <FormItem>
  	    	    {getFieldDecorator('user', {
  	    	      rules: [{ required: true, message: '请输入用户名' }],
  	    	    })(
  	    	      <Input addonBefore={<Icon type="user" />} placeholder="Username" />
  	    	    )}
  	    	  </FormItem>
  	    	  <FormItem>
  	    	    {getFieldDecorator('password', {
  	    	      rules: [{ required: true, message: '请输入密码' }],
  	    	    })(
  	    	      <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
  	    	    )}
  	    	  </FormItem>
  	    	  <FormItem>
  	    	    {getFieldDecorator('remember', {
  	    	      valuePropName: 'checked',
  	    	      initialValue: true,
  	    	    })(
  	    	      <Checkbox>Remember me</Checkbox>
  	    	    )}
  	    	    <a className="login-form-forgot">Forgot password</a>
  	    	    <Button type="primary" htmlType="submit" className="login-form-button">
  	    	      登录
  	    	    </Button>
  	    	  </FormItem>
  	    	</Form>
  	      </Col>
  	   </Row>
	    
	  );
	}
	
}))
export default Login;