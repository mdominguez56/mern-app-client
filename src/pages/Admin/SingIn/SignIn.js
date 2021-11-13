import React from "react";
import "./SingIn.scss";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/png/logo.png";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1>
          <img src={Logo} alt="Logo" className="sign-in__content-logo" />
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Entrar</span>} key="1">
              Componente LogInForm
            </TabPane>
            <TabPane tab={<span>Nuevo usuario</span>} key="2">
              Componente RegisterForm
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
