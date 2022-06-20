import {Main} from "layouts/main/component";
import {Button, Card, Col, Form, Input, Row, Typography} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {passwordValidationSchemes, validationMessages} from 'core/helpers/scheme.constants'


export const Profile = () => {
    return <Main>
        <Row>
            <Col offset={6} lg={12}>
                <Card title='Редактировать Профиль'>
                    <Form validateMessages={validationMessages}>
                        <Row justify='center'>
                            <Typography.Title level={3}>Основные данные</Typography.Title>
                        </Row>
                        <Row justify='space-between'>
                            <Col lg={11}>
                                <Form.Item rules={[{required: true}]} name='firstName' label='Имя'>
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col lg={12}>
                                <Form.Item rules={[{required: true}]} name='lastName' label='Фамилия'>
                                    <Input/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={24}>
                                <Form.Item name='email'  rules={[{required: true, type: 'email'}]} label='E-mail'>
                                    <Input type='email' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row justify='center'>
                            <Button htmlType='submit'>Изменить</Button>
                        </Row>
                    </Form>
                    <Form validateMessages={validationMessages}>
                        <Row justify='center'>
                            <Typography.Title level={3}>Безопасность</Typography.Title>
                        </Row>
                        <Row justify='space-between'>
                            <Col lg={11}>
                                <Form.Item name='password' rules={[passwordValidationSchemes]} label='Пароль'>
                                    <Input.Password
                                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                        />
                                </Form.Item>
                            </Col>
                            <Col lg={12}>
                                <Form.Item rules={[passwordValidationSchemes, ({getFieldValue}) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve()
                                        }
                                        return Promise.reject(new Error('Пароли не совпадают'))
                                    }
                                })]} name='confirmPassword' label='Повторите пароль'>
                                    <Input.Password
                                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                          <Row justify='center'>
                              <Button htmlType='submit'>Изменить</Button>
                          </Row>
                    </Form>
                </Card>
            </Col>
        </Row>
    </Main>
}
