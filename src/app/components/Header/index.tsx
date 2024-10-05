import React from 'react';
import {
  Badge,
  Button,
  Dropdown,
  Flex,
  Form,
  Input,
  Layout,
  theme,
} from 'antd';
import {
  NotificationOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header: HeaderAntd } = Layout;

const Header = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <HeaderAntd
      style={{
        position: 'sticky',
        top: 10,
        zIndex: 1000,
        background: colorBgContainer,
        borderRadius: 30,
        margin: '10px 40px',
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      }}
    >
      <Form size="large">
        <Form.Item style={{ margin: 0 }}>
          <Flex gap={10} align="center">
            <Input
              name="search"
              placeholder="Search"
              style={{ width: 300, borderRadius: 30 }}
            />
            <Button style={{ borderRadius: 30, padding: '0 10px' }}>
              <SearchOutlined />
            </Button>
          </Flex>
        </Form.Item>
      </Form>
      <Flex gap={10} align="center">
        <Dropdown menu={{ items: [] }}>
          <Badge count={5} size="default" offset={[-5, 5]}>
            <Button
              icon={<NotificationOutlined />}
              shape="circle"
              size="large"
            />
          </Badge>
        </Dropdown>
        <Dropdown menu={{ items: [] }}>
          <Button icon={<UserOutlined />} shape="circle" size="large" />
        </Dropdown>
      </Flex>
    </HeaderAntd>
  );
};

export default Header;
