import React, { Component } from "react";
import Helmet from "react-helmet";
import { Layout, Form, Icon, Input } from "antd";
import { Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { Signup } from "../swagger/index";

const FormItem = Form.Item;

class NormalSignupForm extends React.Component {
  handleSubmit = (e, context) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        // context.logIn(values.userName);
        Signup({body: values})
          .catch(err => {
            throw(err)
          })
          .then(response => {
            console.log(response)
            if (response.status === "failure") {
              window.alert(response.error);
            } else if (response.status === "success") {
              window.alert("Login Success!");
            }
          })
        // this.props.logIn();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <UserContext.Consumer>
        {context => (
          <Form onSubmit={e => this.handleSubmit(e, context)}>
            <FormItem>
              {getFieldDecorator("firstname", {
                rules: [{ required: true, message: "Please input your First Name" }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                  placeholder="First Name"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("lastname", {
                rules: [{ required: true, message: "Please input your Last Name" }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                  placeholder="Last Name"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [{ required: true, message: "Please input your username!" }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "Please input your Password!" }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              <PrimaryButton htmlType="submit" text="Signup" style={{ width: "100%" }} />
            </FormItem>
          </Form>
        )}
      </UserContext.Consumer>
    );
  }
}

const WrappedNormalSignupForm = Form.create()(NormalSignupForm);

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  logIn = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    return this.state.loggedIn ? (
      <Redirect to="/experiment" />
    ) : (
      <Layout className="LightGray" style={{ minHeight: 700 }}>
        <Helmet title="Signup" meta={[{ property: "og:title", content: "Signup" }]} />
        <header className="DarkBlue">
          <div style={{ marginTop: "40px", marginBottom: "40px", textAlign: "center" }}>
            <h1 style={{ color: "white" }}> Signup an Account on ML ModelScope </h1>
          </div>
        </header>

        <div className="CenterBlock" style={{ marginTop: "40px", width: "40%" }}>
          <WrappedNormalSignupForm />
        </div>
      </Layout>
    );
  }
}