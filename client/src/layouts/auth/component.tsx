import { Typography } from 'antd';
import { FC } from 'react';
import styles from './auth.module.scss';
import { Props } from './types';

export const Auth: FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          {title && title.length > 0 && (
            <div className={styles.title}>
              <Typography.Title level={3}>{title}</Typography.Title>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
