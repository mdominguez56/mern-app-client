import React from "react";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./MenuSider.scss";

export default function MenuSider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;
  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={"/admin"}>
            <HomeOutlined type="home" />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/admin/menu-web"}>
            <MenuOutlined type="menu" />
            <span className="nav-text">Menu Web</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
