import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = '老余出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'bilibili',
          title: 'bilibili',
          href: 'https://www.bilibili.com',
          blankTarget: true,
        },
        {
          key: 'planet',
          title: '知识星球',
          href: 'https://wx.zsxq.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 老余 GitHub</>,
          href: 'https://github.com',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
