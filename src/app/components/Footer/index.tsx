import React from 'react';
import { Layout } from 'antd';

const { Footer: FooterAntd } = Layout;

const Footer = () => {
  return (
    <FooterAntd style={{ textAlign: 'center' }}>
      Task Management App ©2024 Created by Nguyen Phi Truong
    </FooterAntd>
  );
};

export default Footer;
