import { LockFilled, MailFilled } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import { Auth } from 'layouts/auth';
import { useRouter } from 'next/router';
export const Register = () => {
  const { push } = useRouter();
  const changeRoute = () => {
    push('/login');
  };
  return (
    <Auth title="Регистрация">
      <Form
        onFinish={(values) => {
          console.log(values);
        }}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Это объязтаельное поле!' },
            {
              type: 'email',
              message: 'Не валидный Email',
            },
          ]}
        >
          <Input
            name="email"
            prefix={<MailFilled />}
            placeholder="E-mail"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Это объязтаельное поле!' }]}
        >
          <Input
            prefix={<LockFilled />}
            placeholder="Пароль"
            type="password"
            name="password"
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Это объязтаельное поле!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Пароли должны совпадать!'));
              },
            }),
          ]}
        >
          <Input
            prefix={<LockFilled />}
            placeholder="Повторите Пароль"
            type="password"
            name="confirmPassword"
          />
        </Form.Item>
        <Form.Item>
          <Button type="ghost" htmlType="submit" className="login-form-button">
            Регистрация
          </Button>
          <Button type="link" onClick={changeRoute}>
            есть аккаунта?
          </Button>
        </Form.Item>
      </Form>
    </Auth>
  );
};
