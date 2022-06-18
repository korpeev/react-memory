import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps, Typography } from 'antd';
import styles from './header.module.scss';
const { Header: HeaderAntd } = Layout;
const menuItems: MenuProps['items'] = [
  {
    label: 'Меню',
    key: 'submenu',
    icon: <MenuOutlined />,
    children: [
      {
        label: 'Мой акканут',
        key: 'my-account',
      },
      {
        label: 'Выйти',
        key: 'logout',
      },
    ],
  },
];
export const Header = () => {
  return (
    <HeaderAntd className={styles.header}>
      <div>
        <Typography.Title level={4}>React Memories</Typography.Title>
      </div>
      <div>
        <Menu className={styles.menu} mode="horizontal" items={menuItems} />
      </div>
    </HeaderAntd>
  );
};
