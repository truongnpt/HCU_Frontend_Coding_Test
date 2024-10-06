import React from 'react';
import { ConfigProvider, Divider, Flex } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Tasks from './containers/Tasks';
import theme from '../styles/theme';
import { ReadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import Footer from './components/Footer';
import Header from './components/Header';

const { Title } = Typography;

function App() {
  const { Content, Sider } = Layout;

  return (
    <ConfigProvider theme={theme}>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider width={250} style={{ padding: '0 10px' }}>
            <Flex>
              <Title level={3} style={{ color: theme.token?.colorPrimary }}>
                Taskify
              </Title>
            </Flex>
            <Divider style={{ margin: '10px 0' }} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<ReadOutlined />}>
                <Link to="/">Task Management</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header />
            <Content style={{ margin: '0 16px' }}>
              <Routes>
                <Route path="/" element={<Tasks />} />
              </Routes>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
