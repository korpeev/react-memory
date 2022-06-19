import {Button, Comment, Form, Input, Progress, Row} from "antd";
import {memo} from "react";
import {Props} from "components/comment/commentForm/types";

export const CommentForm = memo<Props>(({value, onFinish, onChange}) => {
    const validate = () => ({
        validator(_: unknown, value: string) {
            if (value.length > 100) {
                return Promise.reject(new Error('Не должно быть больше 100 символов'))
            }
            return Promise.resolve()
        },
        validationTrigger: 'onBlur'
    })
    return <Comment avatar={'https://joeschmoe.io/api/v1/random'} content={<Form onFinish={onFinish}>
            <Form.Item name='comment' rules={[{required: true, message: 'Не должно быть пустым'}, validate]}>
                <Input.TextArea onChange={onChange} value={value} name='comment' maxLength={100} rows={4}/>
            </Form.Item>
            <Form.Item>
                <Row justify='space-between'>
                    <Button htmlType='submit'>Отправить</Button>
                    <Progress type='circle' percent={value.length} status={value.length === 100 ? 'success' : 'normal'} width={36} />
                </Row>
            </Form.Item>
        </Form>}/>
})
