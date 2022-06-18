import Layout from 'antd/lib/layout/layout';
import { FC, ReactNode } from 'react';
import styles from './main.module.scss';
export const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return <Layout className={styles.root}>{children}</Layout>;
};
