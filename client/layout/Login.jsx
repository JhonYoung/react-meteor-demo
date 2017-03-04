import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col, message} from 'antd';
import {LoginMessage} from '../lib/constant';
const FormItem = Form.Item;
let sign;


let Login = Form.create()(React.createClass ({
  getInitialState: function () {
    return {
      showTips: "获取验证码",
      verifyBtn: false
    }
  },

  contextTypes: {
    router: React.PropTypes.object
  },

	handleSubmit(e) {
	  e.preventDefault();
	  let that = this,
      veriCode = this.props.form.getFieldValue("verifyCode"),
      mobile = this.props.form.getFieldValue("mobile"),
      data = {},
      {vUrl} = Meteor.settings.restful;

    if (!that.verifyMobile(mobile)) {
      return;
    }

    if (!veriCode) {
      message.error("您必须输入验证码", 1000);
      return;
    }

    debugger;
    data = {mobile, veriCode, sign}

    DORA.promise("POST", vcUrl, data).then(function (res) {
      let content = JSON.parse(res.content)|| {};
      if (content.statusCode !== 200) {
        message.error(`发送验证码错误: ${content.msg}`, 2000);
      }

      console.log(res);
    }, function (error){
      console.log("error", error)
    });



	  // this.props.form.validateFields((err, values) => {
	  //   if (!err) {
   //      setTimeout(message.loading("登录中..."), 1000);
   //      Meteor.loginWithPassword(values.user, values.password, function (err, res) {
   //        if (err) {
   //          message.error(LoginMessage[err.reason.replace(/(^\s*)|(\s*$)/g, "")])
   //        } else {
   //          let user = Meteor.user() || {};
   //          if (!user.staff) {
   //            Meteor.logout();
   //            localStorage.removeItem("users");
   //            message.error("您当前不是员工账号！");
   //            return;
   //          }
   //          localStorage.setItem("users", JSON.stringify(_.pick(user, ["staff", "mobile", "store", "roles"])));
            
   //        }
   //      })
	  //   }
	  // });

    // that.context.router.push('/home');
	},

  verifyMobile: (mobile) => {
    reg = /^0?1[3|4|7|5|6|8|9|][0-9]\d{8}$/;
    if (!reg.test(mobile)){
      message.error("您必须输入正确的电话号码", 1000);
      return false;
    }
    return true;
  },

  getVerifyCode(e) {
    let mobile = this.props.form.getFieldValue("mobile"),
      {appkey, vcUrl} = Meteor.settings.public.restful,
      url = "/app/user/login/mobile", 
      data, 
      that = this;

    if (!that.verifyMobile(mobile)) {
      return;
    }

    that.setState({showTips: "已发送", verifyBtn: "disabled"});
    sign = CryptoJS.MD5(`appkey=${appkey}&mobile=${mobile}&url=${url}`).toString()
    data = {
      mobile: mobile,
      url:  url,
      sign: sign,
      sendToBound: true
    }

    DORA.promise("POST", vcUrl, data).then(function (res) {
      let content = JSON.parse(res.content)|| {};
      if (content.statusCode !== 200) {
        message.error(`发送验证码错误: ${content.msg}`, 2000);
      }

      console.log(res);
    }, function (error){
      console.log("error", error)
    });
  },

	render() {
	  const { getFieldDecorator } = this.props.form;
    let that = this;
    let form = {
      style: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 }
      },
      options: [
        {
          name: "mobile",
          label: "电话号码",
          message: "请输入电话号码",
          btnType: "default",
          btnFn: that.getVerifyCode,
          btnMessage: that.state.showTips,
          htmlType: "button",
          disabled: that.state.verifyBtn
        },
        {
          name: "verifyCode",
          label: "验证码",
          message: "请输入验证码",
          btnType: "primary",
          btnFn: false,
          btnMessage: "登录",
          htmlType: "submit",
          disabled: false
        }
      ]
    }
    
	  return (
	  	<Row>
  	      <Col xs={16} sm={16} md={8} lg={8}>
  	    	<Form onSubmit={this.handleSubmit} className="login-form">
  	    	  <h2>多啦衣梦-推广系统</h2>
            {
              form.options.map(function (doc) {
                return (
                  <FormItem {...form.style} label={doc.label}>
                    <Row gutter={8}>
                      <Col span={12}>
                        {getFieldDecorator(doc.name, {
                          rules: [{ required: true, message: doc.message }],
                        })(
                          <Input size="large" />
                        )}
                      </Col>
                      <Col span={12}>
                        <Button 
                          size="large" 
                          type ={doc.type} 
                          htmlType={doc.htmlType}  
                          onClick={doc.btnFn}
                          disabled={doc.disabled}
                        >{doc.btnMessage}</Button>
                      </Col>
                    </Row>
                  </FormItem>
                )
              })
            }
            
  	    	</Form>
  	    </Col>
  	  </Row>
	  );
	}
}));

export default Login;