import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.less";
import logo from "./images/logo1.png";
import {reqLogin} from '../../api'
// 登陆的路由组件
export default class login extends Component {
  // 获取form组件
  formRef = React.createRef();

  onFinish = (event) => {
    // 获取form组件实例
    console.log(event);
    reqLogin(event.username,event.password).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
      111111111111
    })
    // const form = this.formRef.current;
    // const values = form.getFieldsValue(["username", "password"]);
    // console.log("getFieldsValue", values);
  };
  onFinishFailed = (event) => {
    console.log(event);
    // this.formRef.current.validateFields()
    // .catch(err => {
    //   console.log("err", err);
    // });
  }
  validatePwd = (rule, value) => {
    return new Promise(async (resolve, reject) => {
      if (!value) {
        await reject("密码必须输入");
      } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        await reject("密码必须是英文、数字或下划线组成");
      } else if (value.length < 4) {
        await reject("长度不能小于4位");
      } else if (value.length > 12) {
        await reject("密码长度不能大于于12位密码");
      } else {
        await resolve();
      }
    });
  };
  componentDidMount() {
    // 设置表单默认数据
    this.formRef.current.setFieldsValue({
      username: "admin",
      password: "admin",
    });
  }

  render() {
    const validateMessages = {
      required: "success",
    };
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form
            validateMessages={validateMessages}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            ref={this.formRef}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "请输入用户名!" },
                { min: 2, message: "用户名至少2位" },
                { max: 8, message: "用户名最多8位!" },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: "用户名必须是英文、数字或者下划线组成!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, validator: this.validatePwd }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                忘记密码
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
              无账号？ <a href="">注册</a>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}
