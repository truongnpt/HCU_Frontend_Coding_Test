import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const Dashboard: React.FC = () => {
  return (
    <Content style={{ padding: '24px', minHeight: 280 }}>
      <Title level={2}>Dashboard</Title>
      <p>Welcome to your task management dashboard!</p>
    </Content>
  );
};

export default Dashboard;
