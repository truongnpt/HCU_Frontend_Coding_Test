import React from 'react';
import { ConfigProvider, Divider, Flex } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, theme as antdTheme } from 'antd';
import Tasks from './containers/Tasks';
import theme from '../styles/theme';
import { ReadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;

function App() {
  const {
    token: { colorBgContainer },
  } = antdTheme.useToken();
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <ConfigProvider theme={theme}>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider style={{ padding: '0 10px' }}>
            <Flex>
              <Title level={3} style={{ color: theme.token?.colorPrimary }}>
                Taskify
              </Title>
            </Flex>
            <Divider style={{ margin: '10px 0' }} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<ReadOutlined />}>
                <Link to="/">Tasks</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '0 16px' }}>
            <Routes>
              <Route path="/" element={<Tasks />} />
            </Routes>
            <Footer style={{ textAlign: 'center' }}>
              Task Management App ©2024 Created by Nguyen Phi Truong
            </Footer>
          </Content>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
