import { Layout } from 'antd';
import { Header } from 'components/header';
import { FC, ReactNode } from 'react';
import styles from './main.module.scss';

const { Content } = Layout;

export const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Layout className={styles.root}>
      <Header />
      <Content className={styles.container}>{children}</Content>
    </Layout>
  );
};
