import styles from "./index.module.scss";
import { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate, useRoutes } from "react-router-dom";
import routes from "@/router";
const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  // 返回的是组件
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Option 1", "/option1", <PieChartOutlined />),
  getItem("Option 2", "/option2", <DesktopOutlined />),
  getItem("User", "/user", <UserOutlined />, [
    getItem("Tom", "/user/tom"),
    getItem("Bill", "/user/bill"),
    getItem("Alex", "/user/alex"),
  ]),
  getItem("Team", "/team", <TeamOutlined />, [
    getItem("Team 1", "/team/team1"),
    getItem("Team 2", "/team/team2"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const Fontpage = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const menuClick = (e) => {
    console.log("点击了:", e);
    //点击跳转到对应的路由
    navigate(e.key);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "200vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className={styles.sider}
      >
        <div className={styles.logo} />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={menuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Breadcrumb style={{ margin: "16px 5px" }}>
            {/* <Breadcrumb.Item></Breadcrumb.Item>
            <Breadcrumb.Item></Breadcrumb.Item> */}
          </Breadcrumb>
        </Header>
        <Content style={{ margin: "10px 16px" }} className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Fontpage;
