import { LockFilled, MailFilled } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Auth } from 'layouts/auth';
import { useRouter } from 'next/router';
import {passwordValidationSchemes, validationMessages} from 'core/helpers/scheme.constants'
export const Login = () => {
  const { push } = useRouter();
  const changeRoute = () => {
    push('/register');
  };

  return (
    <Auth title="Вход">
      <Form validateMessages={validationMessages}>
        <Form.Item
          name="email"
          rules={[
            { required: true, type: 'email' },
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
          rules={[{required: true}]}
        >
          <Input 
            prefix={<LockFilled />}
            placeholder="Пароль"
            type="password"
            name="password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="default" htmlType="submit">
            Вход
          </Button>
          <Button type="link" onClick={changeRoute}>
            нет аккаунта?
          </Button>
        </Form.Item>
      </Form>
    </Auth>
  );
};
